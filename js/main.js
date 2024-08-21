$(document).ready(function(){
  $("#btn_top").click(function(){
      $('html, body').animate({scrollTop: 0}, 500);
    });
    $(".gnb .gnb_ul li").click(function(){
      var num = $(this).index();
      var s1 = $(".section01").outerHeight();
      var s2 = $(".section02").outerHeight();
      var s3 = $(".section03").outerHeight();
      var s4 = $(".section04").outerHeight();
      // console.log(num);
      if(num == 0){
        $('html, body').animate({scrollTop: s1}, 500);
      }else if(num == 1){
        $('html, body').animate({scrollTop: s1+s2}, 500);
      }else if(num == 2){
        $('html, body').animate({scrollTop: s1+s2+s3}, 500);
      }else if(num == 3){
        $('html, body').animate({scrollTop: s1+s2+s3+s4}, 500);
      }
    });
  $(".work_wrap .btn_more").click(function(){
      $(this).toggleClass("close");
      if($(this).hasClass("close")==true){
          $(this).html("😘\<span\>close\</span\>😍");
          $(".work_wrap .work_list li:nth-child(n+10)").addClass("show");
          $(".work_wrap .work_list li:nth-child(n+10)").show();
          $(".work_wrap .work_others .work_others_ul").css("display","flex");
      }else{
          $(this).html("😘\<span\>more\</span\>😍");
          $(".work_wrap .work_list li:nth-child(n+10)").removeClass("show");
          $(".work_wrap .work_list li:nth-child(n+10)").hide();
          $(".work_wrap .work_others .work_others_ul").css("display","none");
      }  
  });

  var device = "PC";
  var mobileArr = new Array("iphone", "ipod", "android", "windows ce", "blackberry", "symbian", "windows phone", "webos", "opera mini", "opera mobi", "polaris","iemobile", "lgtelecom", "nokia", "sonyericsson", "samsung");

  //디바이스 체크
  for(var txt in mobileArr){
       if(navigator.userAgent.toLowerCase().match(mobileArr[txt]) != null){
       //toLowerCase() 메소드를 통해 userAgent의 텍스트를 소문자로 변환합니다.
          console.log(navigator.userAgent.match(mobileArr[txt]));
          device = "MOBILE"
          break; //쓸데없는 loop를 방지합니다.
       }
  }

  if(device === "MOBILE"){
     $(".cursor").hide();
     $(".cursorShadow").hide();
     $(".mobileShadow").show();
  }else{
    $(".cursor").show();
    $(".cursorShadow").show();
    $(".mobileShadow").hide();
    var mouseCursor2 = document.querySelector(".cursor");
    var navLinks = document.querySelectorAll("a, button, #header .gnb .gnb_ul li span, .menu_m_box .menu_m_ul li span, .section.section04 .work_wrap .work_list li, .popupWrap .popup .hj_popup_cont li .anchor"); //메뉴 링크
    //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
    window.addEventListener("scroll", cursor2);
    window.addEventListener("mousemove", cursor2);
    //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
    function cursor2(e) {
      mouseCursor2.style.left = e.pageX + "px";
      mouseCursor2.style.top = e.pageY - scrollY + "px";
    }
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        mouseCursor2.classList.add("link-grow");
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor2.classList.remove("link-grow");
        mouseCursor2.style.zIndex = "9999";
      });

      link.addEventListener("mousedown", () => {
        mouseCursor2.classList.add("link-click");
      });
      link.addEventListener("mouseup", () => {
        mouseCursor2.classList.remove("link-click");
        mouseCursor2.style.zIndex = "9999";
      });
      link.addEventListener("mousemove", () => {
        mouseCursor2.classList.remove("link-click");
        mouseCursor2.style.zIndex = "9999";
      });
    });
  }
  
  $(".menu_m").click(function(){
    if($(this).hasClass("close")){
      $(this).removeClass("close");
      $(".menu_m_box").slideUp(200);
      $("html, body").css("overflow","auto");
    }else{
      $(this).addClass("close");
      $(".menu_m_box").slideDown(200);
      $("html, body").css("overflow","hidden");
    }
  });
  $(".menu_m_ul li").click(function(){
    $(".menu_m").removeClass("close");
    $(".menu_m_box").slideUp(200);
    $("html, body").css("overflow","auto");
    var num = $(this).index();
    var s1 = $(".section01").outerHeight();
    var s2 = $(".section02").outerHeight();
    var s3 = $(".section03").outerHeight();
    var s4 = $(".section04").outerHeight();
    // console.log(num);
    if(num == 0){
      $('html, body').animate({scrollTop: s1}, 500);
    }else if(num == 1){
      $('html, body').animate({scrollTop: s1+s2}, 500);
    }else if(num == 2){
      $('html, body').animate({scrollTop: s1+s2+s3}, 500);
    }else if(num == 3){
      $('html, body').animate({scrollTop: s1+s2+s3+s4}, 500);
    }
  });

  // Scroll Animation (sa, 스크롤 애니메이션)
  var hiTriggerMargin = 300;
  var hiElementList = document.querySelectorAll('.section');
  var saFunc = function() {
    $.each(hiElementList, function(idx, element){
      if (!element.classList.contains('on')) {
        if (window.innerHeight > element.getBoundingClientRect().top + hiTriggerMargin) {
          element.classList.add('on');
        }
      }else{
        if (window.innerHeight < element.getBoundingClientRect().top + hiTriggerMargin) {
          element.classList.remove('on');
        }
      }
    });
  };
  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);

  $(function(){
    var typed = new Typed('.typed', {
      strings: ["<em class='main_txt'>You <span>find</span> happiness<br /> where you are</em><br /><br /><em class='sub_txt'>: 네가 어디에 있던 행복을 찾을거야</em>"],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
    });
  });

  $(".work_wrap .work_list .point").click(function(){
    $(".popupWrap").fadeIn(200);
    $(".popupWrap .popup").addClass("on");
    $(".popupWrap .popup .hj_popup_cont").removeClass("flex");
    if($(this).hasClass("hel")==true){
      $(".popupWrap .popup .hj_hello").addClass("flex");
    }else if($(this).hasClass("wel")==true){
      $(".popupWrap .popup .hj_welcom").addClass("flex");
    }else if($(this).hasClass("let")==true){
      $(".popupWrap .popup .hj_go").addClass("flex");
    }
  });
  $(".popupWrap .popup .popup_close").click(function(){
    $(".popupWrap").fadeOut(200);
    $(".popupWrap .popup").removeClass("on");
  });

  /* work */
  $(".revBtn").click(function(){
      $(this).toggleClass("trs");
      if($(this).hasClass("trs")){
          $(this).children(".web").hide();
          $(this).children(".mo").fadeIn(300);
          $("main.work .webWrap").hide();
          $("main.work .moWrap").fadeIn(300);
      }else{
          $(this).children(".web").fadeIn(300);
          $(this).children(".mo").hide();
          $("main.work .webWrap").fadeIn(300);
          $("main.work .moWrap").hide();
      }
  });
});