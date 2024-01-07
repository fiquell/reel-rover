import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'

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
