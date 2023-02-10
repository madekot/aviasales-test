import cls from './Header.module.scss';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";

interface HeaderProps {
}

export const Header = ({}: HeaderProps) => {

  return (
    <div className={cls.Header}>
      <Container>
        <div className={cls.logo}>
          <Logo/>
        </div>
      </Container>
    </div>
  );
};
