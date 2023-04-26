import Loendur from "./Loendur"


function content1({content, kustutaRaamat}) {
    const kustuta = (index) => {
        console.log('vajutati nuppu kustuta' + index)
        kustutaRaamat(index)
        
    }
    return (
        <div className="raamat">
            {
                content.map((raamat, index) => {
                    return (
                        <div className="rida" key={index}>
                            <div className="col-8">Pealkiri: {raamat.pealkiri}</div>
                            <div className="col-8">Autor: {raamat.autor}</div>
                            <div className="col-8">
                                <Loendur />
                            </div>
                            <button 
                                className="col-2"
                                onClick={() => kustuta(index)}>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default content1