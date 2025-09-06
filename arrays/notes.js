
// const note=["Note 1","Note 2","Note 3"]
// // console.log();
// // note.pop()
// // note.push("Note 4")

// // console.log(note.shift());

// // note.unshift("Note 5")

// // note.splice(1,2,"Note 6")

// note[2]="Note 7"
// console.log(note.length)

// console.log(note)

// note.forEach((item,index)=>{
//     console.log("notes:",index + 1,item);
// })

// // for(let count = 0;count<=2;count ++){
// //     console.log("count",count + 1);
// // }

// // for(let i = 1;i<note.length;i++){
// //     console.log(`${note[i]} ${note}`);
// // }

// console.log(note.indexOf("note 2"));

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

const sortNotes = function(notes){
   notes.sort(function(a,b){
    if(a.title.toLowerCase()<b.title.toLowerCase()){
        return -1
    }else if(b.title.toLowerCase() < a.title.toLowerCase()){
        return 1
    }else{
        return 0
    }
        
   })
}
sortNotes(notes)
console.log(notes);

console.log(notes.indexOf({}));
