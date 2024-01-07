import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/footer'

const Root = () => {
  return (
    <>
      <Header />
      <p className='bg-slate-800 text-white p-4 text-center '>current season <b> Animelist</b></p>
      <main className='container my-10'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
