(function($) {

  // back to top
  ;(function() {
    $("#backtop").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $("#backtop").fadeIn();
      } else {
        $("#backtop").fadeOut();
      };
    });
    $("#backtop a").click(function() {
      $("html,body").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  })();


  // go to id
  $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body"); // 兼容性处理
  $('#go-comments').click(function() {
    $body.animate({
      scrollTop: $("#comments").offset().top
    }, 600);
    return false;
  });


  // show Time
  function showTime() {
    // 获取时间元素
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var weekday = now.getDay();
    var week ="星期" + "日一二三四五六".charAt(weekday);// 星期设置
    var day = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    // 当分和秒只有一位时，十位补零
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };
    m = checkTime(m);
    s = checkTime(s);
    // 根据h自动输出问候语
    var helloWordText = [
      '凌晨好','上午好','中午好','下午好','傍晚好','晚上好','夜深了，注意休息！'
    ];
    var helloWord = document.getElementById("helloWord");
    if (h > 5 && h < 8) {
      helloWord.innerHTML = helloWordText[0];
    } else if (h >=8 && h < 12 ){
      helloWord.innerHTML = helloWordText[1];
    } else if (h >=12 && h < 14 ){
      helloWord.innerHTML = helloWordText[2];
    } else if (h >=14 && h < 17 ){
      helloWord.innerHTML = helloWordText[3];
    } else if (h >=17 && h < 19 ){
      helloWord.innerHTML = helloWordText[4];
    } else if (h >=19 && h < 23 ){
      helloWord.innerHTML = helloWordText[5];
    } else {
      helloWord.innerHTML = helloWordText[6];
    }
    // 信息显示
    document.getElementById("showTime").innerHTML = year + "年" + month + "月" + day + "日 " + week + " " + h + ":" + m + ":" + s;
    t = setTimeout(showTime, 500);
  }
  showTime();


  // 文字向左无缝滚动
  function marqueeTextLeft() {

    var marqueeObj = document.querySelector('.aside-notice');
    var marqueeText = document.querySelector('.notice-text');
    var marqueeTextCopy = document.querySelector('.marqueeTextCopy');
    var scrollSpeed = 50;
    marqueeTextCopy.innerHTML = marqueeText.innerHTML;
    // 滚动效果生成代码
    function textScrollLeft() {
      if (marqueeObj.scrollLeft >= marqueeTextCopy.offsetWidth) {
        marqueeObj.scrollLeft -= marqueeText.offsetWidth;
      } else {
        marqueeObj.scrollLeft++;

      };
    };
    var runScroll = setInterval(textScrollLeft, scrollSpeed);
    marqueeObj.onmouseover = function() {
      clearInterval(runScroll);
    }
    marqueeObj.onmouseout = function() {
      runScroll = setInterval(textScrollLeft, scrollSpeed); // 全局变量
    }

  }
  marqueeTextLeft();

  // fancybox
  // $('.article-detail').each(function(i){
  //   $(this).find('img').each(function(){
  //     if ($(this).parent().hasClass('fancybox')) return;
  //     var alt = this.alt;
  //     if (alt) $(this).after('<span class="caption">' + alt + '</span>');
  //     $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
  //   });
  //   $(this).find('.fancybox').each(function(){
  //     $(this).attr('rel', 'article ' + i);
  //   });
  // });
  // $('.fancybox').fancybox();


  // Image scroll loading
  var blazy = new Blazy();

  // mobile menu
  $('.menu-toggle').click(function() {
    $('.menu-list,.mask-full').toggleClass('dn');
    $('body').toggleClass('ovh');
  });


  // return homepage
  var error404 = $('.content').find('#error-404').length;
  if (error404) {
    var toNewUrl = setInterval(jumpUrl, 1000);
    function jumpUrl() {
      var jumpEle = $("#jumpGoHomeSeconds"), // 包裹数字的对象标签，直接获取标签中的数字
          num = parseInt(jumpEle.text());
      --num;
      jumpEle.text(num);
      if (num == 0) {
          window.location.href = "/";
          clearInterval(toNewUrl);
      };
    }
  }






})(jQuery);
