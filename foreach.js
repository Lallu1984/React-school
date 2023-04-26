const nimed = [
    'Kati',
    'Mati',
    'Rein',
    'Mõmmi'
]

console.log(nimed[0])

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