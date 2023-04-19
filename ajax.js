function GuardarDatos() {

    let nom=$("#nombre").val();
    let ape=$("#apellido").val();
    let em=$("#email").val();
    let tel=$("#tel").val();
    let cons=$("#consulta").val();

    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
           nombre: nom,
           apellido: ape,
           email: em,
           telefono: tel,
           consulta: cons,
        },
        success: function(response){
            console.log(response);
        }
    });
}

document.querySelector('#dolar').addEventListener('click', obtenerDatos)

function obtenerDatos()
{
  let url='https://www.dolarsi.com/api/api.php?type=valoresprincipales';  
  const api= new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();
    api.onreadystatechange = function(){
          if(this.readyState==4 && this.status==200)
          {
            
            let datos=JSON.parse(this.responseText);
            console.log(datos);
            let resultado=document.querySelector('#resultado');
            resultado.innerHTML='';
                       
            for(let item of datos)
            {
                            
                resultado.innerHTML+='<li>'+item.casa.nombre+' - '+item.casa.compra+' - '+item.casa.venta+'</li>';
                              
            } 
          }
    }
}
