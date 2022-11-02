(function($){

$(document).ready(function(){
   var jsonUrl = myScript.pluginsUrl + '/jason-api-plugin/assets/data.json';
   console.log(jsonUrl);
   
    $.getJSON(jsonUrl, function(data){

        console.log(data);
        console.log(data.toplists["575"]);
        console.log(data.toplists["575"][1].brand_id);
        console.log(data.toplists["575"][1].logo);
        console.log('THIS IS THE LENGHT'+data.toplists["575"].length);

        var mydataArray=data.toplists["575"];

        console.log(mydataArray);

        mydataArray.sort((a, b) => {
            return a.position - b.position;
        });

        console.log(mydataArray);







        for (let i = 0; i < mydataArray.length; i++) {

            var rowCas = $("<div></div>").addClass("row  casino-list-item");


            var html = "<div class='row  casino-list-item"+i+"'>"+
            "<div class='col-3 text-center casino-img-container"+i+"'><a class='casino-url"+i+"' href='' id='w3s'>Review</a></div>" + 
            "<div class='col-3 text-center'><div class='rating"+i+"'></div><div class='bonus"+i+"'></div></div>" + 
            "<div class='col-3 text-center'><div ><ul class='features features"+i+"'></ul></div></div>" +
                "<div class='col-3 text-center'> <div class='play-btn'> <a class='play-url play-url"+i+"' href='' >PLAY NOW</a> </div> <div class='terms terms"+i+"'></div> </div>" +
                '</div>' +
            '';
            
            $('.casino-lists').prepend(html);

            var myImage = $('<img/>');

            myImage.attr('class', "casino-img casino-image"+i);
            myImage.attr('src', '');







            $('.casino-img-container'+i).prepend(myImage);

            $('.casino-image'+i).attr("src", mydataArray[i].logo);
            $('.casino-url'+i).attr("href",myScript.siteUrl+'/'+mydataArray[i].brand_id);
            $('.rating'+i).html(mydataArray[i].info.rating);
            $('.bonus'+i).html(mydataArray[i].info.bonus);


            var featuresArray =mydataArray[i].info.features
            
            for (let y = 0; y < featuresArray.length; y++) {
                var myli = $('<li></li>');

                myli.html(featuresArray[y]);
                
                $('.features'+i).prepend(myli);
            }
           

            $(".play-url"+i).attr("href",myScript.siteUrl+'/'+mydataArray[i].play_url);
            
            $('.terms'+i).html(mydataArray[i].terms_and_conditions);
                console.log(mydataArray[i].info.rating);


          }

       










    }).fail(function(){
        console.log('kalimera')
    })
    
});
})(jQuery);