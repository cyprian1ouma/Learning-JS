
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

const incompleteTodos = todos.filter(function(todo){
  return !todo.completed
})

const summery = document.createElement("h2")
summery.textContent=`You have ${incompleteTodos.length} todos left`
document.querySelector("#summery").appendChild(summery)

todos.forEach(function(todo){
  const p = document.createElement('p')
  p.textContent= todo.title
  document.querySelector('body').append(p)
})

