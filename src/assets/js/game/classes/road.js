import { Align } from './util/align'

export class Road extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene)
    this.scene = config.scene
    this.game = this.scene.game

    this.back = this.scene.add.image(0, 0, 'road')
    this.add(this.back)
    this.scene.add.existing(this)
    
    Align.scaleToGameW(this.back, this.game, 0.5)
    this.setSize(this.back.displayWidth, this.game.config.height)

    this.lineGroup = this.scene.add.group()
    this.count = 0

    this.car = this.scene.add.sprite(this.displayWidth / 4, this.game.config.height * 0.9, "cars")
    Align.scaleToGameW(this.car, this.game, 0.10)
    this.add(this.car)

    this.back.setInteractive()
    this.back.on('pointerdown', this.changeLanes, this)

    this.addObject()
  }

  changeLanes () {
    if (this.car.x > 0) {
      this.car.x = - this.displayWidth / 4
    } else {
      this.car.x = this.displayWidth / 4
    }
  }

  makeLines () {
    this.vSpace = this.displayHeight / 10

    for (let i = 0; i < 20; i++) {
      const line = this.scene.add.image(this.x, this.vSpace * i, 'line')
      line.oy = line.y
      this.lineGroup.add(line)
    }
  }

  moveLines () {
    this.lineGroup.children.iterate(function(child) {
      child.y += this.vSpace / 20
    }.bind(this))
    this.count++
    if (this.count == 20) {
      this.count = 0
      this.lineGroup.children.iterate(function(child) {
        child.y = child.oy
      }.bind(this))
    }
  }

  addObject () {
    const objs = [
      {
        key: 'pcar1',
        speed: 10,
        scale: 0.10
      },
      {
        key: 'pcar2',
        speed: 12,
        scale: 0.10
      },
      {
        key: 'cone',
        speed: 20,
        scale: 0.05
      },
      {
        key: 'barrier',
        speed: 20,
        scale: 0.08
      },
    ]
    const obj = objs[Math.floor(Math.random() * objs.length)]
    this.object = this.scene.add.sprite(- this.displayWidth / 4, -100, obj.key)
    this.object.speed = obj.speed
    const lane = Math.random() * 100
    if (lane > 50) { this.object.x = this.displayWidth / 4}
    Align.scaleToGameW(this.object, this.game, obj.scale)
    this.add(this.object)
  }

  moveObject () {
    this.object.y += this.vSpace / this.object.speed
    if (this.object.y > this.game.config.height + 100) {
      this.object.destroy()
      this.addObject()
    }
  }
}