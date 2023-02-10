import cls from './Logo.module.scss';
import { ReactComponent as ReactLogo } from '../../assets/Logo.svg'

export const Logo = () => {
  return (
    <div className={cls.logo}>
      <ReactLogo/>
    </div>
  );
};
