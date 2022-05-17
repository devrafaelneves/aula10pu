$(document).ready(
    function(){
        var Params = new URLSearchParams(location.search);
        var nome = Params.get("nome");
        var id = Params.get("id")
        console.log(nome);
        console.log(id);
    }
)