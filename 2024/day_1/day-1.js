const fs = require("fs");

function processFile(file) {
  const content = fs.readFileSync(file, "utf-8");
  const numbers = content.split(/\s+/).map(Number);
  const list1 = [];
  const list2 = [];
  numbers.forEach((number, index) => {
    if (index % 2 === 0) list1.push(number);
    else list2.push(number);
  });
  return { list1, list2 };
}

const { list1, list2 } = processFile("myInput.txt");

const sumTotalDistance = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
};

const verifySizeList = (listA, listB) => {
  if (listA.length != listB.length) {
    return false;
  }
  return console.log("true");
};

const distance = (listA, listB) => {
  const distanceList = [];

  while (listA.length > 0 && listB.length > 0) {
    const minA = Math.min(...listA);
    const minB = Math.min(...listB);
    const valor = Math.abs(minA - minB);
    distanceList.push(valor);

    listA.splice(listA.indexOf(minA), 1);
    listB.splice(listB.indexOf(minB), 1);
  }

  return distanceList;
};

const totalDistance = sumTotalDistance(distance(list1, list2));

console.log(totalDistance);
