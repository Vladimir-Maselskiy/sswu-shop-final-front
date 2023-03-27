import { Box } from '../Box/Box';
import { CartNav } from '../CartNav/CartNav';
import { Container } from '../Container/Container';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.scss';

export const Header = () => {
  return (
    <Container className="header">
      <>
        <Logo />
        <HeaderNav />
        <Box className="header-right-box">
          <>
            <SearchBar />
            <CartNav />
          </>
        </Box>
      </>
    </Container>
  );
};
