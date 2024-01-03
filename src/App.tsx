import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="">
      <Header/>
      <p className="m-10 text-2xl font-bold text-yellow-500">ALL MOVIES</p>
      <div className="grid grid-cols-1 md:grid-cols-5">
      <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
