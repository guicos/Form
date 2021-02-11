const form = document.querySelector('[data-js="form"]')

form.addEventListener('submit', e =>{
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone_1 = document.getElementById("telefone_1").value;
    let telefone_2 = document.getElementById("telefone_2").value;

    if(telefone_2 == false){
        telefone_2 = "não informado"
    }
    
    validation(nome, email, telefone_1, telefone_2)
    e.preventDefault();
})

function validation(nome, email, telefone_1, telefone_2){
    if(nome == false){
        alert("Por favor coloque seu nome")
    }
    if(email == false){
         alert("Por favor coloque seu email")
    }
    if(telefone_1 == false){
         alert("Por favor coloque seu telefone 1")
    }else{
        alert("Dados cadastrados com sucesso!")
        ficha(nome, email, telefone_1, telefone_2)
        limpar()
    }
}

function ficha(nome, email, telefone_1, telefone_2){
    document.querySelector('#Ficha').innerHTML = 
    `
    <div class="data-ficha">
        <span>Nome completo</span>
        <b>${nome}</b>
    </div>
    <div class="data-ficha">
        <span>E-mail:</span>
        <b>${email}</b>
    </div>
    <div class="data-ficha">
        <span>Telefone 1</span>
        <b>${telefone_1}</b>
    </div>
    <div class="data-ficha">
        <span>Telefone 2</span>
        <b>${telefone_2}</b>
    </div>
    `
}

function limpar(){
    document.getElementById('name').value = '';
    document.getElementById("email").value = '';
    document.getElementById("telefone_1").value = '';
    document.getElementById("telefone_2").value = '';
}




