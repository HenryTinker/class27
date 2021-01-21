class Chain{
constructor(bodyA,bodyB){
    var options = {
    'bodyA':bodyA,
    'bodyB':bodyB,
    'length':40,
    'stiffness':0.04
}
this.fling = Matter.Constraint.create(options)
World.add(world, this.fling);
} 
display(){
    var pointA = this.fling.bodyA.position
    var pointB = this.fling.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}
