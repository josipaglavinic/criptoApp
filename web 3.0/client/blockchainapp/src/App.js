import "./App.css";
import { Navbar, Welcome, Footer, Transactions } from "./components/index";
// Hi
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Welcome />
        <Transactions /> 
        <Transactions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
