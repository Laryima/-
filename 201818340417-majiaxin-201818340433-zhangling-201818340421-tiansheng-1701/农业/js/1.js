// JavaScript Document
var MarginLeft = 10;    //浮动层离浏览器右侧的距离
  var MarginTop = document.body.clientHeight - 80;   //浮动层离浏览器顶部的距离(浏览器高度-div高度)
  var Width = 25;            //浮动层宽度
  var Heigth= 80;           //浮动层高度
  
  //设置浮动层宽、高
  function Set()
  {
      document.getElementById("FloatDIV").style.width = Width + 'px';
      document.getElementById("FloatDIV").style.height = Heigth + 'px';
  }
  
  //实时设置浮动层的位置
  function Move()
  {
        var b_top = window.pageYOffset  
                || document.documentElement.scrollTop  
                || document.body.scrollTop  
                || 0;
        var b_width= document.body.clientWidth;
      document.getElementById("FloatDIV").style.top = b_top + MarginTop + 'px';
      document.getElementById("FloatDIV").style.left = b_width - Width - MarginLeft + 'px';
      setTimeout("Move();",100);
  }
  
  Set();
  Move();
