
$(function(){

  
    $('.akpeil').click(function()
    {
        $(".photo").attr("src","akpeil.jpg");
        $('.name').text("Akpeil");
       
    });
    $('.shadiyar').click(function()
    {
        $(".photo").attr("src","shadiyar.jpg");
      
        $('.name').text("Shadiyar");
    });
    $('.adilkhan').click(function()
    {
      $(".photo").attr("src","adilkhan.jpg");
      
      $('.name').text("Adilkhan");
    });
    $('.asset').click(function()
    {
      $(".photo").attr("src","asset.jpg");
      
      $('.name').text("Asset");
    });
    $('.image').width('100%');
    $('#ipko').width('50%');
    $('#ipko').height('50%');
   
    var minHeight = 0;
    var heights = new Array();
    setTimeout(function () {
      setImageHeights();
    }, 250);

    function setImageHeights() {
      $('.photava').each(function (index) {
        height = $(this).height();
        //console.log(index + ": " + height);
        if (height > 30) {
          heights.push(height);
        }
      });
      minHeight = Math.min.apply(Math, heights);
      //console.log('minHeight ' + minHeight);

      $('.photava').css('height', minHeight);
      
    };
    $('#nothing').click(function()
    {
      alert('Дым жоқ дедім ғо');
    });
    $(".like-button").click(function(){
      var like_counter=$(this).find(".like-counter");
      var likes=parseInt(like_counter.text());
      if($(this).hasClass('liked'))
      {
        like_counter.text(likes-1);

        $(this).find($(".heart-icon")).addClass('red');
        $(this).find($(".heart-icon")).removeClass('green');
        $(this).find($(".like-counter")).addClass('red');
        $(this).find($(".like-counter")).removeClass('green');
      }
      else
      {
        like_counter.text(likes+1);
        $(this).find($(".heart-icon")).addClass('green');
        $(this).find($(".heart-icon")).removeClass('red');
        $(this).find($(".like-counter")).addClass('green');
        $(this).find($(".like-counter")).removeClass('red');
      }
      $(this).toggleClass('liked');
      //Todo : send likes to server

    });
    
    
    $( ".like-button" ).hover(
      function() {

        $(this).find($(".heart")).addClass('black');
      }, function() {
       
        $(this).find($(".heart")).removeClass('black');
      }
    );
     
    $( ".like-button" ).hover(function() {
      $( this ).fadeOut( 100 );
      $( this ).fadeIn( 500 );
    });
    $('.login').click(function()
    {
      if($('.input-login').is(":visible"))
        $('.input-login').hide();
        else
          $('.input-login').show();
    });
   


});