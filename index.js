
function getImg() {
    var imgArr = [];
for(var i =0; i< 10; i++ ) {
    var rnd = Math.floor(Math.random() * 100);
        if(!imgArr.includes(rnd) && imgArr.length < 10) {
        imgArr.push(rnd);
        var newUrl = 'https://picsum.photos/id/' + rnd + '/info';
        fetch(newUrl, {
            method: 'GET',
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
        })
        .then(response => response.json())
        .then(data => {
        images=data;
        var list = "";

        const imgElem = `<div class="mySlides fade"><img src=${data.download_url}><div class="author">${data.author}</div></div>`;
        list+= imgElem;
        document.getElementById('slideshow-container').innerHTML+= list;

        })
        .catch(err => console.error(err));
    }
}
}

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'prev'){
        plusSlides(-1);
     } else if (e.target && e.target.id== 'next') {
        plusSlides(1);
     }
 });



    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      if(document.querySelectorAll('img').length > 2) {
        slides[slideIndex-1].style.display = "block"; 
      }
      
    }

getImg();
