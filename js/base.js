			
			// 获取对象
			// id 获取  document.getElementById()   $("#con")
			// class 获取 document.getElementsByClassName()  $(".con")
			// 标签 获取  document.getElementsByTagName()   $("div")
			
			// 你有遇到过js兼容性问题吗
			// 有
			
			// function $(str){
			// 	var s = str.substr(0,1); // # . 
			// 	var ss = str.substr(1); //#con ==> con
			// 	switch(s){
			// 		case "#":
			// 			return document.getElementById(ss);
			// 			break;
			// 		case ".":
			// 			return getClass(ss);
			// 			break;
			// 		default:
			// 			return document.getElementsByTagName(str);
			// 	}
			// }
			// 
			// function getClass(classname){
			// 	// 如果有方法名,是兼容ie6,7,8
			// 	if(document.getElementsByClassName){
			// 		return document.getElementsByClassName(classname);
			// 	}
			// 	
			// 	var con = document.getElementsByTagName("*");  //获取所有标签
			// 	
			// 	var arr = [] ; //存放所有满足条件数组
			// 	// 循环所有标签
			// 	for(var i = 0;i < con.length;i++){
			// 		// li
			// 		// con aa bb
			// 		var spl = con[i].className.split(" "); //数组
			// 		// 字符串切割后的数组
			// 		for(var j = 0;j < spl.length;j++){
			// 			
			// 			if(spl[j] == classname){
			// 				arr.push(con[i]);
			// 			}
			// 		}
			// 	}
			// 	
			// 	return arr;
			// }
			// 解决滚动条兼容性
			function scroll(){
				
				if(window.pageYOffset != null){
					return {
						top:window.pageYOffset,
						left:window.pageXOffset
					};
				}
				
				if(document.compatMode == "CSS1Compat"){
					return{
						top: document.documentElement.scrollTop,
						left:document.documentElement.scrollLeft
					}
				}
				
				return{
					top:document.body.scrollTop,
					left:document.body.scrollLeft
				}
				
			}
				
			// 解决client宽高兼容
			function client(){
				//ie9+ 最新浏览器兼容
				if(window.innerHeight != null){
					return {
						width: window.innerWidth,
						height: window.innerHeight
					}
				}
				
				if(document.compatMode === "CSS1Compat"){  //标准浏览器兼容
					return {
						width:document.documentElement.clientWidth,
						height:document.documentElement.clientHeight,
					}
				}
				// 怪异浏览器
				return {
					width: document.body.clientWidth,
					height: document.body.clientHeight
				}
				
			}
		
			// // 解决拖动选中文字方案
			// function removeAllRange(){
			// 	window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
			// }
			// 
			// 
			// // 封装两个隐藏与显示方法
			// 
			// function show(obj){
			// 	obj.style.display = "block";
			// }
			// function hide(obj){
			// 	obj.style.display = "none";
			// }
			// 
			
			
			// 动画效果方法  匀速运动
			// function animate(obj, target){
			// 	clearInterval(obj.timer); //首次清除定时器
			// 	
			// 	var speed = obj.offsetLeft < target ? 10 : -10;
			// 	
			// 	obj.timer = setInterval(function(){
			// 		var result = target - obj.offsetLeft;// 得之间差值  -200
			// 		
			// 		obj.style.left = obj.offsetLeft + speed +"px";
			// 		
			// 		// Math.abs() 绝对值  -100
			// 		if(Math.abs(result) <=10){
			// 			clearInterval(obj.timer);
			// 			// 直接跳到目标位置
			// 			obj.style.left = target + "px"; //有10个像素差值
			// 		}
			// 		
			// 	},10)
			// }
			
			// 缓动效果
		// function animate(obj ,json,callback){
		// 	clearInterval(obj.timer); //首次清除定时器
		// 	
		// 	obj.timer = setInterval(function(){
		// 		
		// 		// attr  属性名
		// 		// target 目标位置 json[attr]
		// 		var flag = true // 用来判断是否停止定时器
		// 		for( attr in json){
		// 			
		// 			var current = parseInt(getStyle(obj,attr)); //属性值
		// 			
		// 			var step = (json[attr] - current) /10;//步长
		// 			
		// 			step = step >0 ? Math.ceil(step) : Math.floor(step);
		// 			obj.style[attr] = current + step +"px";
		// 			// 目标的距离 != 对象距离
		// 			if(json[attr] != current){  //只要其中一个不满足条件,不停止定时器
		// 				flag = false;
		// 			}
		// 		}
		// 		// 清除定时器
		// 		if(flag){
		// 			clearInterval(obj.timer);
		// 			
		// 			// alert("运动结束！！！");
		// 			if(callback){
		// 				callback(); //回调函数  运行函数
		// 			}
		// 			
		// 		}
		// 		
		// 		
		// 	},30)
		// }
		// 
		// 
		// 
		// // 样式兼容写法
		// function getStyle(obj,attr){
		// 	if(obj.currentStyle){  //判断ie
		// 		return obj.currentStyle[attr];  //返回兼容ie写法
		// 	}else{
		// 		return window.getComputedStyle(obj,null)[attr]; // w3c 浏览器
		// 	}
		// }