import { Resend } from "resend";

type Body = {
  name: string;
  email: string;
  phone: string;
  message: string;
  // honeypot opcional:
  company?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body: Body = req.body;

    // Honeypot: se preenchido, provavelmente bot
    if (body.company && body.company.trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ ok: false, error: "Campos obrigatórios ausentes." });
    }

    // validação simples de e-mail
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: "E-mail inválido." });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL; // precisa ser domínio/verificado no Resend

    if (!to || !from) {
      return res.status(500).json({ ok: false, error: "Configuração de e-mail ausente." });
    }

    const subject = `Novo contato do site - ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.4;">
        <h2>Novo contato do site</h2>
        <p><b>Nome:</b> ${escapeHtml(name)}</p>
        <p><b>E-mail:</b> ${escapeHtml(email)}</p>
        <p><b>Telefone:</b> ${escapeHtml(phone)}</p>
        <p><b>Mensagem:</b><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email, // facilita responder direto
      html,
    });

    if (error) {
      return res.status(500).json({ ok: false, error: "Falha ao enviar e-mail." });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Erro inesperado." });
  }
}
