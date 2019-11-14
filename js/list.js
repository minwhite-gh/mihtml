var listpiceure = $(".listpiceure")[0];
var listpiceureli = listpiceure.children[0].children;
var listbtnleft = $(".listbtnleft")[0];
var listbtnright = $(".listbtnright")[0];
var minbtnli = $(".minbtn")[0].children[0].children;
// console.log(minbtnli)
	listpiceureli[0].children[0].style.opacity = 1;
	listpiceureli[1].children[0].style.opacity = 0;
	var num = 0;
	
	for(var i = 0 ; i<minbtnli.length;i++){
		if(i==0){
			minbtnli[i].className = "con";
		}
		minbtnli[i].index = i;
		num = minbtnli[i].index;
		minbtnli[i].onclick = function(){
			for(var j = 0 ; j<minbtnli.length;j++){
				minbtnli[j].className = "";
				listpiceureli[j].children[0].style.opacity = 0;
			}this.className = "con";
			listpiceureli[this.index].children[0].style.opacity = 1;
		}
	}
	
	
	listbtnleft.onclick = function (){
		num <= 0 ? num=1 : num=0;
		for(var j = 0 ; j<minbtnli.length;j++){
			minbtnli[j].className = "";
			listpiceureli[j].children[0].style.opacity = 0;
		}minbtnli[num].className = "con";
		
		for(var i = 0 ; i < listpiceureli.length;i++){
			listpiceureli[i].children[0].style.opacity = 0;
		}
			listpiceureli[num].children[0].style.opacity = 1;
		
}
	listbtnright.onclick = function (){
		num >= 1 ? num= 0:num= 1;
		for(var j = 0 ; j<minbtnli.length;j++){
			minbtnli[j].className = "";
			listpiceureli[j].children[0].style.opacity = 0;
		}minbtnli[num].className = "con";
		
		for(var i = 0 ; i < listpiceureli.length;i++){
			listpiceureli[i].children[0].style.opacity = 0;
		}
			listpiceureli[num].children[0].style.opacity = 1;
		
}

