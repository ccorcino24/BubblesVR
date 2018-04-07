// Step 3: Acessing the scene
var scene = document.querySelector('a-scene');

// Use a for loop to generate the spheres
for (i = 0; i < 1000; i++) {

    // Step 5: Creating the sphere
    var sphere = document.createElement('a-sphere');
    
    // Step 7: Part 1
    var curves = document.createElement('a-curve'); 
    curves.setAttribute('id',"track"+ i);
    scene.appendChild(curves);

    // Step 4: Generating Spheres
    // Generate 3 random variable values for the random positions (Multiplying to get a number btw 0-100)
    var posx = 100*Math.random();
    var posy = 100*Math.random();
    var posz = 100*Math.random();

    // Generate 6 random variable values for the random curves
    var x1 = 100*Math.random(); 
    var y1 = 100*Math.random();
    var z1 = 100*Math.random();

    var x2 = 100*Math.random();
    var y2 = 100*Math.random();
    var z2 = 100*Math.random();

    // Generate random variable value for the random radii
    var rad = 3*Math.random();

    // Generate random variable value for the random color (Color only accepts integers)
    var col = Math.floor(16777215*Math.random()); 

    // Step 6: setting the attributes for the Sphere
    sphere.setAttribute('radius', rad.toString());

    // Coverting the decimal number to a hexidecimal number plus the # sign
    sphere.setAttribute('color', '#'+col.toString(16));
    // Setting how transparent the Sphere is
    sphere.setAttribute('opacity','0.6');
    // Creating the Vec3 to set the position
    sphere.setAttribute('position', posx + " " + posy + " " +  posz); // posx,posy,posz will set initial position of the spheres 
     
    // Step 7: Part 2
    var curvePoint1 = document.createElement('a-curve-point');
    var curvePoint2 = document.createElement('a-curve-point');

    curvePoint1.setAttribute('position', x1 + " " + y1 + " " + z1);
    curvePoint2.setAttribute('position', x2 + " " + y2 + " " + z2);

    // appendChild to curves
    curves.appendChild(curvePoint1);
    curves.appendChild(curvePoint2);


    sphere.setAttribute('alongpath',"curve: #track"+ i+"; dur:20000;loop:true");
  


    scene.appendChild(sphere);

}