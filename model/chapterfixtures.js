let cf = {};

cf.explanations = [
  { id: '1-1', sectionId: '1-1', name: `Key Squares`,
    content: `
A Key square is when the king occupies it, it is a win regardless of whose turn it is to move.

<keyd5 8/3k4/8/3K4/3P4/8/8/8 w - - 0 1>

<keyc5 2k5/8/2K5/2P5/8/8/8/8 w - - 0 1>

King on d5 doesn't win. Key squares are c6 d6 and e6.

=keyd5 0

King on c5 wins because key squares are: b7 c7 d7 and also b6 c6 d6.

=keyc5 0


# J. Moravec, 1952

<moravec 2k5/8/8/7p/8/8/6P1/5K2 w - - 0 1>

=moravec 0

<moravec 1. Kf2 h4 2. Kg1> !!

The natural line <naturalKf3 moravec 2. Kf3 h3 3. g4 Kd7 4. Kg3 Ke6 5. Kxh3 Kf6 6. Kh4 Kg6> and white cannot gain control of the key squares.

<moravec 2... h3 3. g3> !

<moravec 3... Kd7 4. Kh2 Ke6 5. Kxh3 Kf5 6. Kh4 Kg6 7. Kg4> ⊙ +−.
`},
  { id: '1-2', sectionId: '1-2', content: `
Corresponding squares are squares of reciprocal zugzwang.

# Opposition

Two kings standing on the same file with one square separating them is "close opposition", three or five squares is "distant opposition".

"get the opposition" is to achieve this position with the opponent to move.
"fall into opposition" is falling into zugzwang itself.

# F. Sackmann, 1913

<sackmann 8/8/2p5/k1p1K3/p1P5/P7/8/8 w - - 0 1>

White to move
=sackmann 0

<sackmann 1. Kf5 Kb6 2. Kf6>

Converting distant opposition to close opposition.

<sackmann 2... Kb7 3. Kf7 Kb6>

<sackmanne6 sackmann 3... Kb8 4. Ke6>

<sackmann 4. Ke8> outflanking
 <sackmann 4... Ka7 5. Ke7 Ka8 6. Kd6 Kb7 7. Kd7 Kb6 8. Kc8> +- .
`},
  { id: '1-3', sectionId: '1-3', name: `Mined Squares`, content: `
Mined squares is a pair of squares that correspond. You must either first allow your opponent to step on the mined square, or avoid it.

<untouchablepawns 8/2k5/8/1Pp5/8/1K6/8/8 w - - 0 1>

=untouchablepawns 0

b6 for black and c4 for white is mined.

<mined1 8/8/1k1p4/3P1K2/8/8/8/8 w - - 0 1>

=mined1 0

<mined1 1. Kf6 Kb5 2. Ke7 Kc5 Ke6> ⊙ +-

F. Sackmann's Study

<fsackmann 8/8/k1p5/2P5/K7/P7/8/8 b - - 0 1>

=fsackmann 0

White must get the king to d6. a6 and b4 are corresponding squares. 

<fsackmann 1... Kb7 2. Kb3 Ka6 3. Kb4> ⊙
 <fsackmann 3... Kb7>

Also d4 and b5 is corresponding squares, so white must avoid d4. 

<fsackmann 4. Kc4 Ka6 5. Kd3> !! <fsackmann 5... Ka5 6. Ke4 Kb5 7. Kd4> (black is in zugzwang)
 <fsackmann 7... Ka4 8. Ke5 Kxa3 9. Kd6> +-
` },
  { id: '1-4', sectionId: '1-4', name: `Triangulation`, content: `
Triangulation, is a king maneuver that aims to lose a tempo and leave the opponent with the move.

<triang 8/1p1k4/1P6/2PK4/8/8/8/8 w - - 0 1>

White to move
=triang 0

d5 and d7 squares are in correspondence. White loses a tempo and puts the opponent in zugzwang.

<triang 1. Ke5 Kc6 2. Kd4 Kd7 3. Kd5> 
White used triangulation, it's the same position with black to move.

<triang 3... Kc8 4. Ke6> (diagonal opposition)
 <triang 4... Kd8 5. Kd6> (vertical opposition)
 <triang 5... Kc8 6. Ke7 Kb8 7. Kd7 Ka8 8. c6> +-

When the pawn structure changes, the system of key squares and corresponding squares changes.
` },
  { id: '1-5', sectionId: '1-5', name: `Other Cases of Correspondence`, content: `
N. Grigoriev, 1922

<grigoriev 8/8/3pPk2/3P1p2/5K2/8/8/8 w - - 0 1>

White to play
=grigoriev 0

f4 and f6 are in correspondence. So is h4 and g6, (not h4 and f6 because of Kh5). We can determine a third pair of correspondence g3 - g7.

f3 adjoins both f4 and g3 thus f3 and g6 is also correspondence.
From h3 the king can go to g3 and h4, thus, h3 and f6 are in correspondence.

From g2 square, king can go to f3 g3 or h3, the only equivalent square for black is f7, but he can't go there.

Thus, white should go to g2 and depending on black king position go to the corresponding square.

<grigoriev 1. Kf3 Kg6 2. Kg2 Kf6> ( <grigoriev2 grigoriev 2... Kg7 3. Kg3> )

<grigoriev 3. Kh3 Kg7 4. Kg3 Kf6> ( <grigoriev3 grigoriev 4... Kg6 5. Kh4 Kf6 6. Kh5> ) <grigoriev 5. Kf4 Kg6 6. e7 Kf7 7. Kxf5 Kxe7 8. Kg6> +- .
` },
  { id: '1-6', sectionId: '1-6', name: `The Rule of the Square`,
    content: `
If the king stands within the square of the passed pawn, or can reach it on its move, the pawn can be stopped, otherwise it will queen.

Sometimes, even though king is within the square, it still can't stop the passed pawn, because it's own pawns get in the way.

R. Bianchetti, 1925

<rbianchetti 8/5p2/4p3/8/3P4/5k2/P7/5K2 w - - 0 1>

White to play

=rbianchetti 0

<rbianchetti 1. d5 exd5 2. a4 Ke4 3. a5> +- black cannot play Kd5.
`},
  { id: '1-7', sectionId: '1-7', name: `Reti's Idea`, content: `
Sometimes king outside the square of the passed pawn can still catch it. The missing tempo is won by creating accompanying threats, often involving support of one's own passed pawn.

R. Réti, 1921

<reti 7K/8/k1P5/7p/8/8/8/8 w - - 0 1>

White to play
=reti 0

Black's king is within the square of c6 pawn. White is two tempi short of catching the h5 pawn. Though white can still catch the pawn.

<reti 1. Kg7 h4 2. Kf6 Kb6>

( <reti2 reti 2... h3 3. Ke7> and the pawns queen together)

<reti 3. Ke5 Kxc6 4. Kf4> = 
` },
  { id: '1-8', sectionId: '1-8', name: `The Floating Square`, content: `
If a square whose two corners are occupied by pawns (on the same rank) reaches the edge of the board, then one of those pawns must queen.

If the square doesn't reach the edge of the board, then king can hold the pawns. 

If there are two files between the pawns, the king can capture them both.

If the distance is greater, he can only prevent their further advance.

Khalifman - Belikov 

Podolsk 1992

White to move

<khalifman 8/2p3p1/2p2kP1/4pP1P/4K3/2P5/8/8 w - - 0 1>

=khalifman 0

<khalifman 1. h6 gxh6 2. Kf3 h5 3. Kg3 c5>

The black's passed pawns are to be lost. King can't protect them: 
 <khalifman2 khalifman 3... Kg7 4. c4 c5 5. Kh3 Kh6 6. Kh4 c6 7. Kh3 Kg7 8. Kg3> (triangulation) <khalifman2 8... Kh6 9. Kh4> ⊙ <khalifman2 9... e4 10. Kg3 Kg7 11. Kf4> +-

<khalifman 4. Kh4 e4 5. Kg3> Black resigned.
` },
  { id: '1-8-1', sectionId: '1-8-1', name: `Three Connected Pawns`, content: `
` },
  { id: '1-9', sectionId: '1-9', name: `Queen vs Pawns`, content: `
# Knight or Center Pawn

The queen wins against either a center or a knight pawn.

<kcpawn 2KQ4/8/8/8/8/8/2kp4/8 w - - 0 1>

=kcpawn 0

The queen uses either checks or attacks on the pawn to get closes to the enemy king, and drive it onto the d1 square. This gives white tempo to bring his king closer to the pawn.

# Rook or Bishop's Pawn

With a rook or bishop's pawn the above method doesn't work. A stalemate defense appears.

<rbpawn 8/8/8/3K4/Q7/8/1kp5/8 w - - 0 1>

=rbpawn 0

<rbpawn 1. Qb4+ Ka2 2. Qc3 Kb1 3. Qb3+ Ka1 4. Qe3 Kb1 5. Qd3 Kb2 6. Qe2 Ka1> = (but not <rbpawn2 rbpawn 6... Kb1 7. Kc4 c1=Q+ 8. Kb3> +-)
`},
  { id: '1-10', sectionId: '1-10', name: `Pawn Races`, content: `
There is a situation where both pawns advance simultaneously and queen at the same time or almost. The following outcomes are possible:

1) One rook's pawn prevents the other rook's pawn from queening. (diagonally)

2) The pawn queens with check, and thereby prevents the enemy pawn from queening; or

3) We get a "queen vs. pawn(s) endgame.

Or, if both pawns queen, then:

4) One queen is lost to a "skewer" check.

5) Mate follows.

6) The queens are exchanged, we get a pawn ending.

7) We get a queen ending.

# G. Walker, 1841

White to move

<gwalker 8/5p1p/8/K6k/8/8/PP6/8 w - - 0 1>

=gwalker 0

<gwalker 1. b4 f5 2. b5 f4 3. b6 f3 4. b7 f2 5. b8=Q f1=Q 6. Qb5+ Qxb5 7. Kxb5 Kg4 8. a4> and the h pawn can't queen. This shows points 1 and 6.

# J.Moravec, 1925

White to move

<jmoravec 8/8/4K3/8/8/5p1k/5P1P/8 w - - 0 1> 

=jmoravec 0

The only move to draw is <jmoravec 1. Kd5 Kg2 2. h4>

( <jmoravec2 jmoravec 1... Kxh2 2. Ke4 Kg2 Ke3> ⊙ +-).

On <jmoravec3 jmoravec 1. Kf5> the black pawn queens with check; while on <jmoravec4 jmoravec 1. Ke5> White's queen will be lost after Qa1+
` },
  { id: '1-11', sectionId: '1-11', name: `The Active King - Widening The Beachhead`, content: `
<initial 8/8/2pk4/3p2p1/1p1P2P1/3K4/P1P5/8 b - - 0 1>

=initial 0

 <initial 1... Kc7 2. c3 Kb6> !
 
 <initial 3. c4 Ka6> !

 <initial 4. cxd5 cxd5 5. Kc2 Ka5> ⊙
 <initial 6. Kb2 Ka4> ⊙
 <initial 7. Kc2 Ka3 8. Kb1 b3 9. Ka1 Kb4 10. Kb2 bxa2>

"widening the beachhead" means, trading off pawns, with the idea of clearing a path for the king.
` },
  { id: '1-12', sectionId: '1-12', name: `The King Routes - Zigzag`, content: `
<initial 8/8/1p6/8/8/6P1/k1K5/8 w - - 0 1>

=initial 0

 <initial 1. Kc3> !
 <initial 1... Ka3 2. Kc4 Ka4 3. g4 b5+ 4. Kd3> !

The king returns to c2 while avoiding the pawn check with zigzag.

 <initial 4... Ka3 5. g5 b4 6. g6 b3 7. g7 b2 8. Kc2> ! 
 <initial 8... Ka2 g8=Q+>
` },
  { id: '1-13', sectionId: '1-13', name: `The King Routes - Pendulum`, content: `
<initial 8/8/8/5p2/8/P7/4k1K1/8 w - - 0 1>

White to play

=initial 0

<initial 1. Kg3 Ke3 2. Kg2 Ke2 3. Kg3> =
` },
  { id: '1-14', sectionId: '1-14', name: `The King Routes - Shouldering`, content: `
<initial 8/1p6/8/8/8/8/1P6/K6k w - - 0 1>

Shouldering is preventing the enemy king from arriving in time at an important part of the board.

White to play

=initial 0

<initial 1. Kb1 Kg2 2. Kc2 Kf3 3. Kd3 Kf4 4. Kd4 Kf5 5. Kd5 Kf6 6. Kd6 Kf7> 

 <initial 7. b4 Ke8 8. Kc7 b5 9. Kc6> +-
` },
  { id: '1-15', sectionId: '1-15', name: `Breakthrough`, content: `
<iwhite 8/ppp5/8/PPP5/8/7k/8/7K w - - 0 1>

 <iblack 8/ppp5/8/PPP5/8/7k/8/7K b - - 0 1>

A breakthrough is when one or more pawns are sacrificed in order to create a passed pawn and promote it.

=iwhite 0

White to move wins by 

 <iwhite 1. b6> ! 

 <iwhite 1... cxb6> 
 <iwhite 2. a6> ! 
 <iwhite 2... bxa6> 
 <iwhite 3. c6> 

Black to move draws by only move:

 <iblack 1... b6> !

<maslov 6k1/6pp/5p2/4p3/p1p1P2P/2P2PP1/1K6/8 b - - 0 1>

# Maslov - Glebov (USSR 1936)

Black to move

=maslov 0

<maslov 1... h5> !

<maslov 2. Ka3 g5 3. Kxa4 f5 4. Kb5>

<maslov 4... f4 5. gxf4 gxh4>
` },
  { id: '1-16', sectionId: '1-16', name: `The Outside Passed Pawn`, content: `
# Lombardy - Fischer (USA, New York 1960)

<lombardy 8/pp4pp/4k3/3rPp2/1Pr4P/2B1KPP1/1P6/6R1 w - - 0 1>

White to move

=lombardy 0

<lombardy 1. Re1> ??

<lombardy 1... Rxc3+> !

<lombardy 2. bxc3 Rxe5+ 3. Kd2 Rxe1 4. Kxe1 Kd5 5. Kd2 Kc4 6. h5 b6>

Black gets an outside passed pawn.

<lombardy 7. Kc2 g5 8. h6 f4 9. g4 a5 10. bxa5 bxa5 11. Kb2 a4 12. Ka3 Kxc3 13. Kxa4 Kd4 14. Kb4 Ke3> 

White resigned.
` },
  { id: '1-17', sectionId: '1-17', name: `The Rook's Pawns with an Extra Pawn on the Opposite Wing` },

  { id: '1-18', sectionId: '1-18', name: `The Protected Passed Pawn - Two Pawns to One` },
  { id: '1-19', sectionId: '1-19', name: `The Protected Passed Pawn - Multi-Pawn Endgames` },

  { id: '1-20', sectionId: '1-20', name: `Undermining` },
  { id: '1-21', sectionId: '1-21', name: `Two Connected Passed Pawns` },


  { id: '1-22', sectionId: '1-22', name: `Stalemate - The Stalemate Refuge` },
  { id: '1-23', sectionId: '1-23', name: `Stalemate - Semi-Stalemate` },

  { id: '1-24', sectionId: '1-24', name: `Reserve Tempi - Exploiting Reserve Tempi` },
  { id: '1-25', sectionId: '1-25', name: `Reserve Tempi - The g and h Pawns vs the h Pawn` },
  { id: '1-26', sectionId: '1-26', name: `Reserve Tempi - Both Sides Have Reserve Tempi` }
];

module.exports = cf;
