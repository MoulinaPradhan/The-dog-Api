function fetchimages(){
var xhrRequest=new XMLHttpRequest();
xhrRequest.onload=function(){
    console.log(xhrRequest.response);
    var xhrJSON=JSON.parse(xhrRequest.response);
    var imageUrl=xhrJSON.message;
    $('#dog-image').attr('src',imageUrl);
}








    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();
}








$('#fetch').click(fetchimages);
