

// const p= document.querySelector('p')
// p.remove()
const ps =document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent='Cyprian Ouma'
    // console.log(p.textContent);
    
})
// add new element
const newParagraph =document.createElement('p')
newParagraph.textContent="This is a new element from JS"
document.querySelector("body").appendChild(newParagraph)