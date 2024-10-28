// api-2:re_6kRf1mLE_CZ6GgjWDAc7DUss8GoNFYpkE api-1:re_9kjmHvvr_8jtY7aadVqA4tyJjk8wrURMT
"use client";
import React, { useState, useEffect } from 'react'
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    };

    const response = await fetch('/api/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    });

    if (response.ok) {
        setEmailSubmitted(true);
        setEmail('');
        setSubject('');
        setMessage('');
        console.log('Message Sent!')
    }
    else {
        console.log('Failed to send message');
    }

    setLoading(false);
  };

  useEffect(() => {
    if (emailSubmitted) {
      const timer = setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [emailSubmitted]);

  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[95%] -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] text-justify mb-4 max-w-md'>
                {""}
                Looking to collaborate, discuss a project, or explore potential opportunities? I'm actively seeking new challenges and connections. Whether you have questions, ideas, or an exciting opportunity, feel free to reach out! Just fill out the form, and I'll be in touch soon.
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="https://linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col z-10' onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" type="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='johndoe@example.com'
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" type="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input
                        name='subject'
                        type='text'
                        id='subject'
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Hello!'
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>Message</label>
                    <textarea 
                        name="message" 
                        id="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Leave a message...'
                    />
                </div>
                <button 
                    type='submit' 
                    className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                ></circle>
                                <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        </div>
                    ) : (
                    'Send Message'
                    )}
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Message sent Successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection;