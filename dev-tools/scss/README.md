# SCSS Architecture Documentation

## 📁 Структура файлов

```
scss/
├── _variables.scss      # Переменные (цвета, шрифты, размеры)
├── _mixins.scss         # Миксины для переиспользования
├── _reset.scss          # CSS reset и базовые стили
├── _components.scss     # Компоненты (кнопки, заголовки, сообщения)
├── _animations.scss     # Анимации и keyframes
├── _responsive.scss     # Медиа-запросы и адаптивность
├── main.scss            # Главный файл, импортирующий все модули
└── README.md            # Эта документация
```

## 🎨 Переменные (_variables.scss)

### Цвета
- `$color-primary`: #0d99ff (основной синий)
- `$color-secondary`: #28a745 (зеленый)
- `$color-background`: #EFEFF3 (фон)
- `$color-text-primary`: #000000 (основной текст)
- `$color-text-secondary`: #728a96 (вторичный текст)

### Размеры шрифтов
- `$font-size-xs`: 14px
- `$font-size-sm`: 16px
- `$font-size-base`: 18px
- `$font-size-lg`: 20px
- `$font-size-xl`: 22px
- `$font-size-2xl`: 24px
- `$font-size-3xl`: 40px
- `$font-size-4xl`: 42px
- `$font-size-5xl`: 72px

### Отступы
- `$spacing-xs`: 4px
- `$spacing-sm`: 8px
- `$spacing-md`: 10px
- `$spacing-lg`: 12px
- `$spacing-xl`: 16px
- `$spacing-2xl`: 20px
- `$spacing-3xl`: 24px

### Breakpoints
- `$breakpoint-mobile`: 430px
- `$breakpoint-tablet`: 630px
- `$breakpoint-desktop`: 1024px

## 🔧 Миксины (_mixins.scss)

### Кнопки
```scss
@include button-variant($bg-color, $hover-color);
```

### Медиа-запросы
```scss
@include mobile { /* стили */ }
@include tablet { /* стили */ }
@include desktop { /* стили */ }
```

### Flexbox
```scss
@include flex-center;    // центрирование
@include flex-column;    // вертикальное расположение
```

### Сообщения
```scss
@include message-incoming;  // входящие сообщения
@include message-outgoing;  // исходящие сообщения
```

## 📱 Адаптивность (_responsive.scss)

### Мобильные устройства (≤430px)
- Уменьшенные размеры заголовков
- Адаптированные кнопки
- Оптимизированные отступы

### Планшеты (≤630px)
- Вертикальное расположение элементов
- Адаптированные размеры сообщений

### Десктоп (≤1024px)
- Оптимизация для небольших экранов
- Адаптивные изображения

## 🎭 Анимации (_animations.scss)

### Градиентный текст
- Анимация `gradientMove` для плавного движения градиента
- Поддержка `prefers-reduced-motion`

### Hover эффекты
- Подъем кнопок при наведении
- Масштабирование сообщений

### Дополнительные анимации
- `fadeIn` - появление элементов
- `slideInLeft` - скольжение слева
- `slideInRight` - скольжение справа

## 🚀 Команды сборки

```bash
# Установка зависимостей
npm install

# Сборка в сжатом виде
npm run build

# Сборка в развернутом виде
npm run build:expanded

# Режим разработки с автопересборкой
npm run dev

# Очистка
npm run clean

# Проверка качества кода
npm run lint

# Форматирование кода
npm run format
```

## 📋 Принципы организации

1. **Модульность** - каждый файл отвечает за свою область
2. **Переменные** - все значения вынесены в переменные
3. **Миксины** - переиспользование кода
4. **Комментарии** - подробное описание каждого блока
5. **Адаптивность** - мобильный-first подход
6. **Доступность** - поддержка различных режимов

## 🔄 Процесс разработки

1. Измените нужный SCSS файл
2. Запустите `npm run dev` для автопересборки
3. Проверьте результат в браузере
4. Используйте `npm run build` для продакшн сборки

## 📚 Дополнительные возможности

- **Темная тема** - заготовка в main.scss
- **Print стили** - оптимизация для печати
- **High DPI** - поддержка Retina дисплеев
- **Debug режим** - сетка для разработки
