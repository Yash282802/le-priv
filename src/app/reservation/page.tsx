"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle, AlertCircle } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM"
];

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#C9A84C]" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#F5F0E8] mb-4">
            Reservation Confirmed!
          </h2>
          <p className="text-[#A0A0A0] mb-6">
            Thank you, {formData.name}! Your table for {formData.guests} guests on {formData.date} at {formTime(formData.time)} has been reserved.
          </p>
          <p className="text-[#A0A0A0] text-sm mb-8">
            A confirmation has been sent to {formData.email} and {formData.phone}.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                guests: "2",
                specialRequests: ""
              });
            }}
            className="btn-outline"
          >
            Make Another Reservation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Reservations</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Reserve Your <span className="gold-gradient">Table</span>
          </h1>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">
            Book your table at Le Privé and experience fine dining at its best
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#1A1A1A] rounded-lg p-8">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-6">
                Reservation Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#A0A0A0]">
                  <Calendar className="w-5 h-5 text-[#C9A84C]" />
                  <span>Open Daily {restaurantInfo.openingTime} - {restaurantInfo.closingTime}</span>
                </div>
                <div className="flex items-center gap-4 text-[#A0A0A0]">
                  <Users className="w-5 h-5 text-[#C9A84C]" />
                  <span>Maximum 10 guests per booking</span>
                </div>
                <div className="flex items-center gap-4 text-[#A0A0A0]">
                  <AlertCircle className="w-5 h-5 text-[#C9A84C]" />
                  <span>₹200 advance payment required</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#C9A84C]/20">
                <h3 className="font-heading text-xl font-semibold text-[#F5F0E8] mb-4">
                  Location
                </h3>
                <p className="text-[#A0A0A0]">{restaurantInfo.address}</p>
                <p className="text-[#A0A0A0] mt-2">{restaurantInfo.phone}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1A1A1A] rounded-lg p-8">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-6">
                Book Your Table
              </h2>

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-[#F5F0E8] mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C9A84C]" />
                    Name
                  </label>
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
                    <label className="block text-[#F5F0E8] mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C9A84C]" />
                      Email
                    </label>
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
                    <label className="block text-[#F5F0E8] mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C9A84C]" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[#F5F0E8] mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C9A84C]" />
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      min={getMinDate()}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F5F0E8] mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C9A84C]" />
                      Time
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#F5F0E8] mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#C9A84C]" />
                      Guests
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#F5F0E8] mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C] resize-none"
                    placeholder="Any dietary requirements or special occasions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Confirm Reservation"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function formTime(time: string) {
  return time;
}
