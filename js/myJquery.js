//table选项卡功能
$.fn.extend({
	"tab": function() {
		$(this).children().click(function() {
			var cons = $(this).parent().data("classname");
			console.log(cons)
			//选项卡切换
			$(this).addClass(cons).siblings().removeClass(cons);
			//获取盒子父级的id名
			var divboxid = $(this).parent().data("target");
			console.log(divboxid)
			//获取当前位置
			var index = $(this).index()
			console.log(index)
			//内容切换
			$(divboxid).children().eq(index).addClass(cons).siblings().removeClass(cons);
		})
	},
})


//轮播图功能
$.fn.extend({
	"lbt": function() {
		var box = $(this) //盒子
		var uls = box.children(); //ul
		var ullis = uls.children(); //ul下的li 还没有自动添加li的li
		var ullisWe = ullis.eq(0).width(); //ul下的li的宽


		ullis.first().clone().appendTo(uls); //把第一张图复制到最后面
		ullis.last().clone().prependTo(uls); //把最后一张复制到最前面
		//小按钮
		uls.css({
			"width": uls.children().length * ullisWe, //获取添加li之后的li的总长度
			"left": "-" + ullisWe + "px"
		})

		var index = 1; //标记

		//创建小按钮
		var ol = $("<ol></ol>").appendTo(box);
		$.each(ullis, function(i, el) {
			var classname = i == 0 ? "con" : "";
			$("<li class='" + classname + "'></li>")
				.appendTo(ol) //把按钮添加到ol
				.click(function() { //添加点击事件
					index = $(this).index() + 1;
					uls.stop().animate({
						"left": "-" + index * ullisWe + "px",
					}, 1000)
					$(this).addClass("con").siblings().removeClass("con");

				})
		})
		var ollis = box.find("ol>li"); //ol下的li	

		//创建左右按钮
		$("<div class='btn'><div class='leftbtn'></div><div class='rightbtn'></div></div>").appendTo(box).find(".leftbtn") //左按钮
			.click(function() {
				if (index == 1) {
					uls.css("left", "-" + (ullis.length + 1) * ullisWe + "px")
					index = ullis.length;
				} else {
					index--;
				}
				uls.stop().animate({
					"left": "-" + index * ullisWe + "px",
				}, 1000)

				ollis.eq(index - 1).addClass("con").siblings().removeClass("con");
			})
			.next() //右按钮
			.click(function() {
				if (index == 4) {
					uls.css("left", "0px")
					index = 1;
				} else {
					index++;
				}
				uls.stop().animate({
					"left": "-" + index * ullisWe + "px",
				}, 1000)

				ollis.eq(index - 1).addClass("con").siblings().removeClass("con");
			})
	}
})

