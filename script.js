//alert("javascript working yey");
var card1=document.getElementById("card1");
var card2=document.getElementById("card2");
var card3=document.getElementById("card3");
var card4=document.getElementById("card4");
var btnstat;


window.onload=function(){
   
    
    //all cards behind each other
    card1.classList.remove("card1active");
    card1.classList.add("inactive");
    card2.classList.add("inactive");
    card3.classList.add("inactive");
    card4.classList.add("inactive");
    btnstat=0;
   // alert(btnstat)
    
    }



function clickey(){
   // alert("divclick!");
    if(btnstat===0)
        {
            
         //   movedown();
            
           // alert("menu inactive");
            btnstat=1;
            
            card1.classList.remove("inactive");
            console.log("card1 active status changed");
            card1.classList.add("card1active");
            
            card2.classList.remove("inactive");
            console.log("card2 active status changed");
            card2.classList.add("card2active");
            
            card3.classList.remove("inactive");
            console.log("card3 active status changed");
            card3.classList.add("card3active");
            
            card4.classList.remove("inactive");
            console.log("card4 active status changed");
            card4.classList.add("card4active");
           // alert("done");
        }
    
    else 
        if(btnstat===1)
            {
                btnstat=0;
                
                card1.classList.remove("card1active");
                card1.classList.add("inactive");
                
                card2.classList.remove("card2active");
                card2.classList.add("inactive");
                
                card3.classList.remove("card3active");
                card3.classList.add("inactive");
                
                card4.classList.remove("card4active");
                card4.classList.add("inactive");
            }
} 
