import style from './Nav.module.scss';

export const Nav: React.FC = () => {
  return (
    <nav className={style.Nav}>
      <button className={style.contact}>Contact Sales</button>
    </nav>
  );
};
