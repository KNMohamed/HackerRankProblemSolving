'use strict';

import { createReadStream } from 'fs';

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

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n: number, queries: number[][]): number[] {
  let arr: number[][];
  let answers = new Array();
  let lastAnswer = 0;
  arr = new Array(n);

  //init array
  for (let i = 0; i < n; i++) {
    arr[i] = new Array();
  }

  for (let i = 0; i < queries.length; i++) {
    let queryType = queries[i][0];
    let idx: number;
    idx = (queries[i][1] ^ lastAnswer) % n;
    if (queryType === 1) {
      arr[idx].push(queries[i][2]);
    } else if (queryType === 2) {
      lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
      answers.push(lastAnswer);
    }
  }

  return answers;
}

async function main() {
  await readFileLineByLine();
  const firstMultipleInput: string[] = processLine()
    .replace(/\s+$/g, '')
    .split(' ');
  const n: number = parseInt(firstMultipleInput[0], 10);
  const q: number = parseInt(firstMultipleInput[1], 10);
  let queries: number[][] = Array(q);
  for (let i: number = 0; i < q; i++) {
    queries[i] = processLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }
  const result: number[] = dynamicArray(n, queries);
  console.log(result);
}

main();
