$(function () {

// スライダー　slick
$('.carousel').slick({
  fade:true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: false,//左右の矢印あり
  dots: true,//下部ドットナビゲーションの表示
      pauseOnFocus: false,//フォーカスで一時停止を無効
      pauseOnHover: false,//マウスホバーで一時停止を無効
      pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

// 画面がスクロールされたときにイベント処理を実行する
$(window).scroll(function() {
  // 画面のスクロール量をpx（ピクセル）数で取得する
    const scrollValue = $(window).scrollTop();
    
  // 画面のスクロール量が100px以上であれば、「TOPに戻る」ボタンを表示する
    if (scrollValue >= 300) {$('#back-btn').show();}
    
  // 画面のスクロール量がそれ以外（100px未満）であれば、「TOPに戻る」ボタンを非表示にする
    else {$('#back-btn').hide();}
    
  });

//ページ内リンクでスムーズスクロール    
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
$('a[href^="#"]').click(function() {
  // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
  // スクロールの速度（ミリ秒）
    var speed = 400;
  // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
  // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
  // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
  // スムーススクロール linear（等速） or swing（変速）
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });

/* スクロール　フェードイン*/
$(window).scroll(function (){
  $(".fade-out").each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight/5){
    $(this).addClass("fade-in");
    } else {
    $(this).removeClass("fade-in");
    }
    });
  });

/* モーダル*/
$(".js-md_open").click(function() {
  $("body").append("<div class=overlay></div>");
  $(".overlay").fadeIn(300);
      var imgSrc = $(this).attr("src");
      var largeImage = "<img class='md_content' src='" + imgSrc + "'>";
      var closeButton="<a class='js-close'><span >✕Close</span></a>";
      $(".overlay").append(largeImage);
      $(".overlay").append(closeButton);
      $('html, body').css('overflow', 'hidden');
  return false;
  });

/* モーダルを閉じる*/    
  $("body").on("click",".overlay",".js-close",function() {
  $(this).fadeOut(300,function() {
  $(this).remove();
  $('html, body').removeAttr('style');
    });
  });
});