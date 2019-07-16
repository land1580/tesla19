$(document).ready(function(){
    $('.smallCarBox').hide();
    $('.sidebarBtn').hide();

    $(window).on('resize', function()
    {
        if ($(window).width() < 685){
            $('.sidebarBtn').fadeIn(300);
        }
        else{
            $('.sidebarBtn').hide();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 40 || $(window).width() < 695){	
            $('.sidebarBtn').fadeIn(300);	
            $('.sidebar').fadeIn(250);		
        }
        else{
            $('.sidebarBtn').fadeOut(800); 			
            $('.sidebar').fadeOut(750);
        }
        if($(this).scrollTop() > 150){
            $('#intro img').fadeOut(450);
            $('#intro').css({'box-shadow' : '0px 0px 0px'});
        }
        else{
            $('#intro img').fadeIn(250);
            $('#intro').css({'box-shadow' : '0px -12px 22px inset'});
        }
    });

      $('.sidebarBtn').click(function(){	
          $('.sidebar').toggleClass('active');
          $('.sidebarBtn').toggleClass('toggle');
      });
      $('.sidebar ul li a').click(function(){
          $('.sidebar').toggleClass('active');
          $('.sidebarBtn').toggleClass('toggle');
      });
    $('.sidebar ul li a, header a').on('click',function(event){
        $('.smallCarBox, .blkInt, .whtInt, .crmInt').hide();
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                    scrollTop: $(hash).offset().top}, 2000, function(){
                    window.location.hash = hash;
              });
        }
    });

    $('#m3 .designBtn').click(function(){	
          $('#m3 .design, #m3 .arrowT, #m3 .arrowB').toggleClass('toggle');
      });
    $('#mS .designBtn').click(function(){	
          $('#mS .design, #mS .arrowT, #mS .arrowB').toggleClass('toggle');
      });
    $('#mX .designBtn').click(function(){	
          $('#mX .design, #mX .arrowT, #mX .arrowB').toggleClass('toggle');
      });
    $('#mR .designBtn').click(function(){	
          $('#mR .design, #mR .arrowT, #mR .arrowB').toggleClass('toggle');
      });

    $('#m3 button, #m3 table').click(function(){	
          $('#m3 table').toggleClass('toggle');
      });
      $('#mS button, #mS table').click(function(){	
          $('#mS table').toggleClass('toggle');
      });
      $('#mX button, #mX table').click(function(){	
          $('#mX table').toggleClass('toggle');
      });
      $('#mR button, #mR table').click(function(){	
          $('#mR table').toggleClass('toggle');
      });

    $('.m3btn').click(function(e){
        event.preventDefault();
        var href = $(this).attr('href');
            $('#mkM3').show(function(){
            window.location = href;
        });
        $('.whtInt, .blkInt').show();
        $('.crmInt').hide();
        $('#m3 .design, #m3 .arrowT, #m3 .arrowB').toggleClass('toggle');
        });
    $('.mSbtn').click(function(e){
        event.preventDefault();
        var href = $(this).attr('href');
            $('#mkMS').show(function(){
            window.location = href;
        });
        $('.blkInt, .whtInt, .crmInt').show();
        $('#mS .design, #mS .arrowT, #mS .arrowB').toggleClass('toggle');
        });
    $('.mXbtn').click(function(e){
        event.preventDefault();
        var href = $(this).attr('href');
            $('#mkMX').show(function(){
            window.location = href;
        });
        $('.blkInt, .whtInt, .crmInt').show();
        $('#mX .design, #mX .arrowT, #mX .arrowB').toggleClass('toggle');
        });
    $('.mRbtn').click(function(e){
        event.preventDefault();
        var href = $(this).attr('href');
        $('#mkMR').show(function(){
            window.location = href;
        });
            $('.whtInt').show();
        $('.blkInt, .crmInt').hide();
        $('#mR .design, #mR .arrowT, #mR .arrowB').toggleClass('toggle');
        });

        $('#mkM3 .redExt').click(function(){
        $('.exteriorModel3').css({
            'background' : 'url("img/img15.png")',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center',
            'background-size' : '120%'
        });
    });
    $('#mkM3 .bluExt').click(function(){
        $('.exteriorModel3').css({
            'background' : 'url("img/img16.png")',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center',
            'background-size' : '120%'
        });
    });
    $('#mkM3 .whtExt').click(function(){
        $('.exteriorModel3').css({
            'background' : 'url("img/img17.png")',
            'background-repeat' : 'no-repeat',
            'background-position' : 'center',
            'background-size' : '120%'
        });
    });
    $('#mkM3 .blkInt').click(function(){
        $('.interiorModel3').css({
            'background' : 'url("img/img18.png")',
            'background-position' : 'left',		
            'background-repeat' : 'no-repeat',
            'background-size' : '90%'
        });						
    });
    $('#mkM3 .whtInt').click(function(){
        $('.interiorModel3').css({
            'background' : 'url("img/img19.png")',
            'background-position' : 'left',		
            'background-repeat' : 'no-repeat',
            'background-size' : '90%'
        });
    });

        $('#mkMS .redExt').click(function(){
        $('.exteriorModelS').css({
            'background' : 'url("img/img20.png") -77% 41%',
            'background-repeat' : 'no-repeat',
            'background-size' : '90%'
        });
    });
        $('#mkMS .bluExt').click(function(){
        $('.exteriorModelS').css({
            'background' : 'url("img/img21.png") -85% 41%',
            'background-repeat' : 'no-repeat',
            'background-size' : '95%'
        });
    });
        $('#mkMS .whtExt').click(function(){
        $('.exteriorModelS').css({
            'background' : 'url("img/img22.png") -65% 42%',
            'height' : '85vh',
            'background-repeat' : 'no-repeat',
            'background-size' : '92%'
        });
    });
        $('#mkMS .blkInt').click(function(){
        $('.interiorModelS').css({
            'background' : 'url("img/img23.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '75%'
        });
    });
        $('#mkMS .whtInt').click(function(){
        $('.interiorModelS').css({
            'background' : 'url("img/img24.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '75%',
        });
    });
        $('#mkMS .crmInt').click(function(){
        $('.interiorModelS').css({
            'background' : 'url("img/img25.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '75%'
        });
    });

        $('#mkMX .redExt').click(function(){
        $('.exteriorModelX').css({
            'background' : 'url("img/img26.png")',
            'height' : '86vh',
            'background-repeat' : 'no-repeat',
            'background-position' : 'left',
            'background-size' : '80%'
        });
    });
        $('#mkMX .bluExt').click(function(){
        $('.exteriorModelX').css({
            'background' : 'url("img/img27.png") 20% 50%',
            'height' : '86vh',
            'background-repeat' : 'no-repeat',
            'background-size' : '67%'
        });
    });
        $('#mkMX .whtExt').click(function(){
        $('.exteriorModelX').css({
            'background' : 'url("img/img28.png")',
            'height' : '83vh',
            'background-repeat' : 'no-repeat',
            'background-position' : '2vw',
            'background-size' : '73%'
        });
    });
        $('#mkMX .blkInt').click(function(){
        $('.interiorModelX').css({
            'background' : 'url("img/img29.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '115%'
        });
    });
        $('#mkMX .whtInt').click(function(){
        $('.interiorModelX').css({
            'background' : 'url("img/img30.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '107%'
        });
    });
        $('#mkMX .crmInt').click(function(){
        $('.interiorModelX').css({
            'background' : 'url("img/img31.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '115%'
        });
    });

    $('#mkMR .bluExt').click(function(){
        $('.exteriorModelR').css({
            'background' : 'url("img/img32.png")',
            'background-repeat' : 'no-repeat',
            'background-position' : '-3vw',
            'background-size' : '117%'
        });
    });
    $('#mkMR .redExt').click(function(){
        $('.exteriorModelR').css({
            'background' : 'url("img/img33.png")',
            'background-repeat' : 'no-repeat',
            'background-position' : '-3vw',
            'background-size' : '117%'
        });
    });
    $('#mkMR .whtExt').click(function(){
        $('.exteriorModelR').css({
            'background' : 'url("img/img34.png")',
            'background-repeat' : 'no-repeat',
            'background-position' : '-3vw',
            'background-size' : '117%'
        });
    });
        $('#mkMR .whtInt').click(function(){
        $('.interiorModelR').css({
            'background' : 'url("img/img35.jpg") 0% 50%',
            'background-repeat' : 'no-repeat',
            'background-size' : '90%'
        });
    });
});