import style from './Retail.module.scss';

export const Retail: React.FC = () => {
  return (
    <section className={style.Retail}>
      <h2>Retail</h2>
      <ul>
        <li>
          Automated <span>Client and Prospect grading</span> and scoring based on <span>big data</span>.
        </li>
        <li>
          Decision-Maker <span>team management</span> with Industry Sales Channel Territory Management <span>automation</span>.
        </li>
        <li>
          Represetntative communication <span>preference management</span> integrated to Marketing journeys and Public Website
        </li>
      </ul>
    </section>
  );
};
