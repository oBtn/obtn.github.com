'use strict'
addReady(function(){
	var oAll = document.getElementById('all');
	var aDiv = oAll.children;
	var oAbout = document.getElementById('about');
	var oCard = document.getElementById('card');
	var oSkill = document.getElementById('skill');
	var oCase = document.getElementById('case');
	var oH3 = oAll.getElementsByTagName('h3');
	var oCardShow = document.getElementById('card-show');
	window.onload=window.onresize=function(){	
		;(function(){
			var arr = []
			var iNum = null;
			while(arr.length<4){
				iNum = rnd(1,(document.documentElement.clientWidth/100-3));
				if(!findInArr(iNum,arr)){
					arr.push(iNum);
				}
			};
			arr.sort(function(){
				return 0.5-Math.random();	
			});
			//alert(arr);
			function setPostion(obj,n){	
				obj.style.left = (n*100) + 'px';
				obj.style.top = rnd(1,parseInt(document.documentElement.clientHeight/100-1))*100 +'px';
			}
			for(var i=0;i<arr.length;i++){
				;(function(i){
					setPostion(aDiv[i],arr[i]);
				})(i);
			}		
		})();		
	};	
	;(function(){
		var oBody = document.body; 
		oBody.style.background = 'url(images/bg_'+rnd(1,3)+'.jpg) no-repeat center top';	
	})();
	;(function(){
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].index=i;
			aDiv[i].onmouseenter=function(){
				for(var i=0;i<aDiv.length;i++){
					startMove(aDiv[i],{opacity:0.6});
					oH3[i].style.display = 'none';	
				}
				oH3[this.index].style.display = 'block';
				startMove(this,{opacity:1});
			};
		}
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].index=i;
			aDiv[i].onmouseleave=function(){
				for(var i=0;i<aDiv.length;i++){
					startMove(aDiv[i],{opacity:1});
					oH3[i].style.display = 'none';	
				}
			};
		}
	})();	
});
$(function(){
	var aPos = [];
	//alert(aPos);
	$('.card').toggle(function(){
		aPos = [{"left":$(this).offset().left,top:$(this).offset().top}];	
		$('.all').children().each(function(index,element){
			
			$(element).hide();			
			$(element).css({'WebkitTransition':'0.5s all ease'}); 
		});	
			
		$(this).show();
		$(this).css({'left':0,'top':0})			
		setTimeout(function(){
			$('.card-show').show();	
		},500);
	},function(){
		$('.all').children().each(function(index,element){
			$(element).show(); 
			$(element).css({'WebkitTransition':'.5s all ease'});	
		});							
		$('.card-show').hide();
		$(this).css({'left':aPos[0].left,'top':aPos[0].top});	
	});
	var timer= null;
	$('#skill').toggle(function(){
		$(this).siblings().hide();
		$('.skill-show').css({'WebkitTransition':'.5s all ease','opacity':1}).show();	
	},function(){
		var _this=$(this);
		clearTimeout(timer);
		timer=setTimeout(function(){
			_this.siblings().show();
		},500);		
		$('.skill-show').css({'WebkitTransition':'.5s all ease','opacity':0});	
	});
});







































































