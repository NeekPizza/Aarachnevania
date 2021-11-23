class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'main_character');
    scene.physics.add.existing(this);

    this.initAnimations();
    this.initPhysics();

    scene.add.existing(this);
  }

  initPhysics() {
    this.body.setBounce(0.2);
    this.body.setCollideWorldBounds(true);
  }

  initAnimations() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('main_character', {
        frames: [10, 11, 12, 13, 14, 15],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('main_character', {
        frames: [0, 1, 2, 3, 4, 5, 6],
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('main_character', {
        frames: [10, 11, 12, 13, 14, 15],
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  move(cursors) {
    if (cursors.left.isDown) {
      this.body.setVelocityX(-160);
      this.flipX = true;
      this.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(160);
      this.flipX = false;
      this.anims.play('right', true);
    } else {
      this.body.setVelocityX(0);
      this.anims.play('idle', true);
    }

    if (cursors.up.isDown && this.body.touching.down) {
      this.body.setVelocityY(-330);
    }
  }
}
