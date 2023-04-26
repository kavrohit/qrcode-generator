import NavBar from 'src/components/NavBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default MainLayout
