var students = ['Paul', 'Liz', 'Sam', 'Zach', 'Nathan', 'Robby', 'Jeremy', 'Eric', 'Chris', 'Charlie', 'Natalie', 'Matthew', 'Brooks', 'Anthony', 'Scott', 'Joe', 'Altamir', 'Mark', 'Kenzie', 'Amber'];

var i = 0;

$(document).ready(function(){
	$('.container').on('click', '.display-name', add);

	$('.container').on('click', '.hide-name', remove);

});

function add() {
	if (i < students.length) {
		i=i;
	} else {
		i = 0; 
		$('.individual').remove();
	}
	$('.container').append('<div class=\'individual\'></div>');
	var $el = $('.container').children().last();

	$el.append('<p>' + students[i] + '</p>');
	$el.append('<button class=\'hide-name\'>Remove this student</button>');
	$el.hide().slideDown('slow');
	
	i++
}

// var clicks = 0 

function remove() {
	$(this).parent().fadeOut();
	// Trying to get Pro Mode: 
	// clicks++;
	// if (clicks%2 !== 0) {
	// 	$(this).parent().animate({opacity: .05});
	// } else{
	// 	$(this).parent().animate({opacity: 1.0});
	// }
}

//Playing around with this to see if we can make the opacity animate work. 
// $(this).parent().toggleClass('.individual', remove)