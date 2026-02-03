import React from "react";
import { Search } from "lucide-react";
<<<<<<< Updated upstream
import { Input } from "../ui/Input";
=======
import { Input } from "./Input";
>>>>>>> Stashed changes

const Header = ({ title, subtitle, showSearch = true }) => {
  return (
    <div className="bg-white border-b border-border-default px-12 py-5 flex justify-between items-center mb-8">
      <div>
        <h1 className="text-h4 font-bold text-text-title leading-tight mb-1.5">
          {title}
        </h1>
        <p className="text-h6 text-text-subtitle">{subtitle}</p>
      </div>

      {showSearch && (
        <div className="relative w-[600px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-caption"
            strokeWidth={2}
          />
          <Input
            className="pl-11 h-10 text-h6 placeholder:text-text-caption border-border-default"
            placeholder="Search here ..."
          />
        </div>
      )}
    </div>
  );
};

export default Header;
