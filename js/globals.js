class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 
  
class PriorityQueue { 
    constructor() 
    { 
        this.items = []; 
    } 
	
	enqueue(element, priority) 
	{ 
		var qElement = new QElement(element, priority); 
		var contain = false; 
		for (var i = 0; i < this.items.length; i++) { 
			if (this.items[i].priority > qElement.priority) { 
				this.items.splice(i, 0, qElement); 
				contain = true; 
				break; 
			} 
		} 
		if (!contain) { 
			this.items.push(qElement); 
		} 
	} 
	dequeue() 
	{ 
		if (this.isEmpty()) 
			return "Underflow"; 
		return this.items.shift(); 
	} 
	front() 
	{ 
		if (this.isEmpty()) 
			return "No elements in Queue"; 
		return this.items[0]; 
	} 
	rear() 
	{ 
		if (this.isEmpty()) 
			return "No elements in Queue"; 
		return this.items[this.items.length - 1]; 
	} 
	isEmpty() 
	{ 
		return this.items.length == 0; 
	} 
	getTop10() 
	{ 

		var top = []; 
		for (var i = this.items.length -1; i >= this.items.length - 11 && i >= 0; i--) 
			top.push(this.items[i].element); 
		return top; 
	} 

} 



var player;
var playerX = 610;
var playerY = 711;
var points = 0;
var scoreMessage;

var deltaX = 187;
var positionPlayerX = [423,610,797];
var positionStarX = [490, 677, 864];
var positionTreeX = [434, 621, 808];
var velocity = 8;
var count = 0

var downL = false;
var downR = false;

var onlyOne = false;
var treePos = 0;
var playerPos = 1;

var cursors;

var stars;
var trees;

var right = false;
var left = false;

var sound;

var inputDown = false;


var scores = new PriorityQueue();

function vacio(){}
