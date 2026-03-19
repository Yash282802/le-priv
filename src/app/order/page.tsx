"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Truck, ShoppingBag, Store, Clock, Plus, Minus, Trash2, CreditCard, CheckCircle } from "lucide-react";
import { menuItems, MenuItem, restaurantInfo } from "@/data/menu";
import { cn } from "@/lib/utils";

const allCategories = ["All", "Soups", "Salads", "Starters"];

export default function OrderPage() {
  const [orderType, setOrderType] = useState<"delivery" | "takeaway">("delivery");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number; notes?: string }[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Vadodara",
    pincode: "",
    notes: ""
  });

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : i;
          }
          return i;
        })
        .filter((i) => i.quantity > 0);
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const subtotal = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const deliveryFee = orderType === "delivery" && subtotal >= 500 ? 0 : 50;
  const platformFee = 20;
  const total = subtotal + deliveryFee + platformFee;
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handlePlaceOrder = async () => {
    setCheckoutStep(3);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setOrderPlaced(true);
  };

  if (orderPlaced) {
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
            Order Placed!
          </h2>
          <p className="text-[#A0A0A0] mb-6">
            Thank you for your order! You will receive a confirmation shortly.
          </p>
          <div className="bg-[#1A1A1A] rounded-lg p-6 mb-8">
            <p className="text-[#A0A0A0] text-sm">Order Total</p>
            <p className="text-[#C9A84C] text-3xl font-bold">₹{total}</p>
          </div>
          <button
            onClick={() => {
              setOrderPlaced(false);
              setCart([]);
              setShowCheckout(false);
              setCheckoutStep(1);
            }}
            className="btn-outline"
          >
            Order More
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Online Ordering</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Order <span className="gold-gradient">Online</span>
          </h1>
        </motion.div>

        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setOrderType("delivery")}
            className={cn(
              "px-6 py-3 rounded-lg flex items-center gap-2 transition-all",
              orderType === "delivery"
                ? "bg-[#C9A84C] text-[#0D0D0D]"
                : "bg-[#1A1A1A] text-[#A0A0A0] hover:text-[#F5F0E8]"
            )}
          >
            <Truck className="w-5 h-5" />
            Delivery
          </button>
          <button
            onClick={() => setOrderType("takeaway")}
            className={cn(
              "px-6 py-3 rounded-lg flex items-center gap-2 transition-all",
              orderType === "takeaway"
                ? "bg-[#C9A84C] text-[#0D0D0D]"
                : "bg-[#1A1A1A] text-[#A0A0A0] hover:text-[#F5F0E8]"
            )}
          >
            <Store className="w-5 h-5" />
            Takeaway
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] placeholder-[#A0A0A0] focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
              >
                {allCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#1A1A1A] rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-[#F5F0E8]">{item.name}</h3>
                      <p className="text-xs text-[#A0A0A0]">{item.subcategory}</p>
                    </div>
                    <p className="text-[#C9A84C] font-semibold">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full mt-3 py-2 bg-[#C9A84C]/10 text-[#C9A84C] rounded-lg hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#1A1A1A] rounded-lg p-6 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-semibold text-[#F5F0E8] flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#C9A84C]" />
                  Your Order
                </h2>
                {cartCount > 0 && (
                  <span className="bg-[#C9A84C] text-[#0D0D0D] px-2 py-1 rounded-full text-sm font-semibold">
                    {cartCount}
                  </span>
                )}
              </div>

              {cart.length === 0 ? (
                <p className="text-[#A0A0A0] text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((i) => (
                    <div key={i.item.id} className="flex items-center justify-between py-2 border-b border-[#C9A84C]/10">
                      <div className="flex-1">
                        <p className="text-[#F5F0E8] text-sm">{i.item.name}</p>
                        <p className="text-[#C9A84C] text-sm">₹{i.item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(i.item.id, -1)}
                          className="w-7 h-7 rounded bg-[#0D0D0D] flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3 text-[#A0A0A0]" />
                        </button>
                        <span className="text-[#F5F0E8] w-6 text-center">{i.quantity}</span>
                        <button
                          onClick={() => updateQuantity(i.item.id, 1)}
                          className="w-7 h-7 rounded bg-[#0D0D0D] flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3 text-[#A0A0A0]" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between text-[#A0A0A0]">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[#A0A0A0]">
                      <span>Delivery Fee {deliveryFee === 0 && "(Free above ₹500)"}</span>
                      <span>₹{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between text-[#A0A0A0]">
                      <span>Platform Fee</span>
                      <span>₹{platformFee}</span>
                    </div>
                    <div className="flex justify-between text-[#F5F0E8] font-semibold text-lg pt-2 border-t border-[#C9A84C]/20">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full btn-primary mt-6"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A1A] rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-semibold text-[#F5F0E8]">
                    Checkout
                  </h2>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="text-[#A0A0A0] hover:text-[#F5F0E8]"
                  >
                    ✕
                  </button>
                </div>

                {checkoutStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[#F5F0E8] mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F5F0E8] mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-[#F5F0E8] mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    {orderType === "delivery" && (
                      <>
                        <div>
                          <label className="block text-[#F5F0E8] mb-2">Address</label>
                          <textarea
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] resize-none"
                            rows={2}
                            placeholder="Delivery address"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[#F5F0E8] mb-2">City</label>
                            <input
                              type="text"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                            />
                          </div>
                          <div>
                            <label className="block text-[#F5F0E8] mb-2">Pincode</label>
                            <input
                              type="text"
                              required
                              value={formData.pincode}
                              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                              className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
                              placeholder="390001"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    <button
                      onClick={() => setCheckoutStep(2)}
                      className="w-full btn-primary mt-4"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}

                {checkoutStep === 2 && (
                  <div className="space-y-6">
                    <div className="bg-[#0D0D0D] rounded-lg p-4">
                      <h3 className="text-[#F5F0E8] font-semibold mb-3">Order Summary</h3>
                      {cart.map((i) => (
                        <div key={i.item.id} className="flex justify-between text-sm py-1">
                          <span className="text-[#A0A0A0]">{i.quantity}x {i.item.name}</span>
                          <span className="text-[#F5F0E8]">₹{i.item.price * i.quantity}</span>
                        </div>
                      ))}
                      <div className="border-t border-[#C9A84C]/20 mt-3 pt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-[#A0A0A0]">Subtotal</span>
                          <span className="text-[#F5F0E8]">₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#A0A0A0]">Delivery</span>
                          <span className="text-[#F5F0E8]">₹{deliveryFee}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#A0A0A0]">Platform Fee</span>
                          <span className="text-[#F5F0E8]">₹{platformFee}</span>
                        </div>
                        <div className="flex justify-between font-semibold mt-2">
                          <span className="text-[#F5F0E8]">Total</span>
                          <span className="text-[#C9A84C]">₹{total}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={handlePlaceOrder}
                        className="w-full btn-primary flex items-center justify-center gap-2"
                      >
                        <CreditCard className="w-5 h-5" />
                        Pay ₹{total} & Place Order
                      </button>
                      <p className="text-xs text-[#A0A0A0] text-center">
                        Cash on {orderType === "delivery" ? "Delivery" : "Pickup"} available
                      </p>
                    </div>

                    <button
                      onClick={() => setCheckoutStep(1)}
                      className="w-full text-[#A0A0A0] hover:text-[#F5F0E8] text-sm"
                    >
                      ← Back to Details
                    </button>
                  </div>
                )}

                {checkoutStep === 3 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#C9A84C] border-t-transparent animate-spin" />
                    <p className="text-[#F5F0E8]">Processing your order...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
