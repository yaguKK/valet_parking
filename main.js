var canvas = new fabric.Canvas('myCanvas');

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(grrencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){
        greencar_y=greencar_y-10;
        console.log("up arrow is pressed");

        canvas.remove(greencar_image);
        greencar_update();

    }

	
}

function down()
{
	if(greencar_y <=400){
        greencar_y=greencar_y+10;
        console.log("down arrow is pressed");

        canvas.remove(greencar_image);
        greencar_update();

    }
}

function left()
{
	if(greencar_x >= 0){
        greencar_x=greencar_x-10;
        console.log("LEFT ARROW IS PRESSED");

        canvas.remove(greencar_object);
		greencar_update();

    }
}

function right()
{

	if(greencar_x <= 750){
        greencar_x=greencar_x+10;
        console.log("LEFT ARROW IS PRESSED");

        canvas.remove(greencar_object);
		greencar_update();

    }
}
