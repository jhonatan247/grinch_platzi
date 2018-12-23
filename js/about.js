var about = {
	preload: function() {  
		game.load.image("fondo", "assets/about/about.png");
        game.load.spritesheet('menu', 'assets/score/btnMenu.png', 300,90);
	},
	
	create: function() { 
		game.add.tileSprite(0, 0, 1080, 1080, "fondo");  
		
		this.add.button(60, 915, 'menu', this.back, this, 1, 0, 2);
        

	},
	
	update: function(){ 

	},
     
    back: function(){
        game.state.start('menu');
    }

}

