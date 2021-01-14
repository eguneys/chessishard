import * as xhr from 'common/xhr';

export default function(opts) {
  const $_ = document.getElementById("md"),
        { data } = opts;
  let section;

  let $handles = document.getElementsByClassName('handle');

  Array.prototype.forEach.call($handles, $_ => {
    let handle = $_.dataset.handle;

    $_.addEventListener('click', e => {
      e.preventDefault();

      xhr.json($_.href, {
        method: 'post'
      }).then(_ => {
        if (_.error) {
          console.log(_.error);
        } else {
          navigator.clipboard.writeText(handle).then(() => {
            window.open('https://lichess.org/?user=openingsexercise#friend');
          });
        }
      });
    });
    
  });

  opts.$_ = $_;
  section = window['ChessIsSection'].app(opts);

}
