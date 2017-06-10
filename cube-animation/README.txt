Here, I am explaining how I wrote my code.

I created a 3x3 square and are numbered it as follows:

	 __________________
	|      |      |    |
	|   1  |  2   |  3 |
	|------------------|   
	|      |      |    |
	|   4  |  5   |  6 |
	|------------------|
	|   7  |  8   |  9 |
	|______|______|____|

The number of div's for each id(f1,f2,etc) depends on the animation I choose. 
Here, my animation is 
1.  left column going down (1,4,7)
2.  bottom row going right (7,8,9)
3.  middle vertical column going up (2,5,8)
4.  middle horizontal row going left (4,5,6)

Look at number of times 1 is there - only once . So, after that rotation another div should come to its place. So, there will be 2 divs for "f1". One for animation and other to occupy its position.

Similarly, the other numbers are also decided.

Coming to the animation, "anim1" is done first which is "left column going down" and the corresponding divs taking part in animation are represented by the classes "c12, c43, c73".

After first rotation is finished, "c73" is done with its rotation. Now, the div below "c73", "c72" will undergo second rotation. Second rotation is done by the following classes "c72, c83, c92".