let personagem
let grama
let x = 64
let y = 64
let andarX = 0
let andarY = 0
let velocidade = 64


function setup() {
  createCanvas(576, 576);
  
  personagem = loadImage('person.png')
  grama = loadImage('grass.png')
}

function draw() {
  background(220)
  
  if(andarX < 0){
     andarX = 0
  }
 
  if(andarY < 0){
     andarY = 0 
  } 
    
  if(andarY > 512){
     andarY = 512
  }
  
  if(andarX > 512){
     andarX = 512
  }
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      image(grama, x*i, x*j, 64,64)
    }
  }
  
  image(personagem,andarX,andarY,64,64)


     if(andarX === 512 && andarY === 512){  
     rect(200 , 200, 256, 256)
       text('ganhou' , 300 , 300)
       
       
      botao = createButton ('reiniciar')
       botao.position(200, 350)
       
       botao.mousePressed(reiniciar)
           
     noLoop()
     }
}  
      function keyPressed(){
      if (keyIsDown(RIGHT_ARROW)){
        andarX += velocidade
      }
        if(keyIsDown(DOWN_ARROW)){
          andarY += velocidade
        }
        if(keyIsDown(UP_ARROW)){
          andarY -= velocidade
        }
        if(keyIsDown(LEFT_ARROW)){
          andarX -= velocidade
        }
      }
  
function reiniciar(){
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}