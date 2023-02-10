import cls from './Main.module.scss';

import {Sidebar} from "../Sidebar/Sidebar";
import {Container} from "../Container/Container";
import {Sorting} from "../Sorting/Sorting";
import {CardList} from "../CardList/CardList";
import {Button} from "../Button/Button";

export const Main = () => {
  return (
    <div className={cls.Main}>
      <Container>
        <div className={cls.content}>
          <div className={'sidebar'}>
            <Sidebar />
          </div>
          <div className={cls.column}>
            <Sorting />
            <CardList />
            <Button />
          </div>
        </div>
      </Container>
    </div>
  );
};
