var contas = []

function ApagarRegistro(id) {
    let _confirm = confirm("deseja Excluir?")

    if (_confirm){
        for(let i = 0; 1 <contas.length; i++){
            if(contas[i].id == id){
                contas.splice(i, 1)
            }

        }

        Tabelacontas()
    }


}


function EditarRegistro(id) {
    $("#modalregistro").modal("show")
        
    contas.forEach(function (item)){
        if (item.id == id) {
            $("#hdid").val(item.id)
            $("#txtnome").val(item.Nome)
            $("#txtconta").val(item.Conta)
            $("#txtagencia").val(item.Agencia)
            $("#txtchequeesliberado").val(item.ChequeL)
            $("#txtsaldo").val(item.Saldo)
            $("#txtcheque").val(item.Cheque)
            $("#txttaxa").val(item.Taxa)
        }
    }
}


function Tabelacontas() {
    if (Array.isArray(contas)) {

        localStorage.setItem("__contas__", JSON.stringify(contas))

        $("#tblcontas tbody").html("")

        contas.forEach(function (item) {
            $("#tblcontas tbody").append(`<tr> 
            <td> ${item.id} </td>
            <td> ${item.Nome} </td>
            <td> ${item.Conta} </td>
            <td> ${item.Agencia} </td>
            <td> ${item.ChequeL} </td>
            <td> ${item.Saldo} </td>
            <td> ${item.Cheque} </td>
            <td> ${item.Taxa} </td>
            <td><button type="button" class="btn btn-primary" onclick="javascript:EditarRegistro(${item.id})"> <i class="fa fa-edit" /> </button></td>
            <td> <button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.id});"><i class="fa fa-trash" /></button></td>

            </tr>`) //funçao para adicionar um trecho html a cada execução
        })
    }


}

$(function () {

    contas = JSON.parse(localStorage.getItem("__contas__"))

    if (contas) {
        Tabelacontas()
    }

    $("#btnsalvar").click(function () {

        // AÇÃO AO CLICAR EM SALVAR

        let _id = $("hdid").val()
        let Nome = $("#txtnome").val()
        let Conta = $("#txtconta").val()
        let Agencia = $("#txtagencia").val()
        let ChequeL = $("#txtchequeesliberado").val()
        let Saldo = $("#txtsaldo").val()
        let Cheque = $("#txtchequees").val()
        let Taxa = $("#txttaxa").val()


        let registro = {}

        
        registro.Nome = Nome
        registro.Conta = Conta
        registro.Agencia = Agencia
        registro.ChequeL = ChequeL
        registro.Saldo = Saldo
        registro.Cheque = Cheque
        registro.Taxa = Taxa

        registro.id = contas.length +1 
         
        
        

        contas.push(registro) // ULTILIZAR PARA ARMAZENAR O REGISTRO

    
        alert("A conta foi Salva")
        $("mmodalregistro").modal("hide")


        //APAGAR OS CAMPOS APÓS SEREM SALVOS
        $("#txtnome").val("")
        $("#txtconta").val("")
        $("#txtagencia").val("")
        $("#txtchequeesliberado").val("")
        $("#txtsaldo").val("")
        $("#txtchequees").val("")
        $("#txttaxa").val("")

        Tabelacontas()

    })

})