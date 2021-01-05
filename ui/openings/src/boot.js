export default function(opts) {

  let openings;

  openings = window['ChessIsOpenings'].app(opts);

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
