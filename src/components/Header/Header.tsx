import { IOrderItem } from '../../interfaces/interfaces';
import { CartNav } from '../../pages/Cart/CartNav/CartNav';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { Logo } from '../Logo/Logo';
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.scss';

type TProps = {
  order: IOrderItem[];
};

export const Header = ({ order }: TProps) => {
  return (
    <Container className="header">
      <>
        <Logo />
        <HeaderNav />
        <Box className="header-right">
          <>
            <SearchBar />
            <CartNav order={order} />
          </>
        </Box>
      </>
    </Container>
  );
};
