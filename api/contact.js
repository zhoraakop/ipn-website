import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод запрещен" });
  }

  const { name, phone, captchaToken } = req.body;

  if (!captchaToken) {
  return res.status(400).json({
    message: "Капча не пройдена",
  });
}

const verify = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: captchaToken,
    }),
  }
);

const result = await verify.json();

if (!result.success) {
  return res.status(403).json({
    message: "Проверка Cloudflare не пройдена",
  });
}

  if (!name || !phone) {
    return res.status(400).json({ message: "Заполните имя и телефон" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const formattedDate = new Intl.DateTimeFormat("ru-RU", {
  timeZone: "Europe/Moscow",
  dateStyle: "full",
  timeStyle: "medium",
}).format(new Date());

await transporter.sendMail({
  from: `"Айпиэн сайт" <${process.env.SMTP_USER}>`,
  to: process.env.MAIL_TO,
  subject: "&#9993; Новая заявка с сайта Айпиэн",
  html: `
    <div style="font-family:Arial,sans-serif;font-size:16px;color:#222">
      <h2 style="color:#3b82f6;">📩 Новая заявка с сайта Айпиэн</h2>

      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td><b>Имя:</b></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td><b>Телефон:</b></td>
          <td>${phone}</td>
        </tr>

        <tr>
          <td><b>Дата:</b></td>
          <td>${formattedDate}</td>
        </tr>
      </table>
    </div>
  `,
});

    return res.status(200).json({ message: "Заявка отправлена" });
  } catch (error) {
    console.error("MAIL ERROR:", error);

    return res.status(500).json({
      message: "Ошибка отправки письма",
      error: error.message,
      code: error.code,
    });
  }
}
