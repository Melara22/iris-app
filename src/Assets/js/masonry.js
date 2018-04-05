/*eslint-env jquery*/ 
var grid = document.querySelector('.cards');
var msnry = new Masonry( grid, {
	itemSelector: '.grid-item',
	columnWidth: 20
          
});