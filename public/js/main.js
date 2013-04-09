enchant();
window.onload = function() {
  var game = new Game(320, 320);
  game.preload('../img/ball.png');
  game.speedX = 5;
  game.speedY = 5;
  game.ballHold = 0;
  game.x1 = 0;
  game.x2 = 0;
  game.y1 = 0;
  game.y2 = 0;
 
  var ball = enchant.Class.create(enchant.Sprite, {
    initialize: function(x, y) {
      enchant.Sprite.call(this, 50, 50);
      this.x = x;
      this.y = y;
      this.image = game.assets['../img/ball.png'];
 
      this.addEventListener("touchstart",this.onTouch);
      this.addEventListener("touchmove",this.onTouchMove);
      this.addEventListener("touchend",this.onTouchEnd);
      this.addEventListener('enterframe', this.onEnterFrame);
      game.rootScene.addChild(this);
    },
    onTouch : function(e) {
      game.ballHold = 1;
    },
    onTouchMove : function(e) {
      this.x = e.x -25;
      this.y = e.y -25;
    },
    onTouchEnd : function(e) {
      game.ballHold = 0;
    },
    onEnterFrame : function(){
      if(game.ballHold == 1) {
        game.x1 = game.x2;
        game.y1 = game.y2;
        game.x2 = this.x;
        game.y2 = this.y;
        game.speedX = (game.x2 - game.x1);
        game.speedY = (game.y2 - game.y1);
      } else {
        if (this.x > 320 - this.width) {
          this.x = 320 - this.width;
          game.speedX = game.speedX*-1*0.8;
        }
        if (this.x < 0){
          this.x = 0;
          game.speedX = game.speedX*-1*0.8;
        }
        if (this.y < 0) {
          this.y = 0;
          game.speedY = game.speedY*-1*0.8;
        }
        if (this.y > 320 - this.height) {
          this.y = 320 - this.height;
          game.speedY = game.speedY*-1*0.8;
        }
        game.speedX = game.speedX*0.99;
        game.speedY = game.speedY*0.99+0.98;
        this.x += game.speedX;
        this.y += game.speedY;
      }
    }
  });
  game.onload = function() { var ball000 = new ball(100, 100); };
  game.start();
};