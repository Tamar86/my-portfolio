import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function POST(req) {
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: 'All fields are required!' },
				{ status: 400 },
			);
		}

		// 📩 Define the email content
		const mailOptions = {
			from: email, // Sender's email (user's email from form)
			to: process.env.EMAIL_USER, // Your email address
			subject: `New Contact Form Submission from ${name} via PORTFOLIO`,
			text: `You have received a new message from ${name} (${email}):\n\n${message}`,
		};

		// Send the email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ success: 'Message sent successfully!' },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'Failed to send message. Try again later.' },
			{ status: 500 },
		);
	}
}
