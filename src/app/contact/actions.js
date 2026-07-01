"use server";

import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/constants";

export async function submitContactForm(formData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    redirect("/contact?status=error");
  }

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  redirect(
    `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`,
  );
}
