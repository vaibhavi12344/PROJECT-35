class Obstacles{
constructor(x,y,width,height){
 
    var options={
    density:1
    }
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

this.x= random(0,600);
this.y=random(0,600)
this.width=random[20,30]
}
display(){
rect(this.x,this.y)
if (this.obstacles.isTouching(this.player)){
text("game over, better luck next time",10,200)
}
}
}