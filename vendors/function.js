$(function() {

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
    var hello = document.getElementById("helloText");
    if (hello) {
      if (h > 5 && h < 8) {
        hello.innerHTML = helloWordText[0];
      } else if (h >=8 && h < 12 ){
        hello.innerHTML = helloWordText[1];
      } else if (h >=12 && h < 14 ){
        hello.innerHTML = helloWordText[2];
      } else if (h >=14 && h < 17 ){
        hello.innerHTML = helloWordText[3];
      } else if (h >=17 && h < 19 ){
        hello.innerHTML = helloWordText[4];
      } else if (h >=19 && h < 23 ){
        hello.innerHTML = helloWordText[5];
      } else {
        hello.innerHTML = helloWordText[6];
      }
    }
    // 信息显示
    var eleObj = document.getElementById("showTime");
    if (eleObj) {
      eleObj.innerHTML = year + "年" + month + "月" + day + "日 " + week + " " + h + ":" + m + ":" + s;
      t = setTimeout(showTime, 500);
    }
  };
  showTime();


  // return homepage
  var error404 = $('#error-404').length;
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

})
