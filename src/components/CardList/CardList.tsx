import cls from './CardList.module.scss';
import {Card} from "../Card/Card";

export const CardList = () => {
  return (
    <div className={cls.CardList}>
      <div className={cls.list}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

