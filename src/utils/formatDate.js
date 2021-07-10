/**
 * transform date from backend to necessary view
 */
export const formatDate = (date, locale = 'en') => {
  const options = {
    day: 'numeric',
    month: locale === 'en' ? 'long' : 'numeric',
    year: 'numeric',
  };

  return Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'ru-RU', options).format(new Date(date));
};
