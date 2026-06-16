/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import emailjs from '@emailjs/browser';
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormInput } from '../types';

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export default function ContactMe() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

      setIsSubmitting(true);

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    })
    .catch(() => {
      setIsSubmitting(false);
      setErrorMessage("Failed to send message.");
    });
    // .catch((error) => {
    //   console.log("EMAILJS ERROR:", error);
    //   setIsSubmitting(false);
    //   setErrorMessage("Failed to send message.");
    // });
  };

  return (
    <section id="contact" className="bg-[#0F0F0F] py-24 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute bottom-[-10%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#FF7300]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Contact me
          </motion.h2>
          <div className="w-16 h-1 bg-[#FF7300] mx-auto rounded-full mb-4" />
          <motion.p
            className="text-sm md:text-base text-neutral-400 font-medium max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss your product requirements and collaborate on creating beautiful user journeys.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Contact Coordinates */}
          <motion.div
            id="contact-links-panel"
            className="lg:col-span-4 flex flex-col justify-start space-y-8 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Connection Channels
              </h3>
              <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                Have an ambitious idea or need elite design consulting? Shoot me an email or find me on socials!
              </p>
            </div>

            {/* Direct Details Card Block */}
            <div className="space-y-6">
              
              {/* Detail Item: Email */}
              <div id="contact-coord-email" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF7300] group-hover:bg-[#FF7300] group-hover:text-black transition-all duration-300 shadow-md">
                  <Mail className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-neutral-500 tracking-wider">Email</h4>
                  <a
                    href="mailto:mahmood.fazile@example.com"
                    className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    anshul02414@gmail.com
                  </a>
                </div>
              </div>

              {/* Detail Item: Phone */}
              <div id="contact-coord-phone" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF7300] group-hover:bg-[#FF7300] group-hover:text-black transition-all duration-300 shadow-md">
                  <Phone className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-neutral-500 tracking-wider">Telephone</h4>
                  <a
                    href="tel:+155555555"
                    className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    +91 8005576612
                  </a>
                </div>
              </div>

              {/* Detail Item: Location */}
              <div id="contact-coord-location" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF7300] group-hover:bg-[#FF7300] group-hover:text-black transition-all duration-300 shadow-md">
                  <MapPin className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-neutral-500 tracking-wider">Base Space</h4>
                  <span className="text-sm font-semibold text-neutral-300">
                    Jaipur Rajasthan 303807
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Panel: Controlled Contact Form */}
          <motion.div
            id="contact-form-panel"
            className="lg:col-span-8 bg-[#0F0F0F] rounded-xl border border-neutral-900 shadow-xl shadow-black/40 p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form-key"
                  id="actual-contact-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                        Full Name<span className="text-[#FF7300] ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-[#FF7300] transition-colors"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                        Email Address<span className="text-[#FF7300] ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example.example.com"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-[#FF7300] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-subject" className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-[#FF7300] transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                      Message<span className="text-[#FF7300] ml-1">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your brief description here..."
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-[#FF7300] transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Error Notification Banner */}
                  {errorMessage && (
                    <motion.div
                      id="form-error-banner"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-500 text-xs font-bold bg-red-500/10 p-3 rounded border border-red-500/20"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      id="form-submit-button"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3.5 rounded bg-[#FF7300] hover:bg-[#E06600] text-black font-extrabold tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#FF7300]/10 hover:shadow-[#FF7300]/30 transition-all duration-300 disabled:opacity-50 hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success-key"
                  id="form-success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF7300]/10 flex items-center justify-center text-[#FF7300] animate-bounce">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-sm mx-auto">
                      Thank you for reaching out. I will review your inquiry immediately and follow up with you within 24 hours.
                    </p>
                  </div>
                  <button
                    id="reset-form"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
