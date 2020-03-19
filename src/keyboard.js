// Type "Hello World" then press enter.
var robot = require("robotjs");

robot.setMouseDelay(3);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
robot.mouseClick();



for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
	//robot.mouseClick();
	
}


// robot.keyToggle("tab","down");
// robot.keyTap("tab",['alt']);
// robot.keyToggle('alt', 'up')
robot.keyToggle("alt", "up");
// robot.keyToggle('alt', 'down')
robot.keyTap("up");

for (var x = 0; x < 10; x++)
{

	// robot.keyTap("up");
	// robot.keyTap("backspace");
	
}

for (var x = 0; x < 70; x++)
{
	
	// robot.keyTap("down");
	
}


// robot.keyTap("enter");

// robot.keyToggle(key,down,["alt","tab"]);
// robot.keyTap("audio_play");


// robot.setKeyboardDelay(15)

// robot.typeString("Demo Text");

// robot.keyTap("enter");

// robot.typeString("4 2 Ka 1");

// robot.keyTap("enter");

// robot.typeString("My Name is lakhan....");


for (var x = 0; x < 10; x++)
{
	
//	robot.keyTap("backspace");
	
}

// robot.typeString("Vishal");
