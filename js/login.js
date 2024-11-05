var allUsers = JSON.parse(localStorage.getItem("users"));
var emailInput = document.querySelector(".mailBoxInput input");
var passInput = document.querySelector(".passBoxInput input");



function login(){

for(var i =0;i<allUsers.length; i++){


    if (allUsers[i].email == emailInput.value && allUsers[i].password == passInput.value){

        document.querySelector(".successMsg").classList.remove('d-none');
        document.querySelector(".erorrMsg").classList.add("d-none");
        localStorage.setItem("loggedUser" , allUsers[i].name)
        location.href = "../welcome.html"
    }else{
        document.querySelector(".erorrMsg").classList.remove('d-none');
        document.querySelector(".successMsg").classList.add("d-none");

    }

}
}