let { nextString } = require('./random');

const isProd = process.env.NODE_ENV === 'production';

let fixtures = {};

fixtures.chapters = [
  { id: '1', chapter: 1, name: 'Pawn Endgames' },
  { id: '2', chapter: 2, name: 'Knight vs. Pawns' },
  { id: '3', chapter: 3, name: 'Knight Endgames' },
  { id: '4', chapter: 4, name: 'Bishop versus Pawns' },
  { id: '5', chapter: 5, name: 'Opposite-Colored Bishops' },
  { id: '6', chapter: 6, name: 'Bishops of the Same Color' }
];

fixtures.sections = [
  { id: '1-1', chapterId: '1', name: `Key Squares` },
  { id: '1-2', chapterId: '1', name: `Corresponding Squares` },
  { id: '1-3', chapterId: '1', name: `Mined Squares` },
  { id: '1-4', chapterId: '1', name: `Triangulation` },
  { id: '1-5', chapterId: '1', name: `Other Cases of Correspondence` },
  { id: '1-6', chapterId: '1', name: `The Rule of the Square` },
  { id: '1-7', chapterId: '1', name: `Reti's Idea` },
  { id: '1-8', chapterId: '1', name: `The Floating Square` },
  { id: '1-8-1', chapterId: '1', name: `Three Connected Pawns` },
  { id: '1-9', chapterId: '1', name: `Queen vs Pawns` },
  { id: '1-10', chapterId: '1', name: `Pawn Races` },
  { id: '1-11', chapterId: '1', name: `The Active King - Widening The Beachhead` },
  { id: '1-12', chapterId: '1', name: `The King Routes - Zigzag` },
  { id: '1-13', chapterId: '1', name: `The King Routes - Pendulum` },
  { id: '1-14', chapterId: '1', name: `The King Routes - Shouldering` },
  { id: '1-15', chapterId: '1', name: `Breakthrough` },
  { id: '1-16', chapterId: '1', name: `The Outside Passed Pawn` },
  { id: '1-17', chapterId: '1', name: `The Rook's Pawns with an Extra Pawn on the Opposite Wing` },

  { id: '1-18', chapterId: '1', name: `The Protected Passed Pawn - Two Pawns to One` },
  { id: '1-19', chapterId: '1', name: `The Protected Passed Pawn - Multi-Pawn Endgames` },

  { id: '1-20', chapterId: '1', name: `Undermining` },
  { id: '1-21', chapterId: '1', name: `Two Connected Passed Pawns` },


  { id: '1-22', chapterId: '1', name: `Stalemate - The Stalemate Refuge` },
  { id: '1-23', chapterId: '1', name: `Stalemate - Semi-Stalemate` },

  { id: '1-24', chapterId: '1', name: `Reserve Tempi - Exploiting Reserve Tempi` },
  { id: '1-25', chapterId: '1', name: `Reserve Tempi - The g and h Pawns vs the h Pawn` },
  { id: '1-26', chapterId: '1', name: `Reserve Tempi - Both Sides Have Reserve Tempi` },


  { id: '2-1', chapterId: '2', name: `King in the Corner` },
  { id: '2-2', chapterId: '2', name: `Knight vs. Rook's Pawn` },
  { id: '2-3', chapterId: '2', name: `The Knight Defends the Pawn` },

  { id: '3-1', chapterId: '3', name: `The Deflecting Knight Sacrifice` },
  { id: '3-2', chapterId: '3', name: `Botvinik's Formula` },
  { id: '3-3', chapterId: '3', name: `Pawns on the Same Side` },

  { id: '4-1', chapterId: '4', name: `Bishop and Rook's Pawn` },
  { id: '4-2', chapterId: '4', name: `Pawns at h6 and h7` },
  { id: '4-3', chapterId: '4', name: `Pawns at g6 and g7` },
  { id: '4-4', chapterId: '4', name: `Bishop at h7 and Pawn at g6` },
  { id: '4-5', chapterId: '4', name: `Bishop vs. Disconnected Pawns` },
  { id: '4-6', chapterId: '4', name: `Bishop vs. Connected Pawns` },
  
  { id: '5-1', chapterId: '5', name: 'Bishop and Two Connected Pawns vs. Bishop' },
  { id: '5-2', chapterId: '5', name: 'Separated Passed Pawns' },
  { id: '5-3', chapterId: '5', name: 'The King Blockades the Passed Pawn' },
  { id: '5-4', chapterId: '5', name: 'The Bishop Restrains the Passed Pawn' },
  { id: '6-1', chapterId: '6', name: 'Minimal Material' }
];

