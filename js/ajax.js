$("#btnSave").click(function () {

    let id = $("#inputUserId").val();
    let name = $("#inputName").val();
    let address = $("#inputAddress").val();
    let contact = $("#inputContact").val();
    let email = $("#inputEmail").val();
    let username = $("#inputCustomerUserName").val();
    let password = $("#inputCustomerPassword").val();

    $.ajax({
        method: 'POST',
        url: "http://localhost:8080/Backend_war/api/v1/customer/save",
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            id: id,
            name: name,
            address: address,
            contact: contact,
            email: email,
            username: username,
            password: password,
        }),
        success: function (data) {
            alert("Customer Added")
        }

    })
});


// =============================================Login======================================================

$("#btnSignIn").click(function () {

    let userName = $("#inputLoginUserName").val();
    let password = $("#inputLoginPassword").val();

    $.ajax({
        method: 'POST',
        url: "http://localhost:8080/Backend_war/api/v1/customer/0auth/token",
        async: true,
        contentType: 'application/json',
        data: JSON.stringify({
            username: userName,
            password: password
        }),
        success: function (data) {
            window.location.href = "index2.html";
        }
    })


});
