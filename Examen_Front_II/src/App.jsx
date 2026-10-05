import { useState, useEffect } from 'react'
import './App.css'

import NavBar from "./components/NavBar.jsx";
import { ProductDisplay, ProductsContainer } from "./components/Products.jsx";
import { AdminPanel } from "./components/AdminPanel.jsx";
import {Welcome} from "./components/Welcome.jsx";
import { Filter } from './components/Filter.jsx';

function App() {
  let [page, setPage] = useState("home");
  let [filter, setFilter] = useState("all")

  console.log(filter)
  let [db, setDb] = useState([
    {
      id: crypto.randomUUID(),
      name: "Impresora X3000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTSiDBu6Z1cc_MzCaFfnld2SAX07R6p5bKpfb_37onA&s=10",
      desc: "Sirve para imprimir cosas",
      catalog: "printer",
      year: "2014",
      cost: "12.000$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2ewGj4auClTUKrCyjb0tyCgeF33oXsBGFys7etYRmw&s=10",
      desc: "Es bueno",
      catalog: "filament",
      year: "2022",
      cost: "600$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento medio bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu9Q0FPfDXl7XFRlZm-lhmKV4L4-kAsU7BLDVn9vwcw&s=10",
      desc: "mentira si es bueno",
      catalog: "filament",
      year: "2016",
      cost: "50$"
    },
    {
      id: crypto.randomUUID(),
      name: "Impresora X3000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTSiDBu6Z1cc_MzCaFfnld2SAX07R6p5bKpfb_37onA&s=10",
      desc: "Sirve para imprimir cosas",
      catalog: "printer",
      year: "2014",
      cost: "12.000$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2ewGj4auClTUKrCyjb0tyCgeF33oXsBGFys7etYRmw&s=10",
      desc: "Es bueno",
      catalog: "filament",
      year: "2022",
      cost: "600$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento medio bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu9Q0FPfDXl7XFRlZm-lhmKV4L4-kAsU7BLDVn9vwcw&s=10",
      desc: "mentira si es bueno",
      catalog: "filament",
      year: "2016",
      cost: "50$"
    },
    {
      id: crypto.randomUUID(),
      name: "Impresora X3000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTSiDBu6Z1cc_MzCaFfnld2SAX07R6p5bKpfb_37onA&s=10",
      desc: "Sirve para imprimir cosas",
      catalog: "printer",
      year: "2014",
      cost: "12.000$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2ewGj4auClTUKrCyjb0tyCgeF33oXsBGFys7etYRmw&s=10",
      desc: "Es bueno",
      catalog: "filament",
      year: "2022",
      cost: "600$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento medio bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu9Q0FPfDXl7XFRlZm-lhmKV4L4-kAsU7BLDVn9vwcw&s=10",
      desc: "mentira si es bueno",
      catalog: "filament",
      year: "2016",
      cost: "50$"
    },
    {
      id: crypto.randomUUID(),
      name: "Impresora X3000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTSiDBu6Z1cc_MzCaFfnld2SAX07R6p5bKpfb_37onA&s=10",
      desc: "Sirve para imprimir cosas",
      catalog: "printer",
      year: "2014",
      cost: "12.000$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2ewGj4auClTUKrCyjb0tyCgeF33oXsBGFys7etYRmw&s=10",
      desc: "Es bueno",
      catalog: "filament",
      year: "2022",
      cost: "600$"
    },
    {
      id: crypto.randomUUID(),
      name: "Filamento medio bueno",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu9Q0FPfDXl7XFRlZm-lhmKV4L4-kAsU7BLDVn9vwcw&s=10",
      desc: "mentira si es bueno",
      catalog: "filament",
      year: "2016",
      cost: "50$"
    },
  ]);

    function handleOnDelete (id, db) {
    let newDb = db.filter((data) => data.id !== id)
    setDb(newDb)
  }

  switch (page) {
    case "home":
      return (
        <>
          <NavBar page={page} setPage={setPage} />
          <Welcome tittle='MakerReact-3D' subTittle='Hacemos Realidad tus Proyectos' page={page} setPage={setPage} />
        </>
      );
    case "catalog":
      return (
        <>
          <NavBar page={page} setPage={setPage} />
          <Filter filter={filter} setFilter={setFilter}/>
          <ProductsContainer db={db} handleDelete={handleOnDelete} filter={filter} />
        </>
      );
    case "admin":
      return (
        <>
          <NavBar page={page} setPage={setPage} />
          <AdminPanel db={db} setDb={setDb} />
        </>
      );
    default:
      setPage("home")
  }
}

export default App
