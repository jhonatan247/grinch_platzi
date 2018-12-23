var score = {
	preload: function() {  
		game.load.image("fondo", "assets/score/score.jpg");
        game.load.spritesheet('menu', 'assets/score/btnMenu.png', 300,90);
	},
	
	create: function() { 
		game.add.tileSprite(0, 0, 1080, 1080, "fondo");  
		
		this.add.button(60, 915, 'menu', this.back, this, 1, 0, 2);
        
        var top10 = scores.getTop10();

        for(var i = 0; i< top10.length; i++){
            var m = game.add.text(210, (i*70)+250, top10[i] +"", {font: "Bold Arial", fill: '#383f5b'});
            m.fontSize = 40;
            m.anchor.setTo(0.5);
        }

	},
	
	update: function(){ 

	},
     
    back: function(){
        game.state.start('menu');
    }

}

