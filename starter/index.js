const { Command } = require("commander");
// ESM
// import { Command } from "commander";
const program = new Command();
program
	.option("-s, --show", "Display your user information")
	.option("-n, --name <name>", "Your name")
	.option("-g, --gender <gender>", "Your gender")
	.option("-c, --color <color>", "Your favorite color");
program.parse(process.argv);
const options = program.opts();
const user = {
	name: options.name || "Unknown",
	gender: options.gender || "Unknown",
	color: options.color || "Unknown",
};
const displayUser = () => {
	console.log("User Information");
	console.log(`Name: ${user.name}`);
	console.log(`Gender: ${user.gender}`);
	console.log(`Color: ${user.color}`);
};
if (options.show) {
	displayUser();
} else {
	console.warn("\x1B[31m Unknown action type!");
}
