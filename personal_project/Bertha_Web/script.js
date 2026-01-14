function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_whmujie", "template_keqrd4v", parms).then(alert("Message sent successfully!!"))
    }