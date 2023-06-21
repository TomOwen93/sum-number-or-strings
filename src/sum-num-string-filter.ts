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
  let numArray = originalArray.filter(
    (el): el is number => typeof el === "number"
  );
  return numArray;
}

function sumNumArray(arr: number[]): number {
  let sum = arr.reduce((prev, val) => prev + val, 0);
  return sum;
}

export default sumNumNotString;
