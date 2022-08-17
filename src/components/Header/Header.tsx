import style from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={style.Header}>
      <h1>
        <span>We are</span>{' '}
        <span>
          <span>Market Drive</span>,
        </span>
      </h1>
      <p>
        Turn-key <span>Asset Management Solution</span> aimed at converting the typical Salesforce implementation into the{' '}
        <span>digital engagement engine</span> of tomorrow.
      </p>
    </header>
  );
};
