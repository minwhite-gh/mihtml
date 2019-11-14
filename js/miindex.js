// 家电智能js
var xxkul = document.getElementsByClassName("xxkul");
var lis0 = xxkul[0].getElementsByTagName("li");
var lis1 = xxkul[1].getElementsByTagName("li");
var zhangshibodyright1s = document.getElementsByClassName("zhangshibody-right1")
var zhangshibodyright2s = document.getElementsByClassName("zhangshibody-right2")

for(var j = 0 ; j<lis0.length ; j++){
	 lis0[j].index = j;
	 lis0[j].onmouseover = function(){
		 for(var i = 0 ; i<lis0.length ; i++){
			 lis0[i].className = "";
			zhangshibodyright1s[i].style.display = "none"

		 }
		 this.className = "lia1";
		 zhangshibodyright1s[this.index].style.display = "block";
	}
}

for(var j = 0 ; j<lis1.length ; j++){
	 lis1[j].index = j;
	 lis1[j].onmouseover = function(){
		 for(var i = 0 ; i<lis1.length ; i++){
			 lis1[i].className = "";
			 zhangshibodyright2s[i].style.display = "none"

		 }
		 this.className = "lia1";
		 zhangshibodyright2s[this.index].style.display = "block";

	}
}

//调用轮播图的方法
$(".box").lbt();