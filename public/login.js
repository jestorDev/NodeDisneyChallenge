
function formInfo(elementId) {

    let myForm = document.getElementById(elementId);

    return Object.fromEntries(new FormData(myForm));

}


let btnLogin = document.getElementById("btn-login")




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function serverSays(res) {
    res.json().then(function (respose) {
        alert("Server says :\n" + respose.msg)
});

}

async function handleLogin(res) {

    if(res.status == "200"){

        let responseJson = await res.json()
        localStorage.setItem("token", responseJson.token);
        document.location.href = "/view/characters";
    }
    else serverSays(res)
    
    
}

function handleRegister(res) {
    if(res.status == "200"){
        serverSays(res)
        document.location.href = "/login";
    }
    else serverSays(res)
    
}

function postTo(url ,data) {
    fetch(url,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                })
                .then(function (res) { 
                    if (url=="/auth/login") 
                        handleLogin(res)
                    if (url=="/auth/register") 
                        handleRegister(res)
                 })
                .catch(function (res) { console.log(res);})
}


let a = 0

if (btnLogin) {

    btnLogin.onclick = function () {

        let data = formInfo("login-form")


        if (validateEmail(data.email) && data.password) {
            console.log("valid request")
            
            postTo("/auth/login" ,data) 

        }
        else alert("Invalid email or password")



    };

}

let btnRegister = document.getElementById("btn-register")

if (btnRegister) {

    btnRegister.onclick = function () {
        data = formInfo("register-form")


        if (validateEmail(data.email) && data.password) {
            postTo("/auth/register" ,data) 
        }
        else alert("Invalid email or password")




    };

}

/**
 * <script>
    function visitPage(){
        window.location='http://www.example.com';
    }
</script>
<button onclick="visitPage();">Visit Page Now</button>

 * / */