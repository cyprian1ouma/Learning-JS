// TEMPALTE STRING
let cname ="Cyprian"
let jname ="Jane"
console.log(`This is a template string, it has been created by ${cname} and ${jname}`)

let perecentage=25
let getip= function(total,tiepecent=.2){
   let totaltip = total/perecentage*tiepecent
   console.log(`A $${perecentage}% tip on $${total} would be ${totaltip}`);
   
}

getip(5000)

// bulding a calculator


// function to calculate the score
let score = function(score, totalscore){
   let percent = (score/totalscore)*100
   let lettergrade=""

   if(percent>=90){
    lettergrade = 'A'
     
   }else if(percent>=80){ 
    lettergrade = 'B'
     
   }
   else if(percent>=70){ 
    lettergrade = 'C'
     
   }
   else if(percent>=60){ 
    lettergrade = 'D'
     
   }else{
    lettergrade='F'
   }

   return `You got a ${lettergrade} (${percent}%)!`
}

let result = score(9,20)
console.log(result);


