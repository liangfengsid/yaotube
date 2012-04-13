// JavaScript Document
var original_margin_left;
var original_margin_top;	

$(document).ready(function(){
	$(".button").mousedown(function(){
		$(this).css("color","#F60");
	});
	
	$(".button").mouseup(function(){
		$(this).css("color","#FFF");
	});
	
	$(".button").mouseleave(function(){
		$(this).css("color","#000");
		$(this).css("background","#FFF");
	});
	
	$(".button").mouseenter(function(){
		$(this).css("color","#FFF");
		$(this).css("background","#000");
	});
});