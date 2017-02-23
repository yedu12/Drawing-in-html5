function doFirst()
{
	x=document.getElementById("canvas");
	canvas=x.getContext("2d");
	var co=document.getElementById("bgcolor").value;
	canvas.fillStyle=co;
	canvas.fillRect(0,0,x.width,x.height);
	x.addEventListener("mousedown",moused,false);
}
function moused(e)
{


	x.addEventListener('mousemove',bucky,false);
	x.addEventListener('mouseup',function()
{
	x.removeEventListener("mousemove",bucky);
}
,false);	
}	
function bucky(e)
{
	
}
window.addEventListener('load',doFirst,false);