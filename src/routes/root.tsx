import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Root = () => {
  return (
    <>
      <Header />
      <main className='container my-10'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
