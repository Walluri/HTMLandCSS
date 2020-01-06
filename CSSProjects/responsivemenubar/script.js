const navslide = ()=>{

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");    

    
    burger.addEventListener('click',() =>{
        
        //toggle Nav
        nav.classList.toggle('nav-active');            
    
        //toggle the class or add  - for the list items
        navLinks.forEach( (link,index)=>{
            link.classList.toggle('animateli');
        });

        });
}

navslide();
