// JavaScript Document
window.onscroll=function(){
		var top=document.documentElement.scrollTop;
		var heade=document.getElementById("header");
		var items=document.getElementsByClassName("header_nav-item");//获取全部的eader_nav-item
		// 通过JS为heade和全部的item加上和去除样式
		if(top>70){//加上的样式
		   heade.classList.add("header_status_black");
		   for (var i = 0; i < items.length; i++) {
		   	items[i].classList.add("item_color"); 
		   }
		}else{//清除加上的样式
		   heade.classList.remove("header_status_black");  
		    for (var i = 0; i < items.length; i++) {
		   	items[i].classList.remove("item_color"); 
		   }
		}
	}