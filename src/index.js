import Phaser from "phaser";

const gameState = [];

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      //gravity:{y:200}
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

gameState.totalDelta = null;
gameState.velocity = 200;

function create() {
  gameState.sky = this.add.image(0, 0, "sky");
  gameState.sky.setOrigin(0, 0);

  gameState.bird = this.physics.add.sprite(
    config.width / 10,
    config.height / 2,
    "bird"
  );
  gameState.bird.setOrigin(0);

  gameState.bird.body.velocity.x = gameState.velocity;
}

function update(time, delta) {
  if (gameState.bird.x >= config.width - gameState.bird.width) {
    gameState.bird.body.velocity.x = -200;
  } else if (gameState.bird.x <= 0) {
    gameState.bird.body.velocity.x = gameState.velocity;
  }
}
new Phaser.Game(config);
