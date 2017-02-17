# Popover-placement-demo
This is a demo app showing how to align popovers in eight different directions around a circle.

Sample HTML is 
<div class="container">
  <div class="circle" data-toggle="popover" data-placement="south"></div>
  </div>
  
  In this I am trying to align popover around a circle created using div.
  
  Just follow below sample for different directional allignments around a circle as below:-
  1. South
   data-placement="south"
  2. North
    data-placement="north"
  3. east
   data-placement="east"
  4. west
    data-placement="west"
  5. north-east
    data-placement="north-east"
  6. north-west
  data-placement="north-west"
  7. south-east
    data-placement="south-east"
  8. south-west
  data-placement="south-west"
    
   data-placement attribute is used to determine different positions in which popover should be aligned and via javascript a crossponding 
   class is added to popover for it's allignment.
   
   popoverextn.js inside js folder is a javascript file which extends existing popover plugin to align in more directions when inputs in the form of geographical direction.
