import axios from "axios";

const API = axios.create({
  baseURL: "https://api.talipovpro.uz/api",
});

// Header
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

// About Images
export const getAboutImages = () => API.get("/about-images/");

// About Statistics
export const getAboutStats = () => API.get("/about-stats/");

// Courses
export const getCourses = () => API.get("/courses/");

// Footer
export const getFooter = () => API.get("/footer/");

// Gallery
export const getGallery = () => API.get("/gallery/");

// Reviews — GET
export const getReviews = () => API.get("/reviews/");

// Reviews — POST
export const sendReview = (data) => API.post("/reviews/", data);

// Titles
export const getTitles = () => API.get("/titles/");

// Contact — POST
export const sendContact = (data) => API.post("/contacts/", data);

export default API;