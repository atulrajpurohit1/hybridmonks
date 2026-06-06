const CONTACT_EMAIL = "info@hybridmonks.com";
const DEFAULT_FROM_EMAIL = "HybridMonks Website <onboarding@resend.dev>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "Please send valid contact details." },
      { status: 400 },
    );
  }

  const message = parseContactMessage(payload);

  if (!message) {
    return Response.json(
      { message: "Please fill all fields with a valid email address." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(message);
  } catch (error) {
    console.error("Contact form email failed:", error);

    return Response.json(
      { message: "Message could not be sent. Please try again later." },
      { status: 500 },
    );
  }

  return Response.json({ message: "Message sent." });
}

function parseContactMessage(payload: ContactPayload): ContactMessage | null {
  const name = readField(payload.name, 120);
  const email = readField(payload.email, 160);
  const subject = readField(payload.subject, 160);
  const message = readField(payload.message, 4000);

  if (!name || !isValidEmail(email) || !subject || !message) {
    return null;
  }

  return { name, email, subject, message };
}

function readField(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendContactEmail(message: ContactMessage) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const toEmail = process.env.CONTACT_EMAIL_TO ?? CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_EMAIL_FROM ?? DEFAULT_FROM_EMAIL;
  const subject = `HybridMonks contact: ${message.subject}`;
  const text = renderPlainText(message);
  const html = renderHtml(message);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": createIdempotencyKey(),
      "User-Agent": "hybridmonks-contact-form",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: message.email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend failed with ${response.status}: ${details}`);
  }
}

function renderPlainText(message: ContactMessage) {
  return [
    "New HybridMonks contact form submission",
    "",
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Subject: ${message.subject}`,
    "",
    "Message:",
    message.message,
  ].join("\n");
}

function renderHtml(message: ContactMessage) {
  return `
    <h2>New HybridMonks contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(message.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(message.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(message.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message.message).replace(/\n/g, "<br />")}</p>
  `;
}

function escapeHtml(value: string) {
  const replacements: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => replacements[character]);
}

function createIdempotencyKey() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}
