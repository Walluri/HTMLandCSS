const navslide = ()=>{

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");    
    const line1 = document.querySelector(".burger .line1");
    const line2 = document.querySelector(".burger .line2");
    const line3 = document.querySelector(".burger .line3");
    
    burger.addEventListener('click',() =>{
        
        //toggle Nav
        nav.classList.toggle('nav-active');            
    
        //toggle the class or add  - for the list items
        navLinks.forEach( (link,index)=>{
            link.classList.toggle('animateli');
        });

        //toggle the burger icon
        line1.classList.toggle('ahide');
        line2.classList.toggle('bhide');
        line3.classList.toggle('chide');
        });
}

navslide();
 
