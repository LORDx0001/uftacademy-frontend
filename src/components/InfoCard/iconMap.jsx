import {
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
  FaRocket,
  FaChalkboardTeacher,
  FaGlobe
} from 'react-icons/fa';

export const getIcon = (name) => {
  switch (name) {
    case 'graduation-cap': return FaGraduationCap;
    case 'users': return FaUsers;
    case 'laptop-code': return FaLaptopCode;
    case 'rocket': return FaRocket;
    case 'teacher': return FaChalkboardTeacher;
    case 'globe': return FaGlobe;
    default: return () => <span>❓</span>;
  }
};
