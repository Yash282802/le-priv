"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Contact Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Get in <span className="gold-gradient">Touch</span>
          </h1>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#1A1A1A] rounded-lg p-8 h-full">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Address</h3>
                    <p className="text-[#A0A0A0]">{restaurantInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Phone</h3>
                    <a href={`tel:${restaurantInfo.phone}`} className="text-[#A0A0A0] hover:text-[#C9A84C] transition-colors">
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Email</h3>
                    <a href={`mailto:${restaurantInfo.email}`} className="text-[#A0A0A0] hover:text-[#C9A84C] transition-colors">
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Opening Hours</h3>
                    <p className="text-[#A0A0A0]">Daily: {restaurantInfo.openingTime} - {restaurantInfo.closingTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#C9A84C]/20">
                <a
                  href={`https://wa.me/${restaurantInfo.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#F5F0E8] transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-[#1A1A1A] rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-[#C9A84C] mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#A0A0A0]">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#C9A84C] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#1A1A1A] rounded-lg p-8">
                <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-6">
                  Send us a Message
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[#F5F0E8] mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C]"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#F5F0E8] mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#F5F0E8] mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C]"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#F5F0E8] mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C] resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden h-[400px]"
        >
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.635366234566!2d${restaurantInfo.location.lng}!3d${restaurantInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzI0LjYiTiA3M8KwMTAnNTMuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert"
          />
        </motion.div>
      </div>
    </div>
  );
}
