
$(document).ready(function(){
    $("#submit").click(function(){
    var rad = $('#radius').val();
    $('#circle').css({width:rad,height:rad,"border-radius":'50%'});
})
})