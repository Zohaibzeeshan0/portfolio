import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, PhoneCall, MessageSquare, Send, CheckCircle2, Copy, AlertCircle, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message should be at least 5 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Create mailto & Gmail direct URL
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Hi Zohaib,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${mailtoSubject}&body=${mailtoBody}`;
      
      // Open Gmail composer in browser tab
      window.open(gmailDirectUrl, '_blank');
      setSubmitted(true);
    }
  };

  const handleCopyMessage = () => {
    const textToCopy = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            HAVE A PROJECT <span className="gradient-text">IN MIND?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            Let's turn your idea into a reliable digital product. Send me an email or message on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm p-7 space-y-5 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white mb-6">
                Direct Contact Details
              </h3>

              {/* Gmail Direct Compose Button */}
              <a
                href={PERSONAL_INFO.gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm flex items-center justify-between transition shadow-lg shadow-rose-500/20 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-mono tracking-wider opacity-90">Instant Mail</div>
                    <div className="text-sm font-extrabold">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition"
              >
                <Copy className="w-3.5 h-3.5 text-blue-400" />
                <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              {/* Phone / WhatsApp Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80  border border-white/10 hover:border-blue-500/50 transition group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-mono">Phone / Mobile</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp direct chat button */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-3 transition shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp ({PERSONAL_INFO.phone})</span>
              </a>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-mono font-semibold">Social Channels:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-blue-600 transition shadow"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-blue-600 transition shadow"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/8 bg-slate-900/60 backdrop-blur-sm p-7 sm:p-9 relative shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Gmail Web Composer Opened!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-medium">
                    Gmail composer has been opened with your pre-filled inquiry. You can also copy your message below to send directly to{' '}
                    <span className="font-mono text-blue-400 font-bold">{PERSONAL_INFO.email}</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleCopyMessage}
                      className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedMsg ? 'Copied to Clipboard!' : 'Copy Inquiry Message'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-extrabold text-white mb-6">
                    Send Me a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white font-medium placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white font-medium placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Web Application Development Inquiry"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white font-medium placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your project details, requirements, or inquiry here..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 text-white font-medium placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message (Open in Gmail)</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};





