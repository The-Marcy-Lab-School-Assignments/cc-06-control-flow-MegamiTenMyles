//1
function sumOfThreeAndFive(){
  for (let i = 1; i <= 1000; i++){
      if (i % 3 === 0){
          return i
  } else if (i % 5 === 0){
      return i
  }
}
}

function greaterNum(x , y){
    if ( x > y){
        return x
    } else if (x < y){
        return y
    } else if (x === y){
        return "both integers are equal"
    } else if (Number.isInteger(x) === false || Number.isInteger(y) === false){
        return 'null'
    }
}
  console.log(greaterNum(20, 20))

function oddAndEvenInFifteen(){
  for(let i = 0; i <= 15; i++){
      if (i % 2 == 0){
         console.log(`${i} is even`)
      } else if (i % 2 !== 0){
          console.log(`${i} is odd`)
      }
  }
}
oddAndEvenInFifteen()
function sortThreeNums(){
  
}

