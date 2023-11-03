let listaSpesa = ['patate', 'banane', 'proteine in polvere', 'coca zero', 'afettato', 'verdura', 'scarpe', 'deodorante'];

let x = 0;
while (x < listaSpesa.length) {
    
    // creo la mia lista da inserire
    lista = `<li>${listaSpesa[x]}</li>`;

    // inserisco con l'innerHTML dentro .ulist
    document.querySelector('.ulist').innerHTML += lista;
    x++;
}

console.log('lista');