# p5 curriculum
### Day 1 outcome:
Students will write code to draw shapes to the screen and make the shape change over time. Students will write functions to encapsulate item's actions on the screen.

1. download and install p5
2. intro to the grid system
3. line / rectangle / ellipse
4. create custom functions that takes arguments

### Day 1 lesson plan

#### What's Code / Javascript?
JS is the programming language of the web. All of the websites you use and love are made possible with javascript.

#### What's p5?
p5 is an add-on to javascript. it makes things like drawing shapes and graphics easier.

#### Time to download p5.
go to p5js.org > click on he download link.
Scroll down to editor and choose which type of computer you have. Will need to 'unzip' file. Mac users - drag and drop icon to menubar. Windows users - right lick on the exe file and 'pin to taskbar'.

#### Drawing shapes
1. pixels - the little dots that fill up out computer screen. 
2. usually when we write numbers in p5, we're talking about pixels.
3. point -> 1D -> point(x, y);
4. line -> 2D -> line(x1, y1, x2, y2);
5. rectangle -> rect(x, y, w, h);
6. ellipse -> ellipse(x, y, w, h);

Coordinates and graphing. > Taking a short trip to math class. Coordinate plane - x & y axes. (0, 0) is at the top left. The y number goes up as you go down your screen.

#### Take 10 minutes to draw shapes
#### Pictionary game with p5
1. 20 minutes or so to draw - play with partner. 
2. [list of simple pictionary prompts](https://www.thegamegal.com/wp-content/uploads/2011/11/Pictionary-Words-Easy.pdf)
3. break in teh middle or towards the end to discuss coloring in shapes.
4. fill(r, g, b) function - rgb values 0 - 250.
5. test out what happens when you change the different values

#### Functions
How to package up a long list of steps and then use it multiple times.

```javascript
function pokeball(x, y){
	ellipse(x, y, 30, 30);
	fill(250, 0, 0);
	arc(x, y, 30, 30, 0, PI);
	fill(250, 250, 250);
	ellipse(x, y, 10, 10);
}
```

### Day 2 outcome:
Students will