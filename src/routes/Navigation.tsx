import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'
import logo from '../logo.svg'

interface props {
  isActive: boolean
  isPending: boolean
}

export const Navigation = () => {
  const active = ({ isActive }: props) => (isActive ? 'nav-active' : '')

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={active}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<>About Page</>} />
          <Route path="users" element={<>Users Page</>} />
          <Route path="home" element={<>Home Page</>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
