class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //TRACK THE BIRD
    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      this.path.push([this.body.position.x, this.body.position.y]);
    }  

    //DISPLAY THE SMOKE IMAGES
    //imageMode(CENTER);
    for(var i = 0; i < this.path.length; i++){
      image(this.smokeImage, this.path[i][0], this.path[i][1]);
    }
      

  }
}

/*
var index=0;
index++;
index<length;



this.path[0][0], this.path[0][1]
this.path[1][0], this.path[1][1]
this.path[2][0], this.path[2][1]
.
.
.
this.path[length-1][0], this.path[length-1][1]
*/
