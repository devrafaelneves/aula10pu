$(document).ready(
    function(){ 
       $.ajax({ 
           url:"http://jsonplaceholder.typicode.com/posts",
           type:"GET",
           success:function(data){ 
               console.log(data);
               $.each(
                   data,
                   function(i,item){ 
                       $('#resultado').append(
                        '<li><a href="./resultado.html?opcao=a">'+item.title+'</a></li>'
                    
                       )
                    
                   }
                   )
               
            },
            error:function(data){}
        }
       )

    }
) 



/*
$(document).ready(
    function(){ 
       $.ajax({ 
           url:"http://jsonplaceholder.typicode.com/posts",
           type:"GET",
           success:function(data){ 
               $.each(
                   data,
                   function(i,item){ 
                       console.log(item, title)
                   }
                   )
               
            },
            error:function(data){}
        }
       )

    }
) 
*/





/*

function(){ 
    $.ajax({ 
        url:"http://jsonplaceholder.typicode.com/posts",
        type:"GET",
        success:function(data){ 
            console.log(data)
         },
         error:function(data){}
     }
    )

 }
) 
*/




//$(document).ready(
 //   function(){
//var Params = new URLSearchParams(location.search);
  //      var opcao = Params.get("opcao");
    //    alert(opcao);
    //}
//)









