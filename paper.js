class Paper { //design/blueprint
    constructor(x, y, radius) { //properties
      var options = {
          'isStatic' :false,
          'restitution':0.3,
          'friction':0.5,
          'density':0.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position; //NAMESPACING
      var angle = this.body.angle;
      push(); //adding new thing
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      strokeWeight(4);
      image(this.image, 0, 0, this.radius, this.radius);
      pop(); //getting back to the old setting
    }
  }