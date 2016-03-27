'use strict'
function addReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			
			if(document.readyState == 'complete'){
				fn();
			}	
		});
	}
}
function rnd(m,n){
	return parseInt(m+Math.random()*(n-m));
}
function findInArr(iNum,arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==iNum){
			return true;
		}
	}
	return false;
}
function getByClass(oParent,sClass){
var aAll=oParent.getElementsByTagName('*');
var result=[];
	function findInArr(str,arr){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==str){
				return true;
			}
		}
		return false;
	}		
	for(var i=0;i<aAll.length;i++){
		var arr=aAll[i].className.split(' ');		
		if(findInArr(sClass,arr)){
			result.push(aAll[i]); 
		}
	}
	return result;			
}
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function startMove(obj,json,options){
	options = options || {};
	options.duration = options.duration || 700;
	options.easing = options.easing || 'ease-out';
	var start = {};
	var dis = {};
	
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'width':
					start[name] = obj.offsetWidth;
					break;
				case 'height':
					start[name] = obj.offsetHeight;
					break;
				case 'left':
					start[name] = obj.offsetLeft;
					break;
				case 'top':
					start[name] = obj.offsetTop;
					break;
				case 'opacity':
					start[name] = 1;
					break;
				case 'borderWidth':
					start[name] = 0;
					break;
			}
		}
		dis[name] = json[name] - start[name];
	}
	var count = Math.floor(options.duration/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
				default:
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			if(name=='opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name] = cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);
}
























