const canvas = document.querySelector('#second');
const canvasTwo = document.querySelector('#first')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvasTwo.width = window.innerWidth;
canvasTwo.height = 50

// moving name


const c = canvas.getContext('2d');
const ctx = canvasTwo.getContext('2d');
ctx.font = "30px Comic Sans MS";
ctx.fill()
ctx.fillStyle = '#ffd000'
var circles = [];
var mouse = {
    x : undefined,
    y : undefined
}
var colors = ['green','pink','yellow','#ffd000','#3baacc','#8a1c21']
window.addEventListener('mousemove',function(event){
    this.mouse.x = event.x;
    this.mouse.y = event.y
})
class Circle{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color  = colors[Math.floor(Math.random()*colors.length)]
        this.l = 5
        this.h = 30
    }

    draw(){
        
        c.beginPath(100,200)
        ctx.strokeText("Made By Derrick Makhubedu", this.l, this.h);
        c.arc(this.x,this.y,this.radius,Math.PI*2,false);
        c.fill()
        c.fillStyle = this.color
        //c.stroke()
    }
    update(){
        if(this.x+radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if (this.y+radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()

        if (mouse.x - this.x < 50 && mouse.x  - this.x > -50
            && mouse.y - this.y < 50 && mouse.y  - this.y > -50){
                if (this.radius < 50){
                    this.radius += 1
                }
            
        }else if(this.radius > 4){
            this.radius -= 1
        }


        if (this.l < innerWidth && innerWidth > this.l){
            this.l += 1
        }
        else if (this.l > innerWidth-10){
            this.l = 5
        }
        
        }
}

for (let i=0;i<500;i++){
    var radius = 10
    var x = (Math.random())*( innerWidth - radius*2)+radius
    var y = (Math.random())*( innerHeight - radius*2)+radius
    var dx = (Math.random() - 0.5)
    var dy = (Math.random() - 0.5)
    
    circles.push(new Circle(x,y,dx,dy,radius))
}



const animate = () =>{
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for (var circle of circles){
        circle.update()
    }
  
   
}

animate()