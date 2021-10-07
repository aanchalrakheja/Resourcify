let tagline=document.getElementById("title-tagline");
let text=document.getElementById("title-text");
let taglineContent="ONE STOP RESOURCE GUIDE FOR UNSTOPPABLE LEARNING".split("");
let textContent=" Start your self-learning journey with us! ";
var i=0;
let navbarIcon=document.getElementById("navbar-icon");
let navMenu=document.getElementById("navbar-expand");
var count=0;

navbarIcon.addEventListener("click",function()
{   
    navbarIcon.classList.toggle("fa-bars");
    navbarIcon.classList.toggle("fa-times");
    if(count%2===0)
    {
    navMenu.style.display="flex";
    navMenu.addEventListener("click",function(){
        navMenu.style.display="none";
        navbarIcon.classList.toggle("fa-times");
        navbarIcon.classList.toggle("fa-bars");
        count++;
    });
    }
    else
    {
        navMenu.style.display="none";
    }
    count++;
});


function inputTagline()
{ 
    if(i<taglineContent.length)
    {
    tagline.innerHTML+=taglineContent[i];
    i++;
    setTimeout(inputTagline,100);
    }
    else if(i===taglineContent.length)
    {
        setTimeout(inputText,200);
    }
}

function inputText()
{
    text.innerHTML=textContent;
}

inputTagline();




