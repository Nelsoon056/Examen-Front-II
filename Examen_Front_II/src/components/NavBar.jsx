import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import LogoShop from '../assets/LogoShopWhite.svg'

export default function NavBar({page , setPage}) {
  return (
    <Navbar fluid className="barra">
      <NavbarBrand>
        <img
          src={LogoShop}
          className="h-14 w-14 mr-3"
          alt="Flowbite React Logo"
        />
        <h1 className="tittle">
          MakerReact 3D
        </h1>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active={page === "home"} onClick={() => setPage("home")}>
          Home |
        </NavbarLink>
        <NavbarLink href="#" active={page === "catalog" || page === "catalog-1" || page ==="catalog-2"} onClick={() => setPage("catalog")}>
          Invenario |
        </NavbarLink>
        <NavbarLink href="#" active={page === "admin"} onClick={() => setPage("admin")}>Agregar |</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}