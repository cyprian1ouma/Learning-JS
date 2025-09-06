let num= 103.941
console.log(num.toFixed(10));
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 1
let max = 2

let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum)

// challange area

const makeGuess = function(number){

    let min = 1
    let max = 5

    let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
    if(randomNum==number){
        return true
    }else{
        return false
    }
}


console.log(makeGuess(1));
