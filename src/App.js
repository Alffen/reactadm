import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
