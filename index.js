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
        this.position.x += this.velocity.x;
        if(this.position.y + this.height  + this.velocity.y <= canvas.height)
            this.velocity.y+= gravity;
        else this.velocity.y = 0;//stops player from going down the canvas
    }
}

//creating a loop for the update method so that we can see the changes to the character in real time


const p1 = new Player();

const keys={
    right:{
        pressed:false
    },
    left:{
        pressed:false 
    }
}

//p1.draw();
//p1.update();

//creating a loop for the update method so that we can see the changes to the character in real time

function animate(){
    requestAnimationFrame(animate)
    //console.log('go')
    c.clearRect(0,0,canvas.width,canvas.height);//clears canvas to help us see the shape of the rectangle
    p1.update();

    if(keys.right.pressed){
        p1.velocity.x=5;


    }
    else if(keys.left.pressed){
        p1.velocity.x=-5;


    }else{
        p1.velocity.x=0;
    }
     
}


animate();


//
//window.addEventListener('keydown', (event)=>{
//    console.log(event)
//})
//
//window.addEventListener('keydown', ()=>{
//    console.log('key pressed')
//})


window.addEventListener('keydown', ({keyCode})=>{
    console.log(keyCode)
    switch(keyCode){
        
        case 65:
            console.log('left')
            keys.left.pressed=true;
            break
        
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            keys.right.pressed=true;
            //p1.velocity.x+=1;
            break
            case 87:
                console.log('up')
                
                p1.velocity.y-=20
                if(p1.position.y<= 0.2*canvas.height){
                    p1.velocity.y+=60;
                }
                
                break
                
                
                
                
                
                
            }
            
        })
        
        
        window.addEventListener('keyup', ({keyCode})=>{
            console.log(keyCode)
            switch(keyCode){
                
                case 65:
                    console.log('left')
                    keys.left.pressed=false;
                    break
                    
                    case 83:
                        console.log('down')
                        break
                        case 68:
                            console.log('right')
                            keys.right.pressed=false;
            //p1.velocity.x=0;
            break
        case 87:
            console.log('up')
            
            p1.velocity.y-=20
            if(p1.position.y<= 0.2*canvas.height){
                p1.velocity.y+=60;
            }
            
            break
    

        
        
                

    }
        
})