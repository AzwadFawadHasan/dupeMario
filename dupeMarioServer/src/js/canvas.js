import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

let lastKey=0;

console.log(spriteRunRight)
//console.log(hills)
//console.log(background)
const canvas = document.querySelector('canvas'); //the query selector will select the html canvas element
//console.log(canvas )
const c = canvas.getContext('2d')//we want a 2d context hence we are using the variable c to save canvas context
//console.log(c)

canvas.width = 1024//window.innerWidth;//making canvas fit to full screen's width
canvas.height = 576//window.innerHeight;//making canvas fit to full screen's width
//canvas.width = window.innerWidth;//making canvas fit to full screen's width
//canvas.height = window.innerHeight;//making canvas fit to full screen's width


let gravity = 0.5;



class Player{//creating player class\
    constructor(){
        this.speed=10
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
        this.width=66;
        this.height=150;
        this.frames=0
        this.image=createImage(spriteStandRight)

        this.sprites={
            stand:{
                right:createImage(spriteStandRight),
                left:createImage(spriteStandLeft),
                cropWidth:177,
                width:66
            },
            run:{
                right: createImage(spriteRunRight),
                left:createImage(spriteRunLeft),
                cropWidth:340,
                width:127.875
            },
        }
        this.currentSprite=this.sprites.stand.right;
        
        this.currentCropWidth=177;
    }

    draw(){//creating draw method
        //c.fillStyle=('red')//changing color of canvas
        c.drawImage(this.currentSprite,
            this.currentCropWidth*this.frames,
            0,
            this.currentCropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
       
    }
    update(){
        this.frames++;
        if(this.frames>59 && (this.currentSprite===this.sprites.stand.right || this.currentSprite === this.sprites.stand.left )){this.frames=0}
        else if(this.frames>29 && (this.currentSprite===this.sprites.run.right || this.currentSprite === this.sprites.run.left )){this.frames=0}
        //altering player property
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.y + this.height  + this.velocity.y <= canvas.height)
            this.velocity.y+= gravity;
        //else this.velocity.y = 0;//stops player from going down the canvas
    }
}
function createImage(imageSrc){
    const image = new Image();
    image.src =imageSrc;
    return image;
    
}

//creating a loop for the update method so that we can see the changes to the character in real time

class Platform{
    constructor({x,y, image}){
        this.position={
            x:x,y:y// we could. also write just only x and y

        }
        this.image = image
        this.width =image.width
        this.height =image.height
        
    
    }
    draw(){
        //c.fillStyle='blue'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image,this.position.x,this.position.y);
    }
    
};


class GenericObject{
    constructor({x,y, image}){
        this.position={
            x:x,y:y// we could. also write just only x and y

        }
        this.image = image
        this.width =image.width
        this.height =image.height
        
    
    }
    draw(){
        //c.fillStyle='blue'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image,this.position.x,this.position.y);
    }
    
};

let genericObjects = []




let platformImage = createImage(platform)
let platformSmallTallImage=createImage(platformSmallTall)
let p1 = new Player();
//const platform = new Platform();
let platforms = []


const keys={
    right:{
        pressed:false
    },
    left:{
        pressed:false 
    }
}

//to determine how far our player has moved
let scrollOffset =0;


function init(){




 platformImage = createImage(platform)
 p1 = new Player();
// platform = new Platform();
 platforms = [new Platform({x:platformImage.width*4+300-2 +platformImage.width-platformSmallTallImage.width ,y:270, image:createImage(platformSmallTall)}),new Platform({x:-1,y:470,image:platformImage}), new Platform({x:platformImage.width-3,y:470, image:platformImage}),
    new Platform({x:platformImage.width*2+100,y:470, image:platformImage}),new Platform({x:platformImage.width*3+300,y:470, image:platformImage})
    ,new Platform({x:platformImage.width*4+300-2,y:470, image:platformImage}),new Platform({x:platformImage.width*5+700-2,y:470, image:platformImage})    
]

genericObjects = [new GenericObject({
    x:-1,y:-1,image:createImage(background)
}), new GenericObject({
    x:-1,y:-1,image:createImage(hills)
})]



//to determine how far our player has moved
 scrollOffset =0;

//p1.draw();
//p1.update();

//creating a loop for the update method so that we can see the changes to the character in real time
}

