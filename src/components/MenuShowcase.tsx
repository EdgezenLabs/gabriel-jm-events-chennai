import React, { useState } from "react";
import Dish from "@/assets/photo_dish.jpeg";
import Dish2 from "@/assets/dish_2.png";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";
import dish5 from "@/assets/dish5.webp";
import { Sparkles } from "lucide-react";

const FullMenuShowcase: React.FC = () => {
  const menus = [
    {
      title: "Menu-1",
      items: [
        "Welcome Drink",
        "Kasi Halwa",
        "Bread Halwa",
        "Chicken (2 Pcs)",
        "Chicken Lollipop (2 Pcs)",
        "Tandoori Chicken (1/4)",
        "Chicken Biriyani",
        "Chicken Masala",
        "Onion Raitha",
        "Brinjal Gravy",
        "Pulka (2 Pcs)",
        "National Poriyal",
        "White Rice",
        "Veg Sambar",
        "Rasam",
        "Curd",
        "Pickle",
        "Water Bottle",
        "Ice Cream / Sweet Beeda",
        "Rava Kesari",
        "Kulfi",
        "Sweet Beeda",
      ],
      image: Dish2,
    },
    {
      title: "Menu-2",
      items: [
        "Mutton Masala",
        "Welcome Drink",
        "Pineapple Pudding", 
        "Non Veg Soup",
        "Mutton Pepper Fry",
        "Mutton Biriyani",
        "Idiyappam",
        "Mutton Paya",
        "Onion Raitha",
        "Brinjal Gravy",
        "Mutton Kola (1 Pc)",
        "Parota",
        "Water Bottle",
        "Curd Rice",
        "Pickle",
        "Choco Bar",
        "Sweet Beeda",
      ],
      image: Dish2,
    },
    {
      title: "Menu-3",
      items: [
        "Welcome Drink",
        "Rava Kesari",
        "Bread Halwa",
        "Pineapple Pudding",
        "Non Veg Soup",
        "Chicken Biriyani",
        "Chicken (2 Pcs)",
        "Chicken Masala",
        "Chicken Lollipop (2 Pcs)",
        "Tandoori Chicken (1/4)",
        "Idiyappam & Paya",
        "Parota",
        "Pulka (2 Pcs)",
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
        "Ice Cream / Sweet Beeda",
      ],
      image: Dish,
    },
    {
      title: "Menu-4",
      items: [
        "Welcome Drink",
        "Sweet",
        "Badam Roll",
        "Choco Bar & Sweet Beeda",
        "Prawn Pepper Fry",
        "Mutton Pepper Fry",
        "Mutton Masala",
        "Mutton Biriyani",
        "Mutton Kola (1 Pc)",
        "Chicken 65 (2 Pcs)",
        "Nethili Fry",
        "Chicken Kotthu Parota",
        "Brinjal Mocha Fry",
        "Small Onion Sambar",
        "Kara Kulambu",
        "Curd Rice & Pickle",
        "Plain Chalna",
        "Buttermilk",
        "Water Bottle",
        "Ice Cream & Sweet Beeda",
        "Parota",
        "Rasam, Appalam",
      ],
      image: Dish,
    },
    {
      title: "Menu-5",
      items: [
        "Welcome Juices",
        "Grape Juice",
        "Watermelon Juice",
        "Fruit Punch",
        "Makkanpedabadam",
        "Halwa",
        "Vegetable Halwa",
        "Vegetable Cutlet & Badam Kheer",
        "Velari Thayir Pachadi",
        "Cauliflower, Carrot, Beans Poriyal",
        "Kathari Mosai Chops & Potato Chips",
        "Methari Poori",
        "Channa Masala",
        "Podi Dosai",
        "Coconut Chutney",
        "Coriander Chutney",
        "Mushroom Biriyani",
        "Paneer Kurma",
        "Onion Raitha",
        "Curry Leaves Rice",
        "Bisibele Bath",
        "White Rice",
        "Mysore Rasam",
        "Pagala Bath",
        "Mango Pickle",
        "More Milagai",
        "Appalam",
        "Javarasi Vadam",
        "Water Bottle",
      ],
      image: dish3,
    },
    {
      title: "Menu-6",
      items: [
        "Grape Juice",
        "Watermelon Juice",
        "Fruit Punch",
        "Vegetable Soup",
        "Rasamalai",
        "Kaju Kathli",
        "Veg Spring Roll",
        "Thayir Vadai",
        "Onion Raitha",
        "Vegetable Kurma",
        "Beans Punjab Curry",
        "Urulai Pirai & Potato Chips",
        "Rumali Roti",
        "Paneer Butter Masala",
        "Onion Podi Uthappam",
        "Coriander Chutney",
        "Tomato Chutney",
        "Veg Dum Biriyani",
        "Bisibele Bath",
        "White Rice",
        "Tomato Rasam",
        "Pagala Bath",
        "Mango Pickle",
        "More Milagai",
        "Appalam",
        "Javarasi Vadam",
        "Water Bottle",
      ],
      image: dish4,
    },
    {
      title: "Menu-7",
      items: [
        "Grape Juice",
        "Watermelon Juice",
        "Fruit Punch",
        "Baby Corn Soup",
        "Jamun Malai",
        "Badam Halwa",
        "Paneer Kebab",
        "Cashew Pakoda",
        "Rumali Roti, Pulkha",
        "Mushroom Pepper Masala",
        "Ilaneer Idli",
        "Pudhina Chutney",
        "Aapam, Cauliflower Paaya",
        "Idiyappam, White Kurma",
        "Hyderabad Biryani",
        "White Rice",
        "Bisibele Bath",
        "Chettinad Noodles",
        "Vegetable Manchurian",
        "Mini Potato Fry",
        "Cauliflower 65",
        "Pineapple Rasam",
        "Beans Punjab Curry",
        "Pickle, Apalam",
      ],
      image: dish5,
    },
  ];

  const [active, setActive] = useState(0); // menu1 open initially

  // ---- DESKTOP COLUMN LOGIC ----
  const items = menus[active].items;
  const rows = 10; // Number of rows
  const columns = Math.ceil(items.length / rows);

  return (
    <div>
      <div className="w-full min-h-screen bg-black text-white p-4 md:p-10 font-sans">
        {/* ------------------ */}
        {/* MOBILE ACCORDION */}
        {/* ------------------ */}
        <div className="block md:hidden">
          {menus.map((menu, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              {/* TITLE BUTTON */}
              <button
                onClick={() => setActive(index)}
                className={`
                w-full text-left px-4 py-3 text-base font-semibold uppercase
                ${active === index ? "text-amber-400" : "text-gray-300"}
              `}
              >
                {menu.title}
              </button>

              {/* EXPANDED CONTENT */}
              {active === index && (
                <div className="px-4 pt-2 pb-4">
                  <ol className="list-decimal list-inside space-y-2 text-lg">
                    {menu.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>

                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="mt-4 rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ------------------ */}
        {/* DESKTOP VIEW */}
        {/* ------------------ */}
        <div className="hidden md:block">
          {/* TAB HEADERS */}
          <div className="flex overflow-x-auto border-b border-gray-600 mb-8">
            {menus.map((menu, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                px-6 py-3 text-lg font-semibold uppercase whitespace-nowrap
                ${
                  active === index
                    ? "text-amber-400 border-b-2 border-amber-400"
                    : "text-gray-400 hover:text-white"
                }
              `}
              >
                {menu.title}
              </button>
            ))}
          </div>

          {/* CONTENT BOX */}
          <div className="border border-gray-700 rounded-xl p-8 bg-[url('/wood-bg.jpg')] bg-cover">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
              {menus[active].title}
            </h2>

            <div className="grid grid-cols-2 gap-8">
              {/* LEFT SIDE — COLUMN-WISE LIST */}
              <div className="flex gap-10">
                {/* Generate column blocks */}
                {[...Array(columns)].map((_, colIndex) => (
                  <div key={colIndex}>
                    {[...Array(rows)].map((_, rowIndex) => {
                      const itemIndex = colIndex * rows + rowIndex;
                      const item = items[itemIndex];

                      return (
                        item && (
                          <div key={rowIndex} className="mb-2">
                            <span className="text-base">
                              {itemIndex + 1}. {item}
                            </span>
                          </div>
                        )
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE — IMAGE */}
              <div className="flex justify-center">
                <img
                  src={menus[active].image}
                  alt={menus[active].title}
                  className="rounded-lg shadow-lg w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10 border-t border-gray-300 pt-8">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-amber-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Menu, Your Style
          </h2>

          <h3 className="text-2xl md:text-2xl text-white mb-4">
            We customize both Veg and Non-Veg menus completely to your taste.
            Choose your favorites and create the perfect combo—just the way you
            want.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FullMenuShowcase;
