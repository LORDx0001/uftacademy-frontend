import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactForm.module.css';
import { getSectionTitles, sendContactMessage } from '../api/api';

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    telegram: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getSectionTitles().then(setTitles);
  }, []);

  const getTitle = (key) => {
    const item = titles.find(t => t.key === key);
    return item ? item[`title_${i18n.language}`] : t('contact.title');
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');

    if (!form.phone && !form.telegram) {
      setStatus('error');
      return;
    }

    try {
      const res = await sendContactMessage(form);
      if (res.ok) {
        setStatus('success');
        setForm({
          first_name: '',
          last_name: '',
          phone: '',
          telegram: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{getTitle('contact')}</h2>

      <input
        type="text"
        name="first_name"
        placeholder={t('contact.first_name')}
        value={form.first_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder={t('contact.last_name')}
        value={form.last_name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder={t('contact.phone')}
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telegram"
        placeholder={t('contact.telegram')}
        value={form.telegram}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder={t('contact.message')}
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit">{t('contact.submit')}</button>

      {status === 'loading' && <p className={styles.status}>{t('contact.loading')}</p>}
      {status === 'success' && <p className={styles.status}>{t('contact.success')}</p>}
      {status === 'error' && <p className={styles.status}>{t('contact.error')}</p>}
    </form>
  );
};

export default ContactForm;
