// Change the name of the file to something less generic

window.onload = () => {
    addData();
}

const addData = () => {
    let myUrl = "http://localhost:3000/users/add/";

    let dataBody = {
        email: $("#id_email_input").val(),
        user: $("#id_user_input").val(),
        pass: $("#id_pass_input").val()
    }
    axios({
        method: 'POST',
        url: myUrl,
        data: dataBody
    })
        .then(myData => {
            alert("success")
            window.location.href = "layout2.html";
        })
        .catch(error => {
            console.log(error.response)
            if (error.response.data.code) {
                alert("Email already in system, try another or log in")
            }
            else {
                alert("There is problem try again!")
            }
        })
}
