import { backgroundImage } from "flowbite-react/plugin/tailwindcss/theme";

export function Welcome({tittle = "Bienvenido", subTittle = "bienvenido", page, setPage}) {
  return <section className="welcContainer" >
    <h1 className="welcTitl">{tittle}</h1>
    <p className="subTitl">{subTittle}</p>
    <button className="buttonInv" onClick={() => setPage("catalog")}>Ir a Inventario</button>
  </section>
}