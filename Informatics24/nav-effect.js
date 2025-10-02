$(document).ready(function(){
    $(".direct-pages a").on("click", function(){
        $(".direct-pages a").removeClass("active-nav");
        $(this).addClass("active-nav");
    });
});