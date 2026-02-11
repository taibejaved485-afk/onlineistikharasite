
import React from 'react';

const IslamicDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-12 opacity-40">
      <div className="h-px w-24 md:w-48 bg-gradient-to-r from-transparent to-[#daa520]" />
      <div className="flex items-center gap-2 text-[#daa520]">
        <i className="fa-solid fa-star-and-crescent text-xl" />
      </div>
      <div className="h-px w-24 md:w-48 bg-gradient-to-l from-transparent to-[#daa520]" />
    </div>
  );
};

export default IslamicDivider;
