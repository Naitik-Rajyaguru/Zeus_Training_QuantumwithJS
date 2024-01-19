document.addEventListener("DOMContentLoaded", ()=> {

    let prev = document.getElementsByClassName("passprev");
    console.log(prev);
    
    prev[0].onclick = function() {Toggle()};
    function Toggle(){
        // console.log("naitik");
        let pas = document.getElementById("Password?")
        if(pas.type ==="password"){
            pas.type = "text";
        }
        else{
            pas.type = "password";
        }
    }

})

      