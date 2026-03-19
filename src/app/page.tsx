"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, MapPin, Clock, ArrowRight, Sparkles, Utensils, Leaf } from "lucide-react";
import { restaurantInfo, signatureDishes, testimonials, categories } from "@/data/menu";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#0D0D0D] z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')"
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A84C] tracking-[0.3em] text-sm mb-4 uppercase">Premium Fine Dining</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-[#F5F0E8] mb-6">
              Le <span className="gold-gradient">Privé</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A0A0A0] mb-8 font-light">
              {restaurantInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/reservation" className="btn-primary inline-flex items-center justify-center gap-2">
              Reserve Table <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/menu" className="btn-outline inline-flex items-center justify-center gap-2">
              View Menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#C9A84C] fill-current" />
              <span className="text-[#F5F0E8] font-semibold">{restaurantInfo.diningRating}</span>
              <span className="text-[#A0A0A0]">({restaurantInfo.diningReviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-[#A0A0A0]">Alkapuri, Vadodara</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-[#A0A0A0]">{restaurantInfo.openingTime} - {restaurantInfo.closingTime}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-[#C9A84C]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#C9A84C] rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="text-center p-8 gold-border rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-border flex items-center justify-center">
                <Utensils className="w-8 h-8 text-[#C9A84C]" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-3">Multi-Cuisine</h3>
              <p className="text-[#A0A0A0]">North Indian, Italian, Oriental & Chinese - all under one roof</p>
            </motion.div>

            <motion.div variants={item} className="text-center p-8 gold-border rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-border flex items-center justify-center">
                <Leaf className="w-8 h-8 text-[#C9A84C]" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-3">Pure Vegetarian</h3>
              <p className="text-[#A0A0A0]">Premium vegetarian dining with Jain options available</p>
            </motion.div>

            <motion.div variants={item} className="text-center p-8 gold-border rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-border flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#C9A84C]" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F5F0E8] mb-3">Luxury Ambience</h3>
              <p className="text-[#A0A0A0]">Elegant interiors with mood lighting and premium seating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Chef&apos;s Special</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]">Signature Dishes</h2>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {signatureDishes.map((dish) => (
              <motion.div
                key={dish.id}
                variants={item}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/5] bg-[#1A1A1A] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-[#C9A84C]/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <span className="text-[#C9A84C] text-sm">{dish.category}</span>
                    <h3 className="font-heading text-xl font-semibold text-[#F5F0E8] mt-1">{dish.name}</h3>
                    <p className="text-[#C9A84C] font-semibold mt-2">₹{dish.price}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#C9A84C]/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-outline inline-flex items-center gap-2">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Our Menu</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]">Cuisine Categories</h2>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {categories.map((cat) => (
              <Link key={cat.id} href={`/menu?category=${cat.name}`}>
                <motion.div
                  variants={item}
                  className="group relative overflow-hidden rounded-lg cursor-pointer gold-border hover:bg-[#C9A84C]/10 transition-all"
                >
                  <div className="aspect-[16/9] bg-[#1A1A1A] relative flex items-center justify-center">
                    <span className="text-6xl">{cat.icon}</span>
                    <div className="absolute inset-0 bg-[#C9A84C]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-heading text-3xl font-bold text-[#F5F0E8] group-hover:scale-110 transition-transform">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]">What Our Guests Say</h2>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={item}
                className="p-8 bg-[#1A1A1A] rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-current" />
                  ))}
                </div>
                <p className="text-[#A0A0A0] mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <p className="text-[#F5F0E8] font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-6">
              Ready for an <span className="gold-gradient">Unforgettable</span> Experience?
            </h2>
            <p className="text-[#A0A0A0] text-lg mb-8">
              Reserve your table now and discover why Le Privé is Vadodara&apos;s premier fine dining destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation" className="btn-primary">
                Make a Reservation
              </Link>
              <Link href="/order" className="btn-outline">
                Order Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
