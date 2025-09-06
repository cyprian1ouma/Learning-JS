
 const paragraghs=document.querySelectorAll('p')
 paragraghs.forEach(function(paragragh){
    if(paragragh.textContent.includes("the")){
      paragragh.remove()
    }else{
      console.log("No latter a");
    }
 
  })

