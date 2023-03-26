import { CartNav } from '../CartNav/CartNav';
import { Container } from '../Container/Container';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.scss';

export const Header = () => {
  return (
    <Container className="header-container">
      <>
        <Logo />
        <HeaderNav />
        <SearchBar />
        <CartNav />
      </>
    </Container>
  );
};
