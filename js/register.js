var userNameInput = document.getElementById("text");
var userEmailInput = document.getElementById("email");
var userPasswordInput = document.getElementById("password");

// var nameRegex = /^[a-zA-Z0-9]{3,15}$/;
// var emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm;
// var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var nameRegex = /^[A-za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  var mailRegex = /@[a-z]{5,10}(\.com)$/;
  var passRegex = /^.{5,15}$/;

if(localStorage.getItem("users") != null){
  allUsers = JSON.parse(localStorage.getItem("users"))
}else{
var allUsers = [];
}


function signUp(){
    var user = {
        name : userNameInput.value,
        email : userEmailInput.value,
        password : userPasswordInput.value
    }



    
    
    // console.log(validateForm());
    
    if (validateAllForm() == true && isExist()!= true) {
      console.log("entered if condition");

      allUsers.push(user);
      localStorage.setItem("users", JSON.stringify(allUsers));
      clearForm();
      console.log(allUsers);
      document.querySelector(".successMsg").classList.remove("d-none");
      document.querySelector(".mailAlreadyExist").classList.add("d-none");
      location.href = "../index.html"
      // document.querySelector(".inputBox a").setAttribute("href", "./index.html");
    } else {
      console.log("not entered if condition");
      document.querySelector(".mailAlreadyExist").classList.remove("d-none");
    }



      document.querySelector(".mailBoxInput p.is-valid").classList.add("d-none");
      document.querySelector(".userBoxInput p.is-valid").classList.add("d-none");
      document.querySelector(".passBoxInput p.is-valid").classList.add("d-none");
}

document.querySelector(".inputBox a").addEventListener("click", signUp);

function clearForm(){
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
}

// change for validate  
  document.querySelector(".userBoxInput input").addEventListener("change" , function(){ 
    if (nameRegex.test(userNameInput.value) == false) {
      if (userNameInput.value!="") {
        document.querySelector(".userBoxInput p.is-invalid").classList.remove("d-none");
      }else{
      document.querySelector(".userBoxInput p.is-invalid").classList.add("d-none");
    document.querySelector(".userBoxInput p.is-valid").classList.add("d-none");

    }
    }else{
    document.querySelector(".userBoxInput p.is-valid").classList.remove("d-none");
    document.querySelector(".userBoxInput p.is-invalid").classList.add("d-none");

  }


  })
  document.querySelector(".mailBoxInput input").addEventListener("change" , function(){
    if (mailRegex.test(userEmailInput.value) == false) {

      if (userEmailInput.value!="") {
      document.querySelector(".mailBoxInput p.is-invalid").classList.remove("d-none");

      }else{
        document.querySelector(".mailBoxInput p.is-invalid").classList.add("d-none");
      document.querySelector(".mailBoxInput p.is-valid").classList.add("d-none");
      }

    } else {
      document.querySelector(".mailBoxInput p.is-valid").classList.remove("d-none");
      document.querySelector(".mailBoxInput p.is-invalid").classList.add("d-none");
    }


  })
  document.querySelector(".passBoxInput input").addEventListener("change" , function(){
    if (passRegex.test(userPasswordInput.value) == false) {
      
      if (userPasswordInput.value!= "") {
      document.querySelector(".passBoxInput p.is-invalid").classList.remove("d-none");

      }else{
        document.querySelector(".passBoxInput p.is-invalid").classList.add("d-none");
        document.querySelector(".passBoxInput p.is-valid").classList.add("d-none");
      }
    } else {
      document
        .querySelector(".passBoxInput p.is-valid")
        .classList.remove("d-none");
      document
        .querySelector(".passBoxInput p.is-invalid")
        .classList.add("d-none");
    }


  })







function validateName(){

  var nameRegex = /^[A-za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
  if (nameRegex.test(userNameInput.value)) {
    document.querySelector(".userBoxInput p.is-valid").classList.remove("d-none");
      document.querySelector(".userBoxInput p.is-invalid").classList.add("d-none");
      return true
  }else{
        document.querySelector(".userBoxInput p.is-invalid").classList.remove("d-none");
      document.querySelector(".userBoxInput p.is-valid").classList.add("d-none");
      return false
  }

}
function validateMail(){

  var mailRegex = /@[a-z]{5,10}(\.com)$/
  if (mailRegex.test(userEmailInput.value) ) {
    document.querySelector(".mailBoxInput p.is-valid").classList.remove("d-none");
      document.querySelector(".mailBoxInput p.is-invalid").classList.add("d-none");
      return true
  }else{
        document.querySelector(".mailBoxInput p.is-invalid").classList.remove("d-none");
      document.querySelector(".mailBoxInput p.is-valid").classList.add("d-none");
      return false
  }

}
function validatePassword(){

  var passRegex = /^.{5,15}$/
  if (passRegex.test(userPasswordInput.value)) {
    document.querySelector(".passBoxInput p.is-valid").classList.remove("d-none");
      document.querySelector(".passBoxInput p.is-invalid").classList.add("d-none");
      return true
  }else{
        document.querySelector(".passBoxInput p.is-invalid").classList.remove("d-none");
      document.querySelector(".passBoxInput p.is-valid").classList.add("d-none");
      return false
  }

}



function validateAllForm(){


  if (validateName() == true && validateMail() == true && validatePassword()== true) {

    return true
  }else{
    return false
  }

}







function isExist(){


for (var i = 0; i < allUsers.length; i++) {

  if (allUsers[i].email == userEmailInput.value) {
    console.log("same");
    return true;
  } else {
    console.log("not same");
  }
}

}






