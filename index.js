const canvas = document.querySelector('canvas'); //the query selector will select the html canvas element
console.log(canvas )
const c = canvas.getContext('2d')//we want a 2d context hence we are using the variable c to save canvas context
console.log(c)

canvas.width = window.innerWidth;//making canvas fit to full screen's width
canvas.height = window.innerHeight;//making canvas fit to full screen's width


class Player{//creating player class
    constructor(){
        this.position={
            x:100,
            y:100,
        }//this position is an object
        this.width=30
        this.height=30;
        
    }

    draw(){//creating draw method
        c.fillStyle=('red')//changing color of canvas
        c.fillRect(this.position.x,this.position.y, this.width,this.height)
       
    }
}

const p1 = new Player();
p1.draw();