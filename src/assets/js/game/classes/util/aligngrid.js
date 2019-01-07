export class AlignGrid {
  constructor (config) {
    this.config = config
    if (!config.scene) {
      console.log('missing scene')
      return
    }
    if (!config.rows) { config.rows = 5}
    if (!config.cols) { config.cols = 5}
    if (!config.height) {config.height = game.config.height }
    if (!config.width) {config.width = game.config.width }

    this.scene = config.scene
    
    //  cells dimensions
    this.cw = config.width / config.cols
    this.ch = config.height / config.rows
  }

  show () {
    this.graphics = this.scene.add.graphics()
    this.graphics.lineStyle(2, 0xff0000)

    for (var i = 0; i < this.config.width; i += this.cw) {
      this.graphics.moveTo(i, 0)
      this.graphics.lineTo(i, this.config.height)
    }

    for (var i = 0; i < this.config.height; i += this.ch) {
      this.graphics.moveTo(0, i)
      this.graphics.lineTo(this.config.width, i)
    }

    this.graphics.strokePath()
  }

  placeAt(cellX, cellY, obj) {
    obj.x = this.cw * cellX + this.cw / 2
    obj.y = this.ch * cellY + this.ch / 2
  }

  placeAtIndex(index, obj) {
    const y = Math.floor(index / this.config.cols)
    const x = index - (y * this.config.cols)

    this.placeAt(x, y, obj)
  }

  showNumbers () {
    this.show()
    let count = 0
    for (var i = 0; i < this.config.rows; i++) {
      for (var j = 0; j < this.config.cols; j++) {
        const cellNumber = this.scene.add.text(0, 0, count, { color: '#ff0000'})
        cellNumber.setOrigin(0.5, 0.5)
        this.placeAtIndex(count, cellNumber)
        count += 1
      }
    }
  }
}