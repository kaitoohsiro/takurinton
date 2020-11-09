$(function(){
  $('.pien-eye-left').on('click', function(){
    $(this).clearQueue()
    $(this).css('display', 'none')
    $('.pien-eye-left-after').css('display', 'block')
  
    $(this).delay(100).queue(function(){
        $(this).css('display', 'block')
        $('.pien-eye-left-after').css('display', 'none')  
    })
  })
  
  
  $('.pien-eye-right').on('click', function(){
    $(this).clearQueue()
    $(this).css('display', 'none')
    $('.pien-eye-right-after').css('display', 'block')
  
    $('.pien-eye-right').delay(100).queue(function(){
        $(this).css('display', 'block')
        $('.pien-eye-right-after').css('display', 'none')   
    })
  })
  
  
  $('.pien-eyebrow-left').on('click', function(){
    alert('ぴ・・・・・')
  })
  $('.pien-eyebrow-right').on('click', function(){
    alert('ぴええええええええええん')
  })
  
  var setPachi = function(){
    $('.pien-eye-right').clearQueue()
        $('.pien-eye-right').css('display', 'none')
        $('.pien-eye-left-after').css('display', 'block')
        $('.pien-eye-left').css('display', 'none')
        $('.pien-eye-right-after').css('display', 'block')
  
        $('.pien-eye-right').delay(100).queue(function(){
            $('.pien-eye-right').css('display', 'block')
            $('.pien-eye-left-after').css('display', 'none')  
            $('.pien-eye-left').css('display', 'block')
            $('.pien-eye-right-after').css('display', 'none')
        })
  }
  
  pachi1 = setInterval(setPachi, 2000)
  pachi2 = setInterval(setPachi, 3100)
  $('.mouth').on('click', function(){
    if($('.mouth').hasClass('has-mouth')){
        $('.pien-mouth').css('display', 'none')
        $('.pien-mouth-after').css('display', 'block')
        $('.pien-left-pien').css('display', 'block')
        $('.pien-right-pien').css('display', 'block')
        $('.pien-eye-left').css('display', 'none')
        $('.pien-eye-right').css('display', 'none')
        $('.mouth').removeClass('has-mouth')
        
        clearInterval(pachi1)
        clearInterval(pachi2)
    }
    else{
  
        $('.pien-mouth').css('display', 'block')
        $('.pien-mouth-after').css('display', 'none')
        $('.pien-left-pien').css('display', 'none')
        $('.pien-right-pien').css('display', 'none')
        $('.pien-eye-left').css('display', 'block')
        $('.pien-eye-right').css('display', 'block')
        $('.mouth').addClass('has-mouth')
  
        pachi1 = setInterval(setPachi, 2000)
        pachi2 = setInterval(setPachi, 3100)
    
    }
  })
  
});