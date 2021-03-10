class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
       if(gameState === 0){
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
         }
         form = new Form();
         form.display();
       }
         
 }
  
    play(){
      form.hide();
      player1 = createSprite(160, 710, 20, 20);
         //player1.addImage(player1img);
         player2 = createSprite(335, 710, 20,20);
         //player2.addImage(player2img);
         player3 = createSprite(435, 710, 20,20);  
         //player3.addImage(player3img);
         players = [player1, player2, player3];
      console.log("Hiiii");
      //background("black");
      Player.getPlayerInfo();  
     
     if(allPlayers !== undefined){
        var index = 0;
        var x = 0;
        var y = 0;
        for (var plr in allPlayers){
          index=index+1;
          x=x+100;
          y=900-allPlayers[plr].distance;
          players[index-1].x=x;
          players[index-1].y=y;
         if(index=== player.index){
           players[index-1].shapeColor="blue";
         }
         //else{
           //fill("white");
        // }
        //y = y+20;
        //text(allPlayers[plr].name+ ":" +allPlayers[plr].distance,120,y );
        } 
      }

     /*if(keyIsDown(UP_ARROW)){
        player.y= +10;
        //player.update();
      }
      if(keyIsDown(DOWN_ARROW)){
        player.y = -10;
       // player.update();
      }
      if(keyIsDown(LEFT_ARROW)){
        player.x = -10;

      }
      if(keyIsDown(RIGHT_ARROW)){
        player.x = +10;
      }*/
      drawSprites();
    }
  }
  