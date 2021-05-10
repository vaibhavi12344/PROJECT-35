class Player{
constructor(x,y,width,height){
var options={
friction:1
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

}
display(){

function keyPressed(){
if (keyCode==LEFT_ARROW){
this.body.position.x=this.body.position.x-10;
}
if (keyCode==RIGHT_ARROW){
    this.body.position.x=this.body.position.x+10;
    }
    if (keyCode==UP_ARROW){
        this.body.position.y=this.body.position.y+10;
        }
        if (keyCode==DOWN_ARROW){
            this.body.position.y=this.body.position.y-10;
            }
}
rect(this.x,this.y)
}
}