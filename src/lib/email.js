import { Resend } from "resend";
import { siteConfig } from "./constants";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY.");
  }

  return new Resend(apiKey);
}

const reasonLabels = {
  "full-time-opportunity": "Full-time opportunity",
  "contract-project": "Contract / freelance project",
  "general-question": "General question",
  other: "Other",
};

export async function sendContactEmail({ name, email, reason, message }) {
  const resend = getResendClient();
  const to = process.env.CONTACT_FORM_TO_EMAIL || siteConfig.contactEmail;
  const from =
    process.env.CONTACT_FORM_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeReason = escapeHtml(reasonLabels[reason] || reason);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Portfolio contact from ${name}`,
    replyTo: email,
    text: `${message}\n\nFrom: ${name}\nEmail: ${email}\nReason: ${reasonLabels[reason] || reason}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h1 style="font-size: 20px; margin-bottom: 16px;">New portfolio contact</h1>
        <p style="margin: 0 0 12px;"><strong>Name:</strong> ${safeName}</p>
        <p style="margin: 0 0 12px;"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin: 0 0 12px;"><strong>Reason:</strong> ${safeReason}</p>
        <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
        <p style="margin: 0;">${safeMessage}</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message || "Failed to send contact email.");
  }
}
