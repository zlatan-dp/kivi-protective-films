'use client'

const STORAGE_KEY = "quizAnswersKiviFilms"; // Унікальний ключ для localStorage

// Функція отримання масиву з localStorage
export const getStoredAnswers = () => {
  if (typeof window === "undefined") return [[]]; // Перевіряємо, чи є доступ до window
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [[]];
};

// Функція збереження масиву в localStorage
export const saveAnswer = (answer) => {
  if (typeof window === "undefined") return;
  const storedData = getStoredAnswers();
  storedData[0].push(answer);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
};