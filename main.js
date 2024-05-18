#! /usr/bin/ env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
let todos = [];
//Print welcome massage
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<====================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>> ${chalk.bold.hex(`f9999FF`)(`\Welcome to \jareer \shafiq todolist));`)}`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<===========================================>>>\n`));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: 'addTask',
            type: "input",
            massage: chalk.green("Enter your new task :")
        }
    ]);
    todolist.push(addTask.addtask);
    console.log(`\n ${chalk.cyanBright.bold(addTask.addtask)}"task added in Todo list successfully\n`);
    let addmoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more task  ?",
            default: "false"
        }
    ]);
    conditions = addmoretask.addmore;
}
console.log("\n your updated todo list:", todolist);
