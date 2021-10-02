$(function() {
  // 'pageCount'に開始時（リセット時）のページ番号１を代入。
  let pageCount = 1;
  // 'searchVal'をから宣言。一度調べた入力バリューを保管する。
  let searchVal = "";

  // 検索機能の実装。class="search-btn"がクリックされたとき
  $(".search-btn").on("click", function() {
    // 'serchWord'に、id="serch-input"のvalueを代入。
    const searchWord = $("#search-input").val();
    // もし、'searchVal'（一度入力した情報）と'searchWord'（今回入力した情報）が同じであれば
    if (searchVal === searchWord) {
      // 'pageCount'に+1した数字を代入。
      pageCount = pageCount + 1;
    // それ以外は
    } else {
      // 'pageCount'をリセットし、
      pageCount = 1;
      // 'searchVal'に'searchWord'を代入。
      searchVal = searchWord;
      // class="lists"の子要素を全て削除。
      $(".lists").empty();
    };

    // APIのurlとデータ形式を'settings'に代入。
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    }

    // ajax通信にて処理。doneが成功時
    $.ajax(settings).done(function (response) {
      // 'result'に、'response'（ajax通信にて返ってきたデータ）の'@graph'を代入。
      const result = response['@graph'];
      // 'desplayResult'に'result'をまわし、処理。
      displayResult(result)
    // 通信失敗時（エラー時）
    }).fail(function (err, textStatus, errorThrown) {
      // 'desplayResult'に'err'をまわし、処理。
      displayError(err)
    });
  });


  // 'displayResult'という名前の関数を作成。
  function displayResult(result) {
    // 'resultItemsAry'に引数'result' の0番目のデータの、'items'を取得し代入。（データは配列）
    const resultItemsAry = result[0].items;
    // 'resultItemsAry'の中身がからであれば
    if(resultItemsAry === undefined) {
      // class="message"の要素を削除。
      $(".message").remove();
      // class="inner"の中にメッセージを表示。
      $(".inner").prepend(
        `<div class="message">
          <p>
            検索結果が見つかりませんでした。</br>
            別のキーワードで検索して下さい。
          </p>
        </div>`
      );
    // それ以外であれば
    } else {
      // class="message"の要素を削除。
      $(".message").remove();
      // each文で'resultItemsAry'を一つ一つ処理。
      $.each(resultItemsAry, function(index, item){
        // 引数'item'の各データを、三項演算子でデータの有無を判定し代入。
        let itemTitle = item["title"] === undefined ? "タイトル不明" : item["title"];
        let itemCreator = item["dc:creator"] === undefined ? "作者不明" : item["dc:creator"];
        let itemPublisher = item["dc:publisher"] === undefined ? "出版社不明" : item["dc:publisher"];
        let itemId = item["@id"] === undefined ? "#" : item["@id"];

        // class="list"にprepend(上に次々追加)でhtmlを追加。${}を付けることでjs内のデータを反映できる。
        $(".lists").prepend(
          `<li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${itemTitle}</p>
              <p>作者：${itemCreator}</p>
              <p>出版社：${itemPublisher}</p>
              <a href="${itemId}" target="_blank">書籍情報</a>
            </div>
          </li>`
        );
      })
    };
  }


  function displayError(err) {
    // class="message"の要素を削除。
    $(".message").remove();
    // HTTPステータスコードがからのとき
    if(err.status === 0) {
      //  class="inner"に通信が正確にできなかった旨のメッセージを表示
      $(".inner").prepend(
        `<div class="message">
          正常に通信できませんでした。</br>
          インターネットの接続の確認をしてください。
        </div>`
      );
    // HTTPステータスコードが400のとき
    } else if(err.status === 400) {
      //  class="inner"にリクエストが不正である(入力が入っていないなど)旨のメッセージを表示
      $(".inner").prepend(
        `<div class="message">
          検索キーワードが有効ではありません。</br>
          1文字以上で検索して下さい。
        </div>`
      );
    // それ以外の場合
    } else {
      // エラーが発生したとメッセージを表示
      $(".inner").prepend(
        `<div class="message">
          エラーが発生しました。
        </div>`
      );
    }
  }


  // キャンセルボタンの実装。class="reset-btn"がクリックされたとき
  $(".reset-btn").on("click", function() {
    // 進行ページをリセット
    pageCount = 1;
    // 一度検索した結果の保持をリセット
    searchVal = "";

    // id="search-input"（検索フォーム）の中身をリセット
    $("#search-input").val("");
    // class="lists"の子要素を全て削除
    $(".lists").empty();
    // class="message"の要素を削除。
    $(".message").remove();
  });
});