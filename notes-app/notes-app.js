const notes = [
    {
        title: "My next trip",
        body: "I would like to go to USA"
    },
    {
        title: "Shopping list",
        body: "Milk, bread, eggs, and fruits"
    },
    {
        title: "Workout plan",
        body: "Run 3km and do 20 push-ups"
    },
    {
        title: "Books to read",
        body: "Atomic Habits, The Alchemist, and Deep Work"
    },
    {
        title: "Weekend tasks",
        body: "Clean the house, wash clothes, and pay bills"
    },
    {
        title: "Ideas for blog",
        body: "Write about AI in education and personal growth"
    },
    {
        title: "Favorite quotes",
        body: "Stay hungry, stay foolish."
    },
    {
        title: "Birthday reminder",
        body: "Don’t forget John’s birthday on 15th Sept"
    },
    {
        title: "Learning goals",
        body: "Practice JavaScript daily and learn React"
    },
    {
        title: "Dreams",
        body: "Start my own tech company one day"
    },
    {
        title: "Quick notes",
        body: "Call the bank tomorrow at 10 AM"
    }
]

// const p= document.querySelector('p')
// p.remove()
const ps =document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent='**************'
    // console.log(p.textContent);
    
})

// add new element
const newParagraph =document.createElement('p'),
 newheading =document.createElement('h2')
newParagraph.textContent="This is a new element from JS"
newheading.textContent="Adding Element"
document.querySelector("body").appendChild(newParagraph)
document.querySelector("body").appendChild(newheading)

// $(document).ready(function(){
//     console.log("This is Jquery");
    
// })