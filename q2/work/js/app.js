$(function() {
  // class="modal_open_button"をクリックすると
  $(".modal_open_button").on("click", function() {
    // class="modal_win"が0.6秒でフェードイン
    $(".modal_win").fadeIn();
  })

  // class="modal_close_button"をクリックすると
  $(".modal_close_button").on("click", function() {
    // class="modal_win"が0.6秒でフェードアウト
    $(".modal_win").fadeOut();
  })
});