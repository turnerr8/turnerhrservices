$(document).ready(function () {

    $("#quotes-carousel").carousel('cycle');
    console.log("carosel wrok");

    //popout
    var openBut = $("#more-link");
    var popOut = $("#popout");

    openBut.click(function() {
        popOut.show();
    });

    popOut.click(function(e){
        console.log(e.target.id);
        if(e.target.id == "popout"){
            console.log("true");
            popOut.hide();
        }
    });

    $("#popout-exit").click(function(){
        popOut.hide();
    })
});