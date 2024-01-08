import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

const MAIN_NAV_LINKS = [
  { path: '/', name: 'Anime' },
  { path: '/manga', name: 'Manga' }
]

const SPECIAL_NAV_LINKS = [
  { path: '/bookmarks', icon: 'material-symbols:bookmark-outline-rounded', name: 'Bookmarks' },
  { path: '/favorites', icon: 'material-symbols:favorite-outline-rounded', name: 'Favorites' }
]

const Navbar = () => {
  return (
    <nav className='container navbar border-b border-neutral'>
      <div className='navbar-start'>
        <NavLink to='/' className='btn btn-ghost'>
          <Icon icon='streamline-emojis:rabbit' />
          Reel Rover
        </NavLink>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal gap-1'>
          {MAIN_NAV_LINKS.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className='dropdown dropdown-end'>
          <button type='button' tabIndex={0} className='btn btn-circle btn-ghost text-2xl'>
            <Icon icon='material-symbols:menu-rounded' />
          </button>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-10 mt-4 w-52 rounded-btn bg-base-200 px-2 shadow'>
            {SPECIAL_NAV_LINKS.map((link, index) => (
              <li key={index} className='my-1'>
                <NavLink to={link.path}>
                  <Icon icon={link.icon} className='mt-0.5' />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
