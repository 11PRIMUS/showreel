
var telegram_bot_id = "7511275392:AAEUOY-_v3e5_bFza0p9RmMjrhwD_LB_5uQ"; 
var chat_id = "1875555317";

var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };

   
    $.ajax(settings).done(function (response) {
        console.log(response); 
        alert("Message sent successfully!");
    }).fail(function (error) {
        console.error("Error:", error); 
        alert("Failed to send the message. Please try again."); // Notify the user
    });

   
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
