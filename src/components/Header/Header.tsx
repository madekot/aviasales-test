import cls from './Header.module.scss';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";

export const Header = () => {
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
