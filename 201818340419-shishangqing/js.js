// JavaScript Document
$(document).ready(function () {
    window.addEventListener("scroll", function(event) {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        $(window).scroll(function () {
            var top = $(document).scrollTop();          //定义变量，获取滚动条的高度
            //var menu = $("#menu");                      //定义变量，抓取#menu
            var items = $("#content").find(".test");    //定义变量，查找.item
 
            var curId = "";                             //定义变量，当前所在的楼层item #id
            items.each(function () {
                var m = $(this);                        //定义变量，获取当前类
                var mHeight = m.height();
                var itemsTop = m.offset().top;        //定义变量，获取当前类的top偏移量
 
                if (top >= itemsTop - mHeight/2) {
                    curId = "#" + m.attr("id");
                    if(curId === "#test5"){
                        var menu = $("#menu");
                        var curLink = menu.find(".sidenav");
                        curLink.removeClass("sidenav");
                        menu.find("[href='#test5']").addClass("sidenav");
                    }else{
                        //给相应的楼层设置cur,取消其他楼层的cur
                        var menu = $("#menu");
                        var curLink = menu.find(".sidenav");
                        if (curId && curLink.attr("href") !== curId) {
                            curLink.removeClass("sidenav");
                            menu.find("[href=" + curId + "]").addClass("sidenav");
                        }
                    }
                } else {
                    return false;
                }
            });
        });
    });
});


