function Todoapp() {
    var xhttp = new XMLHttpRequest();
    //EvenListener
    var c = document.getElementsByName("chk");
   


    var x = document.getElementById("demo");
    xhttp.onreadystatechange = function () {//condition
        if ((this.readyState == 4) && (this.status == 200)) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            var Jpeople = response.Todo;
           
            var output = "";
            
          
            for (i = 0; i <Jpeople.length; i++) {
               
               
                if (Jpeople[i].completed == true) {
                    output +="<div>"+`<input type='checkbox'  id='check' class='checkbox' name='chk' disabled="true" checked>`


                }
                else if(Jpeople[i].completed == false) {
                    output +=`<input type='checkbox'  class='checkbox' id='check'>`


                }
                output +=  Jpeople[i].title+"</div>"+"<br>"
                x.innerHTML= output;
               
            }
           




var promise=   new Promise (function(resolve)
{
                $('.checkbox').on('change', function() {
                   
               $('.span1').text($(".checkbox:checked").length);
          if($('#selected').text()==95)
          {
              resolve("Congrats. 5 Tasks have been Successfully Completed ");
             
          } 
         
        
                }).triggerHandler("change"); // handle reload and initial counter
              
            });   
            promise.then(function(s)
{
    alert(s)
})
        
    }

    }
    xhttp.open("GET", "Todo.json", true);
    xhttp.send();

}
