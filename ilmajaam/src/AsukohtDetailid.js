

function AsukohtDetailid({asukoht}) {
    if (asukoht.andmed == null) {
        return <h3>Laen andmed ...</h3>
    }

    let paev = "päev"
    if (asukoht.andmed.kasPäev !== 1) {
        paev = "päev"
    } else {
        paev = "öö"
    }


    return (
        <>
         
        <h2>
            Tänane ilm linnas {asukoht.nimi}
        </h2>
        <div>
            <p>Aeg: {asukoht.andmed.aeg}</p>
            <p>Temperatuur: {asukoht.andmed.temperatuur} °C</p>
            <p>Tuule kiirus: {asukoht.andmed.tuuleKiirus} m/s</p>
               <p>{paev}</p>
            <p>Tuulesuund: {asukoht.andmed.tuulesuund}°</p>
            <p>ilmakood: 
                {asukoht.andmed.ilmakood}
                
                </p>
        </div>
        </>
    )
}

export default AsukohtDetailid