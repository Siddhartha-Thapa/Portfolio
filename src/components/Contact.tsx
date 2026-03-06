"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending an email (this is where an API call to a service like Resend or EmailJS would go)
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto close the notification after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/siddhartha-thapa-b19001288/" },
    { name: "GitHub", url: "https://github.com/Siddhartha-Thapa" },
    { name: "Facebook", url: "https://www.facebook.com/sidr.tha.52" },
    { name: "Instagram", url: "https://www.instagram.com/siddhartha__thapa/" },
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-8 border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/20 border border-green-500/50 backdrop-blur-md px-6 py-3 rounded-full text-green-100 flex items-center gap-3 shadow-2xl"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Message received! Thanks for contacting me.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-5xl font-bold tracking-tight text-white mb-6">Let&apos;s Connect</h3>
          <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
            Have a project in mind, a question about my work, or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new opportunities and exploring what we can build together.
          </p>

          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 uppercase tracking-widest text-sm font-semibold mb-2 border-b border-white/10 pb-2">Socials</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors w-max group flex items-center gap-2"
                >
                  <span className="relative overflow-hidden">
                    <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">{link.name}</span>
                    <span className="inline-block transform transition-transform duration-300 absolute inset-0 translate-y-full group-hover:translate-y-0 italic font-medium">{link.name}</span>
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white/50 text-sm tracking-wide">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white/50 text-sm tracking-wide">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white/50 text-sm tracking-wide">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-white/20"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-white text-black font-semibold py-4 rounded-xl hover:bg-neutral-200 transition-colors focus:ring-4 focus:ring-white/20 outline-none"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
