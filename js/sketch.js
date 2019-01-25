/*
var num  =  60;
var num2 =  1;  // ---------- Number of objects

let paps  = []; //----------- array of papillon objects
let paps2 = [];

var canvas;


  for (let i=0; i<num; i++) {       // Create objects pap1
    var x = random(width);
    var y = random(height);
  	var c1 = random(255);
  	var c2 = random(200,255);
		var c3 = random(255);
    var s = random(1,3);
    paps[i]  = new Pap(x,y,c1,c2,c3,s);  // fond
	}

	for (let i=0; i<num2; i++) {       // Create objects pap2
    var x = random(width);
    var y = random(height);
  	var c1 = random(255);
  	var c2 = 0;
		var c3 = 0;
    var s = 3;
		paps2[i] = new Pap(x,y,c1,c2,c3,s);    // souris
    }
*/

/*function display() {

  background(mouseX/3,200,200);
  noStroke();  //   effacement
  //fill(255);
  //rect(0, 0, width, height);
  //stroke(0);



  //display(){
  //bezier (0,height/2+mouseY   -100,height/3,  width+100,height/2,  width,height-50);


    //fill(255,0,250);
    //stroke(155);
    bezier (0,height/2-150+mouseX/3,  -200,height/3,    width+100,height/2,   width,height/3-150+mouseX/3);

    //quad(0,height/2-150+mouseX/3, width,height/3-150+mouseX/3, width,height, 0,height);
    //stroke(1);
    //

    fill(255,100,0,120);
    bezier (0,height/2+mouseX,   0,height/3,  width*2,height/2,  width,height-150+mouseX);
    stroke(150);
    quad(0,height/2+mouseX, width,height-150+mouseX, width,height, 0,height);
    stroke(1);

    fill(255,0,0);
    bezier (0,height/2+mouseX,   -400,height/3,  width*2,height/2,  width,height+mouseX);
    stroke(255,0,0);
    quad(0,height/2+mouseX, width,height-150+mouseX, width,height, 0,height);
    stroke(1);



    fill(0,200,0);
    bezier (0,height/2.4+mouseX,   -200,height/2.5,   width+100,height/2,  width,height-150+mouseX/2)
    stroke(0,200,0);
    quad(0,height/2.4+mouseX,width,height-150+mouseX/3, width,height, 0,height);
    stroke(1);

  fill(0,0,0);












  fill(mouseX/3,0,100);
  ellipse(mouseX+300,150,200,200);

  ellipse(mouseX-height,150,100,100);
  fill(mouseX/3,200,200); noStroke();
  ellipse(mouseX-height-25,150,80,110);
  noFill();

  /*

   for (let i=0; i<hills.length; i++) {
     hills[i].travel();
     hills[i].display();


  }

  for (let i=0; i<paps.length; i++) {
    paps[i].dessin();
    paps[i].battement();
		paps[i].move1(5);

  }

	for (let i=0; i<paps2.length; i++) {
    paps2[i].dessin();
    paps2[i].battement();
    paps2[i].souris();
    //paps2[i].move1(1);
  }





}

*/

function Pap() {

  this.x = 0;
  this.y = 0
  this.s =  s;
  this.xwing = 0;
  this.pas = random(30,80);
  this.envergx =40*s;
  this.envergy = 45*s;
  this.h = c1;
  this.j = c2;
  this.k = c3;
  this.c4 = 90; /// alpha?
  this.r1 = random(-5,5);
  this.r2 = random(-5,5);
  this.r3 = random(-5,5);
  this.r4 = random(-5,5);
  this.ss =  s;
}




Pap.prototype.dessin = function() {


    fill(this.h,this.j,this.k);
    //fill(this.h,this.j,this.k,255);
    bezier(this.x+this.r1, this.y+this.r1, this.x-this.xwing+this.r1,this.y-this.envergy+this.r1,
          this.x+this.r2, this.y+this.envergy+this.r2, this.x+this.r2, this.y+10+this.r2);
    bezier(this.x+this.r1, this.y+this.r1, this.x+this.xwing+this.r1, this.y-this.envergy+this.r2,
      	   this.x+this.r2, this.y+this.envergy+this.r2, this.x+this.r2, this.y+10+this.r2);
    //ellipse(this.x,this.y,20+this.r1,50+this.r2);
    //stroke(h,j,k,60);
    stroke(0);
    noFill();
		bezier(this.x, this.y, this.x-this.xwing,this.y-this.envergy,
           this.x, this.y+this.envergy, this.x, this.y+10);
    bezier(this.x, this.y, this.x+this.xwing, this.y-this.envergy,
      	   this.x, this.y+this.envergy, this.x, this.y+10);
    noStroke();
  	}


Pap.prototype.move1= function() {

   // mouvement hasardeux
    this.h= h;
    this.x = this.x+random(-this.h,this.h);
    this.y = this.y+random(-this.h,this.h);

 		}

 Pap.prototype.souris = function() { // suivre souris
   var l = 1
    this.x = mouseX + random(-l,l);
    this.y = mouseY + random(-l,l);
 		}

 Pap.prototype.battement = function() {
    this.xwing += random(this.pas);

    if (this.xwing > this.envergx || this.xwing< -this.envergx)
    { this.pas=-(this.pas);
      this.xwing+=this.pas; }
  
}
