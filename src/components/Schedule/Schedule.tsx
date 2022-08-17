import style from './Schedule.module.scss';

export const Schedule: React.FC = () => {
  return (
    <section className={style.Schedule}>
      <h2>Schedule a Demo</h2>
      <form>
        <div className={style.row}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <button type="submit">Schedule</button>
      </form>
    </section>
  );
};
