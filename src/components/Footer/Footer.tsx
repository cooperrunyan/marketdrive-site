import style from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={style.FooterContainer}>
      <footer className={style.Footer}>
        <p>Copyright © Market Drive 2022. All rights reserved.</p>
      </footer>
    </div>
  );
};
