function sumItems(array) {
  // Sum all the numbers in the arraylet 
  let n = 0;
  //check if is array
  if(Array.isArray(array)){
    for (let item of array) {
        n += sumItems(item);
      }
  }else{
    n = array;
  }
  return n;
}

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));


module.exports = sumItems;

