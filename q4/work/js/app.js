$(function() {
  // class="nav"の子要素の"li"をクリックしたとき
  $(".nav li").on("click", function() {
    // class="description"の子要素の"li"全てにclass="is-hidden"を付ける（付いている場合はそのまま）
    $(".description li").attr("class", "is-hidden");

    // class="nav"のクリックされた子要素のインデックス番号の取得
    const itemNum = $(this).index();
    // class="description"の子要素の"itemNum"番目のクラスを削除
    $(".description li").eq(itemNum).removeClass();
  })
});