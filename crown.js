class Crown{
constructor(x,y,width,height){
var options={
restitution:2
}
this.body=Bodies.rect(200,10,20,20)
World.add(world, this.body)
}
display(){
if(this.body.isTouching(this.player)){
 text("you have won the game",100,200)
}
}
}
