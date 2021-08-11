var back1,back1_img;
var gameState="play";
var detective,detective_img;
var coinsGroup,coin_image;
var ghostsGroup,ghost_image;

var detective_collided, detective_scare;
var screen=0;
var start_bg;
var score = 0,life=3;

function preload(){
  back1=loadImage("images/STAI.gif")
  detective_img=loadAnimation("images/DEC.png")
  coin_image=loadImage("images/COIN.png")
  ghost_image=loadImage("images/ghost.gif")
  detective_collided=loadAnimation("images/DECHAP.png");
  detective_scare=loadAnimation("images/DECSCARE.png");
  start_bg=loadImage("images/SCREEN.png")
}

function setup() {
  var can=createCanvas(800,800);
  can.mousePressed(mp);

  detective=createSprite(400,600,50,50);
  detective.addAnimation("happy",detective_img);
  detective.scale=0.5

   coinsGroup=new Group();
  ghostsGroup=new Group();

}


function draw() {
  if (screen==0){
  
    startScreen();
  }
  else if(screen==1){
    ruleScreen();
    
  }
  
  else if(screen==2){
    GameON();
   // if(score=100){
     // nextlevel();
    //}
    //detective.velocity=1;
    drawSprites();
  }
  
  else if(screen==3){
   EndScreen();
  }

  if(gameState="play") {
    if( keyDown("left_arrow")){
     detective.x=detective.x-3;
    }

     if( keyDown("right_arrow")){
      detective.x=detective.x+3;
     }

     if( keyDown("up_arrow")){
      detective.velocityY=-10;
     }

    //detective.velocityY=detective.velocityY+0.8
    
  }
  if(detective.isTouching(coinsGroup)){
    detective.addAnimation("happy",detective_collided)
    detective.changeAnimation( "happy"); 
    score = score+1;
    if(score>=100){
      nextlevel();
    }
      /*if(life>0){
    console.log(life);
  life=life-1;
}
if(life===0){
screen=2;
gameState ="end";*/
}


if(detective.isTouching(ghostsGroup)){
  if(life>0){
  console.log("hit")
  detective.addAnimation("scare",detective_scare)
  detective.changeAnimation("scare");
 // life=life-1;
  
 
    console.log(life);
  life=life-1;
}else if(life===0){
screen=2;
gameState ="end";
}
}


function startScreen(){
  background(start_bg);
 // background(96, 157, 255)
  fill("yellow");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("WELCOME",width/2,height/2);
  text("WELCOME",width/2,height/2);
  text("WELCOME",width/2,height/2);
  text("WELCOME",width/2,height/2);

  fill("white");
  textSize(20);
  strokeWeight(2);
  textAlign(CENTER);
  text("click on the SCREEN to know the rules ",width/2,height/1.5+20);

 gameState="play";
  reset();
}

function ruleScreen(){
  background("black");
 
  fill("yellow");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("RULES:-",width/2,height/2);

}
 
function GameON(){
  
  background(back1); 

  textSize(20);
  fill(0);
  text("Score:"+score, 480, 30);

  text("life"+life,480,40)
  
  detective.velocityY=1;
  if(back1_img>900){
    back1_img.y=800
  }
  SpawnCoins()
    SpawnGhosts()


}

function SpawnCoins(){
  if (frameCount %100=== 0) { 
var coin = createSprite(200, -50);
coin.x = Math.round(random(400,400)); 
coin.addImage(coin_image);
coin.velocityY = 5; 
coin.lifetime = 800;
coin.scale=0.2
coinsGroup.add(coin); 
}
}

function SpawnGhosts(){
  if (frameCount%150=== 0) { 
var ghost = createSprite(200, -50);
ghost.x = Math.round(random(200,400)); 
ghost.addImage(ghost_image);
ghost.velocityY = 5; 
ghost.lifetime = 800;
ghost.scale=0.5
ghostsGroup.add(ghost); 
}
}

function mp(){
  if ( screen==0){
    screen=1
  }
  else if(screen==1){
    screen=2
  }
  else if(screen==2){
    screen=3
  }
  else if(screen==3){
    screen=4
  }
}

function  EndScreen(){
  background(150);
  textAlign(CENTER);
  text("game over",width/2,height/2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text("click to play again",width/2,height/2+40);
 reset();
}

function reset(){
  gameState = "play";
  score=0;

}

function nextlevel(){
  console.log("achieved")
  
  background("yellow"); 



  
}















