export default function(opts) {
  const $_ = document.getElementById("chessmd"),
        { data } = opts;
  let article;

  opts.$_ = $_;
  article = window['ChessIsArticle'].app(opts);

}
