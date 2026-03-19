export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  subcategory: string;
  isJain: boolean;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // SOUPS
  { id: "s1", name: "Cream of Tomato", price: 189, category: "Soups", subcategory: "Soups", isJain: true },
  { id: "s2", name: "Tomato & Basil Clear Soup", price: 169, category: "Soups", subcategory: "Soups", isJain: true },
  { id: "s3", name: "Lemon & Coriander", price: 189, category: "Soups", subcategory: "Soups", isJain: true },
  { id: "s4", name: "Spinach & Burnt Garlic", price: 189, category: "Soups", subcategory: "Soups", isJain: false },
  { id: "s5", name: "Hot & Sour Exotica", price: 179, category: "Soups", subcategory: "Soups", isJain: false },
  { id: "s6", name: "Manchow Exotica", price: 179, category: "Soups", subcategory: "Soups", isJain: false },
  { id: "s7", name: "Broccoli & Almond", price: 189, category: "Soups", subcategory: "Soups", isJain: true },
  { id: "s8", name: "Cream of Mushroom", price: 189, category: "Soups", subcategory: "Soups", isJain: false },
  { id: "s9", name: "American Sweet Corn", price: 169, category: "Soups", subcategory: "Soups", isJain: true },
  { id: "s10", name: "Mexican Tortilla & Beans", price: 189, category: "Soups", subcategory: "Soups", isJain: true },

  // SALADS
  { id: "sa1", name: "Fresh Cuts", price: 129, category: "Salads", subcategory: "Salads", isJain: true },
  { id: "sa2", name: "Mexican Beans Salad", price: 229, category: "Salads", subcategory: "Salads", isJain: true },
  { id: "sa3", name: "Greek Salad", price: 249, category: "Salads", subcategory: "Salads", isJain: false },
  { id: "sa4", name: "Fattoush", price: 229, category: "Salads", subcategory: "Salads", isJain: false },
  { id: "sa5", name: "Summer Melon & Feta", price: 249, category: "Salads", subcategory: "Salads", isJain: false },
  { id: "sa6", name: "Panzanella", price: 249, category: "Salads", subcategory: "Salads", isJain: false },
  { id: "sa7", name: "Walnut & Cranberry", price: 279, category: "Salads", subcategory: "Salads", isJain: true },

  // TANDOORI STARTERS
  { id: "t1", name: "Paneer Tikka", price: 289, category: "Starters", subcategory: "Tandoori", isJain: true, isPopular: true },
  { id: "t2", name: "Lasuni Paneer Tikka", price: 299, category: "Starters", subcategory: "Tandoori", isJain: false },
  { id: "t3", name: "Paneer Kashmiri Tikka", price: 319, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t4", name: "Paneer Pahadi Tikka", price: 289, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t5", name: "Paneer Kali Mirch Tikka", price: 289, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t6", name: "Paneer Seekh Kebab", price: 289, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t7", name: "Paneer Sampler", price: 399, category: "Starters", subcategory: "Tandoori", isJain: true, isPopular: true },
  { id: "t8", name: "Le Privé Signature", price: 339, category: "Starters", subcategory: "Tandoori", isJain: true, isPopular: true },
  { id: "t9", name: "Stuffed Baby Potatoes", price: 309, category: "Starters", subcategory: "Tandoori", isJain: false },
  { id: "t10", name: "Achari Baby Potatoes", price: 289, category: "Starters", subcategory: "Tandoori", isJain: false },
  { id: "t11", name: "Stuffed Mushroom", price: 309, category: "Starters", subcategory: "Tandoori", isJain: false },
  { id: "t12", name: "Exotic Vegetables", price: 299, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t13", name: "Dahi Ke Kebab", price: 289, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t14", name: "Tandoori Platter", price: 499, category: "Starters", subcategory: "Tandoori", isJain: false, isPopular: true },
  { id: "t15", name: "Hara Bhara Kebab", price: 259, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t16", name: "Shami Kaju Kebab", price: 299, category: "Starters", subcategory: "Tandoori", isJain: true },
  { id: "t17", name: "Smoky Kebab", price: 289, category: "Starters", subcategory: "Tandoori", isJain: false },
  { id: "t18", name: "Cheesy Cigars", price: 299, category: "Starters", subcategory: "Tandoori", isJain: false },

  // ITALIAN STARTERS
  { id: "i1", name: "Garlic & Herbs Bread", price: 179, category: "Starters", subcategory: "Italian", isJain: false },
  { id: "i2", name: "Cheese Garlic Bread", price: 249, category: "Starters", subcategory: "Italian", isJain: true },
  { id: "i3", name: "Triple Spiced Garlic Bread", price: 279, category: "Starters", subcategory: "Italian", isJain: true },
  { id: "i4", name: "All-in-One Garlic Bread", price: 299, category: "Starters", subcategory: "Italian", isJain: true },
  { id: "i5", name: "Cheese Balls", price: 329, category: "Starters", subcategory: "Italian", isJain: true },
  { id: "i6", name: "Cajun Potatoes", price: 249, category: "Starters", subcategory: "Italian", isJain: false },
  { id: "i7", name: "Bruschetta", price: 229, category: "Starters", subcategory: "Italian", isJain: true },

  // WORLD STARTERS
  { id: "w1", name: "Nachos (Cheese & Salsa)", price: 269, category: "Starters", subcategory: "World", isJain: true },
  { id: "w2", name: "Nachos + Beans", price: 269, category: "Starters", subcategory: "World", isJain: true },
  { id: "w3", name: "Quesadilla", price: 299, category: "Starters", subcategory: "World", isJain: false },
  { id: "w4", name: "Tacos", price: 299, category: "Starters", subcategory: "World", isJain: false },
  { id: "w5", name: "Mexican Sizzling Platter", price: 349, category: "Starters", subcategory: "World", isJain: true },
  { id: "w6", name: "Zaatar", price: 199, category: "Starters", subcategory: "World", isJain: true },
  { id: "w7", name: "Falafel Platter", price: 329, category: "Starters", subcategory: "World", isJain: true },
  { id: "w8", name: "Couscous Pilaf", price: 299, category: "Starters", subcategory: "World", isJain: true },
  { id: "w9", name: "Paneer Chilly", price: 279, category: "Starters", subcategory: "World", isJain: false },
  { id: "w10", name: "Paneer Szechwan Chilly", price: 289, category: "Starters", subcategory: "World", isJain: true },
  { id: "w11", name: "Honey Chilli Potato", price: 249, category: "Starters", subcategory: "World", isJain: false },
  { id: "w12", name: "Mushroom Chilli", price: 269, category: "Starters", subcategory: "World", isJain: false },
];

