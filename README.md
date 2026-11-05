# Smile Expert

The responsive, multilingual website for the dental clinic of Dr. Sarra Haouet in Nabeul, Tunisia. Visitors can explore the clinic and its treatments, compare before-and-after cases, and contact the clinic.

## Features

- **Home page:** clinic introduction, featured treatments, consultation call to action, external online appointment booking, video experience, schedule information, and a five-step overview of the patient journey.
- **About page:** information about the clinic and its dental expertise.
- **Services catalog:** treatments grouped into four sections:
  - Dental care and gum treatments, including laser whitening, gingival alignment, gingival depigmentation, and frenectomy.
  - Preventive care, including regular check-ups, preventive care, scaling, gingival decontamination, clear aligners, and early orthodontic care for children.
  - Therapeutic and endodontic treatments, including composite bonding, endodontics, extractions, implant surgery, and treatment of dental anomalies.
  - Dental prosthetics, including fixed and removable prostheses and veneers.
- **Treatment detail pages:** dedicated pages for dental care, preventive care, therapeutic treatments, and prosthetics. Service cards link directly to their corresponding detail sections.
- **Before-and-after gallery:** interactive image comparisons, categories, live search, accent-insensitive matching, result counts, and an empty state with a filter reset.
- **Technology pages:** information about diode laser, intraoral scanning, and facial scanning.
- **Contact page:** clinic contact details, social links, and a validated contact form with loading, success, and error states. The form sends messages through the PHP mail endpoint.
- **Multilingual content:** French, English, and Italian translations, with browser language detection and English as the fallback language.
- **Shared site experience:** responsive navigation, banner sliders, service cards, calls to action, footer, and scroll-to-top behavior.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services catalog |
| `/services/bucco-dentaire` | Dental and gingival care |
| `/services/soins-bucco-dentaires` | Preventive and oral care |
| `/services/therapeutique` | Therapeutic treatments |
| `/services/protheses-dentaires` | Dental prosthetics |
| `/before-and-after` | Before-and-after gallery |
| `/contact` | Contact |
| `/laser` | Diode laser |
| `/scanner.intraoral` | Intraoral scanner |
| `/scanner.facial` | Facial scanner |

Unknown routes display a not-found page.

## Tech stack

- React 19, TypeScript, and Vite
- React Router for client-side routing
- i18next and react-i18next for translations
- Swiper for sliders
- `react-compare-slider` for before-and-after comparisons
- PHP and PHPMailer for contact form email delivery

## Requirements

- Node.js and npm
- PHP for local contact form submissions
- SMTP credentials configured for the PHP mail endpoint

## Getting started

Install dependencies and start the frontend:

```sh
npm ci
npm run dev
```

The Vite development server is normally available at `http://localhost:5173`.

### Contact form backend

The frontend posts contact form submissions to `/api/contact.php`. For local development, start PHP from the repository root in a separate terminal:

```sh
php -S 127.0.0.1:8000 -t .
```

Vite proxies `/api` requests to `http://127.0.0.1:8000`. Configure the mail server and recipient settings in `api/.env` using the variables expected by `api/contact.php` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `RECEIVER_EMAIL`). Keep real credentials private and do not commit them.

The website can be browsed without the PHP server, but the contact form will not be able to send messages.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the project and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Production deployment

1. Run `npm ci` and `npm run build`.
2. Deploy the contents of `dist/` to a web server configured to serve the single-page application routes.
3. Deploy the `api/` directory to a PHP-enabled server at `/api`, and configure its SMTP environment values securely.
4. Confirm the contact form endpoint is available at `/api/contact.php`.

## Project structure

```text
api/                    PHP contact endpoint and PHPMailer
public/locales/         French, English, and Italian translation files
public/icons/           Shared site icons
src/Pages/              Route-level page components
src/components/         Shared UI components
src/assets/             Images and video assets
```
