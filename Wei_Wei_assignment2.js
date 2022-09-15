/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//double the quantity aned price
const ans1 = itemsObject.map((a) => {
  return { ...a };
});

ans1.forEach((item) => {
  item.quantity *= 2;
  item.price *= 2;
});
console.log(ans1);

//item quantiy > 2 and price > 300
const ans2 = itemsObject.filter(
  (item) => item.price > 300 && item.quantity > 2
);
console.log(ans2);

//calculate the total value of the items
const ans3 = itemsObject.reduce((sum, item) => {
  return sum + item.quantity * item.price;
}, 0);
console.log(ans3);

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

let newStr = string
  .replace(/\s+/g, " ")
  .replace(/[^A-Za-z0-9]/g, " ")
  .trim()
  .toLowerCase();
console.log(newStr);

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.  
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const mergeTwoArr = (arr1, arr2) => {
  const map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i].uuid, [arr1[i].name]);
  }
  for (let j = 0; j < arr2.length; j++) {
    map.has(arr2[j].uuid)
      ? map.get(arr2[j].uuid).push(arr2[j].role)
      : map.set(arr2[j].uuid, [null, arr2[j].role]);
  }
  //console.log(map);
  const mergedArr = [];
  let keys = Array.from(map.keys());
  //console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    mergedArr[i] = {
      uuid: keys[i],
      name: map.get(keys[i])[0],
      role: map.get(keys[i])[1],
    };
  }
  mergedArr.sort((a, b) => a.uuid - b.uuid);
  //console.log(mergedArr);
  return mergedArr;
};

mergeTwoArr(first, second);
