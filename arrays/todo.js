
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

const todos = [
    { 
      title: "Buy groceries", 
      description: "Get milk, eggs, bread, and fruits from the supermarket", 
      completed: false 
    },
    { 
      title: "Finish JavaScript homework", 
      description: "Complete array and object practice exercises", 
      completed: true 
    },
    { 
      title: "Clean the house", 
      description: "Vacuum the living room, wash dishes, and tidy up bedrooms", 
      completed: false 
    },
    { 
      title: "Pay electricity bill", 
      description: "Log in to the online portal and pay before the deadline", 
      completed: true 
    },
    { 
      title: "Read a new book", 
      description: "Start with chapter 1 of 'Atomic Habits'", 
      completed: false 
    },
    { 
      title: "Practice coding challenges", 
      description: "Solve at least 3 algorithm problems on LeetCode", 
      completed: true 
    },
    { 
      title: "Go for a morning run", 
      description: "Run 3 kilometers around the park", 
      completed: false 
    },
    { 
      title: "Call mom", 
      description: "Check in and ask how she’s doing", 
      completed: true 
    },
    { 
      title: "Prepare dinner", 
      description: "Cook pasta with chicken and vegetables", 
      completed: false 
    },
    { 
      title: "Organize study desk", 
      description: "Arrange books, clean dust, and sort notes", 
      completed: true 
    }
  ]
  

  const sortTodos = function(todos){
     todos.sort(function(a,b){
        if(!a.completed==="false" && b.completed==="true"){
            return -1
        }else if(!b.completed==="false" && a.completed==="true"){
            return 1
        }else{
            return 0
        }
     })
     
  }

  sortTodos(todos)
  console.log(todos);
  