function setup() {

  createCanvas(850,850);

car1 = createSprite(100,100,50,5);
car2 = createSprite(100,200,50,5);
car3 = createSprite(100,300,50,5);
car4 = createSprite(100,400,50,5);

wall1 = createSprite(700,90,25,65);
wall2 = createSprite(700,190,25,65);
wall3 = createSprite(700,290,25,65);
wall4 = createSprite(700,390,25,65);

car1.velocityX = 10;
car2.velocityX = 18;
car3.velocityX = 19;
car4.velocityX = 17;


}

function draw() {
  background(255,255,255); 
  
  

  if(car1.isTouching(wall1)){
    car1.velocityX = 0;

    strokeweight = 25
    stroke("yellow");
    text("Name: Hummer, Speed: 70, Weight: 1628kgs, Deformation: 198.381, Rating: A-", 100, 100);


  }

  if(car2.isTouching(wall2)){
    car2.velocityX = 0;

    strokeweight = 25;
    stroke("red");
    text("Name: Nexa, Weight: 865kgs, Speed: 126, Deformation: 305.172, Rating: C+", 100, 200);
  }

  if(car3.isTouching(wall3)){
    car3.velocityX = 0;

    strokeweight = 25;
    stroke("cyan");
    text("Name: Skoda Superb, Weight: 1562kgs, Speed = 133, Deformation: 614.004, Rating: E+", 100, 300);
  }

  if(car4.isTouching(wall4)){
    car4.velocityX = 0;

    strokeweight = 25;
    stroke("blue");
    text("Name: Skoda Rapid, Weight: 1130kgs, Speed = 119, Deformation: 28.375, Rating: A++", 100, 400);
  }
  drawSprites();

}