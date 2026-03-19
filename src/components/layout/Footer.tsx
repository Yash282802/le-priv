import Link from "next/link";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gold-border rounded-full flex items-center justify-center">
                <span className="text-[#C9A84C] font-heading text-2xl font-bold">L</span>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold gold-gradient">Le Privé</h2>
                <p className="text-[10px] text-[#A0A0A0] tracking-widest">FINE DINING</p>
              </div>
            </Link>
            <p className="text-[#A0A0A0] mb-6 max-w-md">
              {restaurantInfo.tagline}. Experience premium multi-cuisine dining with our 
              exquisite selection of North Indian, Italian, and Oriental dishes.
            </p>
            <div className="flex items-center gap-2 text-[#C9A84C]">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="text-[#F5F0E8] ml-2">{restaurantInfo.diningRating} ({restaurantInfo.diningReviews} reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold text-[#F5F0E8] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Menu", "Reservations", "Order Online", "Gallery", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold text-[#F5F0E8] mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#A0A0A0]">
                <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[#A0A0A0]">
                <Phone className="w-5 h-5 text-[#C9A84C] shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-[#C9A84C] transition-colors">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#A0A0A0]">
                <Clock className="w-5 h-5 text-[#C9A84C] shrink-0" />
                <span>{restaurantInfo.openingTime} - {restaurantInfo.closingTime}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A84C]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A0A0A0] text-sm">
            © {new Date().getFullYear()} Le Privé. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#A0A0A0] hover:text-[#C9A84C] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-[#A0A0A0] hover:text-[#C9A84C] transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
