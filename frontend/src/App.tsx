import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import Footer from "components/NavBar/components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>

        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
