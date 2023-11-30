import React from "react";

function Typewriter(text: string) {
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setValue((value) => value + text.charAt(i));
      i++;
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return value;
}
export const CommandDatabase: {
    [key: string]: {
        description: string;
        fn: () => JSX.Element;
    };
} = {
  help: {
    description: "List all available commands",
    fn: () => {
      return (
        <>
          <p className="text-slate-300">Available commands:</p>
          <p className="text-slate-300">about, contact, projects, resume</p>
          {Typewriter("help") +
            " " +
            Typewriter("Use the command 'help' to list all available commands")}
          {Typewriter("about") +
            " " +
            Typewriter("Use the command 'about' to know more about me")}
          {Typewriter("contact") +
            " " +
            Typewriter("Use the command 'contact' to know my contact details")}
          {Typewriter("projects") +
            " " +
            Typewriter("Use the command 'projects' to view my projects")}
          {Typewriter("resume") +
            " " +
            Typewriter("Use the command 'resume' to view my resume")}
        </>
      );
    },
  },
  welcome: {
    description: "Welcome message",
    fn: () => {
      return (
        <>
          <pre>
            {`┏┓━┏┓┏━━┓┏━┓┏━┓┏━━━┓┏━┓━┏┓┏━━━┓┏┓━┏┓┏┓━┏┓
┃┃━┃┃┗┫┣┛┃┃┗┛┃┃┃┏━┓┃┃┃┗┓┃┃┃┏━┓┃┃┃━┃┃┃┃━┃┃
┃┗━┛┃━┃┃━┃┏┓┏┓┃┃┃━┃┃┃┏┓┗┛┃┃┗━━┓┃┗━┛┃┃┃━┃┃
┃┏━┓┃━┃┃━┃┃┃┃┃┃┃┗━┛┃┃┃┗┓┃┃┗━━┓┃┃┏━┓┃┃┃━┃┃
┃┃━┃┃┏┫┣┓┃┃┃┃┃┃┃┏━┓┃┃┃━┃┃┃┃┗━┛┃┃┃━┃┃┃┗━┛┃
┗┛━┗┛┗━━┛┗┛┗┛┗┛┗┛━┗┛┗┛━┗━┛┗━━━┛┗┛━┗┛┗━━━┛
`}
          </pre>
          <br />
          Greetings, coding companion! Welcome to the realm of endless
          possibilities. 🚀 <br /> <br />
          Initializing digital portfolio... <br /> <br />
          Loading creative projects... ████████████ 100% <br />
          Scanning achievements... 🌟 <br /> <br />
          Step into my virtual workspace, where code weaves dreams and commands
          sculpt innovation. Navigate through project directories, decipher the
          syntax of my skills, and run curiosity.exe to unlock the tales behind
          each creation. <br /> <br />
          Current Status: <br />
          - Projects: ████████ 80% <br />
          - Imagination: ██████████ 100% <br />
          - Coffee Supplies: ██████ 60% <br /> <br />
          Type
          <span className="text-[#707070]">
            {" "}
            'help' for a directory of available commands and embark on a journey
            through my digital achievements.{" "}
          </span>
          <br /> <br />
          Ready to code, explore, and innovate. Let the terminal adventure
          commence! 🖥️💡 <br /> <br />
        </>
      );
    },
  },
};
