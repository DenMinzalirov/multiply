module.exports = function multiply(first, second) {
  // your solution
  let temp1 = BigInt(first) ;
  let temp2 = BigInt(second);
  return (temp1*temp2).toString();
}

// function multiply(first, second) {
//   let temp1 = Number(first) ;
//   let temp2 = Number(second);
//   // console.log('fn');
//   // your solution
//   return console.log((temp1*temp2).toString());
// }
// multiply('2','50');
