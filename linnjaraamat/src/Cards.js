function Cards({raamat}) {
    return (
        <div className="sisend">
          <div className="book-content">
          {raamat.pilt}
          </div>
          <div className="book-info">
          <h1>{raamat.label}</h1>
          <h3>{raamat.autor}</h3>
          <p>{raamat.kirjeldus}</p>
          </div>
        </div>
    )
  }
     export default Cards