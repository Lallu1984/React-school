const nimed = [
    'Kati',
    'Mati',
    'Rein',
    'Mõmmi'
]

/*console.log(nimed[0])

const tervitus = (nimi) => {
    console.log("Tere " + nimi)
}
tervitus(nimed[1])
tervitus(nimed[3])
console.log('-----kasutame igat tegelast massiivis for loopi abil')
for (let i = 0; i < nimed.length; i++) {
    const nimi = nimed[i]
    tervitus(nimi)
}

console.log('----- Tervitame igat tegelast massiivist foreach funktsiooni abil')

nimed.forEach(tervitus)

const tagastaTervitus = (nimi) => {
    return "Tere " + nimi
}

console.log('---- Töödeldud tervitused')
console.log(tagastaTervitus('Rebase Rein'))

console.log('---- Loome nimede massiivist tervituste massiivi')
console.log(nimed)

const tervitused = nimed.map(tagastaTervitus)
console.log(tervitused)
*/


const jsxNimed = nimed.map((nimi, index) => {
    return "<h1>" + index + '. ' + nimi + "</h1>"
})

console.log("Sisiend")
console.log(nimed)
console.log("Väljund")
console.log(jsxNimed)

