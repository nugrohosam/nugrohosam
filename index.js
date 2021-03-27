#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

var prompt = inquirer.createPromptModule();

const data = {
  name: chalk.bold.blue("Nugroho Samiyono"),
  nickname: chalk.bold("nugrohosam"),

  web: chalk.green("https://nugrohosam.com    "),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~nugrohosam"),
  github: chalk.gray("https://github.com/") + chalk.white("nugrohosam"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("nugroho-samiyono"),
  npx: chalk.red("npx") + " " + chalk.white("nugrohosam"),

  labelWeb: chalk.white.bold("Web:"),
  labelBlog: chalk.white.bold(" Blog:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelNpm: chalk.white.bold("  npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("Card:"),
};

const box = boxen(
  [
    `${data.name} | ${data.nickname} 🚀`,
    ``,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelNpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.npx}`,
    ``,
    `${chalk.italic.bold("I am an enthusiastic intermediate.")}`,
    `${chalk.italic("There is much i want to learn and much more to create something usefull.")}`,
    `${chalk.italic("So far and for this, I am very grateful of my all my achievements till now.")}`,
  ].join("\n"),
  {
    borderColor: "blue",
    borderStyle: "double",
    padding: 1,
    margin: 1,
    float: "center",
    align: "center",
  }
);

const questions = [
  {
    type: "list",
    name: "action",
    message: "What's next?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:nugrohosamiyono@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

console.log(box);

const tip = [
  `${chalk.white.bold(
    "Tip"
  )}: if the terminal supports, try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} the link above 😉`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
