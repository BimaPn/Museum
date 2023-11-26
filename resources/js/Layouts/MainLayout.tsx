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
  </>
  )
}

export default MainLayout
