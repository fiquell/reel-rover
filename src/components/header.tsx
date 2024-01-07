import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container navbar border-b border-neutral'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost'>
          <Icon icon='streamline-emojis:rabbit' />
          Reel Rover
        </Link>
      </div>
      <div className='flex-none'>
        <Link to='/' className='btn btn-ghost'>
          Anime
        </Link>
        <Link to='/manga' className='btn btn-ghost'>
          Manga
        </Link>
      </div>
    </header>
  )
}

export default Header
