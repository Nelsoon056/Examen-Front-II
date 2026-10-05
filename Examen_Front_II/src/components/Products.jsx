export function ProductDisplay({ name, img, desc, id, handleDelete, db, cost, year, index }) {
  return (
    <div className="ProductDisplay">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <strong>{cost}</strong>
      <p>{desc}</p>
      <p>{year}</p>
      <p>indice: {index + 1} </p>
      
      <button className="btn-delete" onClick={()=> handleDelete(id, db)}>Eliminar</button>
    </div>
  );
}

export function ProductsContainer({ db, handleDelete, filter}) {
  return (
    <>
      <div className="catalog-wrapper">
        
        <aside className="catalog-sidebar">
          <h2>Catálogo</h2>
          <p style={{ marginTop: '20px', color: '#e2d5f8', lineHeight: '1.5' }}>
            Busca entre nuestro catálogo tu impresora y filamento ideal
          </p>
          <p style={{ marginTop: '20px', color: '#e2d5f8' }}>
            Total productos: <b>{db.length}</b>
          </p>
        </aside>

        <section className="ProductsContainer">
          {db.map((data, index) => {
            if (filter == "all") {
              return (
              <ProductDisplay 
                key={data.id} 
                name={data.name} 
                img={data.img} 
                desc={data.desc}
                id={data.id}
                handleDelete={handleDelete}
                db={db}
                year={data.year}
                cost={data.cost}
                index={index}
              />
              );
            } else if (filter == "filaments" && data.catalog == "filament") {
              return (
              <ProductDisplay 
                key={data.id} 
                name={data.name} 
                img={data.img} 
                desc={data.desc}
                id={data.id}
                handleDelete={handleDelete}
                db={db}
                year={data.year}
                cost={data.cost}
                index={index}
              />
              );
            } else if (filter == "printers" && data.catalog == "printer") {
              return (
              <ProductDisplay 
                key={data.id} 
                name={data.name} 
                img={data.img} 
                desc={data.desc}
                id={data.id}
                handleDelete={handleDelete}
                db={db}
                year={data.year}
                cost={data.cost}
                index={index}
              />
              );
            }
            
          })}
        </section>

      </div>
    </>
  );
}