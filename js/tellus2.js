$(document).ready(function () {
    $("#tellus2").click(function (e) {
        e.preventDefault();
        var name = document.getElementsByName("textYourName2")[0].value;
        var email = document.getElementsByName("textEmail2")[0].value;
        var message = document.getElementsByName("textMessage2")[0].value;
        if (validateEmail(email) == false || name.length < 3 || message.length < 10) {
            return false;
        }
        var params = '{"fullName":"' + name + '","email":"' + email + '", "message":"' + message + '"}'
        var http = new XMLHttpRequest();
        var url = 'https://doxalabs.com/tellus';
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/json');
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                location.reload();
            } else {
            }
        }
        http.send(params);
    });
});

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}