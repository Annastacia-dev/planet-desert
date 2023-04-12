import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
   <main className="max-w-7xl mx-auto m-4 sm:m-8 rounded-md sm:shadow-lg bg-gradient-to-r from-brunswick to-celadon h-full overflow-x-hidden ">
    <Navbar />
    <Hero />
    <Footer />
   </main>
  )
}

export default App
