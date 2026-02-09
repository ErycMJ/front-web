import Footer from "../Components/Footer"

import HeaderDN from "../Components/IsisComponents/header"
import Telainicial from "../Components/IsisComponents/Telainicial"

import DonationsPage from "../pages/DonationsPage"

import DonationsEdit from "../Components/ErycComponents/DonationsEdit"

import Navbar from "../Components/TaylorComponents/Navbar"

import PaginaEditarCadastro from "../Components/EduardoComponents/pageEdit"

import LoginPage from "../pages/LoginPage"

import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HeaderDN />
        <Telainicial />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Donations",
    element: <DonationsPage />,
  },
  {
    path: "/DonationsEdit",
    element: (
      <div>
        <Navbar />
        <DonationsEdit />
      </div>
    ),
  },
  {
    path: "/PaginaEditarCadastro",
    element: (
      <div>
        <Navbar />
        <PaginaEditarCadastro />
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
])

export default routes
