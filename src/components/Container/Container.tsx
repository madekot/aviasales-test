import cls from './Container.module.scss';
import {ReactElement} from "react";

interface ContainerProps {
  className?: string;
  children: ReactElement;
}

export const Container = ({children}: ContainerProps) => {

  return (
    <div className={cls.Container}>
      {children}
    </div>
  );
};
