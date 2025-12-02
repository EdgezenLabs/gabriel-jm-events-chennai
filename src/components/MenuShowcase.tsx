import React, { useState } from "react";
import { ChefHat, Sparkles } from "lucide-react";

/**
 * FullMenuShowcase.tsx
 *
 * - Single giant component containing all menus parsed from uploaded PDFs.
 * - Grouped by category (Non-Veg Combos, Veg Combos, Snacks & Rolls, Soups, Sweets,
 *   Tiffin & Breads, Meals & Rice, Sides & Curry, Dinner Specials, etc.)
 * - Default preview: first 7 items (user chose option C).
 * - Per-card "See More ▼ (count)" / "See Less ▲" toggles.
 *
 * Source: Menus extracted from uploaded PDFs. File citations:
 * - PDF 1 (Non-Veg Combos etc.): :contentReference[oaicite:0]{index=0}
 * - PDF 2 (Snacks, Tiffin, Meals, Dinner menus etc.): :contentReference[oaicite:1]{index=1}
 *
 * Drop into your project and ensure Tailwind CSS is available.
 */

/* ---------- Types ---------- */
type MenuItem = {
  name: string;
  items: string[];
};

/* ---------- Component ---------- */
const FullMenuShowcase: React.FC = () => {
  // how many items to show before "See More"
  const PREVIEW_COUNT = 7;

  // ---------------------------
  // Data (inlined from PDFs)
  // ---------------------------

  // Non-Veg Combos I - VI (from PDF 1). :contentReference[oaicite:2]{index=2}
  
  const nonVegCombos: MenuItem[] = [
    {
      name: "Non Veg Combo I",
      items: [
        "Welcome Drink",
        "Rava Kesari",
        "Chicken Briyani",
        "Chicken (2 pcs)",
        "Onion Raitha",
        "Brinjal Gravy",
        "Ice-Cream / Sweet Beeda",
        "Water Bottle",
      ],
    },
    {
      name: "Non Veg Combo II",
      items: [
        "Welcome Drink",
        "Bread Halwa",
        "Tandoori Chicken (1/4)",
        "Mutton Briyani",
        "Onion Raitha",
        "Brinjal Gravy",
        "Pulka (2 pcs)",
        "Chicken Masala",
        "Ice-Cream / Sweet Beeda",
      ],
    },
    {
      name: "Non Veg Combo III",
      items: [
        "Welcome Drink",
        "Kasi Halwa",
        "Chicken Lollipop (2 pcs)",
        "Chicken Biriyani",
        "Onion Raitha",
        "Brinjal Gravy",
        "White Rice",
        "National Poriyal",
        "Sambar, Rasam, Curd",
        "Kulfi and Sweet Beeda",
      ],
    },
    {
      name: "Non Veg Combo IV",
      items: [
        "Welcome Drink",
        "Pineapple Pudding",
        "Non Veg Soup",
        "Mutton Pepper Fry",
        "Mutton Biriyani",
        "Idiyappam & Paya",
        "Onion Raitha",
        "Brinjal Gravy",
        "Water Bottle",
        "Curd Rice & Pickle",
        "Choco Bar & Sweet Beeda",
      ],
    },
    {
      name: "Non Veg Combo V",
      items: [
        "Welcome Drink",
        "Sweet",
        "Chicken 65 (2 pcs)",
        "Nethili Fry",
        "Chicken Biriyani",
        "Parota",
        "Mutton Masala",
        "White Rice",
        "Sambar",
        "Potato Kara Fry",
        "Butter Milk",
        "Onion Raitha",
        "Brinjal Gravy",
        "Water Bottle",
        "Cassata & Sweet Beeda",
      ],
    },
    {
      name: "Non Veg Combo VI",
      items: [
        "Welcome Drink",
        "Badam Roll",
        "Prawn Pepper Fry",
        "Mutton Kola (1 pc)",
        "Mutton Biriyani",
        "Chicken Kotthu Parota",
        "White Rice",
        "Small Onion Sambar",
        "Kara Kulambu",
        "Rasam, Appalam",
        "Brinjal Mocha Fry",
        "Butter Milk & Pickle",
        "Onion Raitha",
        "Plain Chalna",
        "Water Bottle",
        "Ice Cream & Sweet Beeda",
      ],
    },
  ];


   const MininonVegCombos: MenuItem[] = [
    {
      name: " Mini Non Veg Combo I",
      items: [
"Welcome Drink",
"Rava Kesari",
"Chicken Briyani",
"Chicken (2 pcs)",
"Onion Raitha",
"Brinjal Gravy",
"Ice-Cream / Sweet Beeda",
"Water Bottle",

      ],
    },
  
  {
    name: "Mini Non Veg Combo II",
    items: [
      "Welcome Drink",
      "Bread Halwa",
      "Tandoori Chicken (1/4)",
      "Mutton Briyani",
      "Onion Raitha",
      "Brinjal Gravy",
      "Pulka (2 pcs)",
      "Chicken Masala",
      "Ice-Cream / Sweet Beeda",
    ],
  },

  {
    name: "Mini Non Veg Combo III",
    items: [
      "Welcome Drink",
      "Kasi Halwa",
      "Chicken Lollipop (2 pcs)",
      "Chicken Biriyani",
      "Onion Raitha",
      "Brinjal Gravy",
      "National Poriyal",
      "White Rice",
      "Veg Sambar",
      "Rasam",
      "Curd",
      "Pickle",
      "Water Bottle",
      "Kulfi",
      "Sweet Beeda",
    ],
  },

  {
    name: "Mini Non Veg Combo IV",
    items: [
      "Welcome Drink",
      "Pineapple Pudding",
      "Non Veg Soup",
      "Mutton Pepper Fry",
      "Mutton Biriyani",
      "Idiyappam & Paya",
      "Onion Raitha",
      "Brinjal Gravy",
      "Water Bottle",
      "Curd Rice & Pickle",
      "Choco Bar & Sweet Beeda",
    ],
  },

  {
    name: "Mini Non Veg Combo V",
    items: [
      "Welcome Drink",
      "Sweet",
      "Chicken 65 (2 pcs)",
      "Nethili Fry",
      "Chicken Biriyani",
      "Parota",
      "Mutton Masala",
      "White Rice",
      "Sambar",
      "Potato Kara Fry",
      "Butter Milk",
      "Onion Raitha",
      "Brinjal Gravy",
      "Water Bottle",
      "Cassata & Sweet Beeda",
    ],
  },

  {
    name: "Mini Non Veg Combo VI",
    items: [
      "Welcome Drink",
      "Badam Roll",
      "Prawn Pepper Fry",
      "Mutton Kola (1 pc)",
      "Mutton Biriyani",
      "Chicken Koththu Parota",
      "White Rice",
      "Small Onion Sambar",
      "Kara Kulambu",
      "Rasam",
      "Appalam",
      "Brinjal Mocha Fry",
      "Butter Milk & Pickle",
      "Onion Raitha",
      "Plain Chalna",
      "Water Bottle",
      "Ice Cream & Sweet Beeda",
    ],
  },
  ];

  // Veg Combos I - III (from PDF 1). :contentReference[oaicite:3]{index=3}
  const vegCombos: MenuItem[] = [
    {
      name: "Veg Combo I",
      items: [
        "Welcome Drink",
        "Rava Kesari",
        "Veg Briyani",
        "Paneer Tikka",
        "Onion Raitha",
        "Brinjal Gravy",
        "Ice Cream / Sweet Beeda",
        "3 Types Of Porial Or Kootu (As Your Wish)",
      ],
    },
    {
      name: "Veg Combo II",
      items: [
        "Welcome Drink",
        "Bread Halwa",
        "Paneer Butter Masala",
        "Veg Briyani",
        "Curd Rice",
        "Onion Raitha & Brinjal Gravy",
        "Pulka",
        "Dal Fry",
        "Ice Cream / Sweet Beeda",
      ],
    },
    {
      name: "Veg Combo III",
      items: [
        "Welcome Drink",
        "Kasi Halwa",
        "Veg Manchurian",
        "Veg Biriyani",
        "Onion Raitha & Brinjal Gravy",
        "White Rice",
        "3 Types Of Porial Or Kootu (As Your Wish)",
        "Sambar, Rasam, Curd",
        "Kulfi and Sweet Beeda",
      ],
    },
  ];

  // Snacks, Rolls, Soups, Sweets, Tiffin & Breads, Meals & Rice, Dinner specials (from PDF 2). :contentReference[oaicite:4]{index=4}
  const snacksAndRolls: MenuItem[] = [
    {
      name: "Snacks & Rolls",
      items: [
        "Veg Spring Roll",
        "Veg Lollipop",
        "Paneer Bujjiroll",
        "Culcutta Vada Pav",
        "Veg Spring Roll (repeat)",
      ],
    },
  ];

  const soupsAndSweets: MenuItem[] = [
    {
      name: "Soups",
      items: [
        "Sweet Corn Soup",
        "Veg Corn Soup",
        "Tomato Soup",
        "Mushroom Soup",
        "Baby Corn Soup",
      ],
    },
    {
      name: "Sweets",
      items: [
        "Rasmalai",
        "Ilaneer Payasam",
        "Makkhan Peda",
        "Badam Halwa",
        "Vegetable Halwa",
        "Jamun Malai",
        "Rasagulla",
        "Kajukathli",
      ],
    },
  ];

  const tiffinAndBreads: MenuItem[] = [
    {
      name: "Tiffin & Breads",
      items: [
        "Romali Roti",
        "Pulka",
        "Mushroom Pepper Masala",
        "White Kurma",
        "Aappam",
        "Illaneer Idli",
        "Idiyappam",
        "Pudhina Chutney",
        "Rumali Roti",
        "Stuffed Naan",
      ],
    },
  ];

  const mealsAndRice: MenuItem[] = [
    {
      name: "Meals & Rice",
      items: [
        "White Rice",
        "Bisibele Bath",
        "Hyderabadi Biriyani",
        "Chettinad Noodles",
        "Veg Dum Biriyani",
        "Mushroom Biriyani",
        "Mushroom Biriyani (repeat)",
      ],
    },
  ];

  const sidesAndCurries: MenuItem[] = [
    {
      name: "Sides & Curry",
      items: [
        "Small Onion Sambar",
        "Gobi Manjurian Semidry",
        "Baby Corn Semi Fry",
        "Mushroom 65",
        "Mysore Rasam",
        "National Poriyal",
        "Mango Pickle",
        "Appalam & Masala Papad",
        "Kula Puttu",
        "Adai Aviyal",
      ],
    },
    {
      name: "Rice & Curry (selected)",
      items: [
        "Mushroom Biriyani",
        "Paneer Kurma",
        "Onion Raitha",
        "Curry Leaves Rice",
        "Bisibele Bath",
        "White Rice",
        "Mysore Rasam",
      ],
    },
  ];

  const dinnerSpecials: MenuItem[] = [
    {
      name: "Dinner Special Menu - 1",
      items: [
        "Sweet Corn Soup",
        "Veg Corn Soup",
        "Malai Sandwich",
        "Anarchali Sweets",
        "Rasamalai",
        "Vegetable Manchurian",
        "Mini Potato Fry",
        "Cauliflower 65",
        "Methari Poori",
        "Channa Masala",
        "Podi Dosai",
      ],
    },
    {
      name: "Dinner Special Menu - 2",
      items: [
        "Veg Khabab",
        "Parween Paneer",
        "Cashew Fry",
        "Janghri Curd Vada",
        "Stuffed Naan",
        "Kadai Paneer",
        "Methi Rotti",
        "Dal Makhani",
        "Fried Rice",
      ],
    },
    {
      name: "Dinner Special Menu - 3",
      items: [
        "Welcome Juices: Grape Juice, Watermelon Juice, Fruit Punch",
        "Baby Corn Soup",
        "Jamun Malai",
        "Badam Halwa",
        "Panner Kebab",
        "Cashew Pakoda",
        "Vegetable Manchurian",
        "Mini Potato Fry",
        "Cauliflower 65",
      ],
    },
  ];

  const sweetsAndMisc: MenuItem[] = [
    {
      name: "Sweets & Misc",
      items: [
        "Makkhan Peda",
        "Badam Halwa",
        "Vegetable Halwa",
        "Vegetable Cutlet",
        "Badam Kheer",
        "Rasagulla",
        "Kajukathli",
      ],
    },
  ];

  // ---------------------------
  // UI state - per-card expansion
  // ---------------------------
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  // reusable renderer for a single card
  const renderMenuCard = (menu: MenuItem, accent: "amber" | "red" | "green" = "amber") => {
    const isExpanded = !!expanded[menu.name];
    const visibleItems = isExpanded ? menu.items : menu.items.slice(0, PREVIEW_COUNT);

    const bulletClass =
      accent === "red" ? "text-red-500" : accent === "green" ? "text-green-500" : "text-amber-500";
    const buttonClass =
      accent === "red" ? "text-red-600" : accent === "green" ? "text-green-600" : "text-amber-600";

    return (
      <div key={menu.name} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div
          className={`p-6 text-center ${
            accent === "red"
              ? "bg-gradient-to-r from-red-500 to-orange-500"
              : accent === "green"
              ? "bg-gradient-to-r from-green-500 to-emerald-500"
              : "bg-gradient-to-r from-amber-500 to-orange-500"
          }`}
        >
          <h3 className="text-xl font-bold text-white tracking-wide">{menu.name}</h3>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {visibleItems.map((item, idx) => (
              <li key={`${menu.name}-${idx}`} className="flex items-start gap-2 text-slate-700">
                <span className={`${bulletClass} mt-1 flex-shrink-0`}>•</span>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {menu.items.length > PREVIEW_COUNT && (
            <button
              onClick={() => toggleExpand(menu.name)}
              className={`mt-4 ${buttonClass} font-semibold text-sm hover:underline`}
            >
              {isExpanded ? "See Less ▲" : `See More ▼ (${menu.items.length})`}
            </button>
          )}
        </div>
      </div>
    );
  };

  // ---------------------------
  // Render
  // ---------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">Our Full Food Menu</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Complete curated list: combos, snacks, tiffin, meals, sides, sweets and dinner specials.
          </p>
        </div>

        {/* Non-Veg Combos */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Non-Veg Combos</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonVegCombos.map((m) => renderMenuCard(m, "red"))}
          </div>
        </section>

        {/* Veg Combos */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-green-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Veg Combos</h2>
            <div className="h-px bg-green-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vegCombos.map((m) => renderMenuCard(m, "green"))}
          </div>
        </section>
        
 <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Mini Non-Veg Combos</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MininonVegCombos.map((m) => renderMenuCard(m, "red"))}
          </div>
        </section>
        {/* Snacks & Rolls */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Snacks & Rolls</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snacksAndRolls.map((m) => renderMenuCard(m, "amber"))}
          </div>
        </section>

        {/* Soups & Sweets */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Soups & Sweets</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soupsAndSweets.map((m) => renderMenuCard(m, "amber"))}
            {sweetsAndMisc.map((m) => renderMenuCard(m, "amber"))}
          </div>
        </section>

        {/* Tiffin, Breads, Meals & Rice */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Tiffin, Breads & Meals</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiffinAndBreads.map((m) => renderMenuCard(m, "amber"))}
            {mealsAndRice.map((m) => renderMenuCard(m, "amber"))}
          </div>
        </section>

        {/* Sides & Curries */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Sides & Curry</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sidesAndCurries.map((m) => renderMenuCard(m, "amber"))}
          </div>
        </section>

        {/* Dinner Specials */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12" />
            <h2 className="text-3xl font-bold text-slate-800">Dinner Specials</h2>
            <div className="h-px bg-amber-500 w-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dinnerSpecials.map((m) => renderMenuCard(m, "amber"))}
          </div>
        </section>

        {/* Customization CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-amber-500" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Customization Available</h2>

            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Whether you're craving rich non-veg delights or wholesome veg classics, we offer a wide menu with endless
              combinations. Choose what you love, mix your favorites, and create a combo that perfectly matches your taste.
            </p>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
              <p className="font-medium text-lg">Pick from a variety of Veg & Non-Veg options — and customize as much as you like.</p>
              <p className="mt-2 text-white/90">Our culinary team is ready to craft a meal that’s uniquely yours.</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        
      </div>
    </div>
  );
};

export default FullMenuShowcase;
