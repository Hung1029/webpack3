import $ from 'jquery';
import 'bootstrap';
import b from '../images/bird.jpg';
import s from '../images/squirrel.jpg';
import 'bootstrap';
import '../css/style.css';

$('#bird').attr("src",b);
$('#squirrel').attr("src",s);


$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
