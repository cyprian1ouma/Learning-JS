
let myBook={
    title:"River and the Source",
    author:"Margaret A Ogolla",
    pages:925
}

let otherBook={
    title:"Kidagaa Kimwemwozea",
    author:"Ken Walibora",
    pages:250
}

let getsummery = function(book){
    return {
        summery :`${book.title} by ${book.author} has ${book.pages} pages`,
        pagecountsummery:`${book.title} is ${book.pages} long`
    }
}

let booksummery=getsummery(myBook)
let otherbooksummery=getsummery(otherBook)

console.log(booksummery.pagecountsummery)

// challange
let convertfahrenheight = function(fahrenheight){
    return{
        fahrenheight:fahrenheight,
        kelvin:(fahrenheight + 459.67) * (5/9),
        celcius:(fahrenheight-32) * (5/9)
    }
}

let temps=convertfahrenheight(74)
console.log(temps);
