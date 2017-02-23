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
	oldx=e.clientX-300;
	oldy=e.clientY-35;
	x.addEventListener('mouseup',function()
{
	x.removeEventListener("mousemove",bucky);
}
,false);	
}	
function bucky(e)
{
	var co=document.getElementById("color").value;
	var xPos=e.clientX;
	var yPos=e.clientY;
	canvas.fillStyle=co;
	canvas.strokeStyle=co;
	var br=document.getElementById("brush").value;
	/*canvas.font="bold 10px URW Chancery L";
	canvas.textAlign="end";*/
	if(br=='defa')
	{
	 	canvas.moveTo(oldx,oldy);
	 	canvas.lineTo(xPos-300,yPos-35);
	 	canvas.stroke();
	 	oldx=xPos-300;
	 	oldy=yPos-35;
	 	return;
	}
	if(br=="box")
	{
		canvas.shadowOffsetX=2;
		canvas.shadowOffsetY=2;
		canvas.shadowBlur=4;
		canvas.shadowColor='black';
		canvas.strokeRect(xPos-310,yPos-40,7,7);
		return;
	}
	if(br==="bc")
	{
		canvas.shadowOffsetX=2;
		canvas.shadowOffsetY=2;
		canvas.shadowBlur=4;
		canvas.shadowColor='black';
		canvas.beginPath();
		canvas.arc(xPos-310,yPos-30,40,0,2*Math.PI);
		canvas.stroke();
		return;
	}
	if(br=="sc")
	{
		canvas.shadowOffsetX=2;
		canvas.shadowOffsetY=2;
		canvas.shadowBlur=4;
		canvas.shadowColor='black';
		canvas.beginPath();
		canvas.arc(xPos-310,yPos-30,10,0,2*Math.PI);
		canvas.stroke();
		return;
	}
	if(br="fc")
	{
		canvas.shadowOffsetX=2;
		canvas.shadowOffsetY=2;
		canvas.shadowBlur=4;
		canvas.shadowColor='black';
		canvas.beginPath();
		canvas.arc(xPos-310,yPos-30,10,0,2*Math.PI);
		canvas.fill();
		return;
	}
	//canvas.fillText("O",xPos-180,yPos);
	//canvas.strokeRect(xPos-180,yPos-10,10,10);
}
window.addEventListener('load',doFirst,false);