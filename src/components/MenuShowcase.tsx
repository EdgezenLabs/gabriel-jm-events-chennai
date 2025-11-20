import { ChefHat, Sparkles } from "lucide-react";

interface MenuItem {
  name: string;
  items: string[];
}

const MenuShowcase = () => {
  const nonVegMenus: MenuItem[] = [
    {
      name: "Non Veg Combo I",
      items: [
        "Rava Kesari",
        "Chicken Briyani",
        "Chicken 65",
        "Onion Raitha & Brinjal Gravy",
        "Ice Cream and Sweet Beeda",
        "Water Bottle",
        "3 Types Of Porial Or Kootu (As Your Wish)",
      ],
    },
    {
      name: "Non Veg Combo II",
      items: [
        "Bread Halwa",
        "Tandoori Chicken",
        "Mutton Briyani",
        "Onion Raitha & Brinjal Gravy",
        "Pulka",
        "Chicken Masala",
        "Ice Cream / Sweet Beeda",
        "3 Types Of Porial Or Kootu (As Your Wish)",
      ],
    },
    {
      name: "Non Veg Combo III",
      items: [
        "Kasi Halwa",
        "Chicken Lollipop",
        "Chicken Biriyani",
        "Onion Raitha & Brinjal Gravy",
        "White Rice",
        "3 Types Of Porial Or Kootu (As Your Wish)",
        "Sambar,Rasam,Curd",
        "Kulfi and Sweet Beeda",
      ],
    },
  ];

  const vegMenus: MenuItem[] = [
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
        "Kasi Halwa",
        "Veg Manchurian",
        "Veg Biriyani",
        "Onion Raitha & Brinjal Gravy",
        "White Rice",
        "3 Types Of Porial Or Kootu (As Your Wish)",
        "Sambar,Rasam,Curd",
        "Kulfi and Sweet Beeda",
        "Sweet Beeda",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Our Curated Menus
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Handcrafted combinations designed to delight your taste buds
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-amber-500 w-12"></div>
            <h2 className="text-3xl font-bold text-slate-800">
              Non-Veg Combos
            </h2>
            <div className="h-px bg-amber-500 w-12"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nonVegMenus.map((menu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-center">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {menu.name}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {menu.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <span className="text-amber-500 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-green-500 w-12"></div>
            <h2 className="text-3xl font-bold text-slate-800">Veg Combos</h2>
            <div className="h-px bg-green-500 w-12"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vegMenus.map((menu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-center">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {menu.name}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {menu.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <span className="text-green-500 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Customization Available
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Want to create your own perfect combo? We offer full customization
              to match your preferences and dietary requirements.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white">
              <p className="font-medium text-lg">
                Mix & match items or create something entirely
                unique.
              </p>
              <p className="mt-2 text-white/90">
                Our culinary team is ready to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuShowcase;
