1. Density switching : serve a large version of an image for high resolution screen and a smaller version of the same image for a low density screen.

1.1 High resolution screens use two physical pixels to display one pixel in our design.
This means that if you have a div of width 150pixels in you screen, If you have a high density screen you should send a 300 pixel image and if you have a low density screen you should send the 150pixel image.

2. Art direction : With this we want to tell the browser to use one image on a screen-width and another image for another screen width. Use html element <picture> and <source> element along with the <img> element.
 i.e we force the browser to use a particular image for a particular media query.

3. Resolution switching : How to allow the browser to decide the best image (..for the current view-port and pixel density values) to download using the "srcset" attribute.

