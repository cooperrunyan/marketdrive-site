import { Form } from './Form';
import style from './Schedule.module.scss';

export const Schedule: React.FC = () => {
  return (
    <section className={style.Schedule} id="schedule">
      <h2>Schedule a Demo</h2>
      <Form />
    </section>
  );
};
