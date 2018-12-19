import style from "./main.css"

import 'phaser'
import { SceneMain } from './assets/js/game/main'

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 480,
    height: 640,
    scene: [SceneMain]
};

var game = new Phaser.Game(config)