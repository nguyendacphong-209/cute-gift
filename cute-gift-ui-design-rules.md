# Cute Gift Website — UI/UX Design Rules

## 1. Project Overview

Tên concept:

> **A Tiny Gift From The Cats 🐱🧸**

Mục tiêu của website là tạo cảm giác như một món quà tương tác nhỏ dành cho một người bạn.

Website có khoảng **5 trang**:

1. Welcome
2. Cat Gallery
3. Choose Your Bear
4. Delivery Information
5. Success

Website không phải ecommerce thực sự. Người dùng chỉ chọn một món gấu bông, nhập thông tin nhận hàng và gửi form.

---

# 2. Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

## Form Storage / Submission

Không sử dụng MongoDB hoặc database.

Sử dụng **Formspree** để nhận submission từ form.

Flow:

```text
User
  ↓
React Form
  ↓
Formspree
  ↓
Email / Formspree Dashboard
  ↓
Owner nhận thông tin
```

Form cần gửi tối thiểu:

```json
{
  "name": "Tên người nhận",
  "bear": "Tên gấu đã chọn",
  "address": "Địa chỉ",
  "message": "Lời nhắn"
}
```

Không hard-code Formspree endpoint trực tiếp trong nhiều component. Endpoint nên được quản lý bằng environment variable:

```env
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

Frontend chỉ cần gọi endpoint khi submit.

> Lưu ý: địa chỉ là dữ liệu cá nhân. Chỉ thu thập những thông tin thực sự cần thiết và không hiển thị dữ liệu submission công khai trên website.

---

# 3. Design Direction

## 3.1. Overall Mood

Website phải có cảm giác:

- Cute
- Warm
- Dreamy
- Playful
- Soft
- Personal
- Premium nhưng không quá sang trọng
- Giống một món quà handmade kỹ thuật số

Không được tạo cảm giác như:

- Website ecommerce
- Landing page công ty
- Dashboard
- Website quá nhiều thông tin
- UI enterprise

---

# 4. Color System

## Primary Background

```text
#FFF8F2
```

Cream rất nhạt, dùng làm background chính.

## Secondary Background

```text
#FFF0F5
```

Soft pink.

## Primary Pink

```text
#FF8FAB
```

Dùng cho:

- Button
- Highlight
- Heart
- Active state
- Important interaction

## Deep Pink

```text
#E96A8B
```

Dùng cho hover và text emphasis.

## Soft Lavender

```text
#DCCFF7
```

Dùng cho:

- Decorative blobs
- Background gradient
- Secondary cards

## Soft Yellow

```text
#FFE7A8
```

Dùng cho:

- Stars
- Sparkles
- Small highlights

## Text Primary

```text
#4A3B40
```

Không sử dụng pure black.

## Text Secondary

```text
#8A747C
```

## White

```text
#FFFFFF
```

Dùng cho card và button phụ.

---

# 5. Gradient Rules

Gradient chủ đạo:

```css
background: linear-gradient(
  135deg,
  #FFF8F2 0%,
  #FFF0F5 50%,
  #F4EEFF 100%
);
```

Gradient chỉ dùng nhẹ.

Không dùng gradient quá tương phản.

Background phải luôn giữ cảm giác mềm và sáng.

---

# 6. Typography

## Heading Font

Khuyến nghị:

```text
Baloo 2
```

Dùng cho:

- Hero title
- Page title
- Heading
- Cute message

Đặc điểm:

- Rounded
- Friendly
- Playful

## Body Font

Khuyến nghị:

```text
Nunito
```

Dùng cho:

- Paragraph
- Form
- Button
- Label
- Description

## Font hierarchy

### H1

```text
48px - 64px
font-weight: 700 / 800
```

Desktop.

Mobile:

```text
36px - 44px
```

### H2

```text
32px - 40px
font-weight: 700
```

### Body

```text
16px - 18px
line-height: 1.6
```

### Small text

```text
13px - 14px
```

---

# 7. General Layout Rules

## Desktop

Maximum content width:

```text
1200px
```

Main content:

```text
max-width: 1200px
margin: auto
padding: 24px
```

## Mobile

Website phải ưu tiên mobile.

Breakpoint chính:

```text
< 768px
```

Không tạo horizontal scroll.

---

# 8. Border Radius

Website sử dụng rounded UI.

### Small

```text
12px
```

### Medium

```text
20px
```

### Large

```text
28px
```

### Extra Large

```text
36px
```

Cards lớn có thể sử dụng:

```text
32px
```

Không dùng góc vuông cho UI chính.

---

# 9. Shadow

Shadow phải rất nhẹ.

Ví dụ:

```css
box-shadow:
  0 10px 30px rgba(80, 50, 60, 0.08);
