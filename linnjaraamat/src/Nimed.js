function Nimed({raamatud, muudaAktiivset}) {
    return (
        raamatud.map((raamat, index) => {
            return (
                <div className="nupud" 
                    key={index}
                    onClick={() => muudaAktiivset(index)}
                    >
                    {raamat.label}
                </div>
            )
        })
    )
}

export default Nimed