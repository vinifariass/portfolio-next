import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// configure email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_SENDER_USER,
        pass: process.env.NEXT_PUBLIC_SENDER_PASS,
    },
});

export async function POST(request) {
    const { name, email, message } = await request.json();

    // Validate input
    try {
    if (!name || !email || !message) {
        return NextResponse.json({ message: "Name, email, and message are required!" }, { status: 400 });
    }

    // Send email
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_SENDER_USER,
            to: process.env.NEXT_PUBLIC_RECEIVER_USER,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Contact Form Submited Successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Error sending email!" }, { status: 500 });
    }
}