export const categories = [
  { id: "soups", name: "Soups", icon: "🍲" },
  { id: "salads", name: "Salads", icon: "🥗" },
  { id: "starters", name: "Starters", icon: "🔥" },
];

export const subcategories = [
  { id: "tandoori", name: "Tandoori" },
  { id: "italian", name: "Italian" },
  { id: "world", name: "World" },
];

export const restaurantInfo = {
  name: "Le Privé",
  tagline: "Where Every Flavour Tells a Story",
  address: "17/B, 1st Floor, Nutan Bharat Society, Opp. Reliance Fresh, Alkapuri, Vadodara",
  phone: "+91 63540 46171",
  email: "contact@leprive.in",
  openingTime: "12:00 PM",
  closingTime: "11:00 PM",
  costForTwo: 1000,
  diningRating: 4.9,
  diningReviews: 349,
  deliveryRating: 4.3,
  deliveryReviews: 5832,
  location: {
    lat: 22.3072,
    lng: 73.1812,
  },
};

export const signatureDishes = [
  { id: "sd1", name: "Le Privé Signature", category: "Tandoori", price: 339 },
  { id: "sd2", name: "Paneer Sampler", category: "Tandoori", price: 399 },
  { id: "sd3", name: "Tandoori Platter", category: "Tandoori", price: 499 },
  { id: "sd4", name: "Walnut & Cranberry Salad", category: "Salads", price: 279 },
];

export const testimonials = [
  {
    id: "t1",
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely stunning ambience and the food is exceptional. The Paneer Tikka is the best I've had in Vadodara!",
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    rating: 5,
    text: "Great fine dining experience. The multi-cuisine options are impressive and everything we tried was delicious.",
  },
  {
    id: "t3",
    name: "Anjali Patel",
    rating: 5,
    text: "Perfect place for family gatherings. The Jain options are a blessing and the taste is outstanding.",
  },
];
