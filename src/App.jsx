import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Deals from "./Components/Deals/Deals"
function App() {
  return (
    <div >
      <div>
        <div className="white-gradient">
          <Header/>
          <Deals/>

          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
