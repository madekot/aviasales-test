import cls from './Card.module.scss'
import { InfoCard } from './InfoCard/InfoCard';

// TODO:
// [] добавить ховер на карточки

export const Card = () => {
  return (
    <a href="#" className={cls.Card}>
      <div className={cls.row}>
        <div className={cls.price}>13 400 Р </div>
        <div className={cls.logo}>
          <img src="src/assets/card-Logo.png" alt="" />
        </div>
      </div>
      <div className={cls.list}>
        <div className={cls.item}>
          <InfoCard/>
        </div>
        <div className={cls.item}>
          <InfoCard/>
        </div>
      </div>
    </a>
  );
};
