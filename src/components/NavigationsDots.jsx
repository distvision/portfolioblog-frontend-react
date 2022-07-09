import React from "react";

export const NavigationsDots = ({ active }) => {
  return (
    <div className="flex justify-center items-center flex-col p-4">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="w-2 h-2 rounded-full bg-gray-100 m-2"
            style={active === item ? { backgroundColor: "#AC00FB" } : {}}
          />
        )
      )}
    </div>
  );
};
