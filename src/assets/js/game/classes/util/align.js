export class Align {
  static scaleToGameW(obj, game, per) {
    obj.displayWidth = game.config.width * per
    obj.scaleY = obj.scaleX
  }

  static center(obj, game) {
    obj.x = game.config.width / 2
    obj.y = game.config.height / 2
  }

  static centerH(obj, game) { obj.x = game.config.width / 2 }
  static centerV(obj, game) { obj.y = game.config.height / 2 }
}