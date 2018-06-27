var skirtPic = document.querySelector('img[name="skirt"]');
var redSkirt = document.querySelector('img[name="rskirt"]');
var miniDress = document.querySelector('img[name="mdress"]');
var shirt = document.querySelector('img[name="shirt"]');

skirtPic.addEventListener("mouseover", function(){
    this.src = "assets/img/clothing-pics/denim.jpeg";
});

skirtPic.addEventListener("mouseout", function(){
    this.src = "assets/img/clothing-pics/yellow-skirt.jpeg";
});

redSkirt.addEventListener("mouseover", function(){
    this.src = "assets/img/clothing-pics/gold.jpeg";
});

redSkirt.addEventListener("mouseout", function(){
    this.src = "assets/img/clothing-pics/red-skirt.jpeg";
});

miniDress.addEventListener("mouseover", function(){
    this.src = "assets/img/clothing-pics/tartan.jpeg";
});

miniDress.addEventListener("mouseout", function(){
    this.src = "assets/img/clothing-pics/floral-dress.jpeg";
});

shirt.addEventListener("mouseover", function(){
    this.src = "assets/img/clothing-pics/crane.jpeg";
});

shirt.addEventListener("mouseout", function(){
    this.src = "assets/img/clothing-pics/demin-shirt.jpeg";
});



