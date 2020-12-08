
class Slingshot{
    constructor(bodyA,bodyB,offsetX,offsetY){
     this.offsetX=offsetX
     this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
           // stiffness:1

    
        }
       this.sling=Constraint.create(options)
      World.add(world,this.sling)


    }
    display(){
       var slingAx=this.sling.bodyB.position.x+this.offsetX
       var slingAy=this.sling.bodyB.position.y+this.offsetY
       var slingBx=this.sling.bodyA.position.x
       var slingBy=this.sling.bodyA.position.y
  fill("white")
       line(slingBx,slingBy,slingAx,slingAy)

    }
}





