# PROJECT REQUIREMENTS

# A Tiny Gift From The Cats 🐱🧸

## 1. Project Goal

Build a small interactive gift website consisting of approximately five pages.

The website is intended to be sent to a friend.

The main objective is to create an attractive, cute, highly polished visual experience with:

- Cute cats
- Teddy bears
- Smooth page transitions
- Interactive elements
- Small delightful animations
- A simple gift-selection flow
- A delivery information form

The final user experience should feel personal and playful.

---

# 2. Required Technology

## Frontend

MUST use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

OPTIONAL:

- Lucide React

Do not introduce unnecessary UI frameworks.

Do not use Bootstrap.

Do not use Material UI.

Do not use another animation library when Framer Motion can handle the animation.

---

# 3. Backend

Use:

```text
Express.js
```

The backend must remain lightweight.

The project does NOT require a traditional application database.

The primary form submission provider is:

```text
Formspree
```

Express should not be used to unnecessarily duplicate Formspree functionality.

The backend may provide:

```text
GET /api/health
```

for deployment/testing purposes.

Future API requirements can be added later if necessary.

---

# 4. Form Storage

Do NOT use:

- MongoDB
- PostgreSQL
- MySQL
- Firebase database
- Supabase database

for the initial version.

Use Formspree.

Environment variable:

```env
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

The endpoint must not be hard-coded throughout the application.

Create a small form submission utility:

```text
src/lib/formspree.ts
```

Example responsibility:

```ts
submitGiftForm(data)
```

---

# 5. Application Routes

The application MUST contain these routes.

```text
/
/cats
/bears
/address
/success
```

---

# 6. Page Requirement — Welcome

Route:

```text
/
```

## Purpose

Introduce the visitor to the website.

## Required elements

- Cute cat illustration
- Main greeting
- Short subtitle
- Main CTA button
- Decorative hearts/stars

Example copy:

```text
Hé lôooo! 🐱

Tớ có một món quà nhỏ dành cho bạn...

[Bắt đầu nhé →]
```

## Animation

On page load:

1. Cat appears.
2. Title fades in.
3. Subtitle appears.
4. CTA appears.
5. Decorative elements start floating.

The sequence should feel intentional.

---

# 7. Page Requirement — Cat Gallery

Route:

```text
/cats
```

## Purpose

Display several cute cats.

## Required

At least:

```text
3 cats
```

Each cat should have:

- Image
- Name or cute label
- Small message

Example:

```text
Meow! 🐾
Bạn đáng yêu ghê!
```

## Interaction

On hover:

```text
scale
small rotation
```

On click:

```text
bounce
speech bubble
```

The speech bubble should appear smoothly.

---

# 8. Page Requirement — Bear Selection

Route:

```text
/bears
```

## Purpose

Allow the visitor to select one teddy bear.

## Required

At least:

```text
3 bear options
```

Each bear must have:

```ts
{
  id: string;
  name: string;
  description: string;
  image: string;
}
```

## Bear Card

Each card MUST contain:

- Bear image
- Bear name
- Description
- Select button

Do NOT add unnecessary ecommerce functionality.

No:

- Shopping cart
- Quantity
- Payment
- Rating
- Review
- Product SKU
- Inventory

---

# 9. Bear Selection Logic

Only one bear can be selected.

State:

```ts
selectedBear: Bear | null
```

Before selection:

```text
Continue button = disabled
```

After selection:

```text
Continue button = enabled
```

Selected card must have a visually distinct state.

Recommended:

```text
border: #FF8FAB
background: #FFF0F5
```

Selection animation:

```text
scale
small rotation
heart/sparkle
```

---

# 10. Persistence Between Pages

The selected bear must not disappear when navigating from:

```text
/bears
```

to:

```text
/address
```

Use React state/context.

For additional protection, store:

```text
selectedBear
```

in:

```text
sessionStorage
```

Do not use localStorage unless there is a specific reason.

The selected bear should only need to survive the current browser session.

---

# 11. Page Requirement — Address

Route:

```text
/address
```

## Purpose

Collect delivery information.

## Required fields

### Name

Required.

```text
name
```

### Address

Required.

```text
address
```

### Message

Optional.

```text
message
```

---

# 12. Address Page Layout

Show the selected bear first.

Example:

```text
Bé bạn chọn:

🧸 Teddy

Bé này sẽ được gửi tới đâu nhỉ?
```

Then display the form.

Form layout:

```text
Name
Input

Address
Textarea

Message
Textarea

