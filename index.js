$(document).ready(
    function(){
        var Params = new URLSearchParams(location.search);
        var nome = Params.get("nome");
        var id = Params.get("id")
        console.log(nome);
        console.log(id);
    }
);

    $.ajax(                         {  
        url:"http://jsonplaceholder.typicode.com/posts",
        type:"GET",
        success:function(data){ 
            console.log(data);
            $.each(
                data,
                function(i,item){ 
                    $('#resultado').append(
                     `<li><a href="./doido.html?id=`+item.id+`>abre</a></li>`
                 
                    )
                 
                }
                )
            
         },
         error:function(data){}
     }
    )

 
 


 
 