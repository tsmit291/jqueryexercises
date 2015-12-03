// function removeEvenOdd (stringy){
//   var newString = "";
//   // console.log(stringy.length);
//   if (stringy.length % 2 === 0){
//     for (var i = 1; i < stringy.length; i+=2) {
//       newString += stringy[i];
//     }
//   }
//   else {
//     for (var i = 0; i < stringy.length; i+=2) {
//       newString += stringy[i]
//     }
//   }
//   return newString;
// }
// console.log(removeEvenOdd("californias"));

function removeEvenOdd (stringy){
  var newArray = stringy.split("");
  var newestArray = newArray.filter(function(m,i){
    if (newArray.length % 2 === 0){
      return i % 2 !== 0;
    }
    else {
      return i % 2 === 0;
    }
  })
  return newestArray.join("");
}
console.log(removeEvenOdd("californias"));
