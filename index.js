
function scuberGreetingForFeet(ride){
  // Write your code here!

  
  if(ride>2500) 
    return 'No can do.'

  if (ride<=400) {
    return 'This one is on me!'
  } else (ride>2000)
    return 'I will gladly take your thirty bucks.'

}
  
function ternaryCheckCity(city){
  // Write your code here!

    return city === "NYC" 
    ? "Ok, sounds good." 
    : "No go.";

}

  function switchOnCharmFromTip(Tip){
    switch(Tip){
       case 'generous':
         return  "Thank you so much." 
       case  'not as generous':
         return "Thank you."
       default:
         return  "Bye."}

}