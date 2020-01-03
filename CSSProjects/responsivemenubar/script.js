const navslide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");    

    //toggle Nav
    burger.addEventListener('click',()=>{        
        nav.classList.toggle('nav-active');
        
        
    //Animate Links

    const navLinkFade =
    [
        { opacity: '0',transform: 'translateX(10rem)' },
        { opacity: '1',transform: 'translateX(0rem)' }
    ]
    //navLinks.forEach( (link,index)=>  link.animate(navLinkFade,navLinkFadeTiming) );
    
    navLinks.forEach( (link,index)=>  
    {              
            link.animate(
                navLinkFade,
                {
                    delay: `${index*100}`,
                    /*Num of ms to delay the 'start of the animation' 
                    i.e wait for this much time before running the animation*/
    
                    direction:"normal", /*
                    In which direction the animation runs
                    normal : forwards (default),
                    reverse : backwards,
                    alternate : switch direction after each iteration
                    alternate-reverse : runs backwards and switches direction after each iteration.
                    */
    
                    duration:1000,/* The num of ms each iteration of the animation takes to complete 
                    i.e for how long the animation should run.*/                     
                    easing:"ease",
                    endDelay:0,/* The num of ms to delay after the end of an animation : Defaults to 0 */
                    fill : "forwards",
                    iterations:1,
                    iterationStart: 0
                }
            );

            //burger animation 
            document.querySelector('.line1').classList.add('mat1');
    });


    });
   
}

navslide();
