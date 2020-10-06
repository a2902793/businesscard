#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Li Chung, Yeng /'),
  handle: chalk.cyan('a2902793'),
  work: chalk.white('Undergraduate at Tamkang University'),
  github: chalk.cyan('github.com/a2902793'),
  linkedin: chalk.cyan('linkedin.com/in/a2902793'),
  mail: chalk.cyan('a2902793@gmail.com'),
  npx: chalk.white('npx a2902793'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelMail: chalk.white.bold('      Mail:'),
  labelCard: chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mailing = `${data.labelMail}  ${data.mail}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  mailing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
