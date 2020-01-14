 const hamburger = document.querySelector('.hamburger');
 const navlinks =  document.querySelector('.nav-links');
 const links =  document.querySelectorAll('.nav-links li');

 hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle("open");
    links.forEach((item,index)=>{
        item.classList.toggle("fade");
    })
 });
