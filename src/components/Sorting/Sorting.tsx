import cls from './Sorting.module.scss';

// TODO:
// [] заменить кнопки на компонент Button

export const Sorting = () => {
  return (
    <div className={cls.Sorting}>
      <div className={cls.list}>
        <button className={[cls.button, cls.active].join(' ')}>Самый дешевый</button>
        <button className={cls.button}>Самый быстрый</button>
        <button className={cls.button}>Оптимальный</button>
      </div>
    </div>
  );
};
