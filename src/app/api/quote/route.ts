import { NextRequest, NextResponse } from "next/server";

// Handles quote request submissions.
// Currently logs the submission server-side. To email or store leads, wire in
// a provider here (e.g. Resend, SendGrid, or a database) using the fields below.
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const suburb = formData.get("suburb")?.toString().trim();
  const services = formData.getAll("services").map((s) => s.toString());
  const otherDetails = formData.get("otherDetails")?.toString().trim() ?? "";
  const areaSize = formData.get("areaSize")?.toString().trim() ?? "";
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
    areaSize,
    message,
    photoCount: photos.length,
  });

  return NextResponse.json({ success: true });
}
