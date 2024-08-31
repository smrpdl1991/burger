import { IoFastFoodOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { headerMenu, headerMenuProps } from '../../../data/headerMenu';
import './Header.scss';


interface MenuItemProps {
  menu: headerMenuProps;  
}

export const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">
          <IoFastFoodOutline />
        </Link>
      </div>
      {headerMenu && 
        <nav className="navigation">
          <ul className="menu">
            {headerMenu.map((menu) => (
              <MenuItem key={menu.id} menu={menu} />
            ))}
          </ul>
        </nav>
      }
    </header>
  )
}

const MenuItem = ({ menu }: MenuItemProps) => {
  return (
    <li className="nav-menu">
      <Link to={menu.link}>
        {menu.icon ? <span className='icon'>{menu.icon}</span>: <></>}{menu.title ? menu.title: ''}
      </Link>
    </li>
  )
}