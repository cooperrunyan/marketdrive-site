import style from './Nav.module.scss';

export const Nav: React.FC = () => {
  return (
    <nav className={style.Nav}>
      <a href="#schedule" className={style.contact}>
        Contact Sales
      </a>
    </nav>
  );
};
