import Footer from "@/Components/Ui/Footer"
import Navbar from "@/Components/Ui/Navbar"

const MainLayout = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
  <>
    <header>
        <Navbar/>
    </header>

    <main className={className}>
    {children}
    </main>

    <Footer />
  </>
  )
}

export default MainLayout
