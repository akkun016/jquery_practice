$(function() {
  // drawerBtnにclass="drawer_button"を代入
  const drawerBtn = $(".drawer_button");
  // drawerNavにclass="drawer_nav_wrapper"を代入
  const drawerNav = $(".drawer_nav_wrapper");
  // drawerBackにclass="drawer_bg"を代入
  const drawerBack = $(".drawer_bg");

  // class="drawer_button"をクリックしたとき
  drawerBtn.on("click", function() {
    // drawerBtnにclass="active"がなければ追加、なければ削除
    $(this).toggleClass("active");
    // drawerNavにclass="open"がなければ追加、なければ削除
    drawerNav.toggleClass("open");
    // drawerBackをフェードイン/フェードアウトさせる
    drawerBack.fadeToggle();
  })

  drawerBack.on("click", function() {
    // drawerBtnのclass="active"を削除
    drawerBtn.removeClass("active");
    // drawerNavのclass="open"を削除
    drawerNav.removeClass("open");
    // drawerBackをフェードアウトさせる
    drawerBack.fadeOut();
  })
});