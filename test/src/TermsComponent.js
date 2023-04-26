import React, { useState } from "react";
import pilt1 from './kevade.jpg'
import pilt2 from './rehepapp.jpg'
import pilt3 from './nullpunkt.jpg'
import pilt4 from './Kunksmoor-Aino-Pervik-1973.jpg'


function TermsButton({ term }) {
  const [showTerm, setShowTerm] = useState(false);

  return (
    <div className="result">
        <div className="buttons">
            <button
            className="buttons-container-button"
            onClick={() => {
            setShowTerm(!showTerm);
            }}
             >
            {term.label}
            </button>
        </div>
      <div className="content">
                {showTerm && <>
            <div className="content-img">
                <img src={term.pilt} alt="kevade" />
            </div>
            <div className="content-text">
                <h1>{term.label}</h1> 
                <h2>{term.autor}</h2>
                <p>{term.kirjeldus}</p>
            </div></> }   
            
      </div> 
    </div>
  );
}

function TermsComponent() {
  const terms = [
    {
        pilt: pilt1,
        label: "Kevade",
      autor: "Autor: Oskar Luts",
      kirjeldus: "Kevade on eesti kirjanduses märgiline teos. Oskar Luts on loonud tõeliselt kustumatud tegelaskujud. Kes siis poleks kuulnud riukalikust Tootsist, mõtlikust Arnost, tõsisest Tõnissonist, virilast Kiirest või tujukast Teelest? Ei öelda ju asjatult, et igas klassis oma Tootsid, Arnod ja Teeled …Luts jutustab mõnusa huumoriga Paunvere kooliõpilaste juhtumistest. Loe Kiire ja Tootsi vempudest ristjatsitel ja saunas, ela kaasa kihelkonnakooli poiste ja kirikumõisa noorhärrade võitlustele ning tutvu laiemalt 19. sajandi lõpu värvika koolieluga." 
    },
    {
        pilt: pilt2,
        label: "Rehapapp",
      autor: "Autor: Andrus Kivirähk",
      kirjeldus: "Romaan eesti rahva raskest elust mõisahärrade rõhumise all. Rängas olukorras ei jää rahval muud üle, kui krabada endale kõike mida kätte saab, olgu siis naabri sahvrist, mõisaaiast või teede ristmikul vanakurja käest. Loomulikult on mängus ka kõiksugused kratid, tondid ja kollid, kes varitsevad põõsas, silmad põlemas, et paljukannatanud külainimestele veelgi kurja teha."
    },  
    {
        pilt: pilt3,
        label: "Nullpunkt",
      autor: "Autor: Margus Karu",
      kirjeldus: "See on lugu probleemsest kodust ja halvast koolist pärit Johannesest, kel õnnestub end ühte Tallinna eliitkooli sisse rääkida. Paraku avastab ta peagi, et klassikaaslased on ta jõuliselt heidikustaatusse taandanud. Kui Johannese elupüramiidi kolm peamist tahku -kodu, sõbrad ja kool  -kokku vajuvad, mõistab ta, et on jõudnud nullpunkti. Nii töötab ta välja skeemi, kuidas saavutada populaarsus ja aktsept, ning hakkab seda mineviku survest ja oleviku löökidest hoolimata jõuliselt rakendama."
    },
    {
        pilt: pilt4,
        label: "Kunksmoor",
      autor: "Autor: Aino Pervik",
      kirjeldus: "Keset tuulist merd oli ühes kohas pisike saar. Ümber saare seisid igas kandis teravad kivid ja veealused salakarid. Nende vahel pahises ja vahutas vesi. Saarel kasvasid kõverad ja haralised männid. Männikualune oli täis mustikavarsi, lagedatel kohtadel kasvasid aga teravate okastega kibuvitsapõõsad. Saare randa kivide vahele tegid merelinnud oma pesad. Peale lindude elas saarel veel ainult Kunksmoor."
    }
  ];
  return (
    <div className="terms-container">
      <div className="buttons-container">
        {terms.map((term, index) => (
          <TermsButton term={term} key={index} />
        ))}
      </div>
    </div>
  );
}
export default TermsComponent;
