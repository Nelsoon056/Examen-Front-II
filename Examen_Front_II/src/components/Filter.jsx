export function Filter ({filter, setFilter}) {
  return (
    <section className="filterSec">
      <button onClick={()=> setFilter("all")} className="buttonFilter">Todo</button>
      <button onClick={()=> setFilter("filaments")} className="buttonFilter">Filamentos</button>
      <button onClick={()=> setFilter("printers")} className="buttonFilter">Impresoras</button>
    </section>
  )
}