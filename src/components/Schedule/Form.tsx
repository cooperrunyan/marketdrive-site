import { FormEvent, useState } from 'react';
import style from './Schedule.module.scss';

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const Form: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');

  const [touchedFirstname, setTouchedFirstname] = useState(false);
  const [touchedLastname, setTouchedLastname] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedTitle, setTouchedTitle] = useState(false);
  const [touchedCompany, setTouchedCompany] = useState(false);
  const [touchedMobile, setTouchedMobile] = useState(false);

  const reset = () => {
    setFirstname('');
    setTouchedFirstname(false);
    setLastname('');
    setTouchedLastname(false);
    setEmail('');
    setTouchedEmail(false);
    setTitle('');
    setTouchedTitle(false);
    setCompany('');
    setTouchedCompany(false);
    setMobile('');
    setTouchedMobile(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(firstname && lastname && mobile && title && email && company && emailRegex.test(email))) return;

    fetch('https://cors-anywhere.herokuapp.com/https://getstatements.com/api/w2l?app=marketdrive', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        mobile,
        email,
        title,
        company,
      }),
    }).then(reset);
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.row}>
        <input
          required
          type="text"
          placeholder="First Name"
          className={firstname || !touchedFirstname ? '' : style.error}
          value={firstname}
          onChange={e => {
            setFirstname(e.target.value);
            setTouchedFirstname(true);
          }}
        />
        <input
          required
          className={lastname || !touchedLastname ? '' : style.error}
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={e => {
            setLastname(e.target.value);
            setTouchedLastname(true);
          }}
        />
      </div>
      <input
        className={emailRegex.test(email) || !touchedEmail ? '' : style.error}
        required
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          setTouchedEmail(true);
        }}
      />
      <input
        required
        className={title || !touchedTitle ? '' : style.error}
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
          setTouchedTitle(true);
        }}
      />
      <input
        required
        className={company || !touchedCompany ? '' : style.error}
        type="text"
        placeholder="Company"
        value={company}
        onChange={e => {
          setCompany(e.target.value);
          setTouchedCompany(true);
        }}
      />
      <input
        required
        className={mobile || !touchedMobile ? '' : style.error}
        type="number"
        placeholder="Phone Number"
        value={mobile}
        onChange={e => {
          setMobile(e.target.value);
          setTouchedMobile(true);
        }}
      />
      <button type="submit">Schedule</button>
    </form>
  );
};