```

Hover:

```css
box-shadow:
  0 16px 40px rgba(80, 50, 60, 0.12);
```

Không sử dụng shadow đen đậm.

---

# 10. Illustration Rules

Website cần có các hình:

- Cute cats
- Teddy bears
- Hearts
- Stars
- Clouds
- Flowers
- Gift boxes
- Sparkles

Style thống nhất:

```text
Cute
Rounded
Pastel
Soft outline
Simple shapes
Kawaii
```

Không trộn:

- Realistic cat
- 3D realistic teddy
- Anime character
- Cartoon vector

trong cùng một visual system.

Tất cả illustration nên có cùng phong cách.

---

# 11. Animation System

Animation được thực hiện bằng:

```text
Framer Motion
```

## Animation Principles

Animation phải:

- Nhẹ
- Mượt
- Có mục đích
- Không làm người dùng khó chịu
- Không animation mọi thứ cùng lúc

---

# 12. Page Transition

Mỗi khi chuyển page:

```text
Fade
+
Small vertical movement
```

Animation:

```text
opacity: 0 → 1
y: 20 → 0
```

Duration:

```text
0.4s - 0.6s
```

Easing:

```text
easeOut
```

---

# 13. Floating Animation

Các vật thể trang trí:

- Cat
- Heart
- Star
- Cloud

có thể floating nhẹ.

Pattern:

```text
y: 0 → -10 → 0
```

Duration:

```text
3s - 5s
```

Repeat:

```text
Infinity
```

Animation phải random nhẹ để tránh tất cả object chuyển động đồng bộ.

---

# 14. Button Animation

Normal:

```text
scale: 1
```

Hover:

```text
scale: 1.04
```

Tap:

```text
scale: 0.96
```

Transition:

```text
0.15s - 0.2s
```

Button chính nên có:

- Pink background
- White text
- Rounded pill
- Soft shadow

---

# 15. Card Animation

Khi card xuất hiện:

```text
opacity: 0 → 1
y: 20 → 0
```

Khi hover:

```text
y: -6
scale: 1.02
```

Card không được nhảy quá mạnh.

---

# 16. Heart / Sparkle Animation

Heart có thể:

```text
opacity: 0 → 1 → 0
scale: 0.8 → 1.1 → 0.9
y: 0 → -40
```

Dùng ở:

- Welcome
- Success

Không dùng quá nhiều trên trang chọn gấu.

---

# 17. Page 1 — Welcome

Route:

```text
/
```

## Purpose

Chào người nhận và tạo cảm giác tò mò.

## Layout

Desktop:

```text
------------------------------------------------
                    Header
------------------------------------------------

             small cat illustration

          Hé lôooo! 🐱

      Tớ có một món quà nhỏ
           dành cho bạn...

          [ Bắt đầu nhé → ]

        ♡     ✦      ♡
------------------------------------------------
```

Mobile:

```text
       🐱

   Hé lôooo!

 Tớ có một món quà nhỏ
      dành cho bạn...

   [ Bắt đầu nhé ]
