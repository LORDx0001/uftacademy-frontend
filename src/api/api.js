const BASE_URL = 'https://api.talipovpro.uz/api';

export async function getCourses() {
  const res = await fetch(`${BASE_URL}/courses/`);
  return res.json();
}

export async function getTeachers() {
  const res = await fetch(`${BASE_URL}/teachers/`);
  return res.json();
}

export async function getPortfolioItems() {
  const res = await fetch(`${BASE_URL}/portfolio/`);
  return res.json();
}

export async function getSectionTitles() {
  const res = await fetch(`${BASE_URL}/section-titles/`);
  return res.json();
}

export async function getSocialMedia() {
  const res = await fetch(`${BASE_URL}/social-media/`);
  return res.json();
}

export async function getInfoFacts() {
  const res = await fetch(`${BASE_URL}/info/`);
  return res.json();
}

export async function sendContactMessage(data) {
  return fetch(`${BASE_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
