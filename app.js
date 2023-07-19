function double(arr) {
  return arr.map(val => {
    return val * 2;
  });
}

//one liner (shocker..correct on the first attempt)
[1, 2, 3, 4].map(val => val * 2);


const squareAndFindEvens = (numbers) => {
    //I guess you can't do: function(something) =>
    var squares = numbers.map((num) => num ** 2);
   
    var evens = squares.filter((square) => square % 2 === 0);
  };
  //So (numbers) doesn't need ((.....))



  ////TESTING STUFF
//const arr = [1, 3, 7, 8];
//function getEvens(arr) {
//    const worker = arr.filter(function(num) {
//    if (num % 2 == 0){
//        console.log('testing');
//    } 
//    else {
//    console.log('nope');
//    })
//}