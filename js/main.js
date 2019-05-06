$(document).ready(function(){
    const deadline = new Date("May 6, 2019 15:00:00").getTime(); 
    var x = setInterval(function() { 
        let now = new Date().getTime(); 
        let t = deadline - now; 
        let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        let seconds = Math.floor((t % (1000 * 60)) / 1000); 
        $("#hour").html(hours); 
        $("#minute").html(minutes);  
        $("#second").html(seconds);  
        if (t < 0) { 
            clearInterval(x); 
            $("#demo").html("TIME UP"); 
            $("#hour").html('0'); 
            $("#minute").html('0');  
            $("#second").html('0'); 
        }
    }
    , 1000);    
    let img1 = 0;
    let img2 = 1;
    let img3 = 2;

    let images = [];
    images[0] = `<img src="img/person1.png" class="imgCar" name="img1" alt="">
    <p class="name">name Asif</p>`;
    images[1] = `<img src="img/person2.png" class="imgCar" name="img2" alt="">
    <p class="name">name Sakib</p>`;
    images[2] = `<img src="img/person3.png" class="imgCar" name="img3" alt="">
    <p class="name">name Sakil</p>`;
    console.log($(".conteiner").width);
    let imgDiv1 = $("#caresol1");
    let imgDiv2 = $("#caresol2");
    let imgDiv3 = $("#caresol3");

    var x = setInterval(function() {
        imgDiv1.html(images[img1]);
        if (img1 < images.length-1) { 
            img1++;
        }
        else{
            img1 = 0;
        }
    }
    , 10000);
    var y = setInterval(function() {
        imgDiv2.html(images[img2]);
        if (img2 < images.length-1) {
            img2++;
        }
        else{
            img2 = 0;
        }
    }
    , 10000);
    var z = setInterval(function() {
        imgDiv3.html(images[img3]);
        if (img3 < images.length-1) { 
            img3++;
        }
        else{
            img3 = 0;
        }
    }
    , 10000);

    imgDiv1.hover(function() {
        $( "#name1" ).css( "z-index", 10);
    });
    imgDiv1.mouseleave(function() {
        $( "#name1" ).css( "z-index", -1);
    });
    imgDiv2.hover(function() {
        $( "#name2" ).css( "z-index", 10);
    });
    imgDiv2.mouseleave(function() {
        $( "#name2" ).css( "z-index", -1);
    });
    imgDiv3.hover(function() {
        $( "#name3" ).css( "z-index", 10);
    });
    imgDiv3.mouseleave(function() {
        $( "#name3" ).css( "z-index", -1);
    });
});