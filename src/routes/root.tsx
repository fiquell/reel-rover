import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/footer'

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
