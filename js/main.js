//Se crea el juego
var game = new Phaser.Game(1080, 1080, Phaser.CANVAS, "container");

//se añaden los estados del juego
game.state.add('play', play);
game.state.add('menu', menu);
game.state.add('score', score);
game.state.add('about', about);

var index =0;
var main = {
	preload: function() {  
        //Cargando los recursos del estado
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.load.audio("sound", "sounds/main.mp3");
	},
	
	create: function() { 
        //Se añade la música
        sound =game.add.audio("sound");
    },
    update:function(){
        game.state.start('menu');
        sound.play("", 0,1,true);
    
    }
}
//se añade el estado main
game.state.add('main', main);   
//se inicia el estado main
game.state.start('main');