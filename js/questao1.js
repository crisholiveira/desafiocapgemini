

const btn = document.querySelector("#send");


btn.addEventListener("click", function (e) {
    e.preventDefault();

    const degraus = document.querySelector("#degraus");

    const value = degraus.value;

    let lista = document.createElement('ul')


    for (var i = 0; i < value; i++) {

        let degrau = '';
        let item = document.createElement('li')

        for (var j = 1; j < value - i; j++) {
            degrau += ' ';
        }


        for (var j = 0; j < i + 1; j++) {
            degrau += '*';

        }


        console.log(degrau)
        let texto = document.createTextNode(degrau)
        item.appendChild(texto)
        lista.appendChild(item)
        let escadaria = document.querySelector('#escadaria')
        escadaria.appendChild(lista)

    }

})


document.querySelector('#resetar').onclick = function () {
    location.reload()
}








