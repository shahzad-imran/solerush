import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedButton from '../components/AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: 'Flagship Store', value: '123 Street Sneaker, Sneaker City, NY 10001' },
    { icon: Phone, title: 'Hotline Contact', value: '+1 (555) 123-4567' },
    { icon: Mail, title: 'Support Email', value: 'support@solerush.com' }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none space-y-16 text-left">
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-red-500 to-orange-500 text-glow">Touch</span>
          </h1>
          <p className="text-neutral-500 text-sm max-w-md">Have questions about drops or returns? Send us a message and we'll reply shortly.</p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Info Blocks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4 p-5 rounded-3xl bg-neutral-900 border border-neutral-800/80">
                  <div className="p-3.5 bg-neutral-950 border border-neutral-850 rounded-2xl text-brand-primary h-fit">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-500 mb-1">{info.title}</h4>
                    <p className="text-sm font-semibold text-white leading-relaxed">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mock Map Frame */}
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 h-64 overflow-hidden shadow-2xl relative flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="relative z-10 space-y-2">
                <MapPin size={36} className="text-brand-primary mx-auto animate-bounce" />
                <h4 className="font-black uppercase tracking-wider text-sm text-white">Interactive Map Placeholder</h4>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">Clicking here simulates maps navigation to our Flagship Store in Manhattan, New York.</p>
              </div>
            </div>
          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-lg font-black uppercase tracking-wider text-white pb-4 border-b border-neutral-800/60 mb-6">
              Send Message
            </h3>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                      placeholder="Optional"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary resize-none"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <div className="pt-2">
                    <AnimatedButton type="submit" variant="primary" fullWidth className="py-4 font-black uppercase tracking-wider text-sm">
                      Send Message
                      <Send size={14} />
                    </AnimatedButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center gap-3 py-16 text-green-400 text-center"
                >
                  <CheckCircle2 size={56} className="animate-bounce" />
                  <h3 className="font-bold text-lg text-white uppercase tracking-tight">Message Received!</h3>
                  <p className="text-xs text-neutral-400 max-w-xs">Thank you for reaching out. A SoleRush support coordinator will reply to your email within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};

export default Contact;
