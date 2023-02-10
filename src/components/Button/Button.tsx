import cls from './Button.module.scss';

// TODO:
// [] заменить div на кнопку button
// [] добавить ховер на кнопки

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
