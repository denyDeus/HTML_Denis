function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_3yhttw8", "template_54rwgtl", parms).then(alert("Message sent successfully!!"))
}