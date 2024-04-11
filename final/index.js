import { Command } from "commander";
const program = new Command();

program
  .option("-s, --show", "Display your information")
  .option("-n, --name <name>", "Your name")
  .option("-g, --gender <gender>", "Your gender")
  .allowUnknownOption(true);

program.parse(process.argv);

const options = program.opts();

const user = {
  name: options.name || "Unknown",
  gender: options.gender || "Unknown",
};

const displayUser = () => {
  console.log("User Information:");
  console.log(`Name: ${user.name}`);
  console.log(`Gender: ${user.gender}`);
};

if (options.show) {
  displayUser();
} else {
  console.warn("\x1B[31m Unknown action type!");
}

/*
  - \x1B  -> escape character (ASCII code 27).
  - [     -> indicates the start of an ANSI escape sequence.
  - 31    -> specifies the color code for red text.
  - m     -> terminates the sequence.
   */
