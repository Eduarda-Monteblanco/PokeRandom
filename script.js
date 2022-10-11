var image = document.createElement("img");
var imageParent = document.getElementById("back");
var hp = document.getElementById("hp")
var infos = document.getElementById("infos")
var pokemonName = document.getElementById("title")
var abilities = document.getElementById('abilities')
var titleBar = document.getElementById('tittle-bar')
var orderH1 = document.getElementById('order')
var attack = document.getElementById('attack')
var defense = document.getElementById('defense')
var speed = document.getElementById('speed')

function randomNumber() {
    id = Math.floor(Math.random() * 899)
    return id
}

async function getPoke ()  { await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)

    .then((response) => {
        return response.json()
    }).then((json) => {
        abilities.innerHTML = '<br><p>Abilities </p>'

        var order = json['order']
        orderH1.innerHTML = `#${order}`
        infos.appendChild(orderH1)

        var img = json['sprites']['other']['official-artwork']['front_default']
        image.src = img;           
        imageParent.appendChild(image);

        // name
        var nameInfo = json['name']
        pokemonName.innerHTML = `${nameInfo[0].toUpperCase() + nameInfo.substring(1)}`
        titleBar.appendChild(pokemonName)

        // hp
        var hpInfo = json['stats'][0]['base_stat']
        hp.innerHTML = `<p>HP: ${hpInfo}</p>`
        infos.appendChild(hp)

        var atackInfo = json['stats'][1]['base_stat']
        attack.innerHTML = `<p>Attack: ${atackInfo}</p>`
        infos.appendChild(attack)

        var defenseInfo = json['stats'][2]['base_stat']
        defense.innerHTML = `<p>Defense: ${defenseInfo}</p>`
        infos.appendChild(defense)

        var speedInfo = json['stats'][5]['base_stat']
        speed.innerHTML = `<p>Speed: ${speedInfo}</p>`
        infos.appendChild(speed)

        // abilities
        var data = json['abilities']
        for (var i=0; i < data.length; i++)  {
            abilityName = data[i]['ability']['name']

            console.log(abilityName)

            abilities.innerHTML += `${abilityName[0].toUpperCase() + abilityName.substring(1)} <br>`
            infos.appendChild(abilities)
        }

        console.log(json)
        
    })
}

