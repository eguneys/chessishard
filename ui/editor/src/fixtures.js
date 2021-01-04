export const defaultContent = `
# This is a header
This is a paragraph. This is a fen definition for starting position <initial rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1> 
Embed chess notation like <initial 1. e3 e6 2. Nf3 Nf6 3. d3> 
Continue paragraph. Continue from black's move <initial 3... d6 4. a3 a6> 

To embed a chess board use ply number like:
=initial 8

Embed variation lines <main2 initial 3. d4 d5 4. a3 a6> . "main2" is variation name and "initial" is the parent line.

Make sure to put a space at beginning and end of lines <main3 initial 3. d4> .

Happy blogging
`;
