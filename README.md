# BubblesVR

Intro to VR with AFrame
As the world becomes more and more smitten with virtual reality, now is the best time to jump into the scene. Pun intended! In this workshop, we will build a small VR app of floating bubbles.


Don't worry if you get lost! Use this repo to help you follow along :)


**Also, the html file has comments noting each step

Step 1:
-Create basic scene with directional and ambient light. 
- Directional light is used to provide a higher light level than that of the surrounding area and can be used alone or as a complement to ambient illumination. (http://www.lrc.rpi.edu/programs/solidstate/assist/pdf/directional1.pdf). 
- Ambient light is a non-directional light used to simulate diffused, scattered, or reflected light seen in real life. (https://www.utdallas.edu/atec/midori/Handouts/light_types.htm)
To set up this scene, we have to set up our html file. I named my bubbles.html.

Then we create the a-sky element and give that a color
After that, we have our a-light element where we give it a type of directional light, color, intensity, and position
Lastly, we create an a-light element where the type is "ambient" and we give that a color. Normally white.


Step 2:
Since we will need a JS file to create our spheres and animate them, at the bottom we import our js file below our scene.
So we will just create a script where we can import our bubbles.js file into our html.

Step 3:
Here, we're setting up the scene variable so we can access our a-scene and also add it to our for loop. You'll see why in our next slide.

Step 4:
In step 4, we are setting the variable to create the spheres.

Step 5:
In this step, we will randomize the spheres' positions, radii (size), and color


This was a pretty long step. I used math.random for these variables to get a random number up to 100 to generate positions, radii, our paths, and color for the spheres.

Step 6:
Here we set attributes for the sphere:
- Radius
- Color
- Opacity
- Position

Earlier, we created variables for these attributes and now we are using those variables to set the attributes.



Step 7:
In Step 2, we imported the aframe-curve-component.
This component helps us create curves or paths that we will use to animate our spheres.
Curve-Point: Defines the curve based on its position.


In Part 1 under our sphere variable, we created our path and set the attributes. For Part 2, we actually have curve points that we appended to our path (curves) which is essentially a beginning and endpoint for our sphere.

If you go into finder and open your bubbles.html file with firefox or chrome when you click and move your view, you should find your bubbles.


Step 8 (optional):
This link will help you learn how to publish your A-frame App
https://aframe.io/docs/0.8.0/introduction/hosting-and-publishing.html