[ Gửi món quà đi 💌 ]
```

---

# 13. Form Validation

Required:

```text
name
address
selectedBear
```

If name is empty:

```text
Bạn chưa cho tớ biết tên nè 🥺
```

If address is empty:

```text
Cho tớ xin địa chỉ nhé 🧸
```

If bear is missing:

```text
Bạn chọn một bé gấu trước nhé!
```

Do not submit invalid forms.

---

# 14. Form Submission

When the user presses:

```text
Gửi món quà đi 💌
```

the application MUST:

1. Validate the form.
2. Disable submit button.
3. Show loading state.
4. Send data to Formspree.
5. Wait for response.
6. If successful, navigate to `/success`.
7. If failed, show error.
8. Preserve entered data after error.

---

# 15. Submission Payload

The submitted fields MUST include:

```json
{
  "name": "Name",
  "bear": "Selected bear name",
  "address": "Delivery address",
  "message": "Optional message"
}
```

The selected bear name must be sent as readable text.

Example:

```json
{
  "name": "Nguyễn An",
  "bear": "Teddy",
  "address": "123 ABC Street",
  "message": "Một lời nhắn nhỏ"
}
```

---

# 16. Loading State

During submission:

Button text:

```text
Đang gửi món quà... 🐱
```

The button MUST be disabled.

Multiple submissions must not be possible while the request is pending.

---

# 17. Error State

If Formspree fails:

Display a friendly error:

```text
🥺 Oops!

Có chút trục trặc khi gửi món quà.
Bạn thử lại nhé.
```

Provide:

```text
[ Thử lại ]
```

Do NOT clear the form.

---

# 18. Page Requirement — Success

Route:

```text
/success
```

Display:

- Cat
- Teddy bear
- Gift illustration
- Success message
- Hearts
- Sparkles
- Optional confetti

Example:

```text
Yayyyy! 🎉

Tớ đã nhận được lựa chọn
của bạn rồi!

🐱 🧸 💌
```

Optional button:

```text
Về đầu trang
```

---

# 19. Page Transition

Every route transition should use Framer Motion.

Recommended:

```text
initial:
opacity: 0
y: 20

animate:
opacity: 1
y: 0

exit:
opacity: 0
y: -10
```

Duration:

```text
0.4s - 0.6s
```

Do not make page transitions longer than necessary.

---

# 20. Global Animation Rules

Animations must be:

- Smooth
- Short
- Cute
- Purposeful
- Non-disruptive

Avoid:

- Excessive bouncing
- Fast flashing
- Constant large movements
- Animating every element
- Infinite confetti

---

# 21. Button Rules

Primary button:

```text
background: #FF8FAB
color: white
border-radius: 9999px
```

Hover:

```text
scale: 1.04
```

Tap:

```text
scale: 0.96
```

Buttons must have visible focus states.

---

# 22. Color Rules

Use this palette consistently.

```text
Cream       #FFF8F2
Soft Pink   #FFF0F5
Pink        #FF8FAB
Deep Pink   #E96A8B
Lavender    #DCCFF7
Yellow      #FFE7A8
Text        #4A3B40
Muted Text  #8A747C
White       #FFFFFF
```

Do not introduce random colors.

---

# 23. Typography Rules

Heading:

```text
Baloo 2
```

Body:

```text
Nunito
```

H1:

```text
48px - 64px desktop
36px - 44px mobile
```

H2:

```text
32px - 40px
```

Body:

```text
16px - 18px
```

Use rounded and friendly typography.

---

# 24. Image Rules

Use cute illustrations for:

```text
cats
teddy bears
gift boxes
hearts
stars
flowers
clouds
```

All illustrations must share a consistent visual style.

Preferred formats:

```text
WebP
AVIF
PNG
```

Avoid unnecessarily large images.

---

# 25. Responsive Requirements

The website MUST work on:

```text
375px
390px
430px
768px
1024px
1280px+
```

Mobile-first design.

No horizontal scrolling.

On mobile:

- Cards stack vertically.
- Form inputs use full width.
- Main CTA uses full or near-full width.
- Decorative elements must not cover important content.

---

# 26. Accessibility Requirements

Every image needs:

```html
alt=""
```

with meaningful text when the image communicates information.

Every input must have a label.

Buttons must contain understandable text.

Interactive elements must be keyboard accessible.

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled, minimize non-essential animations.

---

# 27. Component Requirements

Reusable components SHOULD include:

```text
CuteButton
CatCard
TeddyCard
FormInput
PageTransition
FloatingHearts
Sparkles
GiftIllustration
```

Avoid duplicating identical UI code across pages.

---

# 28. State Requirements

The application only needs lightweight state.

Required:

```text
selectedBear
name
address
message
isSubmitting
submitError
```

Do NOT install Redux for this project.

Do NOT install Zustand unless the project later becomes significantly larger.

React state/context is sufficient.

---

# 29. Code Quality

Use TypeScript for all frontend application code.

Avoid:

```ts
any
```

unless there is a documented reason.

Components should be small and focused.

Do not put API calls directly into large JSX components.

Use:

```text
src/lib/formspree.ts
```

for submission logic.

---

# 30. Security / Privacy

Do not store delivery information in a public frontend location.

Do not expose submissions through a public API.

Do not create:

```text
GET /api/responses
```

for the public website.

The owner should view submissions through Formspree.

Never commit:

```text
.env
```

to Git.

---

# 31. Express Requirements

The Express application should be minimal.

Required:

```text
GET /api/health
```

Response:

```json
{
  "status": "ok"
}
```

Example server responsibilities:

- Health check
- Future backend expansion
- Optional server-side integrations

Do not build unnecessary CRUD APIs.

---

# 32. Error Handling

Frontend errors should be user-friendly.

Developer errors should be logged appropriately during development.

Never show raw:

```text
stack traces
API errors
technical exceptions
```

to the visitor.

---

# 33. Performance

The initial page should load quickly.

Rules:

- Optimize images.
- Avoid unnecessary dependencies.
- Avoid huge background images.
- Lazy-load non-critical images where appropriate.
- Avoid heavy JavaScript animations.
- Prefer CSS/Tailwind for simple visual effects.
- Use Framer Motion for meaningful interaction animation.

---

# 34. Do Not Add

The first version MUST NOT include:

- Authentication
- User accounts
- Admin dashboard
- Shopping cart
- Payment
- Product inventory
- Product search
- Product filtering
- Reviews
- Ratings
- Coupons
- Database
- Complex CMS

The project should remain a small interactive gift website.

---

# 35. Recommended Folder Structure

```text
client/
└── src/
    ├── components/
    ├── context/
    ├── data/
    ├── hooks/
    ├── lib/
    ├── pages/
    ├── types/
    ├── App.tsx
    ├── main.tsx
    └── index.css

