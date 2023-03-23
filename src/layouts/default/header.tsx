import { NavLink } from 'react-router-dom'

import LogoWhite from 'src/assets/logo-white.svg'
import ProfilePic from 'src/assets/profile-pic.png'
import { HeaderContainer, Logo, NavBar, ProfileItem } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <NavLink to="/">
            <img src={LogoWhite} alt="Início" />
          </NavLink>
        </Logo>

        <NavBar>
          <ul>
            <li>
              <NavLink to="/dashboard">Início</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Meus times</NavLink>
            </li>
            <li>
              <NavLink to="/account">Minha conta</NavLink>
            </li>
          </ul>
        </NavBar>

        <ProfileItem>
          <img src={ProfilePic} alt="Perfil" />
        </ProfileItem>
      </HeaderContainer>
    </>
  )
}
