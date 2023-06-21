/**
 * FUNCTION sumNumNotString
 * -----
 * input array of strings or numbers
 *
 * create empty sum/set at 0
 * go through each element of the array
 * if number type is found, add number to sum
 * return sum
 *
 *
 *
 */

type NumOrString = number | string;

function sumNumNotString(inputArray: NumOrString[]): number {
  let onlyNumArray = makeNumArray(inputArray);
  let output = sumNumArray(onlyNumArray);
  return output;
}

function makeNumArray(originalArray: NumOrString[]): number[] {
  let numArray: number[] = [];
  for (let el of originalArray) {
    if (typeof el == "number") {
      numArray.push(el);
    }
  }
  return numArray;
}

function sumNumArray(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

export default sumNumNotString;
