# Pure Fitness Gym — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Chalane ka tareeqa (kaise run karein)

1. Is folder ko unzip karein aur terminal mein andar jayein:
   ```
   cd pure-fitness-gym
   ```
2. Dependencies install karein:
   ```
   npm install
   ```
3. Local development server chalayein:
   ```
   npm run dev
   ```
4. Browser mein kholein: `http://localhost:3000`

## Live/Production ke liye

```
npm run build
npm run start
```

Ya isko **Vercel** (Next.js banane walo ka platform) par free deploy kar sakte hain:
- github pe push karein, phir vercel.com pe "New Project" > apna repo select karein > Deploy.

## Kya kya hai website mein

- `app/page.tsx` — poori website ek jagah assemble hoti hai (Hero, Services, Reviews, waghera).
- `components/` — har section apni alag file mein (Navbar, Hero, Marquee, Services, WhyUs, Hours, Reviews, Location, Footer).
- Colors, fonts `tailwind.config.ts` mein define hain — red (`blood` / `ember`) aur black (`ink` / `char`) theme.
- Hero background image + poore site ki dusri image Unsplash se hai (free-to-use license). Agar apni gym ki asli photos lagani hon:
  - `components/Hero.tsx` mein `src="https://images.unsplash.com/..."` ko apni image URL se replace karein, ya
  - Apni photo `public/` folder mein daal kar `src="/apni-photo.jpg"` likh dein.
- Hours section aur "Open Now" badge apne aap current din/waqt ke hisaab se update hote hain (Mon–Sat 7am–1am, Sunday closed).
- Google Maps embed already Pure Fitness Gym ke address se link hai.

## Customize karna ho to

- Phone number: `0335 2846360` — `Navbar.tsx`, `Location.tsx`, `Footer.tsx` mein search karein.
- Reviews / testimonials: `components/Reviews.tsx`
- Services list: `components/Services.tsx` aur `components/Marquee.tsx`
