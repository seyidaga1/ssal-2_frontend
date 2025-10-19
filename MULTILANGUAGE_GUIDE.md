# Multilanguage Setup Guide

Your project now supports Azerbaijani, Russian, and English!

## How to Use Translations

### In Client Components:
```tsx
'use client';
import {useTranslations} from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('header');
  
  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('about')}</p>
    </div>
  );
}
```

### In Server Components:
```tsx
import {useTranslations} from 'next-intl';

export default function MyServerComponent() {
  const t = useTranslations('services');
  
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
```

## URL Structure

- English (default): `http://localhost:3001/` or `http://localhost:3001/en/`
- Azerbaijani: `http://localhost:3001/az/`
- Russian: `http://localhost:3001/ru/`

## Language Switcher

The language switcher is already added to the Header component. Users can switch languages using the dropdown menu.

## Translation Files

All translations are in:
- `/messages/en.json` - English
- `/messages/az.json` - Azerbaijani
- `/messages/ru.json` - Russian

## Example: Update Hero Component

To translate the Hero component, replace hardcoded text with:

```tsx
'use client';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('cta')}</button>
    </div>
  );
}
```

## Next Steps

1. Update components to use `useTranslations()` instead of hardcoded text
2. Add more translations to the JSON files as needed
3. Test all three languages

Your server is running on port 3001!
