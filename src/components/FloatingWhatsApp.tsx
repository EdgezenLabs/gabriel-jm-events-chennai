import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919566144155"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center group"
    >
      <FaWhatsapp size={30} />

      {/* Tooltip */}
      <span className="absolute right-16 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Contact Us
      </span>
    </a>
  );
}
