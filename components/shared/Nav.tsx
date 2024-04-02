import { menu } from "@/assets/data";
import Link from "next/link";

export const NavComponent = () => {
  return (
    <nav className="w-full fixed bottom-5 flex items-center justify-center">
      {/* Content Menu */}
      <ul className="flex items-center border border-gray-500/30 rounded-2xl overflow-hidden">
        {menu.map((item) => (
          <Link
            href={item.to}
            key={item.to}
            className="px-5 py-3 text-gray-500 hover:text-white hover:bg-gray-500/10 transition-all duration-300 cursor-pointer"
          >
            <item.icon size={20} />
          </Link>
        ))}
      </ul>
    </nav>
  );
};
