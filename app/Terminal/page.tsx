"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CommandDatabase } from "./commands";
interface Command {
  command: string;
  description: string;
}

function commandAndOutput(command: string) {
    const output = CommandDatabase[command]?.description || "Command not found";

  return (
    <div>
      <div className="command ">
        <span className=" text-[#0EA068]">┌──(</span>
        <span className=" text-blue-500 font-bold">maskman㉿INVISIBLE</span>
        <span className=" text-[#0EA068]">)-[</span>
        <span className="text-white font-semibold"> ~/Comding/himanshu </span>
        <span className=" text-[#0EA068]">]</span>
        <br />
        <div className="flex">
          <span className=" text-[#0EA068]">└─</span>
          <span className=" text-blue-500 font-bold">$</span>{" "}
          <span className="text-white font-semibold ml-2">{command}</span>
        </div>
      </div>
      {/* Output screen */}
      <div className="output font-serif text-white">
        <p>{output}</p>
      </div>
    </div>
  );
}
export default function Terminal() {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);

  //   On enter key press
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setCommandHistory([...commandHistory, { command, description: "" }]);
      setCommand("");
    }
  };

  return (
    <div
      className="min-w-full min-h-screen flex justify-center items-center bg-slate-400 relative"
      onKeyUp={handleKeyPress}

    >
      {/* Terminal screen */}
      <div className="terminal  h-[600px] w-[700px] bg-[#282a35] shadow-lg overflow-hidden" draggable onDragEnd={
        (e) => {
            // set current div position to dragged position
            const target = e.target as HTMLDivElement;
            target.style.position = 'absolute';
            target.style.left = `${e.pageX}px`;
            target.style.top = `${e.pageY}px`;
            target.style.transform = 'translate(-50%, -50%)';
        }
      }>
        {/* header */}
        <div className="flex items-center bg-[#424040] p-4">
          <div className="bg-slate-600 w-3 h-3 rounded-full mr-2"></div>
          <div className="bg-slate-600 w-3 h-3 rounded-full mr-2"></div>
          <div className="bg-slate-600 w-3 h-3 rounded-full"></div>
          <div className=" w-3 h-3 rounded-full text-slate-300 font-bold ml-auto mb-4">
            {/* Cross */}X
          </div>
        </div>

        {/* Command and Output screen */}
        <div className="flex flex-col no-scrollbar p-4 overflow-scroll h-full">
          {commandHistory.map((command,index) => (
            <div key={index}>{commandAndOutput(command.command)}</div>
          ))}
          <div className="command">
            <span className=" text-[#0EA068]">┌──(</span>
            <span className=" text-blue-500 font-bold">maskman㉿INVISIBLE</span>
            <span className=" text-[#0EA068]">)-[</span>
            <span className="text-white font-semibold">
              {" "}
              ~/Comding/himanshu{" "}
            </span>
            <span className=" text-[#0EA068]">]</span>
            <br />
            <div className="flex">
              <span className=" text-[#0EA068]">└─</span>
              <span className=" text-blue-500 font-bold">$</span>{" "}
              <input
                type="text"
                className="text-gray-100 outline-none caret-white bg-transparent inline-block self-stretch w-full ml-2"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
