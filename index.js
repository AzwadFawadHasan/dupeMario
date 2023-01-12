const canvas = document.querySelector('canvas'); //the query selector will select the html canvas element
console.log(canvas )
const c = canvas.getContext('2d')//we want a 2d context hence we are using the variable c to save canvas context
console.log(c)

canvas.width = window.innerWidth;//making canvas fit to full screen's width
canvas.height = window.innerHeight;//making canvas fit to full screen's width


const gravity = 0.5;

class Player{//creating player class
    constructor(){
        this.position={
            x:100,
            y:100,
        }//this position is an object
        this.velocity={
            x:0,
            y:0,//by default this y=1 value will keep pushing our player down into the canvas because->
            //  |0,0
            //  |0,1
            //  |0,2
            //  |0,3
            //  |0,4
            //  |0,5
            //top left is 0,0 in a canvas, as you go down y axis value increases
        }
        this.width=30;
        this.height=30;
        
    }

    draw(){//creating draw method
        c.fillStyle=('red')//changing color of canvas
        c.fillRect(this.position.x,this.position.y, this.width,this.height)
       
    }
    update(){
        //altering player property
        this.draw();
        this.position.y += this.velocity.y;
        if(this.position.y + this.height  + this.velocity.y <= canvas.height)
            this.velocity.y+= gravity;
        else this.velocity.y = 0;
    }
}

//creating a loop for the update method so that we can see the changes to the character in real time


const p1 = new Player();
//p1.draw();
p1.update();

//creating a loop for the update method so that we can see the changes to the character in real time

function animate(){
    requestAnimationFrame(animate)
    //console.log('go')
    c.clearRect(0,0,canvas.width,canvas.height);//clears canvas to help us see the shape of the rectangle
    p1.update();
}
animate();