import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("ENV VARS AUSENTES", { apiKey, to, from });
    return res.status(500).json({ ok: false, error: "Configuração de e-mail ausente" });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      subject: "Contato do site",
      html: "<p>Mensagem de teste</p>",
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("ERRO AO ENVIAR EMAIL", err);
    return res.status(500).json({ ok: false, error: "Erro ao enviar e-mail" });
  }
}
