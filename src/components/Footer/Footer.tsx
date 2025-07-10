import style from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={style.FooterContainer}>
      <footer className={style.Footer}>
        <p>Copyright © Market Drive 2025. All rights reserved.</p>
        <a href="/eula">Eula</a>
      </footer>
    </div>
  );
};
