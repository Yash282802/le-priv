"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Leaf, Clock, MapPin } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

const features = [
  { icon: Award, title: "Award Winning", description: "Recognized for excellence in fine dining" },
  { icon: Users, title: "Expert Chefs", description: "Experienced culinary team" },
  { icon: Heart, title: "Guest Focused", description: "Personalized service for every guest" },
  { icon: Leaf, title: "Fresh Ingredients", description: "Premium quality ingredients" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">About Us</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-6">
                A Story of <span className="gold-gradient">Excellence</span>
              </h1>
              <p className="text-[#A0A0A0] text-lg mb-6">
                Welcome to Le Privé, Vadodara&apos;s premier fine dining destination. Since our inception, 
                we have been committed to delivering an exceptional culinary experience that combines 
                the finest flavors with elegant ambiance.
              </p>
              <p className="text-[#A0A0A0] mb-8">
                Our multi-cuisine menu features carefully crafted North Indian, Italian, Oriental, 
                and Chinese dishes, all prepared with the freshest ingredients and authentic recipes. 
                We take pride in being a pure vegetarian restaurant with Jain options, ensuring that 
                everyone can enjoy our exquisite offerings.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[#C9A84C] text-3xl font-bold">4.9★</p>
                  <p className="text-[#A0A0A0] text-sm">Dining Rating</p>
                </div>
                <div>
                  <p className="text-[#C9A84C] text-3xl font-bold">5+</p>
                  <p className="text-[#A0A0A0] text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-[#C9A84C] text-3xl font-bold">10K+</p>
                  <p className="text-[#A0A0A0] text-sm">Happy Guests</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Fine dining experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1A1A1A] p-6 rounded-lg gold-border">
                <p className="font-heading text-3xl font-bold gold-gradient">Le Privé</p>
                <p className="text-[#A0A0A0] text-sm">{restaurantInfo.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8]">
              Our Philosophy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#F5F0E8] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#A0A0A0]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80"
                  alt="Restaurant decor"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80"
                  alt="Bar"
                  className="rounded-lg mt-8"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-6">
                The <span className="gold-gradient">Ambience</span>
              </h2>
              <p className="text-[#A0A0A0] mb-6">
                Our restaurant is designed to provide an intimate and luxurious dining experience. 
                From the elegant lighting to the comfortable seating, every detail has been carefully 
                curated to create the perfect atmosphere for memorable meals.
              </p>
              <p className="text-[#A0A0A0] mb-8">
                Whether you&apos;re celebrating a special occasion or enjoying a casual dinner, 
                Le Privé offers the ideal setting with its sophisticated yet welcoming ambiance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#A0A0A0]">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                  <span>{restaurantInfo.openingTime} - {restaurantInfo.closingTime}</span>
                </div>
                <div className="flex items-center gap-3 text-[#A0A0A0]">
                  <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  <span>{restaurantInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-6">
              Visit Us Today
            </h2>
            <p className="text-[#A0A0A0] mb-8">
              Experience the finest dining in Vadodara. We look forward to serving you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/reservation" className="btn-primary">
                Reserve a Table
              </a>
              <a href="/contact" className="btn-outline">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
