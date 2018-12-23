var play = {
	preload: function() {  
		game.load.image("fondo", "assets/game/game.jpg");
		game.load.image("star", "assets/game/estrella.png");
		game.load.image("tree", "assets/game/arbol.png");
        game.load.spritesheet('player', 'assets/game/trineo.png', 179, 320);
        game.load.spritesheet('pause', 'assets/game/btnPause.png', 300,90);
	},
	
	create: function() { 
		game.add.tileSprite(0, 0, 1080, 1080, "fondo");
		game.physics.startSystem(Phaser.Physics.ARCADE);   
		
		this.add.button(60, 915, 'pause', this.pause, this, 1, 0, 2);
		
		scoreMessage = game.add.text(210, 388, points +"", {font: "Bold Arial", fill: '#383f5b'});
        scoreMessage.fontSize = 50;
		scoreMessage.anchor.setTo(0.5);

		player =  game.add.sprite(playerX, playerY, "player");
		game.physics.enable(player, Phaser.Physics.ARCADE);
	    player.body.collideWorldBounds = true;
		player.body.setSize(50, 100, 65, 100);


		
		stars = game.add.group();
		stars.physicsBodyType = Phaser.Physics.ARCADE;
		stars.enableBody = true;
		trees = game.add.group();
	    trees.physicsBodyType = Phaser.Physics.ARCADE;
		trees.enableBody = true;



		cursors = game.input.keyboard.createCursorKeys();

	},
	
	update: function(){ 
		
		stars.y += velocity;
		trees.y += velocity;
		count += velocity;
		if(count>= 500){
			count  = 0;
			this.createLine();
		}
		if (cursors.left.isDown)
		{
			this.left();
		}
		else{
			downL = false;
		}

		if (cursors.right.isDown)
		{
			this.right();
		}
		else{
			downR = false;
		}
		game.physics.arcade.overlap(player, stars, this.starCollision, null, this);
		game.physics.arcade.overlap(player, trees, this.treeCollision, null, this);
	},
	right: function(){  
		if(positionPlayerX[2] != player.position.x && !downR){
			downR = true;
			player.position.x += deltaX;
			playerPos += 1;
			playerPos %= 3;
		}
    },
	left: function(){  
		if(positionPlayerX[0] != player.position.x && !downL){
			downL = true;
			player.position.x -= deltaX;
			playerPos -= 1;
			if(playerPos < 0)
				playerPos = 2;
		}
    },
     
    pause: function(){
        game.state.start('menu');
    },

    starCollision: function(player, star){
    	star.kill();
		points += 10;
		scoreMessage.setText(points+"");
		if((points/10)%10 == 0){
			velocity+=2;
		}
    },

    treeCollision: function(player, tree){
		scores.enqueue(points, points);
		points = 0;
		velocity = 8;
	    game.state.start('score');   
    	
	},
	outOfBounds: function(obj){
		if(obj.position.y + stars.y > game.height){
			obj.kill();
		}
	},
	createLine: function(){
		var rnd = Math.random();
		var rnd2 = Math.floor((Math.random() * 3));
		var star;
		var tree1;
		var tree2;
		if(rnd <0.1) {
			if(!onlyOne){
				while(rnd2 == treePos){
					rnd2 = Math.floor((Math.random() * 3));
				}
			}else{
				while(playerPos != rnd2){
					rnd2 = Math.floor((Math.random() * 3));
				}
			}

			treePos = rnd2;
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			onlyOne = true;
		}else if(rnd < 0.15){
			if(!onlyOne){
				rnd2 = (treePos + 1)%3;
			}else{
				if(treePos == 1&& playerPos != 1){
					rnd2 = (playerPos + 1)%3;
				}else{
					rnd2 =treePos;
				}
				
			}
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			var tree2 = trees.create(positionTreeX[(rnd2+1)%3], -300 -stars.y, 'tree');

			treePos = (rnd2+2)%3;
			onlyOne = false;
		}else if(rnd < 0.2){
			if(!onlyOne){
				rnd2 = (treePos + 2)%3;
			}else{
				if(treePos == 1&& playerPos != 1){
					rnd2 = (playerPos + 2)%3;
				}else{
					rnd2 =treePos;
				}
			}
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			var tree2 = trees.create(positionTreeX[(rnd2+2)%3], -300 -stars.y, 'tree');

			treePos = (rnd2+1)%3;
			onlyOne = false;
		}else if(rnd < 0.25){
			if(!onlyOne){
				rnd2 = (treePos + 1)%3;
			}else{
				if(treePos == 1&& playerPos != 1){
					rnd2 = (playerPos + 1)%3;
				}else{
					rnd2 =treePos;
				}
			}
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			var tree2 = trees.create(positionTreeX[(rnd2+1)%3], -300 -stars.y, 'tree');

			treePos = (rnd2+2)%3;
			
			var star = stars.create(positionStarX[treePos], -300 -stars.y, 'star');
			onlyOne = false;
		}else if(rnd < 0.3){
			if(!onlyOne){
				rnd2 = (treePos + 2)%3;
			}else{
				if(treePos == 1 && playerPos != 1){
					rnd2 = (playerPos + 2)%3;
				}else{
					rnd2 =treePos;
				}
			}
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			var tree2 = trees.create(positionTreeX[(rnd2+2)%3], -300 -stars.y, 'tree');

			treePos = (rnd2+1)%3;
			
			var star = stars.create(positionStarX[treePos], -300 -stars.y, 'star');
			onlyOne = false;
		}else if(rnd < 0.4){
			if(!onlyOne){
				while(rnd2 == treePos){
					rnd2 = Math.floor((Math.random() * 3));
				}
			}else{
				while(playerPos != rnd2){
					rnd2 = Math.floor((Math.random() * 3));
				}
			}
			treePos = rnd2;
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			var star = stars.create(positionStarX[(rnd2+1)%3], -300 -stars.y, 'star');

			onlyOne = true;
		}else if(rnd < 0.5){
			if(!onlyOne){
				while(rnd2 == treePos){
					rnd2 = Math.floor((Math.random() * 3));
				}
			}else{
				while(playerPos != rnd2){
					rnd2 = Math.floor((Math.random() * 3));
				}
			}
			treePos = rnd2;
			var tree1 = trees.create(positionTreeX[rnd2], -300 -stars.y, 'tree');
			var star = stars.create(positionStarX[(rnd2+2)%3], -300 -stars.y, 'star');

			onlyOne = true;
		}else if(rnd <0.7){
			var star = stars.create(positionStarX[rnd2], -300 -stars.y, 'star');
			onlyOne = true;

		}

		if(star){
			star.checkWorldBounds = true;
			star.events.onOutOfBounds.add(this.outOfBounds, this)
		}
		if(tree1){
			tree1.checkWorldBounds = true;
			tree1.events.onOutOfBounds.add(this.outOfBounds, this)
		}
		if(tree2){
			tree2.checkWorldBounds = true;
			tree2.events.onOutOfBounds.add(this.outOfBounds, this)
		}
	}

}

