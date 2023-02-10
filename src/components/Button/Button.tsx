import cls from './Button.module.scss';

interface buttonProps {
  className?: string;
}

export const Button = ({className}: buttonProps) => {

  return (
    <div className={cls.button}>
      Показать еще 5 билетов!
    </div>
  );
};
