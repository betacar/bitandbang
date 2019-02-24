#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.white('Carlos Betancourt Carrero /'),
  handle: chalk.cyan('betacar'),
  title: chalk.white('I build stuff!'),
  email: chalk.cyan('carbetacar [at] gmail.com'),
  twitter: chalk.cyan('https://twitter.com/betacar'),
  github: chalk.cyan('https://github.com/betacar'),
  linkedin: chalk.cyan('https://linkedin.com/in/betacar'),
  web: chalk.cyan('http://betacar.net'),
  npx: chalk.white('npx betacar'),
  labelWork: chalk.white.bold('What I do?:'),
  labelEmail: chalk.white.bold('    E-mail:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.title}`;
const emailing = `${data.labelEmail}  ${data.email}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + emailing + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding;

console.log(chalk.green(boxen(output, options)));
