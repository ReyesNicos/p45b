var PC, PCimg, missile, missilepng, bldg1, bldg2, bldg3, bldg4,bdlg5, bullet;
var missilegroup, bulletgroup;
var heart1,heart2,heart3;
var heart1img,heart2img,heart3img;
var bldg1img, bldg2img, sky;





function preload(){
//preload images
PCimg = loadImage("PC.png");
missilepng = loadImage("missile.png");
heart1img = loadImage("heart.png");
heart2img = loadImage("heart.png");
heart3img = loadImage("heart.png");
bldg1img = loadImage("bldg1.png");
bldg2img = loadImage("bldg2.png");
sky = loadImage("sky.jpg")
}

function setup(){
//create canvas
    createCanvas(800,800);
//create sprites and their images   
    

    bldg1 = createSprite(150,660,30,100);
    bldg1.addImage("bldg1",bldg1img);
    //bldg1.debug=true;
    bldg1.setCollider("rectangle",0,30,75,190);

    
    bldg3 = createSprite(270,660,30,100);
    bldg3.addImage("bldg3",bldg1img);
    //bldg3.debug=true;
    bldg3.setCollider("rectangle",0,30,75,190);

    
    bldg4 = createSprite(550,660,30,100);
    bldg4.addImage("bldg4",bldg1img);
    //bldg4.debug=true;
    bldg4.setCollider("rectangle",0,30,75,190);

    bldg2 = createSprite(400,650,50,200);
    bldg2.addImage("bldg2",bldg2img);
    //bldg2.debug=true;
    bldg2.setCollider("rectangle",0,0,120,280)

    bldg5 = createSprite(700,650,50,200);
    bldg5.addImage("bldg5",bldg2img);
    //bldg5.debug=true;
    bldg5.setCollider("rectangle",0,0,120,280)

    ground = createSprite(400,790,800,20)
    PC = createSprite(400,760,20,20);
    PC.addImage("PC",PCimg);
    PC.scale=0.2
    heart1=createSprite(680,60,20,20);
    heart1.addImage("heart1",heart1img);
    heart1.scale=0.1
    heart1.visible=true;

    heart2=createSprite(710,60,20,20);
    heart2.addImage("heart2",heart2img);
    heart2.scale=0.1
    heart2.visible=true;


    heart3=createSprite(740,60,20,20);
    heart3.addImage("heart3",heart3img);
    heart3.scale=0.1
    heart3.visible=true;

//create missile and bullet group
    missilegroup=new Group();
    bulletgroup=new Group();
    
    
}

function draw(){
    background(sky);
//controls for PC character


    spawnMissiles();
    drawSprites();
    

}

function spawnMissiles(){
//spawn missiles
    if(frameCount % 60===0){
        missile=createSprite(Math.round(random(0,800)),0,40,40);
        missile.velocityY=+2;
        missile.addImage("missile",missilepng);
        missile.scale=0.03;
        missile.lifetime=800;
        missilegroup.add(missile);
    }
}