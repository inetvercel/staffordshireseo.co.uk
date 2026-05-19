import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, website, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "StaffordshireSEO Contact Form <onboarding@resend.dev>",
      to: "hello@staffordshireseo.co.uk",
      replyTo: email,
      subject: `New Enquiry from ${name} – StaffordshireSEO`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0D1626; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F59E0B; font-size: 20px; margin: 0;">New Enquiry – StaffordshireSEO</h1>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #555;">Name</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #555;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #F59E0B;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; font-weight: 600; color: #555;">Phone</td>
                <td style="padding: 8px 0;">${phone}</td>
              </tr>` : ""}
              ${website ? `<tr>
                <td style="padding: 8px 0; font-weight: 600; color: #555;">Website</td>
                <td style="padding: 8px 0;"><a href="${website}" style="color: #F59E0B;">${website}</a></td>
              </tr>` : ""}
              ${service ? `<tr>
                <td style="padding: 8px 0; font-weight: 600; color: #555;">Service</td>
                <td style="padding: 8px 0;">${service}</td>
              </tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
            <h3 style="color: #555; font-size: 14px; margin: 0 0 8px;">Message</h3>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 16px;">
            Sent via staffordshireseo.co.uk contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
