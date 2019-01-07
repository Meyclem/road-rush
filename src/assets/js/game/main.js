import { Road } from './classes/road'
import { Controller } from './classes/controllers/controller'
import { Align } from './classes/util/align'
import { AlignGrid } from './classes/util/aligngrid'
import { ScoreBox } from './classes/components/scorebox'
import { FlatButton } from './classes/ui/flatbuttons'
const gamePath = './src/assets/images/game/'

export class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload () {
    // this.load.image('logo', `${gamePath}logo.png`)
    this.load.image('road', `${gamePath}road.jpg`)
    this.load.image('line', `${gamePath}line.png`)
    this.load.image('cone', `${gamePath}cone.png`)
    this.load.image('pcar1', `${gamePath}pcar1.png`)
    this.load.image('pcar2', `${gamePath}pcar2.png`)
    this.load.image('barrier', `${gamePath}barrier.png`)

    // this.load.image('greenSquaredButton', `${gamePath}buttons/squared/1.png`)
    // this.load.image('greenRoundedButton', `${gamePath}buttons/rounded/1.png`)

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
    const alignGrid = new AlignGrid({ rows: 5, cols: 5, scene: this })
    alignGrid.showNumbers()
    emitter = new Phaser.Events.EventEmitter()
    controller = new Controller()
    this.sb = new ScoreBox({ scene: this })
    alignGrid.placeAtIndex(4, this.sb)
    // const flatButton = new FlatButton({
    //   scene: this,
    //   key: 'greenSquaredButton',
    //   text: 'Press Me!',
    //   x: game.config.width / 2,
    //   y: 100
    // })
    // const flatButton2 = new FlatButton({
    //   scene: this,
    //   key: 'greenRoundedButton',
    //   text: 'Press Me!',
    //   x: game.config.width / 2,
    //   y: 300
    // })
  }

  update () {
    this.road.moveLines()
    this.road.moveObject()
  }
}