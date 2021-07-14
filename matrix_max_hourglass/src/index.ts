'use strict';

import { createReadStream } from 'fs';

let inputLines: string[] = [];
let currentLine: number = 0;

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr: number[][]): number {
  let max = 0;
  for (let currentRow = 0; currentRow < 4; currentRow++) {
    for (let currentColumn = 0; currentColumn < 4; currentColumn++) {
      let total = 0;
      for (let i = 0; i < 3; i++) {
        if (i == 1) {
          total +=
            arr[currentRow][currentColumn + i] +
            arr[currentRow + 1][currentColumn + i] +
            arr[currentRow + 2][currentColumn + i];
        } else {
          total +=
            arr[currentRow][currentColumn + i] +
            arr[currentRow + 2][currentColumn + i];
        }
      }
      if (currentRow === 0 && currentColumn === 0) {
        max = total;
      }
      if (total > max) {
        max = total;
      }
    }
  }

  return max;
}

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

async function main() {
  let arr: number[][] = Array(6);
  await readFileLineByLine();
  for (let i: number = 0; i < 6; i++) {
    arr[i] = processLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  console.log(arr);
  const result: number = hourglassSum(arr);

  console.log(result + '\n');
}

main();
