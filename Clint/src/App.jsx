import { Outlet } from "react-router-dom";
import Header from "./Pages/Share/Header/Header";
import Footer from "./Pages/Share/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