```

## Hero

Title:

```text
Hé lôooo! 🐱
```

Subtitle:

```text
Tớ có một món quà nhỏ dành cho bạn...
```

Button:

```text
Bắt đầu nhé →
```

## Animation

1. Background fade in.
2. Cat scale từ `0.8 → 1`.
3. Title xuất hiện sau cat.
4. Subtitle xuất hiện.
5. Button xuất hiện cuối cùng.
6. Một vài hearts bay nhẹ ở background.

Animation sequence:

```text
Cat
↓
Title
↓
Subtitle
↓
Button
↓
Decorations
```

---

# 18. Page 2 — Cat Gallery

Route:

```text
/cats
```

## Purpose

Cho người dùng tương tác với các bé mèo trước khi đến phần chọn quà.

## Header

```text
Mấy người bạn nhỏ của tớ 🐱
```

Subtitle:

```text
Các bé ấy có một điều muốn nói với bạn...
```

## Layout

Grid:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐
│   CAT    │ │   CAT    │ │   CAT    │
│          │ │          │ │          │
│ message  │ │ message  │ │ message  │
└──────────┘ └──────────┘ └──────────┘
```

Mobile:

```text
┌────────────────────┐
│        CAT         │
│                    │
│      message       │
└────────────────────┘

┌────────────────────┐
│        CAT         │
│                    │
│      message       │
└────────────────────┘
```

## Interaction

Click vào cat:

```text
Cat → bounce
Speech bubble → appear
```

Ví dụ message:

```text
"Meow! 🐾"

"Bạn đáng yêu ghê!"

"Đi tiếp đi nè!"

"Phía trước có quà đó!"
```

## Animation

Cat:

```text
hover → rotate ±3deg
hover → scale 1.04
```

Click:

```text
scale 1 → 1.1 → 1
```

Speech bubble:

```text
opacity 0 → 1
scale 0.9 → 1
```

---

# 19. Page 3 — Choose Your Bear

Route:

```text
/bears
```

## Purpose

Đây là trang quan trọng nhất.

Người dùng chọn một món gấu bông.

## Header

```text
Chọn một người bạn nhé 🧸
```

Subtitle:

```text
Tớ đã chuẩn bị vài bé gấu nhỏ.
Bạn thích bé nào nhất?
```

## Product Grid

Desktop:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐
│   BEAR   │ │   BEAR   │ │   BEAR   │
│          │ │          │ │          │
│ Teddy    │ │ Bunny    │ │ Bear     │
│          │ │          │ │          │
│ [ Chọn ] │ │ [ Chọn ] │ │ [ Chọn ] │
└──────────┘ └──────────┘ └──────────┘
```

Mobile:

```text
┌──────────────────────┐
│        BEAR          │
│                      │
│       Teddy          │
│                      │
│      [ Chọn ]        │
└──────────────────────┘
```

## Bear Card

Mỗi card gồm:

1. Image
2. Name
3. Short description
4. Select button

Không cần:

- Rating
- Review
- Quantity
- Shopping cart
- Payment
- Ecommerce features

## Selection State

Card được chọn phải:

```text
border: 2px solid #FF8FAB
background: #FFF0F5
```

Có thể thêm:

```text
♡ → ♥
```

hoặc:

```text
✓ Đây là bé tớ chọn!
```

## Selection Animation

Khi click:

```text
scale: 1 → 1.05 → 1
```

Image:

```text
rotate: 0 → -3 → 3 → 0
```

Một vài hearts nhỏ xuất hiện quanh card.

## Continue Button

Chỉ enable sau khi người dùng chọn gấu.

```text
[ Đây là lựa chọn của tớ → ]
```

---

# 20. Page 4 — Delivery Information

Route:

```text
/address
```

## Purpose

Nhận thông tin để gửi món quà.

## Header

```text
Bé này sẽ được gửi tới đâu nhỉ? 🧸
```

## Selected Bear Preview

Hiển thị card nhỏ:

```text
┌──────────────────────────┐
│       Teddy Bear 🧸      │
│       Bé bạn chọn        │
└──────────────────────────┘
```

## Form

Fields:

```text
Tên
[________________________]

