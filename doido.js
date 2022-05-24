$(document).ready(
    function(){ 

        var Params = new URLSearchParams(location.search);
        var id = Params.get("id");
       $.ajax({ 
           url:"http://jsonplaceholder.typicode.com/posts/"+id,
           type:"GET",
           success:function(data){ 
               console.log(data);
               $('#titulo').append('<p>'+data.title+'</p>');
               $('#corpo').append(data.id);  
            },
            error:function(data){}
        }
       )
       $.ajax({ 
        url:"http://jsonplaceholder.typicode.com/posts/"+id+"/comments",
        type:"GET",
        success:function(data){ 
            console.log(data);
            $.each(data, function(i, item){
              
                $('#comentarios').append(
                    '<div>'+
                     '<b>'+item.name+'<b>'+
                     item.email+
                     '<p>'+item.body+'<p>'+
                    '</div>'
                );
             })
            },
         error:function(data){}
     }
    ) 


    }
)
