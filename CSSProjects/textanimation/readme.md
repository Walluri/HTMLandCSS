What is done in this taask : 

1. the task here is to put the whole text in two lines (we need to use span for this purpose) and animate the text as soon as the page is shown.
2. By animate we mean to slide the text from left to right and vice versa.



Theory : 

1. CSS animations using the @keyframe rule and animation property.
2. fade effect and movement of header
3. Animations are of 2 types : 
        3.1 use transition property + change the properties when you hover
        3.2 
4. 
animation-delay: 0.2s  = After 0.2 seconds the animation will start        
animation-iteration-count: 3 = the animation repeats 3 times
animation-timing-function:  = how fast or how slow will the animation happen
                              ease-in : initially slow but later faster  
                              ease-out : initially fast but later slower
                              cubic-bezier : can write custom timing functions
backface-visibility: hidden = determines if the back part of an element when transormed, is visible or hidden to the user. For example you have an element and if you rotate it 180 degrees you can see the back part of it. if this property is used with a hidden value then the back part will not be visible. In this case to avoid the shaky behaviour.
transform : rotate(90deg) =  rotate the item

5. what if you want the animation to happen to the logo when you hover.