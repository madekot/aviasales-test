import cls from './InfoCard.module.scss';

export const InfoCard = () => {
  return (
    <div className={cls.InfoCard}>
      <div className={cls.list}>
        <div className={cls.item}>
          <p className={cls.title}>MOW – HKT</p>
          <p className={cls.text}>10:45 – 08:00</p>
        </div>
        <div className={cls.item}>
          <p className={cls.title}>В пути</p>
          <p className={cls.text}>21ч 15м</p>
        </div>
        <div className={cls.item}>
          <p className={cls.title}>2 пересадки</p>
          <p className={cls.text}>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
};