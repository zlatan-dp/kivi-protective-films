'use client'

const STORAGE_KEY = "quizAnswersKiviFilms"; // Унікальний ключ для localStorage

// Функція отримання масиву з localStorage
export const getStoredAnswers = () => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [[]]; // Якщо немає – створюємо пустий масив
  };

// Функція збереження нового кроку в localStorage
export const saveAnswer = (stepData) => {
    const storedAnswers = getStoredAnswers();
    storedAnswers[0].push(stepData); // Додаємо в перший підмасив (історія)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedAnswers));
  };