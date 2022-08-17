import style from './Institutional.module.scss';

export const Institutional: React.FC = () => {
  return (
    <section className={style.Institutional}>
      <h2>Institutional</h2>
      <div className={style.content}>
        <Card title="Easy">The eVestment “Easy” button. Load, match and merge your Market Lens data daily.</Card>
        <Card title="Automated">RFP automation workflow and high quality branded proposal generation.</Card>
        <Card title="Fast">Service management console purpose-built to reduce time to provide Consultants with compliance approved marketing materials.</Card>
        <div className={style.dock}>&nbsp;</div>
      </div>
    </section>
  );
};

const Card: React.FC<{ title: string; children: string | React.ReactElement }> = ({ title, children: content }) => {
  return (
    <div className={style.Card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
