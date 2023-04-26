import React, { useState } from 'react';
import './App.css';
import Linn from './Linn';
import Cards from './Cards';
import Nimed from './Nimed';


import pilt1 from './berliin.jpeg'
import pilt2 from './london.jpg'
import pilt3 from './madrid.jpg'
import pilt4 from './pariis.jpg'
import pilt5 from './rooma.jpg'
 


function App()  {
    

 const linn1 = {
 nimi: "Saksamaa",
 kirjeldus: "Pealinn: Berliin",
 pilt: pilt1
 }

 const linn2 = {
 nimi: "Suurbritannia",
 kirjeldus: "Pealinn: London",
 pilt: pilt2
 }

 const linn3 = {
 nimi: "Hispaania",
 kirjeldus: "Pealinn: Madrid",
 pilt: pilt3
 }

 const linn4 = {
 nimi: "Prantsusmaa",
 kirjeldus: "Pealinn: Pariis",
 pilt: pilt4
 }

 const linn5 = {
 nimi: "Itaalia",
 kirjeldus: "Pealinn: Rooma",
 pilt: pilt5
 }

 const linnad = [linn1, linn2, linn3, linn4, linn5]
 const [aktiivne, setAktiivne] = useState(0)
 const raamatud = [
  {
    pilt: <img src='https://genomics.ut.ee/sites/default/files/styles/facebook/public/2021-12/Toots.jpeg?itok=x80iyd0j' alt='kevade' />,
    label: 'Kevade',
    autor: 'Autor: Oskar Luts',
    kirjeldus: 'Kevade on eesti kirjanduses märgiline teos. Oskar Luts on loonud tõeliselt kustumatud tegelaskujud. Kes siis poleks kuulnud riukalikust Tootsist, mõtlikust Arnost, tõsisest Tõnissonist, virilast Kiirest või tujukast Teelest? Ei öelda ju asjatult, et igas klassis oma Tootsid, Arnod ja Teeled …Luts jutustab mõnusa huumoriga Paunvere kooliõpilaste juhtumistest. Loe Kiire ja Tootsi vempudest ristjatsitel ja saunas, ela kaasa kihelkonnakooli poiste ja kirikumõisa noorhärrade võitlustele ning tutvu laiemalt 19. sajandi lõpu värvika koolieluga.'
  },
  {
    pilt: <img src='https://www.raamatukoi.ee/pub/media/catalog/product/9/7/9789916407370-828_6.jpg' alt='Rehepapp' />,
    label: 'Rehapapp',
    autor: 'Autor: Andrus Kivirähk',
    kirjeldus: 'Romaan eesti rahva raskest elust mõisahärrade rõhumise all. Rängas olukorras ei jää rahval muud üle, kui krabada endale kõike mida kätte saab, olgu siis naabri sahvrist, mõisaaiast või teede ristmikul vanakurja käest. Loomulikult on mängus ka kõiksugused kratid, tondid ja kollid, kes varitsevad põõsas, silmad põlemas, et paljukannatanud külainimestele veelgi kurja teha.'
  },
  {
    pilt: <img src='https://apl-api.apollo.ee/img/600/744/resize/catalog/product//9/7/9789949453696.jpg' alt='Nullpunkt' />,
    label: 'Nullpunkt',
    autor: 'Autor: Margus Karu',
    kirjeldus: 'See on lugu probleemsest kodust ja halvast koolist pärit Johannesest, kel õnnestub end ühte Tallinna eliitkooli sisse rääkida. Paraku avastab ta peagi, et klassikaaslased on ta jõuliselt heidikustaatusse taandanud. Kui Johannese elupüramiidi kolm peamist tahku -kodu, sõbrad ja kool  -kokku vajuvad, mõistab ta, et on jõudnud nullpunkti. Nii töötab ta välja skeemi, kuidas saavutada populaarsus ja aktsept, ning hakkab seda mineviku survest ja oleviku löökidest hoolimata jõuliselt rakendama.'
  },
  {
    pilt: <img src='https://vaimuvara.ee/wp-content/uploads/2021/08/Kunksmoor-Aino-Pervik-1973.jpg' alt='Kunksmoor' />,
    label: 'Kunksmoor',
    autor: 'Autor: Aino Pervik',
    kirjeldus: 'Keset tuulist merd oli ühes kohas pisike saar. Ümber saare seisid igas kandis teravad kivid ja veealused salakarid. Nende vahel pahises ja vahutas vesi. Saarel kasvasid kõverad ja haralised männid. Männikualune oli täis mustikavarsi, lagedatel kohtadel kasvasid aga teravate okastega kibuvitsapõõsad. Saare randa kivide vahele tegid merelinnud oma pesad. Peale lindude elas saarel veel ainult Kunksmoor.'
  },
  {
    pilt: <img src='https://www.healugu.ee/wp-content/uploads/2018/07/hobevalge1-scaled.jpg' alt='Hõbevalge' />,
    label: 'Hõbevalge',
    autor: 'Autor: Lennart Meri',
    kirjeldus: 'Reisikiri tuulest ja muinasluulest" on Eesti kirjaniku ja poliitiku Lennart Meri raamat, mis ilmus esimest korda 1976. aastal. Meri arutles teoses poolteaduslikult ja fantaasiaküllaselt eestlaste ning teiste läänemeresoomlaste mineviku üle. Raamatu esimese trüki illustreeris Heinz Valk.Paljude lugejate arvates on "Hõbevalge" näol tegu ühe meisterlikuma käsitlusega Eesti minevikust. Autori žanrimääratluse järgi on tegu reisikirjaga, ent enamiku raamatust täidavad siiski visioonid elust muistse Läänemere kallastel, reisikirjeldused puuduvad peaaegu sootuks.'
  }
]

  const muudaAktiivset = (uusAktiivneIndex) => {
    setAktiivne(uusAktiivneIndex)
  }
 

 return (
 <div className="kontainer">
    <header className="App-header">
      <h1>VÄÄRT PEALINNAD JA RAAMATUD</h1>
    </header>
    <div className='cards'>
      {linnad.map((linn, index) => {
      return (
      <Linn 
      key={index}
      linnaNimi={linn.nimi} 
      kirjeldus={linn.kirjeldus} 
      pilt={linn.pilt} /> )
      })}
    </div>

    
    
    
    <div className='books'>
      <div className='list'>
        <Nimed raamatud={raamatud}
        muudaAktiivset={muudaAktiivset}
        />
      </div>
      
      <div id='result'>
        <Cards raamat={raamatud[aktiivne]} />
      </div>
    </div>
 
 </div>
 );
}

export default App;
