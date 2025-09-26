import axios from "axios";

const API = axios.create({
  baseURL: "https://api.talipovpro.uz/api",
});


// Header — agar header’da alohida app bo‘lsa
export const getHeader = async () => {
  try {
    const response = await API.get("/header/");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных заголовка:", error);
    return [];
  }
};


// About
export const getAbout = () => API.get("/about/");

// Courses
export const getCourses = () => API.get("/courses/");

// Professors
export const getProfessors = () => API.get("/professors/");

// Portfolio
export const getPortfolio = () => API.get("/portfolio/");

// Footer
export const getFooter = () => API.get("/footer/");

// Contact — POST
export const sendContact = (data) => API.post("/contacts/", data);

export default API;
