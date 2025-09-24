import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        contact: {
          title: "Biz bilan bog'laning",
          first_name: "Ism",
          last_name: "Familiya",
          phone: "Telefon raqami",
          telegram: "Telegram foydalanuvchi nomi",
          message: "Xabar (ixtiyoriy)",
          submit: "Yuborish",
          success: "Xabar yuborildi!",
          error: "Xatolik. Telefon yoki Telegram kiriting.",
          loading: "Yuborilmoqda..."
        },
        course: {
          more: "Batafsil"
        },
        footer: {
          contact_title: "Bog'lanish",
          social_title: "Ijtimoiy tarmoqlarda",
          location: "Toshkent, O'zbekiston"
        },
        nav: {
          courses: "Kurslar",
          teachers: "O'qituvchilar",
          portfolio: "Portfolio",
          about: "Biz haqimizda",
          contact: "Bog'lanish"
        },
        portfolio: {
          category: {
            all: "Hammasi",
            design: "Dizayn",
            frontend: "Frontend",
            branding: "Brending"
          }
        },
        teacher: {
          more: "Batafsil"
        }
      }
    },
    ru: {
      translation: {
        contact: {
          title: "Связаться с нами",
          first_name: "Имя",
          last_name: "Фамилия",
          phone: "Телефон",
          telegram: "Telegram (без @)",
          message: "Сообщение (необязательно)",
          submit: "Отправить",
          success: "Сообщение отправлено!",
          error: "Ошибка. Укажите номер или Telegram.",
          loading: "Отправка..."
        },
        course: {
          more: "Подробнее"
        },
        footer: {
          contact_title: "Контакты",
          social_title: "Мы в соцсетях",
          location: "Ташкент, Узбекистан"
        },
        nav: {
          courses: "Курсы",
          teachers: "Преподаватели",
          portfolio: "Портфолио",
          about: "О нас",
          contact: "Контакты"
        },
        portfolio: {
          category: {
            all: "Все",
            design: "Дизайн",
            frontend: "Фронтенд",
            branding: "Брендинг"
          }
        },
        teacher: {
          more: "Подробнее"
        }
      }
    },
    en: {
      translation: {
        contact: {
          title: "Contact Us",
          first_name: "First Name",
          last_name: "Last Name",
          phone: "Phone Number",
          telegram: "Telegram Username",
          message: "Message (optional)",
          submit: "Send",
          success: "Message sent!",
          error: "Error. Provide phone or Telegram.",
          loading: "Sending..."
        },
        course: {
          more: "More details"
        },
        footer: {
          contact_title: "Contact",
          social_title: "Social Media",
          location: "Tashkent, Uzbekistan"
        },
        nav: {
          courses: "Courses",
          teachers: "Teachers",
          portfolio: "Portfolio",
          about: "About Us",
          contact: "Contact"
        },
        portfolio: {
          category: {
            all: "All",
            design: "Design",
            frontend: "Frontend",
            branding: "Branding"
          }
        },
        teacher: {
          more: "More details"
        }
      }
    }
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
