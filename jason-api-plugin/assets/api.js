(function($){

$(document).ready(function(){
   var jsonUrl = myScript.pluginsUrl + '/jason-api-plugin/assets/data.json';
   
    $.getJSON(jsonUrl, function(data){

        var mydataArray=data.toplists["575"];

        mydataArray.sort((a, b) => {
            return a.position - b.position;
        });

        for (let i = 0; i < mydataArray.length; i++) {

            var html = "<div class=' row casino-list-item  casino-list-item"+i+"'>"+
            "<h3 class=' mobile pt-2 text-center section-title'>Casino</h3>"+
            "<div class='col-12 col-sm-3 text-center casino-img-container"+i+"'><div><a class='casino-url"+i+"' href='' id='w3s'>Review</a></div></div>" + 
            "<h3 class=' mobile pt-2 text-center section-title'>Bonus</h3>"+
            "<div class='col-12 col-sm-3 text-center'><div class='ratings-container rating"+i+"'></div><div class='bonus"+i+"'></div></div>" + 
            "<h3 class=' mobile pt-2 text-center section-title'>Features</h3>"+
            "<div class='col-12 col-sm-3 text-center'><div ><ul class='features features"+i+"'></ul></div></div>" +
            "<h3 class=' mobile pt-2 text-center section-title'>Play</h3>"+   
            "<div class='col-12 col-sm-3 text-center'> <div class='play-btn'> <a class='play-url play-url"+i+"' href='' >PLAY NOW</a> </div> <div class='terms terms"+i+"'></div> </div>" +
                '</div>' +
            '';
            
            $('.casino-lists').prepend(html);

            var myImage = $('<img/>');

            myImage.attr('class', "casino-img casino-image"+i);
            myImage.attr('src', '');

            $('.casino-img-container'+i).prepend(myImage);

            $('.casino-image'+i).attr("src", mydataArray[i].logo);
            $('.casino-url'+i).attr("href",myScript.siteUrl+'/'+mydataArray[i].brand_id);

            
           
            $('.bonus'+i).html(mydataArray[i].info.bonus);


            var featuresArray =mydataArray[i].info.features
            
            for (let y = 0; y < featuresArray.length; y++) {
                var myli = $('<li></li>');

                myli.html(featuresArray[y]);
                
                $('.features'+i).prepend(myli);
            }
           

            $(".play-url"+i).attr("href",myScript.siteUrl+'/'+mydataArray[i].play_url);
            
            $('.terms'+i).html(mydataArray[i].terms_and_conditions);
                
              var ratingNumber = mydataArray[i].info.rating;
              console.log(ratingNumber);

              

            //   function CreateRatingStars() {
            //     $('.rating'+i).html(ratingStar);
            //     $('.rating'+i).html(ratingStar);
            //   }

              for (let x = 0; x < ratingNumber; x++) {

                var ratingStar = $('<div></div>');
                ratingStar.attr('class', "rating-star");
                $('.rating'+i).prepend(ratingStar);
               
              }



                 


          }
          


    }).fail(function(){
        console.log('kalimera')
    })

  

    
});
})(jQuery);