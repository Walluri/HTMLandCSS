'main' element : html5 element to tell search engines and screen readers that this is the main part.
Use of emmet : 
A gradient applied over text. so the text color starts with one color and ends with another color.

Gradient to fit the content of the text :  as its a block element the background image will be from left - to right. 
    But we want the color to occupy just till the length of the text
    
    The gradient to appear behind the text : webkit background clip : so the background will be visible only where the text is

     color:transparent  -> the text sits on the clipped background - so we have to make it transparent

     display:inline-block -> As this is an inline-block element the parent element will treat this...
                .... element as text and if text-align property is used on the parent it will centre its child.