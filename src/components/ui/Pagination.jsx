import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-1.5 mt-10 pb-10">
      <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#E0E0E0] text-[#999999] hover:bg-slate-50 text-xs">
        &laquo;
      </button>
      <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#E0E0E0] text-[#999999] hover:bg-slate-50 text-xs">
        &lsaquo;
      </button>
      <button className="w-7 h-7 flex items-center justify-center rounded-md bg-[#0090D4] text-white font-semibold text-xs">
        1
      </button>
      <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#E0E0E0] text-[#666666] font-medium text-xs hover:bg-slate-50">
        2
      </button>
      <span className="text-[#999999] px-1 text-xs italic">...</span>
      <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#E0E0E0] text-[#666666] font-medium text-xs hover:bg-slate-50">
        5
      </button>
      <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#E0E0E0] text-[#999999] hover:bg-slate-50 text-xs">
        &rsaquo;
      </button>
      <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#E0E0E0] text-[#999999] hover:bg-slate-50 text-xs">
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
