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

