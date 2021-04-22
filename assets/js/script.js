$(document).ready(function(){

  var arrList = [];

  for(var i = 0; i < arrList.length; i++){
    var item = arrList[i];
    console.log(item);

    $('input').keyup(function(event){
      console.log(event.which);
    });
    
  }

});