import type { QuoteInput } from "./validation";

/**
 * Email delivery adapter for quote requests.
 * Connect SMTP (nodemailer), Resend, SendGrid, etc. inside this function only.
 * Until a provider is configured, requests are logged on the server.
 */
export async function sendQuoteEmail(data: QuoteInput): Promise<void> {
  const body = [
    `New quote request from ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Event: ${data.eventType} on ${data.eventDate}`,
    `Service: ${data.service}`,
    `Guests: ${data.guests}`,
    `Budget: ${data.budget}`,
    `Location: ${data.location}`,
    `Message: ${data.message || "-"}`,
  ].join("\n");

  if (!process.env.SMTP_HOST) {
    console.info("[quote] Email provider not configured. Request received:\n" + body);
    return;
  }

  // Example after `npm i nodemailer`:
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT ?? 587),
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   to: process.env.QUOTE_TO_EMAIL,
  //   from: process.env.SMTP_USER,
  //   replyTo: data.email,
  //   subject: `Quote request - ${data.service} (${data.eventDate})`,
  //   text: body,
  // });
  console.info("[quote] SMTP_HOST set but transport not wired yet:\n" + body);
}
