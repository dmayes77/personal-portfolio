"use server";

import { checkBotId } from "botid/server";
import { sendContactEmail } from "@/lib/email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedReasons = new Set([
  "full-time-opportunity",
  "contract-project",
  "general-question",
  "other",
]);

export async function submitContactForm(prevState, formData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const reason = formData.get("reason")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const website = formData.get("website")?.toString().trim() ?? "";

  if (website) {
    return {
      status: "error",
      message: "Your submission could not be accepted. Please try again.",
    };
  }

  if (!name) {
    return {
      status: "error",
      message: "Please enter your name before sending.",
    };
  }

  if (!email || !emailPattern.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address before sending.",
    };
  }

  if (!allowedReasons.has(reason)) {
    return {
      status: "error",
      message: "Please select a reason for contact before sending.",
    };
  }

  if (!message || message.length < 10) {
    return {
      status: "error",
      message: "Please enter a message with at least 10 characters.",
    };
  }

  if (message.length > 5000) {
    return {
      status: "error",
      message: "Please keep your message under 5000 characters.",
    };
  }

  const verification = await checkBotId();

  if (verification.isBot) {
    return {
      status: "error",
      message: "Your submission could not be verified. Please try again.",
    };
  }

  try {
    await sendContactEmail({ name, email, reason, message });
  } catch (error) {
    console.error("Failed to send contact form email.", error);
    return {
      status: "error",
      message:
        "Something went wrong while sending your message. Please try again in a moment or email me directly.",
    };
  }

  return {
    status: "success",
    message:
      "Thanks for reaching out. Your message was sent successfully, and I will see it in my inbox.",
  };
}
