document.querySelector(".mailBoxInput input").addEventListener("blur" , function(){
    if (document.querySelector(".mailBoxInput input").value != "") {
      document.querySelector(".mailBoxInput label").setAttribute("style" , "top: -20px; color: #E53B64");
      console.log("fill");
    } else {
      console.log("empty");
      document.querySelector(".mailBoxInput label").setAttribute("style" , "top: 0px");
    }
})
document.querySelector(".mailBoxInput input").addEventListener("focus" , function(){
  document.querySelector(".mailBoxInput label").setAttribute("style" , "top: -20px; color: #E53B64");
})
document.querySelector(".passBoxInput input").addEventListener("blur" , function(){

    if (document.querySelector(".passBoxInput input").value != "") {
      document.querySelector(".passBoxInput label").setAttribute("style" , "top: -20px; color: #E53B64");
      console.log("fill");
    } else {
      console.log("empty");
      document.querySelector(".passBoxInput label").setAttribute("style" , "top: 0px");
    }


})
document.querySelector(".passBoxInput input").addEventListener("focus" , function(){
  document.querySelector(".passBoxInput label").setAttribute("style" , "top: -20px; color: #E53B64");
})
document.querySelector(".userBoxInput input").addEventListener("blur" , function(){

    if (document.querySelector(".userBoxInput input").value != "") {
      document.querySelector(".userBoxInput label").setAttribute("style" , "top: -20px; color: #E53B64");
      console.log("fill");
    } else {
      console.log("empty");
      document.querySelector(".userBoxInput label").setAttribute("style" , "top: 0px");

    }


})
document.querySelector(".userBoxInput input").addEventListener("focus" , function(){

      document.querySelector(".userBoxInput label").setAttribute("style" , "top: -20px; color: #E53B64");
      

})


// ===========================================

