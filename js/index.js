$(function(){

    //banner轮播
    var imag_box=$('.ban-img');
    var banner=$('.banner-left');
    var imags=$('.swiper-slide');
    var banner_btn=$('.banner-btn');
    var t=setInterval(move,2000);
    var i=0;
    function move(){
        var x=$('.swiper-slide').width();
    	i++;
    	if (i==imags.length) {
    		i=0;
    	}
    	imag_box.animate({left:x*-i},1000)
        banner_btn.removeClass('hots').eq(i).addClass('hots');
    }
     // btn动画
    var banner_btn=$('.banner-btn');
    banner_btn.eq(0).addClass('hots');
    banner_btn.click(function(){
        clearInterval(t);
        i=banner_btn.index(this);
        var x=$('.swiper-slide').width();
        banner_btn.removeClass('hots').eq(i).addClass('hots');
        imag_box.animate({left:x*-i},1000,function(){
            var t=setInterval(move,2000);
        });
    })

var hezi=document.getElementsByClassName(".xx");
var imgss=document.getElementsByClassName(".imgx");
for (var i = 0; i < imgss.length; i++) {
  hezi[i].index=i;
  hezi[i].onmouseover=function(){
    animate(imgss[this.index],{left:-6},400)
  }
  hezi[i].onmouseout=function(){
    animate(imgss[this.index],{left:0},400)
  }
};

//返回顶部
    var top=$('.back');
    top.click(function(){
        $('html,body').animate({scrollTop:0},1000)
        return false;
    })

})