Địa chỉ
[________________________]
[________________________]

Lời nhắn (không bắt buộc)
[________________________]
[________________________]
```

## Form Design

Input:

```text
background: #FFFFFF
border: 1px solid #F3DDE4
border-radius: 16px
```

Focus:

```text
border: #FF8FAB
box-shadow: 0 0 0 4px rgba(255, 143, 171, 0.12)
```

## Submit Button

```text
Gửi món quà đi 💌
```

Button full width trên mobile.

## Submit Animation

Khi submit:

```text
Button
↓
Loading
↓
Success transition
↓
/success
```

Không chuyển trang ngay lập tức khi request chưa hoàn thành.

Nếu Formspree trả lỗi:

```text
"Oops... Có chút trục trặc.
Bạn thử lại nhé 🥺"
```

Không xóa dữ liệu người dùng đã nhập.

---

# 21. Page 5 — Success

Route:

```text
/success
```

## Purpose

Kết thúc trải nghiệm bằng một màn hình vui vẻ.

## Layout

```text
              ✦
        🐱       🧸
             ♡

       Yayyyy! 🎉

   Tớ đã nhận được lựa chọn
          của bạn rồi!

       🧸 + 💌 + 🐱

       [ Về đầu trang ]
```

## Main Illustration

Có thể dùng:

```text
Cat + Teddy Bear + Gift Box
```

Cat và bear đứng cạnh nhau.

## Animation

Sequence:

```text
Gift box
↓
scale 0.5 → 1
↓
Cat slide in
↓
Bear slide in
↓
Title
↓
Hearts / confetti
```

## Confetti

Confetti chỉ chạy khoảng:

```text
2 - 4 seconds
```

Không loop vô hạn.

---

# 22. Navigation

Website không cần navbar phức tạp.

Có thể dùng:

```text
← Back
```

ở những trang sau.

Ví dụ:

```text
/cats
     ↓
/bears
     ↓
/address
     ↓
/success
```

Không cần navbar desktop kiểu:

```text
Home | About | Products | Contact
```

vì sẽ phá cảm giác "interactive gift".

---

# 23. Responsive Rules

## Mobile First

Ưu tiên:

```text
375px
390px
430px
```

Website phải đẹp trên điện thoại trước.

## Desktop

Từ:

```text
768px+
```

có thể mở rộng layout.

## Breakpoints

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

# 24. Accessibility

Cần đảm bảo:

- Button có text rõ ràng.
- Input có label.
- Image có alt.
- Không chỉ dùng màu để biểu thị trạng thái.
- Focus state rõ ràng.
- Animation không ảnh hưởng usability.

Nếu người dùng bật:

```text
prefers-reduced-motion
```

thì giảm animation.

---

# 25. Component Rules

Các component nên được tách nhỏ.

```text
components/
├── Cat.tsx
├── CatCard.tsx
├── TeddyCard.tsx
├── CuteButton.tsx
├── PageTransition.tsx
├── FloatingHearts.tsx
├── Sparkles.tsx
├── GiftIllustration.tsx
└── FormInput.tsx
```

Không viết toàn bộ UI vào một component page.

---

# 26. Data Model For Bears

Không cần database cho danh sách gấu.

Dữ liệu gấu có thể nằm trong frontend:

```ts
export interface Bear {
  id: string;
  name: string;
  description: string;
  image: string;
}
```

Ví dụ:

```ts
export const bears: Bear[] = [
  {
    id: "teddy",
    name: "Teddy",
    description: "Một bé gấu mềm mềm và ấm áp.",
    image: "/images/bears/teddy.png",
  },
  {
    id: "bunny",
    name: "Bunny",
    description: "Một bé thỏ nhỏ đáng yêu.",
    image: "/images/bears/bunny.png",
  },
  {
    id: "brown-bear",
    name: "Brownie",
    description: "Một bé gấu nâu thích ôm.",
    image: "/images/bears/brownie.png",
  },
];
```

---

# 27. State Management

Không cần Redux hoặc Zustand.

Chỉ cần React state + Context nếu cần.

Các state chính:

```text
selectedBear
formData
isSubmitting
submitError
```

Selected bear có thể lưu vào:

```text
sessionStorage
```

để khi chuyển trang không bị mất.

Ví dụ:

```text
sessionStorage:
{
  selectedBear: "teddy"
}
```

---

# 28. Form Submission Rules

Form submit:

```text
React
  ↓