fixtures.exercises = [
  { id: '1-1', sectionId: '1-2', draw: true, fen: '8/8/1p6/1p6/k7/2P5/PK6/8 b - - 0 1' },
  { id: '1-2', sectionId: '1-2', fen: '8/8/8/1p4k1/1P3p2/5K2/6P1/8 w - - 0 1' },
  { id: '1-3', sectionId: '1-2', draw: true, fen: '3b4/p6k/8/2R5/8/5P2/1r3N1K/8 w - - 0 1' },
  { id: '1-4', sectionId: '1-2', fen: 'k7/2p5/8/KP3p2/8/8/6P1/8 w - - 0 1' },
  { id: '1-5', sectionId: '1-2', fen: 'k7/8/8/8/8/8/8/K1R5 w - - 0 1', 
    info: 'Mate Black with just one [mating] move by the rook' },

  { id: '1-6', sectionId: '1-3', draw: true, fen: '3r4/3P4/p1k5/1p3pp1/1P5p/P4P1P/3R1KP1/8 b - - 0 1' },
  { id: '1-7', sectionId: '1-3', fen: '8/4pk2/p5p1/7p/R6P/4P3/P5r1/5K2 b - - 0 1' },

  { id: '1-8', sectionId: '1-4', fen: '8/8/8/1p6/1P6/3P1k2/3K4/8 w - - 0 1' },
  { id: '1-9', sectionId: '1-4', fen: '8/5ppk/8/3p2KP/3P2P1/8/8/8 w - - 0 1' },

  { id: '1-10', sectionId: '1-5', draw: true, fen: '6k1/p7/3K2p1/1P5p/7P/8/8/8 w - - 0 1' },
  { id: '1-11', sectionId: '1-5', draw: true, fen: '8/2p4k/8/2pP4/7K/8/8/8 w - - 0 1' },


  { id: '1-12', sectionId: '1-6', draw: true, fen: '8/2pp2pp/8/2PP1P2/1p5k/8/PP4p1/6K1 w - - 0 1' },

  { id: '1-13', sectionId: '1-7', draw: true, fen: '1n6/7K/1P3k2/2pP1P2/7P/8/8/8 w - - 0 1' },
  { id: '1-14', sectionId: '1-7', draw: true, fen: '8/2p4K/8/7k/8/8/6PP/8 w - - 0 1' },
  { id: '1-15', sectionId: '1-7', fen: '8/2p5/8/8/5P1k/p7/7P/2K5 w - - 0 1' },

  { id: '1-16', sectionId: '1-8', fen: '8/p4k2/2p3p1/3q3p/3pQP1P/3P4/1KP5/8 b - - 0 1' },
  { id: '1-17', sectionId: '1-8', draw: true, fen: '1k6/2p5/3p4/PPPP4/6p1/5pP1/5K2/8 b - - 0 1' },
  { id: '1-18', sectionId: '1-8', fen: '8/8/8/8/3k3p/1P3PpP/4K3/8 w - - 0 1' },

  { id: '1-19', sectionId: '1-9', short: true, draw: true, fen: '8/KB6/P7/4k3/8/7p/6p1/8 w - - 0 1' },
  { id: '1-20', sectionId: '1-9', draw: true, fen: '8/8/p3K3/Pp6/1P3k1p/5P2/6P1/8 w - - 0 1' },
  { id: '1-21', sectionId: '1-9', draw: true, fen: '8/2R5/3KP3/8/2p1p1p1/3r4/8/6k1 w - - 0 1' },
  { id: '1-22', sectionId: '1-9', draw: true, fen: '8/p7/5p2/2k2P2/8/2K5/P7/8 w - - 0 1' },


  { id: '1-23', sectionId: '1-10', fen: '8/8/p7/k7/6K1/5n1P/8/8 b - - 0 1' },
  { id: '1-24', sectionId: '1-10', fen: '8/8/8/3p4/1k3PpP/8/3K4/8 w - - 0 1' },
  { id: '1-25', sectionId: '1-10', draw: true, fen: '8/8/2Kp4/4p3/8/8/2P2k2/8 w - - 0 1' },
  { id: '1-26', sectionId: '1-10', fen: '7k/8/8/5KPP/1pp5/8/8/8 w - - 0 1' },
  { id: '1-27', sectionId: '1-10', fen: '8/4K1pp/8/8/8/8/k6P/8 w - - 0 1' },
  { id: '1-28', sectionId: '1-10', fen: '8/2p5/6K1/8/8/5k2/P7/8 w - - 0 1' },

  { id: '1-29', sectionId: '1-11', fen: '8/1p2k2p/8/P4K2/8/7P/8/8 w - - 0 1' },
  { id: '1-30', sectionId: '1-11', fen: '8/8/p7/P3kpp1/2p5/2P1PPK1/5P2/8 w - - 0 1' },

  { id: '1-31', sectionId: '1-12', draw: true, fen: '6K1/3k4/p7/8/8/8/4P3/8 w - - 0 1' },
  { id: '1-32', sectionId: '1-12', fen: '8/2p5/7p/8/7P/8/1k1K2P1/8 w - - 0 1' },

  { id: '1-33', sectionId: '1-13', draw: true, fen: '8/K1p5/8/8/p7/P7/8/5k2 w - - 0 1' },


  { id: '1-34', sectionId: '1-14', draw: true, fen: '8/1p6/1P6/8/7K/8/8/1k6 w - - 0 1' },
  { id: '1-35', sectionId: '1-14', draw: true, fen: '8/5p2/1p6/1P2K2k/8/8/8/8 w - - 0 1' }, 
  { id: '1-36', sectionId: '1-14', draw: true, fen: '2K5/8/kP4P1/8/8/7p/3r3P/8 w - - 0 1' },
  { id: '1-37', sectionId: '1-14', fen: '2K5/k7/7p/8/8/8/6P1/8 w - - 0 1' },


  { id: '1-38', sectionId: '1-15', fen: '7k/8/4K1pp/8/8/6PP/8/8 w - - 0 1' },
  { id: '1-39', sectionId: '1-15', fen: '8/6p1/8/5p1P/5P2/6P1/8/5K1k w - - 0 1' },
  { id: '1-40', sectionId: '1-15', fen: '8/8/1ppp4/8/1PPP4/2K5/6k1/8 w - - 0 1' },
  { id: '1-41', sectionId: '1-15', fen: '8/p3k1pp/3p4/1PpPn3/8/P5B1/5KPP/8 w - - 0 1' },

  { id: '1-42', sectionId: '1-16', fen: '8/5p2/6k1/3p4/3p1P2/3P1K1P/8/8 w - - 0 1' },

  { id: '1-43', sectionId: '1-17', draw: true, fen: '8/5k2/p7/P6p/7P/5K2/8/8 b - - 0 1' },
  { id: '1-44', sectionId: '1-17', draw: true, fen: '8/p7/8/7p/P1k4P/8/1K6/8 w - - 0 1' },
  { id: '1-45', sectionId: '1-17', fen: '8/8/8/8/p1k1P3/P3K3/8/8 w - - 0 1' },

  { id: '1-46', sectionId: '1-19', draw: true, fen: '1k6/8/6pp/8/6P1/8/1K6/8 w - - 0 1' },
  { id: '1-47', sectionId: '1-19', fen: '8/8/4k3/6p1/2pPpP2/4P2P/6K1/8 w - - 0 1' },

  { id: '1-48', sectionId: '1-21', fen: '6k1/8/5PP1/3p4/3Kp3/8/8/8 w - - 0 1' },
  { id: '1-49', sectionId: '1-21', fen: '2k5/3p3r/K3pP1P/4R3/8/8/8/8 w - - 0 1' },
  { id: '1-50', sectionId: '1-21', fen: '8/1p4kP/5pP1/3p4/8/4P3/7K/8 w - - 0 1' },

  { id: '1-51', sectionId: '1-22', fen: '8/6p1/p5Pp/2p4P/P1p5/2P3k1/P3K3/8 b - - 0 1' },
  { id: '1-52', sectionId: '1-22', draw: true, fen: '8/2p4p/1p3K2/8/P7/1P2k3/2P5/8 w - - 0 1' },

  { id: '1-53', sectionId: '1-24', fen: '5k2/7p/p1p3p1/P1P1Pp2/3p1PP1/7P/5K2/8 w - - 0 1' },
  { id: '1-54', sectionId: '1-24', fen: '8/kp6/3p2p1/p1p5/P1P1P2K/5P2/8/8 w - - 0 1' },
  { id: '1-55', sectionId: '1-24', fen: '8/7p/p4p2/k1pP1Pp1/6P1/P2K4/8/8 b - - 0 1' },

  


  { id: '2-1', sectionId: '2-1', draw: true, fen: '8/8/8/8/8/4K2p/4N2k/8 w - - 0 1' },
  { id: '2-2', sectionId: '2-1', draw: true, fen: '1R6/7p/8/8/8/3k1r2/7P/n5K1 w - - 0 1' },
  { id: '2-3', sectionId: '2-1', draw: true, fen: '7K/n2k4/P6P/r6P/8/8/8/8 w - - 0 1' },

  { id: '2-4', sectionId: '2-2', fen: '8/1p3pkp/6p1/P2Pp3/2B1n3/6P1/5PKP/8 w - - 0 1' },
  { id: '2-5', sectionId: '2-2', draw: true, fen: '7N/2K5/8/8/7p/2k5/8/8 w - - 0 1' },
  { id: '2-6', sectionId: '2-2', draw: true, fen: '8/4k2N/7p/1p6/8/8/K7/8 w - - 0 1' },
  { id: '2-7', sectionId: '2-2', fen: '8/8/4N3/p6p/P1P4b/4kp2/8/5K2 w - - 0 1' },

  { id: '2-8', sectionId: '2-3', fen: '5K2/8/p7/1k6/8/8/1P1N4/8 w - - 0 1' },
  { id: '2-9', sectionId: '2-3', draw: true, fen: '8/6p1/7p/p1N5/6PP/2k5/8/3K4 b - - 0 1' },

  { id: '3-1', sectionId: '3-1', fen: '1n4N1/8/4p1P1/kp2p3/p3P3/8/K7/8 w - - 0 1' },
  { id: '3-2', sectionId: '3-1', draw: true, fen: '8/K5p1/1p5k/1P5p/P1n5/5N2/8/8 w - - 0 1' },

  { id: '3-3', sectionId: '3-2', fen: '6k1/6p1/6Pp/ppp5/3pn2P/1P3K2/1PP2P2/3N4 b - - 0 1' },
  { id: '3-4', sectionId: '3-2', fen: '8/8/1N2kp2/8/P2K2n1/8/8/8 w - - 0 1' },
  { id: '3-5', sectionId: '3-2', fen: '8/8/pp3K2/3k2P1/1P5n/P5N1/8/8 w - - 0 1' },
  { id: '3-6', sectionId: '3-2', fen: 'k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1' },
  { id: '3-7', sectionId: '3-2', fen: '5N2/7p/6p1/k1K2p2/P4P2/6P1/7P/5n2 w - - 0 1' },


  { id: '4-1', sectionId: '4-1', fen: '8/8/8/8/8/2K4B/5k1P/8 w - - 0 1' },
  { id: '4-2', sectionId: '4-1', fen: '6B1/8/2K5/8/8/5k1P/8/8 w - - 0 1' },
  { id: '4-3', sectionId: '4-1', fen: '5B2/p7/3p4/PPk5/8/8/4K3/8 w - - 0 1' },

  { id: '4-4', sectionId: '4-2', draw: true, fen: '6k1/8/P7/5p2/2pP2p1/2pb2Pp/3N1P1P/4K3 w - - 0 1' },

  { id: '4-5', sectionId: '4-3', fen: '8/6p1/8/6P1/K7/8/1kB5/8 w - - 0 1' },
  { id: '4-6', sectionId: '4-3', draw: true, fen: '2b3R1/6P1/2p5/8/pP3k2/3p4/1P5p/K7 w - - 0 1' },

  { id: '4-7', sectionId: '4-4', draw: true, fen: '2b3R1/6P1/2p5/8/pP3k2/3p4/1P5p/K7 w - - 0 1' },
  { id: '4-8', sectionId: '4-4', draw: true, fen: '8/8/3k4/1p6/8/2P1P3/2P1K3/1b6 w - - 0 1' },

  { id: '4-9', sectionId: '4-5', fen: '8/5p2/N1p3p1/3pP1P1/7P/2kP4/Pb6/7K w - - 0 1' },
  { id: '4-10', sectionId: '4-5', fen: '8/8/1b5P/kP6/8/5K2/1P6/8 w - - 0 1' },
  
  { id: '4-11', sectionId: '4-6', draw: true, fen: '8/5k2/7P/3K1PP1/8/8/1b6/8 b - - 0 1' },
  { id: '4-12', sectionId: '4-6', fen: '8/p2b1p2/3k1P2/2p5/2p2K1P/2P3P1/P4P2/8 b - - 0 1' },

  { id: '5-1', sectionId: '5-1', draw: true, fen: '8/8/3k4/8/3PP3/4K3/8/4Bb2 b - - 0 1' },
  { id: '5-2', sectionId: '5-1', draw: true, fen: '2B5/8/3kp3/1P3pp1/3b4/7P/6K1/8 w - - 0 1' },

  { id: '5-3', sectionId: '5-2', draw: true, fen: '1b6/8/2P5/6KB/8/4kP2/8/8 b - - 0 1' },
  { id: '5-4', sectionId: '5-2', fen: '8/pkP3P1/3B4/8/3K4/1b6/8/8 w - - 0 1' },
  { id: '5-5', sectionId: '5-3', draw: true, fen: '8/3k4/2p5/1pK5/1P1P3P/P4bB1/8/8 b - - 0 1' },

  { id: '5-6', sectionId: '5-4', draw: true, fen: '8/6k1/8/5p2/2Bb3p/p6P/4KP2/8 w - - 0 1' },
  { id: '5-7', sectionId: '5-4', fen: '8/2k5/5p1b/p1pBpP1P/2P5/1PK2P2/P7/8 w - - 0 1' },


  { id: '6-1', sectionId: '6-1', fen: '2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1' },
  { id: '6-2', sectionId: '6-1', draw: true, fen: '8/1B6/8/K5k1/1P6/8/8/3b4 b - - 0 1' },
  { id: '6-3', sectionId: '6-1', fen: '1kb1B3/4K3/2Pp4/1p6/8/8/8/8 w - - 0 1' },
  { id: '6-4', sectionId: '6-1', fen: '8/5K1p/2k1P3/8/1b6/6B1/8/8 w - - 0 1' },
  { id: '6-5', sectionId: '6-1', fen: '8/1B6/2P1b3/7k/8/2p2P2/1pP3P1/1K6 w - - 0 1' },
];


if (false && !isProd) {

  fixtures.chapters = fixtures.chapters.concat([
    { id: '0', chapter: 0, name: 'Test Dev' },
  ]);

  fixtures.sections = fixtures.sections.concat([
    { id: '0-1', chapterId: '0', name: 'Mate in 1' }
  ]);

  fixtures.exercises = fixtures.exercises.concat([
    { id: '0-1', sectionId: '0-1', fen: '8/8/8/8/8/4k3/q7/4K3 w - - 0 1' },
    { id: '0-2', sectionId: '0-1', draw: true, fen: '8/8/8/8/8/4k3/q7/4K3 b - - 0 1' },
  ]);
}

module.exports = fixtures;
