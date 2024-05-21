![Vercel](https://vercelbadge.vercel.app/api/MariSarco/ASTON_TRAINEE_COURSE_REACT)


# <h1 align="center">MariSarco Films</h1>

> Основной функционал:

1. Регистрация и авторизация: пользователи могут создать учетную запись и авторизоваться в приложении.
2. Поиск фильмов: приложение предоставляет возможность быстрого поиска фильмов по их ключевым словам.
3. Избранные фильмы: пользователи могут добавлять и удалять фильмы в список избранных для удобного доступа к ним в будущем.
4. История поиска: приложение сохраняет историю поиска, что помогает пользователю найти фильм, который они искали ранее.
5. Светлая и темная тема: приложение предоставляет пользователям выбор между светлой и темной темами интерфейса.

## **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использовал **Firebase**. Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/firebase.ts)
      **React**
- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты** Ссылка на код [Глупый компонент](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/Header/header.tsx) [умный](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/UiElements/search-input.tsx)
- [x] Есть **рендеринг списков** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/pages/home-page.tsx)
- [x] Реализована хотя бы одна **форма** [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/auth/auth-form.tsx)
- [x] Есть применение **Контекст API** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/theme/theme-provider.tsx)
- [x] Есть применение **предохранителя** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/App.tsx)
- [x] Есть хотя бы один **кастомный хук** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/hooks/use-auth.ts)
- [x] Хотя бы несколько компонентов используют **PropTypes** Ссылка на [первый](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/pages/search-page.tsx) и [второй](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/pages/home-page.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/hooks/use-debounce.ts)
- [x] Есть применение **lazy + Suspense** Ссылка на код [lazy](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/router/router-config.ts) [Suspense](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/router/index.tsx)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/store/index.ts)
- [x] Используем **слайсы** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/store/slices/user/user-slice.ts)
- [x] Есть хотя бы одна **кастомная мидлвара** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/components/helpers/logger.ts)
- [x] Используется **RTK Query** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/store/slices/films/films-slice.ts)
- [x] Используется **Transforming Responses** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/store/slices/films/films-slice.ts)

### **2 уровень (необязательный)**

- [x] Использование **TypeScript** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/store/types/film-types.ts)
- [x] Использование **Firebase** Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/firebase.ts)
- [x] Настроен **CI/CD** Бейдж в шапке Readme (использую vercal)
- [x] Используются **мемоизированные селекторы** Использовал но не было того что можно закешировать Ссылка на [код](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/src/store/slices/favorites/favorites-selectors.ts)
- [x] Проведена оптимизация приложения. Изначально проверял есть ли фильм в списке избранного в компоненте каждый раз. После изменений, свойство isFavorite добавлял к списку фильмов при рендере и в последствии при рендере карточки лишь брал это значение [до](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/pull/3) [после](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/pull/4)
- [x] Добавлены тесты [первый](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/tests/test-2.spec.ts) [второй](https://github.com/MariSarco/ASTON_TRAINEE_COURSE_REACT/blob/main/tests/test-3.spec.ts)

### **Дополнительно**

- [x] Проект собран при помощи Vite
- [x] Использована React-error-boundery
- [x] При работе с стилями использовал tailwindcss