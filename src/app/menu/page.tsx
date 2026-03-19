"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Leaf, Star, Plus, Minus, ShoppingBag } from "lucide-react";
import { menuItems, MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

const allCategories = ["All", "Soups", "Salads", "Starters"];
const subcategories = ["All", "Tandoori", "Italian", "World"];

export default function MenuPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState("All");
  const [showJainOnly, setShowJainOnly] = useState(false);
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);

  useEffect(() => {
    const catParam = searchParams.get("category");
    if (catParam && allCategories.includes(catParam)) {
      setCategory(catParam);
    }
  }, [searchParams]);

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    const matchesSubcategory = subcategory === "All" || item.subcategory === subcategory;
    const matchesJain = !showJainOnly || item.isJain;
    return matchesSearch && matchesCategory && matchesSubcategory && matchesJain;
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

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.item.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.item.id !== itemId);
    });
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Our Menu</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Explore Our <span className="gold-gradient">Delicacies</span>
          </h1>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">
            Discover our exquisite range of North Indian, Italian, Oriental & Chinese dishes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
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

          <div className="flex gap-4 flex-wrap">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
            >
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="px-4 py-3 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]"
            >
              {subcategories.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>

            <button
              onClick={() => setShowJainOnly(!showJainOnly)}
              className={cn(
                "px-4 py-3 rounded-lg border flex items-center gap-2 transition-colors",
                showJainOnly
                  ? "bg-[#C9A84C] text-[#0D0D0D] border-[#C9A84C]"
                  : "bg-[#1A1A1A] text-[#A0A0A0] border-[#C9A84C]/20 hover:border-[#C9A84C]"
              )}
            >
              <Leaf className="w-4 h-4" />
              Jain
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 text-sm text-[#A0A0A0]"
        >
          Showing {filteredItems.length} dishes
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#1A1A1A] rounded-lg overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-xl font-semibold text-[#F5F0E8]">
                          {item.name}
                        </h3>
                        {item.isJain && (
                          <Leaf className="w-4 h-4 text-[#C9A84C]" />
                        )}
                        {item.isPopular && (
                          <Star className="w-4 h-4 text-[#C9A84C] fill-current" />
                        )}
                      </div>
                      <span className="text-xs text-[#A0A0A0]">{item.subcategory}</span>
                    </div>
                    <p className="text-[#C9A84C] font-semibold text-lg">₹{item.price}</p>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full mt-4 py-2 bg-[#C9A84C]/10 text-[#C9A84C] rounded-lg hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#A0A0A0] text-lg">No dishes found matching your criteria</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSubcategory("All");
                setShowJainOnly(false);
              }}
              className="mt-4 text-[#C9A84C] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#C9A84C]/20 p-4 z-40"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#0D0D0D]" />
              </div>
              <div>
                <p className="text-[#F5F0E8] font-semibold">{cartCount} items</p>
                <p className="text-[#C9A84C]">₹{cartTotal}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                {cart.map((i) => (
                  <div key={i.item.id} className="flex items-center gap-2 bg-[#0D0D0D] px-3 py-1 rounded">
                    <button onClick={() => removeFromCart(i.item.id)}>
                      <Minus className="w-3 h-3 text-[#A0A0A0]" />
                    </button>
                    <span className="text-[#F5F0E8] text-sm">{i.quantity}</span>
                    <button onClick={() => addToCart(i.item)}>
                      <Plus className="w-3 h-3 text-[#A0A0A0]" />
                    </button>
                  </div>
                ))}
              </div>
              <Link href="/order" className="btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
