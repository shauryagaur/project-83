var mouse_event="empty";
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="red"
width_of_line=5;
if(screen.width<990){
    document.getElementById("myCanvas").width=screen.width-70;
    document.getElementById("myCanvas").height=screen.height-300;
    document.getElementById("myCanvas").style.overflow="hidden"
}



var lastpositionX,lastpositionY;

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseevent="mousedown"
   
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentpositionofX=e.clientX-canvas.offsetLeft
    currentpositionofY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=10
        ctx.moveTo(lastpositionx,lastpositiony)
        ctx.lineTo(currentpositionofX,currentpositionofY)
        ctx.stroke()
    }

    lastpositionx=currentpositionofX
    lastpositiony=currentpositionofY
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave"
   
}canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
   
}


canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }