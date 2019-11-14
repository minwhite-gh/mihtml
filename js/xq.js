// 标题下拉 与 图片 begin
var xqtop = document.getElementsByClassName("xqtop")[1];
var xqleftimg1 = document.getElementsByClassName("xqleftimg1")[0];
var xqbodybody = document.getElementsByClassName("xqbody-body")[0]
var xqright = document.getElementsByClassName("xqright")[0];

window.onscroll = function(){
	if(scroll().top >= xqtop.offsetHeight+140 && scroll().top < xqright.offsetHeight+140 - xqleftimg1.offsetHeight){
		xqtop.style.position = "fixed";
		xqtop.style.top = "0px";
		xqtop.style.zIndex = "10"
		xqtop.style.display = "block";
		xqtop.style.top = "0px";
		
		
		xqleftimg1.style.position = "fixed";
		xqleftimg1.style.top = "97px";
		xqleftimg1.style.left = xqbodybody.offsetLeft+"px";
		xqleftimg1.style.marginTop = "0";

		
	}
	
	if(scroll().top >= xqright.offsetHeight+140 - xqleftimg1.offsetHeight ){
			xqleftimg1.style.position = "absolute";
			xqleftimg1.style.left = "0px";
			xqleftimg1.style.marginTop = xqright.offsetHeight - xqleftimg1.offsetHeight- 140 +"px";
	}
	
	
	if(scroll().top < xqtop.offsetHeight+140){
		xqtop.style.position = "";
		xqtop.style.zIndex = "0";
		xqtop.style.display = "none";
		
		xqleftimg1.style.position = "absolute";
		xqleftimg1.style.top = "20px";
		xqleftimg1.style.left = "0px";
		xqleftimg1.style.marginTop = "0";

	}
	

}
	
// 标题下拉  与图片 end

// 选择
var colorli = $(".colorul")[0].children;
var bangbengli = $(".bangbengul")[0].children;
var taochangli = $(".taochangul")[0].children;

for(var i = 0 ; i<colorli.length ; i++){
	if(i==0){
		colorli[i].className = "xqlicon";
	}
	colorli[i].onclick = function(){
		for(var j = 0 ; j < colorli.length;j++){
			colorli[j].className = "";
		}
		this.className = "xqlicon";
	}
	
	
}
for(var i = 0 ; i<bangbengli.length ; i++){
	if(i==0){
		bangbengli[i].className = "xqlicon";
	}
	bangbengli[i].onclick = function(){
		for(var j = 0 ; j < bangbengli.length;j++){
			bangbengli[j].className = "";
		}
		this.className = "xqlicon";
	}
	
	
}
for(var i = 0 ; i<taochangli.length ; i++){
	if(i==0){
		taochangli[i].className = "xqlicon";
	}
	taochangli[i].onclick = function(){
		for(var j = 0 ; j < taochangli.length;j++){
			taochangli[j].className = "";
		}
		this.className = "xqlicon";
	}
	
	
}

