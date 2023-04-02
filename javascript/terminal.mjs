#!/usr/bin/env node

import figlet from 'figlet';
import gradient from 'gradient-string';

const c = console.log;
const MS = 5000;

console.clear();
figlet('Hello', (err, data) => c(gradient.pastel.multiline(data)));
await new Promise(res => setTimeout(res, MS));
figlet('&', (err, data) => c(gradient.pastel.multiline(data)));
await new Promise(res => setTimeout(res, MS));
figlet('Bye', (err, data) => c(gradient.pastel.multiline(data)));
