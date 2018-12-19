import { Road } from './classes/road'
import { Align } from './classes/util/align'
const gamePath = './src/assets/images/game/'

export class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload () {
    // this.load.image('logo', `${gamePath}logo.png`)
    this.load.image('road', `${gamePath}road.jpg`)
    this.load.image('line', `${gamePath}line.png`)
    this.load.spritesheet(
      'cars',
      `${gamePath}cars.png`,
      { frameWidth: 60, frameHeight: 126 }
    )
  }

  create () {
    this.road = new Road({ scene: this })
    this.road.x = this.game.config.width / 2
    this.road.makeLines()
  }

  update () {
    this.road.moveLines()
  }
}