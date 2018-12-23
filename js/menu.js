var menu = {
    
    preload: function(){
        game.load.spritesheet('play', 'assets/menu/btnPlay.png', 300,90);
        game.load.spritesheet('score', 'assets/menu/btnScore.png', 300,90);
        game.load.spritesheet('about', 'assets/menu/btnAbout.png', 300,90);
        game.load.spritesheet('controls', 'assets/menu/btnControls.png', 300,90);
        game.load.image('fondo', 'assets/menu/menu.jpg');
    },
    
    create: function(){
        game.add.tileSprite(0, 0, 1080, 1080, "fondo");


        this.add.button(60, 232, 'play', this.play, this, 1, 0, 2);
        this.add.button(60, 388, 'score', this.score, this, 1, 0, 2);
        this.add.button(60, 549, 'controls', this.controls, this, 1, 0, 2);
        this.add.button(60, 915, 'about', this.about, this, 1, 0, 2);
        
        
    },

    play: function(){
        game.state.start('play');
    },

    score: function(){
        game.state.start('score');
    },

    about: function(){
        game.state.start('about');
    },

    controls: function(){
        game.state.start('controls');
    }
};