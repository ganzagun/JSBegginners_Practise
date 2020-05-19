document.querySelector('body').style.backgroundColor="red";
document.querySelector('button').addEventListener('click' , randomColor)


function randomColor(){
	var x = Math.random() * 256;
    var y = Math.random() * 256;
    var z = Math.random() * 256;
document.querySelector('body').style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}