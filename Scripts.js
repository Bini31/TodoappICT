function loginvalidation(login){
    let password=document.getElementById("password")
    let username=document.getElementById("username")
   
    if(username.value=="admin" && password.value=="12345"){
        login();
    }
    
    else{
        alert("Login values are mismatching")
    }
  
}
function login()
{
    window. location. replace("TodoList.html")
}
function logout()
{
    window.location.replace("index.html")
}