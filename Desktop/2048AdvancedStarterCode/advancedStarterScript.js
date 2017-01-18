var board = [];
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

var score = 0;
var addingScore = 0;
var SX = 0;

//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
    printWin();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function printWin(){
    if(board[x][y] == 2048)
        window.alert("You win!");
}

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innerboard = [];
		for(var j=0; j<4; j++){
			innerboard.push(0);
		}
		board.push(innerboard);
	}
	
	addTile();
	
}

function makeScore(addingScore) {
	SX = score + addingScore;
    score = SX;
}

//keep running WHILE there's not a 2 at that position
function addTile() {
	var x = Math.round(Math.random()*3);
	var y = Math.round(Math.random()*3);
    if(board[x][y] == 0){
	   board[x][y] = 2;
    }
    else{
        addTile();
    }
}

//function gets called anytime  a key is pressed 
//e is a special variable
// that references the event obeject that reads if the user is interacting with 
//the window 
document.onkeydown = function(e) {
     
    //makes it work in internet explorer which uses window.event and not e 
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign 
    if (e.keyCode == UP_ARROW) {
        // up arrow
        moveTilesUp();
        combineTilesUp();
        addTile();
    }
    //double equals sign will convert it for us 
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        moveTilesDown();
        combineTilesDown();
        addTile();
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       moveTilesLeft();
       combineTilesLeft();
       addTile();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       moveTilesRight();
       combineTilesRight();
       addTile();
    } 
    
    printBoard(); //have to recall print board to get the board to update

};

function combineTilesUp()
{
	for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
	            if(r !== 0  && board[r][c] !== 0 && board[r-1][c] === board[r][c])
            {
                board[r-1][c] = board[r][c] * 2;
                board[r][c] = 0;
                makeScore(board[r-1][c]);
                moveTilesUp();
            }

        }

    }

}

function moveTilesUp()
{    
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 0  && board[r][c] !== 0 && board[r-1][c] === 0)
            {
                board[r-1][c] = board[r][c];
                board[r][c] = 0;
                moveTilesUp();
            }
            
        }
        
    }   
    
}

function combineTilesDown()
{
	for(var r=3; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
        	if(r !== 3  && board[r][c] !== 0 && board[r+1][c] === board[r][c])
            {
                board[r+1][c] = board[r][c] * 2;
                board[r][c] = 0;
                makeScore(board[r+1][c]);
                moveTilesDown();
            }

        }

 	}

}

function moveTilesDown()
{  
    for(var r=3; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 3  && board[r][c] !== 0 && board[r+1][c] === 0)
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;
                moveTilesDown();
            }

        }
        
    }   
    
}

function combineTilesLeft()
{
	for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
       		if(c !== 0  && board[r][c] !== 0 && board[r][c-1] === board[r][c])
            {
                board[r][c-1] = board[r][c] * 2;
                board[r][c] = 0;
                makeScore(board[r][c-1]);
                moveTilesLeft();
            }

        }

    }

}

function moveTilesLeft()
{
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(c !== 0  && board[r][c] !== 0 && board[r][c-1] === 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
                moveTilesLeft();
            }

        }
        
    }   

}

function combineTilesRight()
{
    for(var r=0; r < board.length; r++)
    {
        for(var c=3; c >= 0; c--)
        {
        	if(c !== 3  && board[r][c] !== 0 && board[r][c+1] === board[r][c])
            {
                board[r][c+1] = board[r][c] * 2;
                board[r][c] = 0;
                makeScore(board[r][c+1]);
                moveTilesRight();
            }

        }

    }

}

function moveTilesRight()
{ 
    for(var r=0; r < board.length; r++)
    {
        for(var c=3; c >= 0; c--)
        {
            if(c !== 3  && board[r][c] !== 0 && board[r][c+1] === 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
                moveTilesRight();
            }
            
        }
        
    }   
    
}

//2D array initialized with sample values. To get a blank board initialize all the values to zero

//As soon as webpage loads run these two functions
// $(document).ready(function(){
	// printBoard();
	// console.log("Loaded webpage"); //how you do print statements in javascript
// });

function printBoard(){
    document.getElementById("scoreboard").innerHTML = "Score: " + SX;

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			//if the tile is not zero, put it on the board
            if(board[i][j] != 0){
                document.getElementById(boardID).innerHTML = board[i][j];
            }
            else{
                document.getElementById(boardID).innerHTML = " "; 
            }
			//Change the different number tiles to different colors
			switch(board[i][j]){
                case 0:
                    document.getElementById(boardID).style.background = "#ccc0b3";
                    break;
				case 2:
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
				default:
					//similar to the else statement. If none of the other cases execute, this statement will execute
			}
		}
	}
}
//show students an ascii conversion tool. 
// document.onkeydown = function(e){
	// console.log(e.keyCode);
// };