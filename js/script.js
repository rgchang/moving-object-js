/* js goes here */

//var head_object = document.head;
//var body_object = document.body;

var body_object = document.getElementsByTagName('body')[0],
	div_object = document.querySelector('main div'),
	ship_object = document.querySelector('main div:last-child');

body_object.addEventListener('keydown', function(evt){
	//console.log(evt.keyCode);
	var shipX = parseInt(ship_object.style.left);
		shipY = parseInt(ship_object.style.top);
	if(evt.keyCode === 37){
		shipX = shipX - 5;
		ship_object.style.left = shipX + '%';
	} else if(evt.keyCode === 39){
		shipX = shipX + 5;
		ship_object.style.left = shipX + '%';
	} else if(evt.keyCode === 38){
		shipY = shipY - 5;
		ship_object.style.top = shipY + '%';
	} else if(evt.keyCode === 40){
		shipY = shipY + 5;
		ship_object.style.top = shipY + '%';
	}
});

body_object.addEventListener('click', function(evt){
	//console.log(evt);
	var mouseX = evt.x,
		mouseY = evt.y;
	//console.log(mouseX + ', ' + mouseY);
	moveBall(mouseX, mouseY);
});

function make_ship(){
	var ship_width = '100px',
		ship_height = '25px',
		ship_color = 'blue',
		ship_x = '50%',
		ship_y = '75%',
		ship_position = 'absolute',
		ship_transform = 'translate3d(-50%, -50%, 0)',
		ship_slide = 'all 1000ms ease-in-out';

	ship_object.style.width = ship_width;
	ship_object.style.height = ship_height;
	ship_object.style.backgroundColor = ship_color;
	ship_object.style.left = ship_x;
	ship_object.style.top = ship_y;
	ship_object.style.position = ship_position;
	ship_object.style.transform = ship_transform;
	ship_object.style.transition = ship_slide;
}

make_ship();

function moveBall(x, y){
	div_object.style.left = x + 'px';
	div_object.style.top = y + 'px';
	div_object.style.backgroundColor = 'hsla(' + (x + y) + ', 50%, 50%, 1)';
}

function make_ball(){
	var ball_width = '50px',
		ball_height = '50px',
		ball_color = 'red',
		ball_radius = '100%',
		ball_x = '100px',
		ball_y = '100px',
		ball_position = 'absolute',
		ball_transform = 'translate3d(-50%, -50%, 0)',
		ball_slide = 'all 500ms ease-in-out';

	div_object.style.width = ball_width;
	div_object.style.height = ball_height;
	div_object.style.backgroundColor = ball_color;
	div_object.style.borderRadius = ball_radius;
	div_object.style.left = ball_x;
	div_object.style.top = ball_y;
	div_object.style.position = ball_position;
	div_object.style.transform = ball_transform;
	div_object.style.transition = ball_slide;
}

make_ball();