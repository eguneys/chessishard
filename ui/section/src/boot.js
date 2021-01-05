export default function(opts) {
  const $_ = document.getElementById("md"),
        { data } = opts;
  let section;

  opts.$_ = $_;
  section = window['ChessIsSection'].app(opts);

  let $handles = document.getElementsByClassName('handle');

  Array.prototype.forEach.call($handles, $_ => {
    let handle = $_.dataset.handle;

    $_.addEventListener('click', e => {
      e.preventDefault();

      navigator.clipboard.writeText(handle).then(() => {
        window.open('https://lichess.org/?user=openingsexercise#friend');
      });
    });
    
  });

}
