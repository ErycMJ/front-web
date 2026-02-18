import Footer from "@/shared/utils/Footer";
import Header from "@/shared/utils/Header";
import WelcomePage from "@/features/donations/pages/WelcomePage";

import { createBrowserRouter } from "react-router-dom";

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
]);

export default routes;