server/
└── src/
    └── server.js
```

---

# 36. Development Priority

Implementation order:

## Phase 1 — Foundation

- Create Vite React TypeScript app.
- Configure Tailwind.
- Install Framer Motion.
- Install React Router.
- Create basic folder structure.

## Phase 2 — Visual System

- Add fonts.
- Add color tokens.
- Create global styles.
- Create reusable buttons/cards.
- Create page transition.

## Phase 3 — Pages

Implement:

```text
Welcome
Cats
Bears
Address
Success
```

## Phase 4 — Interactions

Implement:

- Cat click animation.
- Bear selection.
- Selected bear state.
- Form validation.
- Page transitions.

## Phase 5 — Formspree

Implement:

- Environment variable.
- Submission utility.
- Loading state.
- Error state.
- Success navigation.

## Phase 6 — Express

Implement:

```text
GET /api/health
```

Keep backend minimal.

## Phase 7 — Polish

Test:

- Mobile
- Desktop
- Animation
- Form validation
- Form submission
- Error handling
- Accessibility
- Performance

---

# 37. Acceptance Criteria

The project is considered complete when:

### Navigation

- [ ] `/` works.
- [ ] `/cats` works.
- [ ] `/bears` works.
- [ ] `/address` works.
- [ ] `/success` works.

### UI

- [ ] Design follows the pastel cute concept.
- [ ] Typography follows the specification.
- [ ] Colors follow the design system.
- [ ] UI is responsive.
- [ ] No horizontal scrolling.

### Cats

- [ ] At least 3 cats.
- [ ] Cats have interaction.
- [ ] Speech bubbles work.

### Bears

- [ ] At least 3 bears.
- [ ] Only one bear can be selected.
- [ ] Selected state is visually clear.
- [ ] Continue button is disabled before selection.

### Form

- [ ] Name required.
- [ ] Address required.
- [ ] Message optional.
- [ ] Selected bear required.
- [ ] Validation works.
- [ ] Loading state works.
- [ ] Error state works.
- [ ] Formspree receives submission.

### Success

- [ ] Success page appears only after successful submission.
- [ ] Success animation works.
- [ ] User understands the submission was completed.

### Code

- [ ] TypeScript used on frontend.
- [ ] No unnecessary state-management library.
- [ ] No database.
- [ ] No unnecessary dependencies.
- [ ] `.env` is ignored by Git.

---

# 38. Final Product Principle

The most important requirement is not the number of features.

The most important requirement is:

> **The visitor should feel like they are opening a cute digital gift.**

The website should communicate this through:

```text
Cute cats
    +
Beautiful typography
    +
Soft pastel colors
    +
Smooth animation
    +
Simple choices
    +
A personal final message
```

Keep the experience small, polished, emotional, and fun.
