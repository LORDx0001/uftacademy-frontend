import React, { useState } from "react";
import { sendContact } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContact(form)
      .then(() => {
        alert(t("contact.sent"));
        setForm({ first_name: "", last_name: "", phone_number: "", message: "" });
      })
      .catch((err) => {
        alert(t("contact.error"));
        console.error(err);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>{t("contact.title")}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder={t("contact.form.first_name")}
          value={form.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder={t("contact.form.last_name")}
          value={form.last_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder={t("contact.form.phone")}
          value={form.phone_number}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder={t("contact.form.message")}
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">{t("contact.form.submit")}</button>
      </form>
    </section>
  );
};

export default Contact;
