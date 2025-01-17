
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
rec.paint(ctx);
var line = new Line(70,10,10,30,10,"red")
line.paint(ctx)
// var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
// ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
// drawing.paint(ctx, canvas);


// Code temporaire pour tester le DnD
new DnD(canvas, pencil);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
