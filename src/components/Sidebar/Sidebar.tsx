import cls from './Sidebar.module.scss';
import { ReactComponent as CheckboxOff } from '../../assets/checkbox-off.svg'
import { ReactComponent as CheckboxOn } from '../../assets/checkbox-on.svg'

// TODO:
// [] Переделать чекбоксы на input
// [] добавить типизацию пропрос
// [] Получать массив список карточер и мапить

export const Sidebar = () => {
  return (
    <div className={cls.Sidebar}>
      <p className={cls.title}>Количество пересадок</p>
      <div className={cls.list}>
        <button className={cls.item}>
          <div className={cls.checkbox}>
            <CheckboxOff/>
          </div>
          <p className={cls.label}>Все</p>
        </button>
        <button className={cls.item}>
          <div className={cls.checkbox}>
            <CheckboxOn/>
          </div>
          <div className={cls.label}>Без пересадок</div>
        </button>
        <button className={cls.item}>
          <div className={cls.checkbox}>
            <CheckboxOn/>
          </div>
          <div className={cls.label}>1 пересадка</div>
        </button>
        <button className={cls.item}>
          <div className={cls.checkbox}>
            <CheckboxOn/>
          </div>
          <div className={cls.label}>2 пересадки</div>
        </button>
        <button className={cls.item}>
          <div className={cls.checkbox}>
            <CheckboxOff/>
          </div>
          <div className={cls.label}>3 пересадки</div>
        </button>
      </div>
    </div>
  );
};
