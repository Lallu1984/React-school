const ylesanne = {
    kirjeldus: 'jaluta koera',
    tehtud: false,
    tahtaeg: 'täna'
}

function valjastaYlesanne(yl) {
    console.log("Ülesanne: " + ylesanne.kirjeldus)
}

function valjastaYlesanne2({kirjeldus, tehtud}) {
    console.log("Ülesanne2: " + kirjeldus)
}

valjastaYlesanne()
valjastaYlesanne2()


const asjad = [
    'Nipitiri',
    (nimi) => {return "Tere" + nimi}
]

//const tervitus = asjad[1]
//const nimi = asjad[0]

const [nimi, tervitus] = asjad

console.log(tervitus(nimi))