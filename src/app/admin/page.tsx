"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Utensils, Calendar, ShoppingCart, 
  Image, MessageSquare, Settings, TrendingUp, Users,
  CheckCircle, XCircle, Clock, DollarSign
} from "lucide-react";
import { restaurantInfo, menuItems } from "@/data/menu";

const stats = [
  { label: "Total Orders", value: "156", icon: ShoppingCart, change: "+12%" },
  { label: "Reservations", value: "42", icon: Calendar, change: "+8%" },
  { label: "Revenue", value: "₹1.2L", icon: DollarSign, change: "+23%" },
  { label: "Rating", value: "4.9★", icon: TrendingUp, change: "+0.1" },
];

const recentOrders = [
  { id: "ORD001", name: "Rahul Sharma", items: 3, total: 850, status: "pending", time: "2 min ago" },
  { id: "ORD002", name: "Priya Patel", items: 5, total: 1200, status: "confirmed", time: "15 min ago" },
  { id: "ORD003", name: "Amit Mehta", items: 2, total: 550, status: "delivered", time: "1 hour ago" },
];

const upcomingReservations = [
  { id: "RES001", name: "John Doe", guests: 4, time: "7:00 PM", date: "Today" },
  { id: "RES002", name: "Sarah Khan", guests: 2, time: "8:30 PM", date: "Today" },
  { id: "RES003", name: "Mike Brown", guests: 6, time: "7:30 PM", date: "Tomorrow" },
];

const menuCategoryCount = [
  { category: "Starters", count: 30 },
  { category: "Soups", count: 10 },
  { category: "Salads", count: 7 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "menu", label: "Menu Items", icon: Utensils },
    { id: "reservations", label: "Reservations", icon: Calendar },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#0D0D0D]">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-[#0A0A0A] border-r border-[#C9A84C]/20 fixed left-0 top-16 bottom-0">
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
              </button>
            ))}
          </nav>
        </aside>

        <main className="ml-64 flex-1 p-8">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-[#F5F0E8]">
              Admin Dashboard
            </h1>
            <p className="text-[#A0A0A0]">Welcome back! Here&apos;s your restaurant overview.</p>
          </div>

          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#1A1A1A] rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-[#C9A84C]" />
                      </div>
                      <span className="text-green-400 text-sm">{stat.change}</span>
                    </div>
                    <p className="text-[#F5F0E8] text-2xl font-bold">{stat.value}</p>
                    <p className="text-[#A0A0A0] text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#1A1A1A] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-xl font-semibold text-[#F5F0E8]">
                      Recent Orders
                    </h2>
                    <button 
                      onClick={() => setActiveTab("orders")}
                      className="text-[#C9A84C] text-sm hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between py-3 border-b border-[#C9A84C]/10">
                        <div>
                          <p className="text-[#F5F0E8] font-medium">{order.name}</p>
                          <p className="text-[#A0A0A0] text-sm">{order.items} items • ₹{order.total}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                            order.status === "pending" ? "bg-yellow-500/20 text-yellow-400" :
                            order.status === "confirmed" ? "bg-blue-500/20 text-blue-400" :
                            "bg-green-500/20 text-green-400"
                          }`}>
                            {order.status === "pending" && <Clock className="w-3 h-3" />}
                            {order.status === "confirmed" && <CheckCircle className="w-3 h-3" />}
                            {order.status === "delivered" && <CheckCircle className="w-3 h-3" />}
                            {order.status}
                          </span>
                          <p className="text-[#A0A0A0] text-xs mt-1">{order.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A1A1A] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-xl font-semibold text-[#F5F0E8]">
                      Upcoming Reservations
                    </h2>
                    <button 
                      onClick={() => setActiveTab("reservations")}
                      className="text-[#C9A84C] text-sm hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {upcomingReservations.map((res) => (
                      <div key={res.id} className="flex items-center justify-between py-3 border-b border-[#C9A84C]/10">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-[#C9A84C]" />
                          </div>
                          <div>
                            <p className="text-[#F5F0E8] font-medium">{res.name}</p>
                            <p className="text-[#A0A0A0] text-sm">{res.guests} guests</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[#F5F0E8]">{res.time}</p>
                          <p className="text-[#A0A0A0] text-sm">{res.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-lg p-6">
                <h2 className="font-heading text-xl font-semibold text-[#F5F0E8] mb-6">
                  Menu Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {menuCategoryCount.map((cat) => (
                    <div key={cat.category} className="text-center p-4 bg-[#0D0D0D] rounded-lg">
                      <p className="text-[#C9A84C] text-3xl font-bold">{cat.count}</p>
                      <p className="text-[#A0A0A0]">{cat.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "menu" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">
                  Menu Management
                </h2>
                <button className="btn-primary">Add New Item</button>
              </div>

              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#0D0D0D]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Item</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Category</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Price</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Status</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.slice(0, 10).map((item) => (
                      <tr key={item.id} className="border-b border-[#C9A84C]/10">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-[#F5F0E8]">{item.name}</span>
                            {item.isJain && <span className="text-[#C9A84C] text-xs">J</span>}
                            {item.isPopular && <span className="text-[#C9A84C] text-xs">★</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#A0A0A0]">{item.category}</td>
                        <td className="px-6 py-4 text-[#C9A84C]">₹{item.price}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                            <CheckCircle className="w-3 h-3" /> Available
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="text-[#C9A84C] hover:text-[#F5F0E8]">Edit</button>
                            <button className="text-red-400 hover:text-red-300">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "reservations" && (
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">
                Reservations Management
              </h2>

              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#0D0D0D]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Guest</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Date & Time</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Guests</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Status</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingReservations.map((res) => (
                      <tr key={res.id} className="border-b border-[#C9A84C]/10">
                        <td className="px-6 py-4 text-[#F5F0E8]">{res.name}</td>
                        <td className="px-6 py-4 text-[#A0A0A0]">{res.date} at {res.time}</td>
                        <td className="px-6 py-4 text-[#A0A0A0]">{res.guests}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                            Confirmed
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="text-[#C9A84C] hover:text-[#F5F0E8]">View</button>
                            <button className="text-red-400 hover:text-red-300">Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">
                Orders Management
              </h2>

              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#0D0D0D]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Order ID</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Customer</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Items</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Total</th>
                      <th className="px-6 py-4 text-left text-[#A0A0A0] font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-[#C9A84C]/10">
                        <td className="px-6 py-4 text-[#F5F0E8]">{order.id}</td>
                        <td className="px-6 py-4 text-[#A0A0A0]">{order.name}</td>
                        <td className="px-6 py-4 text-[#A0A0A0]">{order.items} items</td>
                        <td className="px-6 py-4 text-[#C9A84C]">₹{order.total}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                            order.status === "pending" ? "bg-yellow-500/20 text-yellow-400" :
                            "bg-green-500/20 text-green-400"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === "gallery" || activeTab === "testimonials" || activeTab === "settings") && (
            <div className="text-center py-20">
              <p className="text-[#A0A0A0] text-lg">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management coming soon
              </p>
              <p className="text-[#A0A0A0] text-sm mt-2">
                This feature is under development
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
