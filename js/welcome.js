var loggedUser = localStorage.getItem("loggedUser")
document.querySelector(".welcomeMsg h1").innerHTML = `welcom ${loggedUser}`;

document.querySelector(".welcomeMsg button").addEventListener("click" , function(){



    localStorage.removeItem("loggedUser");
    location.href="../index.html"



});

