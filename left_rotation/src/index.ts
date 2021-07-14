'use strict';

import { createReadStream } from 'fs';
import { log } from 'node:console';

let inputLines: string[] = [];
let currentLine: number = 0;

async function readFileLineByLine(): Promise<void> {
  try {
    const rl = require('readline').createInterface({
      input: createReadStream('input.txt'),
      crlfDelay: Infinity,
    });

    rl.on('line', (line: string) => {
      inputLines.push(line);
    });
    await require('events').once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
}

function processLine(): string {
  return inputLines[currentLine++];
}

// Modulus function
// Javascript only has % - remained operator`
function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

// O(n) Linear Time Complexity
function rotateLeft(d: number, arr: number[]): number[] {
  let result: number[] = new Array(arr.length);
  console.log(arr, d, arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[mod(i - d, arr.length)] = arr[i];
  }

  return result;
}

// O(n) Linear Time Complexity Solution 2
function rotateLeft2(d: number, arr: number[]): number[] {
  let result: number[] = new Array();
  result.push(...arr.slice(d, arr.length));
  result.push(...arr.slice(0, d));
  return result;
}

async function main() {
  await readFileLineByLine();

  const firstMultipleInput: string[] = processLine()
    .replace(/\s+$/g, '')
    .split(' ');

  const n: number = parseInt(firstMultipleInput[0], 10);

  const d: number = parseInt(firstMultipleInput[1], 10);

  const arr: number[] = processLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result: number[] = rotateLeft2(d, arr);

  console.log(result);
}

main();