init();
function animate(){
    requestAnimationFrame(animate)
    //console.log('go')
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height);//clears canvas to help us see the shape of the rectangle
    //c.clearRect(0,0,canvas.width,canvas.height);//clears canvas to help us see the shape of the rectangle
    
    //rendering generic objects first on the screen before the platforms
    genericObjects.forEach(g=>{
        g.draw();
    })
    
    platforms.forEach((platform)=>{
      platform.draw();
      
    })


    //sprites switching
    if(keys.right.pressed && lastKey === 'right' && p1.currentSprite!==p1.sprites.run.right){
        p1.frames=1;
        //p1.currentSprite = p1.sprites.run.left
        p1.currentSprite = p1.sprites.run.right;
        p1.currentCropWidth = p1.sprites.run.cropWidth;
        p1.width = p1.sprites.run.width;
    }else  if(keys.left.pressed && lastKey === 'left' && p1.currentSprite!==p1.sprites.run.left){
       // p1.frames=1;
        //p1.currentSprite = p1.sprites.run.left
        
        p1.currentSprite = p1.sprites.run.left;
        p1.currentCropWidth = p1.sprites.run.cropWidth;
        p1.width = p1.sprites.run.width;
    }else  if(!keys.left.pressed && lastKey === 'left' && p1.currentSprite!==p1.sprites.stand.left){
         //p1.frames=1;
        //p1.currentSprite = p1.sprites.run.left
        
        p1.currentSprite = p1.sprites.stand.left;
        p1.currentCropWidth = p1.sprites.stand.cropWidth;
        p1.width = p1.sprites.stand.width;
    }else  if(!keys.right.pressed && lastKey === 'right' && p1.currentSprite!==p1.sprites.stand.right){
        // p1.frames=1;
        //p1.currentSprite = p1.sprites.run.left
        
        p1.currentSprite = p1.sprites.stand.right;
        p1.currentCropWidth = p1.sprites.stand.cropWidth;
        p1.width = p1.sprites.stand.width;
    }



    p1.update();

    if(keys.right.pressed && p1.position.x<400){//move right
        p1.currentSprite=p1.sprites.run.right;
        p1.velocity.x=p1.speed;


    }
    else if((keys.left.pressed && p1.position.x>100) || (keys.left.pressed && scrollOffset==0 && p1.position.x>0)){//move left
        p1.currentSprite=p1.sprites.run.right;
        p1.velocity.x=-p1.speed;;


    }else{
        p1.velocity.x=0;//stop if nothing is pressed
        if(keys.right.pressed){
            scrollOffset+=p1.speed;
            genericObjects.forEach(genericObject=>{
                genericObject.position.x-=p1.speed*.65;
            })
            platforms.forEach((platform)=>{
                //platform.draw();
                platform.position.x-=p1.speed;;
        
            })

        }else if(keys.left.pressed && scrollOffset>0){
            scrollOffset-=p1.speed;
            genericObjects.forEach(genericObject=>{
                genericObject.position.x+=p1.speed*.65;
            })
            platforms.forEach((platform)=>{
               // platform.draw();
               platform.position.x+=p1.speed;;
        
            })
            

            
        }
    }


    //platform collision detection
    platforms.forEach((platform)=>{
    if(p1.position.y +p1.height <=platform.position.y 
        &&
        p1.position.y +p1.height+p1.velocity.y >=platform.position.y
        && p1.position.x+p1.width>=platform.position.x 
        && p1.position.x<=platform.position.x+platform.width
        ){
        p1.velocity.y=0;
    }
})

if(scrollOffset>platformImage.width*5+300-2){
//    console.log(scrollOffset)
    console.log('you win')
//    //document.write('you win')
//    return
}
if(p1.position.y > canvas.height){
    console.log('u lose')
    //document.write('u lose ')
    init();
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
            lastKey='left'
            break
        
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            
            keys.right.pressed=true;
            
            
            lastKey='right'//p1.velocity.x+=1;
            break
        case 87:
            console.log('up')
            if (keyCode.repeat) { return }
            p1.velocity.y-=10
            if(p1.position.y<= 0.2*canvas.height){
                p1.velocity.y+=25;
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
                      
                        break
        case 87:
            console.log('up')
            
            //p1.velocity.y-=20
            if(p1.position.y<= 0.2*canvas.height){
                p1.velocity.y+=60;
            }
            
            break
    

        
        
                

    }
        
})