/**
 * Created by Outsourcepro on 5/29/2017.
 */
$(document).ready(function(){
    $('.alert').fadeIn().delay(5000).fadeOut('slow');
});
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("back-hide-s").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("back-hide-s").style.display = "none";
}

$(document).ready(function(){
    $("#back-hide-s").click(function(){
        closeNav();
    });
    $(".closebtn").click(function(){
        closeNav();
    });
    $("#upPhoto").change(function () {
        $("#uploadPhotoForm").ajaxSubmit(function(profileImage){
            setTimeout(function(){
                $(".profile-pic").attr('src', profileImage);
            },500);
        });
    });
});
$("a").click(function(){
    $(".loader-img").addClass('logo-rotation');
});
$(".ld-btn").click(function(){
    $(".loader-img").addClass('logo-rotation');
    setTimeout(function(){
        $(".loader-img").removeClass('logo-rotation');
    },1500);
});
