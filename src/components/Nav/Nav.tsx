import style from './Nav.module.scss';

export const Nav: React.FC = () => {
  return (
    <nav className={style.Nav}>
      <a href="/">
        <img src="/logo.svg" />
      </a>
      <div className={style.links}>
        <a href="/" className={style.link}>
          Overview
        </a>
        <a href="/#schedule" className={style.contact}>
          Contact Sales
        </a>
      </div>
    </nav>
  );
};
