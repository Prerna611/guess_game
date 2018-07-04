
var secretnum=4;

var guess=prompt("guess a number");
if(Number(guess) === secretnum)
{alert("right");
}
else if(Number(guess) >4)
{alert("too high");}
else
{
	alert("too low");
}
