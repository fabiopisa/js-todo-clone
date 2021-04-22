$(document).ready(function(){

  $('input').keyup(function(event){
    if(event.which === 13){
      //this è event
      var item = $(this).val().trim();

      if(item.length > 3){
        var strItem = $('.template li').clone();
        $(strItem).find('.text').append(item);
        $('main ul').append(strItem);
        $(this).val('');
      }
    }
  });

  $(document).on('click', '.fa-trash-alt',function(event){
    $(this).parent().remove();
  });

});