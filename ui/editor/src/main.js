import boot from './boot';
import CisEditor from 'ciseditor';
import { defaultContent } from './fixtures';

export function app(opts) {

  let content = opts.data || defaultContent;

  CisEditor(opts.$_, { input(_) {
    content = _;
  }, content });

  console.log(`[CisEditor@${CisEditor.version}]`);

  return {
    content: () => content
  };
}

export { boot };
