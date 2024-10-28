import nodemailer from 'nodemailer';
import dbConnect from '@/lib/dbConnect';
import Message from '@/models/Message';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    await connectDB();
    await Message.create({email, subject, message})
    
    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Aditya Joshi" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out!`,
      text: `Hello,\n\nThank you for your message:\n\n"${message}"\n\nWe will get back to you soon!\n\nBest regards,\nAditya Joshi.`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}