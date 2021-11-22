/**
 * @author Pramuda Liyanage <pramudatharika@gmail.com>
 * @since 11/23/21
 **/

hideAll();
$("#register").css('display', 'block');


$("#btnLogin").click(function () {
    $("#login").css("display", "block");
    $("#register").css("display", "none");
});

$("#btnRegister").click(function () {
    $("#login").css("display", "none");
    $("#register").css("display", "block");
});

function hideAll() {
    $("#register,#login").css('display', "none");
}
