"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Utensils, Calendar, ShoppingCart, 
  Image, MessageSquare, Settings, TrendingUp, Users,
  CheckCircle, Clock, DollarSign, Eye, Trash2, Phone, Mail, RefreshCw
} from "lucide-react";
import { menuItems } from "@/data/menu";

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("reservations");
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/reservations');
      const data = await response.json();
      setReservations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch reservations:', error);
      setReservations([]);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "reservations", label: "Reservations", icon: Calendar },
    { id: "menu", label: "Menu Items", icon: Utensils },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const today = new Date().toISOString().split('T')[0];
  const todayReservations = reservations.filter(r => r.date === today);
  const confirmedReservations = reservations.filter(r => r.status === 'confirmed').length;

  return (
    <div className="min-h-screen pt-16 bg-[#0D0D0D]">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-[#0A0A0A] border-r border-[#C9A84C]/20 fixed left-0 top-16 bottom-0">
          <div className="p-4 border-b border-[#C9A84C]/20">
            <p className="text-[#C9A84C] font-semibold">Le Privé Admin</p>
            <p className="text-[#A0A0A0] text-xs">Restaurant Management</p>
          </div>
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#C9A84C] text-[#0D0D0D]"
                    : "text-[#A0A0A0] hover:bg-[#1A1A1A] hover:text-[#F5F0E8]"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                {tab.id === "reservations" && reservations.length > 0 && (
                  <span className="ml-auto bg-[#0D0D0D] text-[#C9A84C] text-xs px-2 py-0.5 rounded-full">
                    {reservations.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        <main className="ml-64 flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl font-bold text-[#F5F0E8]">
                {tabs.find(t => t.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <p className="text-[#A0A0A0]">Manage your restaurant operations</p>
            </div>
            <a 
              href="/" 
              target="_blank"
              className="btn-outline text-sm"
            >
              View Website →
            </a>
          </div>

          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#1A1A1A] rounded-lg p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <p className="text-[#F5F0E8] text-3xl font-bold">{reservations.length}</p>
                  <p className="text-[#A0A0A0] text-sm">Total Reservations</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#1A1A1A] rounded-lg p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-[#F5F0E8] text-3xl font-bold">{todayReservations.length}</p>
                  <p className="text-[#A0A0A0] text-sm">Today's Bookings</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#1A1A1A] rounded-lg p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <p className="text-[#F5F0E8] text-3xl font-bold">{confirmedReservations}</p>
                  <p className="text-[#A0A0A0] text-sm">Confirmed</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#1A1A1A] rounded-lg p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <p className="text-[#F5F0E8] text-3xl font-bold">4.9★</p>
                  <p className="text-[#A0A0A0] text-sm">Rating</p>
                </motion.div>
              </div>

              <div className="bg-[#1A1A1A] rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-semibold text-[#F5F0E8]">
                    Recent Reservations
                  </h2>
                  <button onClick={() => setActiveTab("reservations")} className="text-[#C9A84C] text-sm hover:underline">
                    View All →
                  </button>
                </div>
                {loading ? (
                  <p className="text-[#A0A0A0]">Loading...</p>
                ) : reservations.length === 0 ? (
                  <p className="text-[#A0A0A0] text-center py-8">No reservations yet. Reservations from the website will appear here.</p>
                ) : (
                  <div className="space-y-4">
                    {reservations.slice(0, 5).map((res) => (
                      <div key={res.id} className="flex items-center justify-between py-3 border-b border-[#C9A84C]/10">
                        <div>
                          <p className="text-[#F5F0E8] font-medium">{res.name}</p>
                          <p className="text-[#A0A0A0] text-sm">{res.guests} guests • {res.date} at {res.time}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          res.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {res.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "reservations" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">
                  All Reservations
                </h2>
                <button onClick={fetchReservations} className="btn-outline flex items-center gap-2 text-sm">
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                {loading ? (
                  <div className="p-12 text-center">
                    <RefreshCw className="w-8 h-8 text-[#C9A84C] animate-spin mx-auto mb-4" />
                    <p className="text-[#A0A0A0]">Loading reservations...</p>
                  </div>
                ) : reservations.length === 0 ? (
                  <div className="p-12 text-center">
                    <Calendar className="w-16 h-16 text-[#C9A84C]/30 mx-auto mb-4" />
                    <p className="text-[#F5F0E8] text-lg mb-2">No Reservations Yet</p>
                    <p className="text-[#A0A0A0] text-sm">Reservations made on the website will appear here in real-time</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-[#0D0D0D]">
                        <tr>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Booking ID</th>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Guest</th>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Contact</th>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Date & Time</th>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Guests</th>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Status</th>
                          <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservations.map((res, i) => (
                          <tr key={res.id} className={`border-b border-[#C9A84C]/10 ${i % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#161616]'}`}>
                            <td className="px-6 py-4">
                              <span className="text-[#C9A84C] font-mono text-sm">{res.id}</span>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-[#F5F0E8]">{res.name}</p>
                              {res.specialRequests && <p className="text-[#A0A0A0] text-xs mt-1 truncate max-w-[200px]">{res.specialRequests}</p>}
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <Phone className="w-3 h-3 text-[#C9A84C]" />
                                  <span className="text-[#F5F0E8]">{res.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Mail className="w-3 h-3 text-[#C9A84C]" />
                                  <span className="text-[#A0A0A0]">{res.email}</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-[#F5F0E8]">{res.date}</p>
                              <p className="text-[#C9A84C] text-sm">{res.time}</p>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#A0A0A0]" />
                                <span className="text-[#F5F0E8]">{res.guests}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                                res.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 
                                res.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {res.status === 'confirmed' && <CheckCircle className="w-3 h-3" />}
                                {res.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-3">
                                <button className="text-[#C9A84C] hover:text-[#F5F0E8] transition-colors" title="View">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <a href={`tel:${res.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors" title="Call">
                                  <Phone className="w-4 h-4" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {reservations.length > 0 && (
                <div className="bg-[#1A1A1A] rounded-lg p-6">
                  <h3 className="text-[#F5F0E8] font-semibold mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                    Email & SMS Notifications
                  </h3>
                  <p className="text-[#A0A0A0] text-sm mb-4">
                    To receive automatic email and SMS notifications when new reservations come in, add these environment variables to Vercel:
                  </p>
                  <div className="bg-[#0D0D0D] rounded-lg p-4 font-mono text-xs space-y-1">
                    <p className="text-[#C9A84C]"># Add these in Vercel Project Settings → Environment Variables:</p>
                    <p className="text-green-400">RESEND_API_KEY = your_resend_api_key</p>
                    <p className="text-green-400">MSG91_AUTH_KEY = your_msg91_auth_key</p>
                    <p className="text-green-400">OWNER_EMAIL = contact@leprive.in</p>
                    <p className="text-green-400">OWNER_PHONE = +916354046171</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "menu" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">Menu Items</h2>
                <button className="btn-primary">Add New Item</button>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#0D0D0D]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Item</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Category</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Price</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Jain</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.slice(0, 15).map((item) => (
                      <tr key={item.id} className="border-b border-[#C9A84C]/10">
                        <td className="px-6 py-4 text-[#F5F0E8]">{item.name}</td>
                        <td className="px-6 py-4 text-[#A0A0A0]">{item.category}</td>
                        <td className="px-6 py-4 text-[#C9A84C]">₹{item.price}</td>
                        <td className="px-6 py-4">{item.isJain ? <span className="text-green-400">✓</span> : <span className="text-[#A0A0A0]">-</span>}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="text-[#C9A84C] text-sm">Edit</button>
                            <button className="text-red-400 text-sm">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#A0A0A0] text-sm text-center">Showing 15 of {menuItems.length} items. Connect a database for full menu management.</p>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">Online Orders</h2>
              <div className="bg-[#1A1A1A] rounded-lg p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-[#C9A84C]/30 mx-auto mb-4" />
                <p className="text-[#F5F0E8] text-lg mb-2">No Orders Yet</p>
                <p className="text-[#A0A0A0] text-sm">Online orders will appear here when customers place them</p>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">Gallery</h2>
              <div className="bg-[#1A1A1A] rounded-lg p-12 text-center">
                <Image className="w-16 h-16 text-[#C9A84C]/30 mx-auto mb-4" />
                <p className="text-[#F5F0E8] text-lg mb-2">Gallery Management</p>
                <p className="text-[#A0A0A0] text-sm">Connect Cloudinary to manage gallery images</p>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">Settings</h2>
              <div className="bg-[#1A1A1A] rounded-lg p-6">
                <h3 className="text-[#F5F0E8] font-semibold mb-4">Required Environment Variables</h3>
                <p className="text-[#A0A0A0] text-sm mb-4">Add these in Vercel Project Settings → Environment Variables:</p>
                <div className="bg-[#0D0D0D] rounded-lg p-4 font-mono text-xs space-y-3">
                  <div>
                    <p className="text-[#C9A84C] mb-2"># Database (for persistent data)</p>
                    <p className="text-[#A0A0A0]">DATABASE_URL = postgresql://user:password@host:5432/db</p>
                  </div>
                  <div>
                    <p className="text-[#C9A84C] mb-2"># Email Notifications (Resend)</p>
                    <p className="text-[#A0A0A0]">RESEND_API_KEY = re_xxxxx</p>
                  </div>
                  <div>
                    <p className="text-[#C9A84C] mb-2"># SMS Notifications (MSG91)</p>
                    <p className="text-[#A0A0A0]">MSG91_AUTH_KEY = xxxxx</p>
                  </div>
                  <div>
                    <p className="text-[#C9A84C] mb-2"># Payments (Razorpay)</p>
                    <p className="text-[#A0A0A0]">RAZORPAY_KEY_ID = rzp_xxxxx</p>
                    <p className="text-[#A0A0A0]">RAZORPAY_KEY_SECRET = xxxxx</p>
                  </div>
                  <div>
                    <p className="text-[#C9A84C] mb-2"># Owner Contact (for notifications)</p>
                    <p className="text-[#A0A0A0]">OWNER_EMAIL = contact@leprive.in</p>
                    <p className="text-[#A0A0A0]">OWNER_PHONE = +916354046171</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
