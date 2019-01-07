import style from "./main.css"

import 'phaser'
import { SceneMain } from './assets/js/game/main'
import { Model } from './assets/js/game/classes/models/model'
import { Constants } from './assets/js/game/classes/constants'

let isMobile = navigator.userAgent.indexOf('Mobile')
if (isMobile === -1) { isMobile = navigator.userAgent.indexOf('Tablet') }

let config

if (isMobile === -1) {
  config = {
      type: Phaser.AUTO,
      parent: 'game',
      width: 480,
      height: 640,
      scene: [SceneMain]
  } 
} else {
  config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [SceneMain]
  } 
}


window.emitter = null
window.controller = null
window.model = new Model()
window.G = new Constants()
window.game = new Phaser.Game(config)