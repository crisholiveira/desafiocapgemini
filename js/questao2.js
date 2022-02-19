

const btn = document.querySelector("#send");


btn.addEventListener("click", function (e) {
    e.preventDefault();
    const password = document.querySelector("#senha");

    const senha = password.value;


    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var digitos = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|+]/;



    var validaMaiuscula = 0;
    var validaMinuscula = 0;
    var validaDigito = 0;
    var validaEspecial = 0;

    for (var i = 0; i < senha.length; i++) {
        if (letrasMaiusculas.test(senha[i]))
            validaMaiuscula++;
        else if (letrasMinusculas.test(senha[i]))
            validaMinuscula++;
        else if (digitos.test(senha[i]))
            validaDigito++;
        else if (caracteresEspeciais.test(senha[i]))
            validaEspecial++;
    }

    console.log(senha)

    if (senha.length < 6) {
        console.log("A senha precisa ter no mínimo 6 caracteres")
        document.getElementById('caracteres').innerHTML = "A senha precisa ter no mínimo 6 caracteres."
    }


    if (validaMaiuscula < 1) {
        console.log("A senha precisa de pelo menos uma letra maiuscula")
        document.getElementById('maiusculo').innerHTML = "A senha precisa de pelo menos uma letra maiuscula."

    }
    if (validaMinuscula < 1) {
        console.log("A senha precisa de pelo menos uma letra minuscula")
        document.getElementById('minusculo').innerHTML = "A senha precisa de pelo menos uma letra minuscula."

    }
    if (validaDigito < 1) {
        console.log("A senha precisa de pelo menos um digito")
        document.getElementById('digito').innerHTML = "A senha precisa de pelo menos um digito."

    }
    if (validaEspecial < 1) {
        console.log("A senha precisa de pelo menos um caracter especial !@#$%^&*()-+ ")
        document.getElementById('especiais').innerHTML = "A senha precisa de pelo menos um caracter especial !@#$%^&*()-+"

    }

    else {
        console.log('senha forte')
        window.location.href = 'senhaforte.html'
    }

})

document.querySelector('#resetar').onclick = function () {
    location.reload()
}