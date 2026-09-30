# 🐱 A Tiny Gift From The Cats 🧸

A small interactive gift website built with React, TypeScript, Tailwind CSS, Framer Motion, React Router, and Formspree.

The website is designed as a playful digital gift rather than a traditional ecommerce website.

The user journey is:

```text
Welcome
   ↓
Cat Gallery
   ↓
Choose a Teddy Bear
   ↓
Enter Delivery Information
   ↓
Submit Form
   ↓
Formspree
   ↓
Success
```

---

## ✨ Concept

**A Tiny Gift From The Cats 🐱🧸**

The website should feel like the visitor is opening a small digital gift.

Core emotions:

- Cute
- Warm
- Playful
- Dreamy
- Personal
- Soft
- Interactive

The website must NOT look like:

- A traditional ecommerce website
- A corporate landing page
- An admin dashboard
- A complex application

The experience should be simple:

> See cute cats → choose a teddy bear → enter delivery information → send the gift.

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

### Backend
### Form Submission

**Formspree**

No database is required.

```text
React Form
    ↓
Formspree
    ↓
Formspree Dashboard / Email
```

Environment variable:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mrpbdavd
```

---

## 📁 Suggested Project Structure

```text
cute-gift/
│
├── fe/
│   ├── public/
│   │   ├── cat/
│   │   └── gift/
│   │
│   └── src/
│       ├── components/
│       │   ├── Cat.tsx
│       │   ├── CatCard.tsx
│       │   ├── TeddyCard.tsx
│       │   ├── CuteButton.tsx
│       │   ├── FormInput.tsx
│       │   ├── PageTransition.tsx
│       │   ├── FloatingHearts.tsx
│       │   ├── Sparkles.tsx
│       │   └── GiftIllustration.tsx
│       │
│       ├── data/
│       │   └── bears.ts
│       │
│       ├── pages/
│       │   ├── Welcome.tsx
│       │   ├── Cats.tsx
│       │   ├── Bears.tsx
│       │   ├── Address.tsx
│       │   └── Success.tsx
│       │
│       ├── context/
│       │   └── GiftContext.tsx
│       │
│       ├── lib/
│       │   └── formspree.ts
│       │
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── .gitignore
├── README.md
└── PROJECT_REQUIREMENTS.md
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone <repository-url>
cd cute-gift
```

### 2. Install frontend dependencies

Run this once from the project root:

```bash
npm install
```

### 3. Configure Formspree

Copy `fe/.env.example` to `fe/.env` (the endpoint is already filled in):

```bash
cp fe/.env.example fe/.env
```

Do not commit `.env`.

### 4. Start frontend

```bash
npm run dev
```

The frontend is available at `http://localhost:5173`.

---

## 🌐 Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Welcome | Introduce the gift |
| `/cats` | Cat Gallery | Interact with cute cats |
| `/bears` | Choose Bear | Select a teddy bear |
| `/address` | Delivery | Enter name/address/message |
| `/success` | Success | Show successful submission |

---

## 🎨 Design

### Main Colors

| Name | Hex |
|---|---|
| Cream | `#FFF8F2` |
| Soft Pink | `#FFF0F5` |
| Primary Pink | `#FF8FAB` |
| Deep Pink | `#E96A8B` |
| Soft Lavender | `#DCCFF7` |
| Soft Yellow | `#FFE7A8` |
| Primary Text | `#4A3B40` |
| Secondary Text | `#8A747C` |
| White | `#FFFFFF` |

### Fonts

Heading:

```text
Baloo 2
```

Body:

```text
Nunito
```

### Visual Style

- Rounded
- Pastel
- Kawaii
- Soft shadows
- Large whitespace
- Cute illustrations
- Smooth transitions

---

## 🎬 Animation

All UI animation should use:

```text
Framer Motion
```

Common patterns:

### Page enter

```text
opacity: 0 → 1
y: 20 → 0
```

### Button

```text
hover: scale 1.04
tap: scale 0.96
```

### Card

```text
hover: y -6
hover: scale 1.02
```

### Floating objects

```text
y: 0 → -10 → 0
```

Animations must remain subtle and should never make the interface difficult to use.

---

## 📱 Responsive Design

Mobile-first.

Primary targets:

```text
375px
390px
430px
```

Desktop breakpoint:

```text
768px+
```

Maximum desktop content width:

```text
1200px
```

No horizontal scrolling.

---

## 🧸 Bear Data

Bear data is static and does not need a database.

Example:

```ts
export interface Bear {
  id: string;
  name: string;
  description: string;
  image: string;
}
```

Example:

```ts
export const bears: Bear[] = [
  {
    id: "teddy",
    name: "Teddy",
    description: "Một bé gấu mềm mềm và ấm áp.",
    image: "/images/bears/teddy.png",
  },
];
```

---

## 💌 Form Submission

Submission data:

```json
{
  "name": "Nguyễn Văn A",
  "bear": "Teddy",
  "address": "123 Example Street",
  "message": "Một lời nhắn nhỏ"
}
```

Required fields:

- `name`
- `bear`
- `address`

Optional:

- `message`

Submission flow:

```text
Validate
   ↓
POST Formspree
   ↓
Success
   ↓
Navigate to /success
```

If submission fails:

- Keep form data
- Show an error message
- Allow retry
- Do not navigate to success

---

## 🔐 Privacy

The form may contain a delivery address.

Rules:

- Do not display submitted addresses publicly.
- Do not store the form data in the frontend.
- Do not commit `.env`.
- Do not expose Formspree credentials other than the public endpoint intended for form submission.
- Collect only necessary information.

---

## 📦 Deployment

Recommended:

```text
Frontend → Vercel
Form → Formspree
```

Database:

```text
Not required
```

---

## 📚 Documentation

See:

```text
PROJECT_REQUIREMENTS.md
```

for detailed implementation requirements.

The UI/UX design specification is documented separately in:

```text
cute-gift-ui-design-rules.md
```

---

## 🎯 Final Principle

The website should feel like:

> **a small interactive gift, not a website.**
