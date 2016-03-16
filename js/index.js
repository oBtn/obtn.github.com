document.addEventListener('DOMContentLoaded',function(){
	var oBox = document.querySelector('.box');
	var N = 11;
	var iSpeedX = 0;
	var lastX = 0;
	var iSpeedY = 0;
	var lastY = 0;
	var timer = null;
	for(var i=0;i<N;i++){
		var oS = document.createElement('span');
		oS.style.background = 'url(images/'+(i+1)+'.jpg)';
		oBox.appendChild(oS);
		
		
		oS.style.WebkitTransition = '1s all ease '+(N-i)*300+'ms';
		(function(oS,i){
			setTimeout(function(){
				oS.style.WebkitTransform = 'rotateY('+360/N*i+'deg) translateZ(350px)';
			},0);
		})(oS,i);
	}
	
	var y = 0;
	var x = 0;
	oBox.onmousedown=function(ev){
		var disX = ev.clientX-y;
		var disY = ev.clientY-x;
		document.onmousemove=function(ev){
			y = ev.clientX-disX;
			x = ev.clientY-disY;
			oBox.style.WebkitTransform ='perspective(800px) rotateX('+-x/10+'deg) rotateY('+y/10+'deg)';
			iSpeedX = ev.clientX-lastX;
			lastX = ev.clientX;
			iSpeedY = ev.clientY-lastY;
			lastY = ev.clientY;
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			oBox.timer = setInterval(function(){
				iSpeedX*=0.95;
				y+=iSpeedX;
				iSpeedY*=0.95;
				x+=iSpeedY;
				oBox.style.WebkitTransform ='perspective(800px) rotateX('+-x/10+'deg) rotateY('+y/10+'deg)';
				if(Math.abs(iSpeedX)<1)iSpeedX=0;
				if(Math.abs(iSpeedY)<1)iSpeedY=0;
				if(iSpeedX==0&&iSpeedY==0){
					clearInterval(oBox.timer);
				}
			},30);
		};
		return false;
	};
},false);