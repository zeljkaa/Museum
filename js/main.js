var current = document.getElementById("current");
var slike = document.getElementsByClassName("tumbnail");

for(i=0; i<slike.length; i++) {
	slike[i].addEventListener("click", display);
}
	function display() {
		var sl =this.getAttribute("src");
		current.setAttribute('src',sl);
	}
