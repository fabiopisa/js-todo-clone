$(document).ready(function(){

  var arrList = [
    "cucina per tutti",
    "dai da mangiare al cane",
    "lava i piatti",
    "fai la lavatrice"
  ]

  for(var i = 0; i < arrList.length; i++){
    var itemList = arrList[i];
    console.log(itemList);

    var itemPush = $('.template li').clone();
    $(itemPush).find('.text').append(itemList);
    $('main ul').append(itemPush);
    
  }

  $(document).on('click', '.fa-trash-alt',function(event){
    $(this).parent().remove();
  });

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



});