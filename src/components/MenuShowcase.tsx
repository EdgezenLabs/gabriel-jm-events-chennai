import React, { useState } from "react";
import Dish from "@/assets/photo_dish.jpeg";
import Dish2 from "@/assets/dish_2.png";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";
import dish5 from "@/assets/dish5.webp";


const FullMenuShowcase: React.FC = () => {
  const menus = [
    {
      title: "SPECIAL MENU-1",
      items: [
        "Sweet corn soup",
        "Veg corn soup",
        "Malai sandwich",
        "Anarchali sweets",
        "Rasamalai Janghri",
        "Ilaiadai",
        "Ilaneer Payasam",
        "Veg sandwich",
        "Veg Lollypop",
        "Paneer bujjiroll",
        "Calcutta curd vada",
        "Rumali roti, Pulkha",
        "Mushroom pepper masala",
        "Ilaneer idli",
        "Pudhina chutney",
        "Appam,Cauliflower Paya",
        "Idiappam , White kurma",
        "Hyderabhad biryani",
        "White rice",
        "Bisibele bath",
        "Chettinad noodles",
        "Vegetable munchurian",
        "Mini potato fry",
        "Cauliflower 65",
        "Pinapple Rasam",
        "Beans punjab curry",
        "Pickle,Apalam",
      ],
      image: Dish2,
    },
    {
      title: "SPECIAL MENU-2",
      items: [
        "Tomato,Mushroom Soup",
        "Basanthi",
        "Rasagulla",
        "Badam color Sweet",
        "Paladin Pradhaman",
        "Veg Khabab",
        "Parween Paneer",
        "Methi Roti",
        "Dal Makhani",
        "Kara Pani aaram",
        "Dangor chutney",
        "Kula puttu",
        "Adai aviyal",
        "Small onion sambar",
        "Gobi manjurian semidry",
        "Baby corn semidry",
        "senai chops",
        "Mushroom 65",
        "Mysore rasam",
        "Fried Rice",
        "Vangi Bath & White Rice",
        "Semiya Bagala Bath",
        "Mushroom Dosa",
        "National Poriyal",
        "Mango Pickle",
        "Appalam & Masala Papad",
        "Mineral Water Bottle",
      ],
      image: Dish,
    },
    {
      title: "SPECIAL MENU-3",
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
      title: "SPECIAL MENU-4",
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
      title: "SPECIAL MENU-5",
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
  );
};

export default FullMenuShowcase;
