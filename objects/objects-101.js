let myBook={
    title:"River and the Source",
    author:"Margaret A Ogolla",
    pages:925
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.pages=120
console.log(myBook);


let persion={
    fullname:'Cyprian Ouma',
    age:26,
    location:'Nairobi Kenya'
}

console.log(`${persion.fullname} is ${persion.age} lives in ${persion.location}.`);

// increase age by 1
persion.age = persion.age + 1

console.log(`${persion.fullname} is ${persion.age} lives in ${persion.location}.`);
