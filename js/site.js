const translations = {
  en: {
    title_home: 'Springtime in Michigan',
    title_neighborhood: 'Neighborhood Walks',
    title_parks: 'Walks in the Park',
    skip_link: 'Skip to Main Content',
    theme_button: 'Theme',
    language_button: 'Рус / Eng',
    nav_home: 'Home',
    nav_neighborhood: 'Neighborhood Walks',
    nav_parks: 'Walks in the Park',
    home_heading: 'Springtime in Michigan',
    home_p1: 'Springtime in Ann Arbor is a beautiful time to walk, notice the flowers, and enjoy the local parks. This site shares a small collection of scenes inspired by those walks.',
    home_p2: 'Use the navigation above to open neighborhood and park galleries. You can also switch the theme and the site language using the buttons in the header.',
    home_section_title: 'Why this version is better',
    feature_1: 'Images are bundled locally, so they work reliably on GitHub Pages.',
    feature_2: 'A skip link helps keyboard users jump to the main content.',
    feature_3: 'Theme and language preferences are saved automatically.',
    neighborhood_heading: 'Neighborhood Walks',
    neighborhood_intro: 'These images highlight flowers, trees, and quiet residential details that make spring walks around the neighborhood feel fresh and colorful.',
    parks_heading: 'Walks in the Park',
    parks_intro: 'The park gallery focuses on water, forest paths, and open spaces. The layout uses flex so the images wrap naturally on different screen sizes.',
    footer_text: 'Updated for coursework practice with accessible navigation, local images, and optional theme and language switching.'
  },
  ru: {
    title_home: 'Весна в Мичигане',
    title_neighborhood: 'Прогулки по району',
    title_parks: 'Прогулки в парке',
    skip_link: 'Перейти к основному содержимому',
    theme_button: 'Тема',
    language_button: 'Рус / Eng',
    nav_home: 'Главная',
    nav_neighborhood: 'Прогулки по району',
    nav_parks: 'Прогулки в парке',
    home_heading: 'Весна в Мичигане',
    home_p1: 'Весна в Анн-Арборе — отличное время для прогулок, наблюдения за цветами и отдыха в местных парках. Этот сайт показывает небольшую подборку сцен, вдохновленных такими прогулками.',
    home_p2: 'Используйте навигацию выше, чтобы открыть галереи района и парка. В шапке также можно переключать тему и язык сайта.',
    home_section_title: 'Почему эта версия лучше',
    feature_1: 'Изображения хранятся локально, поэтому надежно работают на GitHub Pages.',
    feature_2: 'Ссылка Skip помогает пользователям клавиатуры быстро перейти к основному содержимому.',
    feature_3: 'Настройки темы и языка сохраняются автоматически.',
    neighborhood_heading: 'Прогулки по району',
    neighborhood_intro: 'Эти изображения показывают цветы, деревья и спокойные детали жилых улиц, которые делают весенние прогулки по району особенно приятными.',
    parks_heading: 'Прогулки в парке',
    parks_intro: 'Галерея парка сосредоточена на воде, лесных тропинках и открытых пространствах. Разметка flex помогает изображениям удобно переноситься на экранах разной ширины.',
    footer_text: 'Обновлено для учебной практики: доступная навигация, локальные изображения и дополнительные переключатели темы и языка.'
  }
};

function applyLanguage(lang) {
  const language = translations[lang] ? lang : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) {
      el.textContent = translations[language][key];
    }
  });
  document.querySelectorAll('[data-alt-en][data-alt-ru]').forEach(img => {
    img.alt = language === 'ru' ? img.dataset.altRu : img.dataset.altEn;
  });
  localStorage.setItem('site-language', language);
}

function applyTheme(theme) {
  const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
  document.body.classList.toggle('theme-dark', resolvedTheme === 'dark');
  localStorage.setItem('site-theme', resolvedTheme);
}

function initControls() {
  const savedLang = localStorage.getItem('site-language') || 'en';
  const savedTheme = localStorage.getItem('site-theme') || 'light';

  applyLanguage(savedLang);
  applyTheme(savedTheme);

  const themeButton = document.getElementById('theme-toggle');
  const langButton = document.getElementById('lang-toggle');

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  if (langButton) {
    langButton.addEventListener('click', () => {
      const nextLang = document.documentElement.lang === 'ru' ? 'en' : 'ru';
      applyLanguage(nextLang);
    });
  }
}

document.addEventListener('DOMContentLoaded', initControls);
