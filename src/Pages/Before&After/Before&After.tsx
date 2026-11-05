import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import BannerSlider from '../../components/BannerSlider/BannerSlider';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import styles from './BeforeAfter.module.css';

import before1 from '../../assets/images/BeforeAfter_Page/before1.webp';
import after1 from '../../assets/images/BeforeAfter_Page/after1.webp';

import before2 from '../../assets/images/BeforeAfter_Page/before2.webp';
import after2 from '../../assets/images/BeforeAfter_Page/after2.webp';

import before3 from '../../assets/images/BeforeAfter_Page/before3.webp';
import after3 from '../../assets/images/BeforeAfter_Page/after3.webp';

import before4 from '../../assets/images/BeforeAfter_Page/before4.webp';
import after4 from '../../assets/images/BeforeAfter_Page/after4.webp';

import before5 from '../../assets/images/BeforeAfter_Page/before5.webp';
import after5 from '../../assets/images/BeforeAfter_Page/after5.webp';

import before6 from '../../assets/images/BeforeAfter_Page/before6.webp';
import after6 from '../../assets/images/BeforeAfter_Page/after6.webp';

import before7 from '../../assets/images/BeforeAfter_Page/before7.webp';
import after7 from '../../assets/images/BeforeAfter_Page/after7.webp';

import before8 from '../../assets/images/BeforeAfter_Page/before8.webp';
import after8 from '../../assets/images/BeforeAfter_Page/after8.webp';

import before9 from '../../assets/images/BeforeAfter_Page/before9.webp';
import after9 from '../../assets/images/BeforeAfter_Page/after9.webp';

import before10 from '../../assets/images/BeforeAfter_Page/before10.webp';
import after10 from '../../assets/images/BeforeAfter_Page/after10.webp';

import before12 from '../../assets/images/BeforeAfter_Page/before12.webp';
import after12 from '../../assets/images/BeforeAfter_Page/after12.webp';

import before13 from '../../assets/images/BeforeAfter_Page/before13.webp';
import after13 from '../../assets/images/BeforeAfter_Page/after13.webp';

import before14 from '../../assets/images/BeforeAfter_Page/before14.webp';
import after14 from '../../assets/images/BeforeAfter_Page/after14.webp';

