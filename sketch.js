var bunny, carrot, obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8
function setup() {
  createCanvas(600,400);
 bunny= createSprite(50,350,20,20)
 bunny.shapeColor='white'
 carrot= createSprite(550,50,10,10)
 carrot.shapeColor='orange'
 obs1= createSprite(200,150,100,20)
 obs2= createSprite(350,250,100,20)
 obs3= createSprite(350,150,100,20)
 obs4= createSprite(200,250,100,20)
 obs5= createSprite(500,150,100,20)
 obs6= createSprite(500,250,100,20)
 obs7= createSprite(60,250,100,20)
 obs8= createSprite(60,150,100,20)
 obs1.shapeColor= 'red'
 obs2.shapeColor= 'red'
 obs3.shapeColor= 'red'
 obs4.shapeColor= 'red'
 obs5.shapeColor= 'red'
 obs6.shapeColor= 'red'
 obs7.shapeColor= 'red'
 obs8.shapeColor= 'red'
 edges= createEdgeSprites()
 obs1.velocityX=-2
 obs2.velocityX=2
 obs3.velocityX=-2
 obs4.velocityX=2
 obs5.velocityX=-2
 obs6.velocityX=2
 obs7.velocityX=2
 obs8.velocityX=-2
}

function draw() {
  background("black");  
  drawSprites()
  obs1.bounceOff(edges[0])
  obs1.bounceOff(edges[1])
  obs2.bounceOff(edges[1])
  obs2.bounceOff(edges[0])
  obs3.bounceOff(edges[0])
  obs3.bounceOff(edges[1])
  obs4.bounceOff(edges[1])
  obs4.bounceOff(edges[0])
  obs5.bounceOff(edges[0])
  obs5.bounceOff(edges[1])
  obs6.bounceOff(edges[1])
  obs6.bounceOff(edges[0])
  obs7.bounceOff(edges[1])
  obs7.bounceOff(edges[0])
  obs8.bounceOff(edges[0])
  obs8.bounceOff(edges[1])
  bunny.bounceOff(edges[1])
  bunny.bounceOff(edges[0])
  bunny.bounceOff(edges[2])
  bunny.bounceOff(edges[3])

  if (keyDown("left")) {
    bunny.x = bunny.x - 5
  }

  if (keyDown("up")) {
    bunny.y = bunny.y - 5
  }

  if (keyDown("down")) {
    bunny.y = bunny.y + 5 
  }

  if (keyDown("right")) {
    bunny.x = bunny.x + 5
  }

  if (keyDown("a")) {
    bunny.x = bunny.x - 5
  }

  if (keyDown("w")) {
    bunny.y = bunny.y - 5
  }

  if (keyDown("s")) {
    bunny.y = bunny.y + 5 
  }

  if (keyDown("d")) {
    bunny.x = bunny.x + 5
  }

  if(bunny.isTouching(obs1)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs2)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs3)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs4)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs5)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs6)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs7)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(obs8)){
    bunny.x=50
    bunny.y=350
  }

  if(bunny.isTouching(carrot)){
    text("you win", 10, 10)
  }

  if(bunny.isTouching(carrot)){
    Text("you win", 10, 10)
  }

}