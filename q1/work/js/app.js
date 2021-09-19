$(function () {

  // ##### Q1 ######

  // 読み込み時にid="q1"の "color"の値が"green"に変化
  $("#q1").css("color", "green");


  // id="q2"をクリックしたとき
  $("#q2").on("click", function() {
    // id="q2"が"background-color"が"rgb(255, 145, 145)"に変化
    $(this).css("background-color", "rgb(255, 145, 145)");
  });


  // id="q3"をクリックしたとき
  $("#q3").on("click", function() {
    // id="q3"が３秒かけフェイドアウト
    $(this).fadeOut(3000);
  });


  // id="q4"をクリックしたとき
  $("#q4").on("click", function() {
    // id="q4"に".large"を追加
    $(this).addClass("large");
  });


  // id="q5"をクリックしたとき
  $("#q5").on("click", function() {
    const CenterBtn = $(this);
    // <button id="q5" class="btn">Q5</button> の前に文字を追加
    CenterBtn.before("DOMの前");
    // <button id="q5" class="btn">Q5</button> の後に文字を追加
    CenterBtn.after("DOMの後");

    // "Q5"の前に文字を追加
    CenterBtn.prepend("DOMの中の前");
    // "Q5"の後に文字を追加
    CenterBtn.append("DOMの中の後");
  });


  // id="q6"をクリックしたとき
  $("#q6").on("click", function() {
    // id="q6"にanimate()で各cssを追加。durarionに2000（２秒）を指定。
    $(this).animate({"margin-top":"100px", "margin-left":"100px"}, 2000);
  });


  // id="q7"をクリックしたとき
  $("#q7").on("click", function() {
    // id="q7"のオブジェクトを取得し、0番目のノードを指定し表示。
    console.log($(this)[0])
  })


  $("#q8").on({
    // id="q8"の上にカーソルが乗った時
    "mouseenter":function() {
      // ".large"を追加
      $(this).addClass("large");
    },
    // id="q8"の上からカーソルが離れた時
    "mouseleave":function() {
      // ".large"を削除
      $(this).removeClass("large");
    }
  })


  // id="q9"の子要素をクリックしたとき
  $("#q9 li").on("click", function() {
    // "listIndex"にその要素のインデックス番号を代入し
    const listIndex = $(this).index();
    // アラートで表示
    alert(listIndex);
  })


  // id="10"の子要素をクリックしたとき
  $("#q10 li").on("click", function() {
    // "clickItemNum"にその要素のインデックス番号を代入し
    const clickItemNum = $(this).index();

    // id="q11"の子要素の、{i10}番目に"large-text"を追加
    $("#q11 li").eq(clickItemNum).addClass("large-text");
  })
});