const CATEGORIES = [
  { id: 'aesthetic', translationKey: 'aesthetic' },
  { id: 'prosthetics', translationKey: 'prosthetics' },
  { id: 'care', translationKey: 'care' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

const EXAMPLES = [
  {
    id: 1,
    key: 'depigmentation',
    category: 'aesthetic',
    imageBefore: before3,
    imageAfter: after3,
  },
  {
    id: 2,
    key: 'eclaircissement',
    category: 'aesthetic',
    imageBefore: before9,
    imageAfter: after9,
  },
  {
    id: 3,
    key: 'protheseTotale',
    category: 'prosthetics',
    imageBefore: before6,
    imageAfter: after6,
  },
  {
    id: 4,
    key: 'depigmentation',
    category: 'aesthetic',
    imageBefore: before2,
    imageAfter: after2,
  },
  {
    id: 5,
    key: 'protheseFlexite',
    category: 'prosthetics',
    imageBefore: before1,
    imageAfter: after1,
  },
  {
    id: 6,
    key: 'depigmentation',
    category: 'aesthetic',
    imageBefore: before4,
    imageAfter: after4,
  },
  {
    id: 7,
    key: 'strassDentaire',
    category: 'aesthetic',
    imageBefore: before5,
    imageAfter: after5,
  },
  {
    id: 8,
    key: 'blanchiment',
    category: 'aesthetic',
    imageBefore: before8,
    imageAfter: after8,
  },
  {
    id: 9,
    key: 'blanchiment',
    category: 'aesthetic',
    imageBefore: before7,
    imageAfter: after7,
  },
  {
    id: 10,
    key: 'Détartrage',
    category: 'care',
    imageBefore: before10,
    imageAfter: after10,
  },
  {
    id: 12,
    key: 'fermeture_diasteme',
    category: 'aesthetic',
    imageBefore: before12,
    imageAfter: after12,
  },
  {
    id: 14,
    key: 'fermeture_diasteme',
    category: 'aesthetic',
    imageBefore: before14,
    imageAfter: after14,
  },
  {
    id: 13,
    key: 'herpes_labial',
    category: 'care',
    imageBefore: before13,
    imageAfter: after13,
  },
];

const BANNER_IMAGES = [before1, before2];

export const BeforeAfter = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .trim();

  const filteredExamples = useMemo(
    () => EXAMPLES.filter((example) => {
      if (selectedCategory !== 'all' && example.category !== selectedCategory) return false;
      if (!normalizedQuery) return true;

      const searchableText = [
        t(`beforeAfter.${example.key}.title`),
        t(`beforeAfter.${example.key}.description`),
        t(`beforeAfter.categories.${example.category}`),
      ]
        .join(' ')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase();

      return searchableText.includes(normalizedQuery);
    }),
    [normalizedQuery, selectedCategory, t],
  );

  return (
    <>
      <BannerSlider 
        images={BANNER_IMAGES} 
        title={t('beforeAfter.banner.title')} 
        subtitle={t('beforeAfter.banner.subtitle')} 
      />
      <main className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.toolbar}>
            <label className={styles.searchBox}>
              <span className={styles.srOnly}>{t('beforeAfter.filters.searchLabel')}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t('beforeAfter.filters.searchPlaceholder')}
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearch}
                  onClick={() => setSearchQuery('')}
                  aria-label={t('beforeAfter.filters.clear')}
                >
                  &times;
                </button>
              )}
            </label>
            <p className={styles.resultCount} aria-live="polite">
              {t('beforeAfter.filters.results', { count: filteredExamples.length })}
            </p>
          </div>

          <div className={styles.filters} aria-label={t('beforeAfter.filters.searchLabel')}>
            <button
              type="button"
              className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setSelectedCategory('all')}
              aria-pressed={selectedCategory === 'all'}
            >
              {t('beforeAfter.filters.all')}
              <span>{EXAMPLES.length}</span>
            </button>
            {CATEGORIES.map((category) => {
              const count = EXAMPLES.filter((example) => example.category === category.id).length;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`${styles.filterButton} ${isSelected ? styles.activeFilter : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={isSelected}
                >
                  {t(`beforeAfter.categories.${category.translationKey}`)}
                  <span>{count}</span>
                </button>
              );
            })}
          </div>

          {filteredExamples.length > 0 ? (
            CATEGORIES.map((category) => {
              const examples = filteredExamples.filter((example) => example.category === category.id);
              if (examples.length === 0) return null;

              return (
                <section key={category.id} className={styles.categorySection}>
                  <div className={styles.categoryHeading}>
                    <h2>{t(`beforeAfter.categories.${category.translationKey}`)}</h2>
                    <span>{examples.length}</span>
                  </div>
                  <div className={styles.caseGrid}>
                    {examples.map((example) => (
                      <ImageSlider
                        key={example.id}
                        title={t(`beforeAfter.${example.key}.title`)}
                        imageBefore={example.imageBefore}
                        imageAfter={example.imageAfter}
                        description={t(`beforeAfter.${example.key}.description`)}
                        compact
                        beforeLabel={t('beforeAfter.filters.before')}
                        afterLabel={t('beforeAfter.filters.after')}
                        sliderLabel={t('beforeAfter.filters.sliderLabel', {
                          title: t(`beforeAfter.${example.key}.title`),
                        })}
                      />
                    ))}
                  </div>
                </section>
              );
            })
          ) : (
            <div className={styles.emptyState} role="status">
              <span className={styles.emptyIcon} aria-hidden="true">⌕</span>
              <h2>{t('beforeAfter.filters.noResults')}</h2>
              <button
                type="button"
                className={styles.resetButton}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                {t('beforeAfter.filters.reset')}
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export { BeforeAfter as Beforeafter };
export default BeforeAfter;