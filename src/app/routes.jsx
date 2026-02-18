import Footer from "../Components/Footer"
import Header from "../Components/Header"
import WelcomePage from "../Components/WelcomePage"

import DonationsPage from "../features/donations/pages/DonationsPage"

import DonationsEdit from "../Components/ErycComponents/DonationsEdit"

import Navbar from "../Components/TaylorComponents/Navbar"

import PaginaEditarCadastro from "../Components/EduardoComponents/pageEdit"

import LoginPage from "../features/auth/components/LoginPage"

import { createBrowserRouter } from "react-router-dom"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <WelcomePage />
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
