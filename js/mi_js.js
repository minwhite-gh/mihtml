//搜索框下方显示
var ssbtn = $(".sslang").find(".btn");

// 第一种 用target,hover,click
// $(".text").click(function(){
// 	$(this).css("border-color","#ff6700")
// 	$(".sslangtable").css("display","block")
// 	$(".sslang").find(".atext").css("display","none")
// 	ssbtn.css("border-color","#ff6700")
// })
// 
// $(".sslang").hover(function(){
// 	$(".text").css("border-color","#B0B0B0")
// 	ssbtn.css("border-color","#B0B0B0")
// },function(){
// 		$(".text").css("border-color","#ff6700")
// 		ssbtn.css("border-color","#ff6700")
// 	}else{
// 		$(".text").css("border-color","#e0e0e0")
// 		ssbtn.css("border-color","#e0e0e0")
// 	}
// 	
// })
// document.onmousedown = function(eve) {
// 			var eve = eve || window.eve;
// 			var targetclassname = eve.target ? eve.target.id : eve.scrElement.className;
// 			if (targetclassname != "sslangtable") {
// 				$(".sslangtable").css("display","none")
// 				$(".text").css("border-color","#e0e0e0")
// 				$(this).find(".btn").css("border-color","#e0e0e0")
// 				$(".sslang").find(".atext").css("display","block")
// 			}
// 		}


//第二种 focus blur
$("#sslang .text").focus(function() {
	$(this).addClass("con").next().addClass("con").next().hide().next().show();
}).blur(function() {
	$(this).removeClass("con").next().removeClass("con").next().show().next().hide();
})




// 顶部导航栏悬浮下拉效果 
// 第一种,离官网效果还差一点
// $(".headhover").parent().mouseenter(function(){
// 	$(this).children().addClass("con").parent().siblings().find("a").removeClass("con");
// 	var i = $(this).index()
// 	$(".tophoverimg").eq(i).css("display","block").stop().animate({"height":"229px","opacity":"1"},1000)
// 	$(".tophoverimg").eq(i).find(".shu").last().css("background-color","#fff")
// 	console.log($(".tophoverimg").find(".shu").last())
// })
// 
// $(".headhover").parent().mouseleave(function(){
// 	$(".headhover").removeClass("con")
// 	var i = $(this).index()
// 	$(".tophoverimg").eq(i).stop().animate({"height":"0px"},1000,function(){
// 		$(this).css("display","none");
// 	})
// })

//第二种 官网效果

$(".headcenterli").mouseenter(function() {
	var i = $(this).index()
	if(i>=7){
		$(".tophoverimg").stop()
	}else{
		$(this).children().addClass("con").parent().siblings().children().removeClass("con");
		$(".tophoverimg").eq(i).show().parent().siblings().find(".tophoverimg").hide();
	}
})

$(".headcenterli").mouseleave(function() {
	var i3 = $(this).index()
	if(i3>=7){
		$(".tophoverimg").stop()
	}else{
		console.log(i3)
		$(".tophoverimg").eq(i3).hide()
		$(this).children().removeClass("con");
	}
})
