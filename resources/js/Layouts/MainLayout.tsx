import Footer from "@/Components/Ui/Footer"
import Navbar from "@/Components/Ui/Navbar"

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
  <>
    <header>
        <Navbar/>
    </header>

    <main>
    {children}
    </main>

    <Footer />
  </>
  )
}

export default MainLayout
