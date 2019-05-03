

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.round(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
  const results = [];
  let lp = 0;
  let rp = 0;
  const leftLength = leftArr.length;
  const rightLength = rightArr.length;
  while (lp < leftLength && rp < rightLength) {
    if (leftArr[lp] > rightArr[rp]) {
      results.push(rightArr[rp]);
      rp++
    }
    if (leftArr[lp] <= rightArr[rp]) {
      results.push(leftArr[lp]);
      lp++
    }
  }
  return results.concat(leftArr.slice(lp)).concat(rightArr.slice(rp))
}

var a = [];
for (let i = 0; i < 10; i++) {
  a.push(Math.ceil((Math.random() * Math.random()) * 100));
}
a = mergeSort(a);
console.log(a);