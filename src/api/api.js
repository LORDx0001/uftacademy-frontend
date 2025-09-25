const BASE_URL = 'https://api.talipovpro.uz/api';

async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Ошибка при запросе ${endpoint}:`, error);
    return [];
  }
}

// === Info ===
export async function getInfoItems() {
  return fetchData('info/');
}

// === Courses ===
export async function getCourses() {
  return fetchData('courses/');
}

// === Teachers ===
export async function getTeachers() {
  return fetchData('teachers/');
}

// === Portfolio ===
export async function getPortfolioItems() {
  return fetchData('portfolio/');
}

// === Section Titles ===
export async function getSectionTitles() {
  return fetchData('section-titles/');
}

export async function getSectionTitleByKey(key) {
  return fetchData(`section-titles/by-key/${key}/`);
}

// === Social Media ===
export async function getSocialMedia() {
  return fetchData('social-media/');
}

// === Header Section ===
export async function getHeaderSection() {
  return fetchData('header-section/');
}

// === Contact Form ===
export async function sendContactMessage(data) {
  try {
    const res = await fetch(`${BASE_URL}/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    return { success: false };
  }
}
