import { NextRequest, NextResponse } from "next/server"
import { transporter, mailOptions } from "@/config/nodemailer"

export async function GET() {
  return NextResponse.json({
    message: "Success",
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ message: "Please fill in all fields" });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Customer Inquiry",
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: `
        <div style="
          min-height: 60vh; 
          center;"
          >
          <div style="
            background-color: #f3f4f6; 
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
            border-radius: 0.5rem; 
            padding: 1.5rem;"
            >
            <div style="
              display: grid; 
              grid-template-columns: 1fr; 
              align-items: flex-start; 
              color: #4b5563; 
              margin-bottom: 0.5rem;"
              >
              <h1>${data.subject}</h1>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Message:</strong> ${data.message}</p>
              <br>
              <p><strong><i>Note: Do not reply to this email. Instead, use the email provided by the customer.</i></strong></p>
            </div>
          </div>
        </div>
      `,
    })

    return (
      NextResponse.json({ message: "Email sent" })
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Email not sent" });
  }
}