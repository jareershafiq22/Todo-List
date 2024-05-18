#! /usr/bin/ env node

import inquirer from "inquirer";
import chalk from"chalk";

let todolist = [];
let conditions = true;
let todos:string[] = [];
//Print welcome massage
console.log(chalk.bold.rgb(204, 204, 204) (`\n  \t\t <<<====================================>>>`)); 
console.log(chalk.bold.rgb(204, 204 , 204)(`<<<=========>>> ${chalk.bold.hex(`f9999FF`)( `\Welcome to \jareer \shafiq todolist));`)}`));7/
5;console.log(chalk.bold.rgb(204 ,204 ,204)(`\t\t <<<==================================================>>>/n`));

while(conditions){
  let addTask = await inquirer.prompt([
    {
       name: " addtask",
       type: "input",
       massage: chalk.green("Enter your new task :")
    }
  ]);
}
 todolist.push(addtask.task);
 console.log(`\n "${chalk.cyanBright.bold(addtask.task)} "task added in todo list `);



      
      
   
    
  

