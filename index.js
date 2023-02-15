// Get modals
var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");
var modal4 = document.getElementById("modal-4");
var modal5 = document.getElementById("modal-5");
var modal6 = document.getElementById("modal-6");
var modal7 = document.getElementById("modal-7");

// Get images
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var img3 = document.getElementById("img-3");
var img4 = document.getElementById("img-4");
var img5 = document.getElementById("img-5");
var img6 = document.getElementById("img-6");
var img7 = document.getElementById("img-7");

// Get modal images
var modalImg1 = document.getElementById("modal-img-1");
var modalImg2 = document.getElementById("modal-img-2");
var modalImg3 = document.getElementById("modal-img-3");
var modalImg4 = document.getElementById("modal-img-4");
var modalImg5 = document.getElementById("modal-img-5");
var modalImg6 = document.getElementById("modal-img-6");
var modalImg7 = document.getElementById("modal-img-7");

// Get spans
var span1 = document.getElementById("span-1");
var span2 = document.getElementById("span-2");
var span3 = document.getElementById("span-3");
var span4 = document.getElementById("span-4");
var span5 = document.getElementById("span-5");
var span6 = document.getElementById("span-6");
var span7 = document.getElementById("span-7");

// Image onclicks
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
};

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
};

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
};

img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
};

img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
};

img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
};

img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
};

// Span onclicks
span1.onclick = function() { 
    modal1.style.display = "none";
};

span2.onclick = function() { 
    modal2.style.display = "none";
};

span3.onclick = function() { 
    modal3.style.display = "none";
};

span4.onclick = function() { 
    modal4.style.display = "none";
};

span5.onclick = function() { 
    modal5.style.display = "none";
};

span6.onclick = function() { 
    modal6.style.display = "none";
};

span7.onclick = function() { 
    modal7.style.display = "none";
};
