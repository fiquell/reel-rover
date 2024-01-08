import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='container my-10'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
