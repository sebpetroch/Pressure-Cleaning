import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/config";

function formatServiceLabel(key: string) {
  return key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const suburb = formData.get("suburb")?.toString().trim();
  const services = formData.getAll("services").map((s) => s.toString());
  const otherDetails = formData.get("otherDetails")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const photos = formData.getAll("photos").filter((p) => p instanceof File) as File[];

  if (!name || !phone || !email || !suburb || services.length === 0) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  console.log("New quote request:", {
    name,
    phone,
    email,
    suburb,
    services,
    otherDetails,
    message,
    photoCount: photos.length,
  });

  // Email notifications require a RESEND_API_KEY environment variable.
  // Sign up free at https://resend.com, grab an API key, and add it in your
  // Vercel project's Settings -> Environment Variables, then redeploy.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const serviceLabels = services.map(formatServiceLabel).join(", ");

      const attachments = await Promise.all(
        photos.map(async (file) => ({
          filename: file.name || "photo.jpg",
          content: Buffer.from(await file.arrayBuffer()),
        }))
      );

      await resend.emails.send({
        from: `${business.name} Website <onboarding@resend.dev>`,
        to: business.email,
        replyTo: email,
        subject: `New Quote Request from ${name} (${suburb})`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Suburb: ${suburb}`,
          `Services: ${serviceLabels}`,
          otherDetails ? `Other details: ${otherDetails}` : null,
          message ? `Message: ${message}` : null,
          `Photos attached: ${photos.length}`,
        ]
          .filter(Boolean)
          .join("\n"),
        attachments,
      });
    } catch (err) {
      console.error("Failed to send quote notification email:", err);
    }
  }

  return NextResponse.json({ success: true });
}