validate
  ↓
POST Formspree
  ↓
success
  ↓
navigate("/success")
```

Không gửi request nếu:

```text
name === ""
address === ""
selectedBear === null
```

Validation message phải cute nhưng rõ ràng.

Ví dụ:

```text
"Bạn chưa cho tớ biết tên nè 🥺"
```

```text
"Cho tớ xin địa chỉ để biết gửi bé gấu đi đâu nhé 🧸"
```

---

# 29. Loading State

Khi submit:

```text
Gửi món quà đi 💌
```

đổi thành:

```text
Đang gửi món quà... 🐱
```

Button disabled trong lúc request.

Không cho submit nhiều lần.

---

# 30. Error State

Nếu Formspree request fail:

```text
┌─────────────────────────────┐
│ 🥺 Oops!                    │
│                             │
│ Có chút trục trặc khi gửi   │
│ món quà. Bạn thử lại nhé.   │
│                             │
│       [ Thử lại ]           │
└─────────────────────────────┘
```

Dữ liệu form vẫn phải được giữ nguyên.

---

# 31. Performance Rules

Không sử dụng quá nhiều animation.

Không load ảnh kích thước quá lớn.

Khuyến nghị:

```text
WebP
AVIF
PNG nếu cần transparency
```

Cat / bear illustration nên được optimize trước khi đưa vào project.

Không autoplay video background.

Không sử dụng thư viện animation khác nếu Framer Motion đã đáp ứng được yêu cầu.

---

# 32. Design Do / Don't

## DO

- Pastel
- Rounded
- Cute illustration
- Soft shadow
- White space
- Smooth animation
- Mobile first
- Personal feeling
- Consistent illustration style

## DON'T

- Neon color quá mạnh
- Dark theme
- Glassmorphism nặng
- Gradient quá nhiều
- Animation quá nhanh
- 3D realistic image
- UI ecommerce
- Navbar phức tạp
- Quá nhiều text
- Quá nhiều button

---

# 33. Final User Journey

```text
                 START
                   │
                   ▼
          ┌─────────────────┐
          │  Welcome Page   │
          │   "Hé lôooo!"   │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │   Cat Gallery   │
          │      🐱 🐱 🐱   │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │  Choose Bear    │
          │   🧸 🧸 🧸      │
          └────────┬────────┘
                   │
             Select Bear
                   │
                   ▼
          ┌─────────────────┐
          │ Address + Form  │
          │   💌            │
          └────────┬────────┘
                   │
              Submit Form
                   │
                   ▼
              Formspree
                   │
                   ▼
          ┌─────────────────┐
          │     Success     │
          │   🐱 🧸 🎉     │
          └─────────────────┘
```

---

# 34. Core Design Principle

> **Website phải khiến người dùng cảm giác họ đang mở một món quà, không phải đang điền một form.**

Mỗi interaction nên có lý do:

```text
Cat → tạo cảm xúc
Bear → tạo lựa chọn
Form → hoàn tất món quà
Animation → tạo cảm giác sống động
Success → tạo cảm giác kết thúc vui vẻ
```

Không thêm feature nếu feature đó làm website mất đi sự đơn giản và dễ thương.
