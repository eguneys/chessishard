import { json, form } from 'common/xhr';
import modal from 'common/modal';

export default function(opts) {
  const $_ = document.getElementById("chessed"),
        { data } = opts;

  let editor;

  opts.$_ = $_;
  editor = window['ChessIsEditor'].app(opts);

  let $save = document.getElementById('save');

  if ($save) {
    $save.addEventListener('click', e => {
      e.preventDefault();

      json($save.href, {
        method: 'post',
        body: form({content: editor.content() })
      }).then(_ => {
        if (_.error) {
          console.log(_.error);
        } else {
          cishard.redirect(_.redirect);
        }
      });

    });
  }

  // let $review = document.getElementById('review');

  // $review.addEventListener('click', e => {
  //   e.preventDefault();

  //   json($review.href, {
  //     method: 'post',
  //     body: form({content: editor.content() })
  //   }).then(response => {
  //     if (response.url) {
  //       cishard.redirect(response);
  //     } 
  //     if (response.err) {
  //       console.log(response.err);
  //     }
  //   });
    
  // });

  // let $help = document.getElementById('help');

  // $help.addEventListener('click', e => {
  //   e.preventDefault();

  //   cishard.loadCssPath('help');

  //   fetch($help.href, {
  //   }).then(res => {
  //     res.text().then(text => {
  //       modal(text, 'help', () => {
          
  //       });
  //     });
  //   });
  // });

}
