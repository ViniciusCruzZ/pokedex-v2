const api = 'https://pokeapi.co/api/v2/pokemon';

function Api() {
    btnSearch.addEventListener('click', () => {
        // Verificando se o input está devidamente preenchido
        if (pokeInput.value <= 0) {
            alert('Infelizmente não temos todos os pokémons ;-;')
        } else {
            // Chamando a API
            fetch(api + `/${pokeInput.value.toLowerCase()}`)
                .then(resp => resp.json())
                .then(data => {
    
                    pokeImg.src = ''
                    pokeName.textContent = ''
                    pokeImg.style.background = ''
                    pokeTypes.innerHTML = ''
                    pokeInput.value = ''
    
                    let img = data.sprites.front_default;
                    let name = data.name;
                    let types = data.types;
    
                    types.forEach(e => {
                        let type = e.type.name;
                        pokeTypes.innerHTML += `<small style="background-color: ${bgTypes[type]}">${type}</small>`
                    });
    
                    let firstType = types[0].type.name
    
                    pokeImg.src = img
                    pokeImg.style.backgroundColor = bgTypes[`${firstType}`]
                    pokeImg.alt = "Imagem do pokemon " + name
                    pokeName.textContent = name.toUpperCase();
                })
    
                .catch(erro => {
                    alert(erro)
                })
        }
    })
}

export default Api;