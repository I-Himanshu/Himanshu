import React from "react";

export default function TerminalPopup() {
  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow-lg">
      <div className="flex items-center">
        <div className="bg-slate-600 w-3 h-3 rounded-full mr-2"></div>
        <div className="bg-slate-600 w-3 h-3 rounded-full mr-2"></div>
        <div className="bg-slate-600 w-3 h-3 rounded-full"></div>
        <div className=" w-3 h-3 rounded-full text-slate-300 font-bold ml-auto mb-4">
          {/* Cross */}X
        </div>
      </div>
      <div className="bg-slate-600 p-4 rounded-lg mt-4">
        <p className="text-slate-300">Welcome to the terminal</p>
        <p className="text-slate-300">Type "help" to get started</p>
      </div>
    </div>
  );
}
