import Header from './components/Header/Header';
import CourseList from './components//CourseCard/CourseList';
import TeacherList from './components/TeacherCard/TeacherList';
import PortfolioGallery from './components/Portfolio/PortfolioGallery';
import InfoSection from './components/InfoCard/Info';
import ContactForm from './components/ContactUs/ContactForm';
import Footer from './components/Footer/Footer';

import './App.css'; // глобальные стили, включая scroll-behavior

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="courses">
          <h2 className="section-title">Курсы</h2>
          <CourseList />
        </section>

        <section id="teachers">
          <h2 className="section-title">Преподаватели</h2>
          <TeacherList />
        </section>

        <section id="portfolio">
          <h2 className="section-title">Портфолио студентов</h2>
          <PortfolioGallery />
        </section>

        <section id="info">
          <h2 className="section-title">О нас</h2>
          <InfoSection />
        </section>

        <section id="contact">
          <h2 className="section-title">Связаться с нами</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
