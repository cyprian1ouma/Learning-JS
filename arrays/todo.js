
const todo =[
    "Drink a full glass of water.",
    "Stretch or do light exercise for 5–10 minutes.",
    "Make your bed.",
    "Write down one thing you’re grateful for.",
    "Plan your top 3 priorities for the day."
]


// delete 3rd item
todo.splice(2,1)
console.log("removed third item",todo);

todo.push("Spend 5 minutes in silence — meditate, pray, or just breathe before starting the day.")

console.log("Added new item onto the end",todo);

todo.shift()
console.log("Remove the first item from todo",todo);

console.log(`I have ${todo.length} todos`)
console.log(`Todo: ${todo[0]} and Todo: ${todo[todo.length-2]}`);

todo.forEach((item,index)=>{
    console.log(index + 1,".",item);
})

// for(let todos = 0;todos< todo.length;todos++){
//     console.log(`${todos + 1} . ${todo[todos]}`);
// }