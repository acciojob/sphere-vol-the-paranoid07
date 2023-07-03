function volume_sphere() {
    //Write your code here
	   const form = document.getElementById('MyForm');
    const radius = form["radius"].value;
    const volume = 4*Math.PI*radius*radius;
    form["volume"].value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
