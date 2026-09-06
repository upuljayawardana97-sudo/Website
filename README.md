# ADITHYA DANCING - Premium Dance Academy Website

A modern, high-performance, and mobile-responsive website created for **ADITHYA DANCING** (ආදිත්‍යා ඩාන්සින් ඇකඩමිය) - Sri Lanka's Premier Dance Sanctuary.

---

## 🌟 Features Included

1. **Brand Identity**: Luxury Dark Gold Theme (`#d4af37`), smooth gradients, floating stardust particles, and custom gold cursor.
2. **Typography**: Google Fonts (*Montserrat*, *Poppins*, *Cinzel*, and *Noto Sans Sinhala*).
3. **Hero Section**: Fullscreen with Sinhala slogan (*නර්තනයෙන් සිහින සැබෑ කරමු*), call-to-actions, and scroll indicator.
4. **About Us & Live Counters**: Animated milestone counters for Experience, Students, Stage Shows, and National Awards.
5. **Dance Classes**: Modular cards for Kandyan, Low Country, Western, Bollywood, Kids, and Creative Dance with interactive curriculum popups.
6. **Photo Gallery & Lightbox**: Dynamic filtering (Classes, Performances, Competitions, Students, Events) with Lightbox slider (Next/Prev + Keyboard arrows support).
7. **Video Gallery & Modal**: Video player supporting both **YouTube URLs** and local **MP4** files in modal view.
8. **Featured Performance Banner**: Callout showcase section.
9. **Upcoming Events**: Event dates, venues, times, and ticket/inquiry hooks.
10. **Achievements & Why Choose Us**: Structured milestone trophy grid and 8 core benefit cards.
11. **Testimonials Carousel**: Real student and parent feedback slider.
12. **Instagram & Social Stream**: Live feed lookalike grid with customizable handles.
13. **Contact Section & Google Maps**: Validated inquiry form, direct WhatsApp sync, studio schedule, and dark-themed Google Maps.
14. **Floating WhatsApp Chat**: Pulsating bottom-right WhatsApp button with custom pre-filled message generator.
15. **100% Responsive**: Built for Mobile, Tablet, Laptop, and 4K Displays.

---

## 📁 Project File Structure

```text
adithya-dancing/
│
├── index.html                   # Main single-page web application
│
├── css/
│   └── style.css                # Premium dark & gold luxury styling
│
├── js/
│   └── script.js                # Core JS data arrays & interactive engine
│
├── assets/
│   ├── images/
│   │   ├── hero/                # Background hero images
│   │   ├── gallery/             # Photo gallery pictures
│   │   ├── classes/             # Dance category images
│   │   ├── events/              # Event posters and flyers
│   │   └── students/            # Testimonial and dancer avatars
│   │
│   ├── videos/                  # Local MP4 dance performances
│   │
│   └── icons/                   # Favicons and custom icons
│
└── README.md                    # Documentation & Customization Manual
```

---

## 🚀 How to Run

1. Open the project folder `adithya-dancing/` on your computer.
2. Double-click **`index.html`** to open it directly in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).
3. (Optional for developers) If using VS Code, right-click `index.html` and select **"Open with Live Server"**.

---

## ⚙️ Customization Guide

All data on the website is centralized in **`js/script.js`** at the top of the file so you never need to struggle with complex HTML tags!

---

### 1. How to Change Contact Details

Open `js/script.js` and locate `SITE_CONFIG`:

```javascript
const SITE_CONFIG = {
    academyName: "ADITHYA DANCING",
    sinhalaName: "ආදිත්‍යා ඩාන්සින් ඇකඩමිය",
    tagline: "Dance • Passion • Performance",
    
    phoneDisplay: "+94 77 123 4567 / +94 11 234 5678",
    phoneCall: "+94771234567",
    whatsappNumber: "94771234567", // Country code without '+'
    whatsappDefaultMessage: "Hello Adithya Dancing! I would like to inquire about dance classes.",
    email: "info@adithyadancing.lk",
    address: "No. 128, High Level Road, Colombo 05, Sri Lanka",
    openingHours: "Tue - Sun: 8:30 AM – 7:30 PM (Mon Closed)",
    ...
};
```

---

### 2. How to Change Social Media Links

In `js/script.js`, update the `socialMedia` block:

```javascript
socialMedia: {
    facebook: "https://facebook.com/your-facebook-page",
    instagram: "https://instagram.com/your-instagram-handle",
    youtube: "youtube.com/channel/UCz-Z-VmludXTVRbERi5xT9g",
    tiktok: "https://tiktok.com/@your-tiktok-profile"
}
```

---

### 3. How to Add or Change Photos

1. Place your photo inside `assets/images/gallery/` (e.g., `my-photo.jpg`).
2. Open `js/script.js` and find `DATA_GALLERY`. Add or edit an entry:

```javascript
{
    id: 9,
    category: "performances", // Options: 'classes', 'performances', 'events', 'students', 'competitions', 'special'
    title: "New Stage Performance",
    sinhalaDesc: "නව වේදිකා නර්තන අංගය",
    src: "assets/images/gallery/my-photo.jpg" // Local file or online URL
}
```

---

### 4. How to Add or Change Videos

#### Option A: YouTube Video
In `js/script.js`, edit `DATA_VIDEOS`:
```javascript
{
    id: "v5",
    title: "New Annual Show Performance",
    sinhalaTitle: "අලුත් වාර්ෂික නර්තන ප්‍රසංගය",
    description: "Full stage performance video recording.",
    thumbnail: "assets/images/gallery/thumbnail.jpg",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID",
    duration: "6:20 Min"
}
```

#### Option B: Local MP4 Video
1. Put your video file into `assets/videos/` (e.g. `assets/videos/dance-show.mp4`).
2. Add the entry:
```javascript
{
    id: "v6",
    title: "Ves Dance Practice",
    sinhalaTitle: "වෙස් නැටුම් පුහුණුව",
    description: "Raw 4K studio rehearsal.",
    thumbnail: "assets/images/gallery/thumbnail.jpg",
    videoType: "mp4",
    videoUrl: "assets/videos/dance-show.mp4",
    duration: "4:15 Min"
}
```

---

### 5. How to Add Upcoming Events

In `js/script.js`, locate `DATA_EVENTS` and add:

```javascript
{
    id: "event-4",
    name: "Kandyan Dance Workshop 2026",
    sinhalaName: "උඩරට නර්තන වැඩමුළුව 2026",
    dateDay: "22",
    dateMonth: "NOV",
    dateFull: "November 22, 2026",
    time: "9:00 AM – 3:00 PM",
    location: "BMICH, Colombo",
    image: "assets/images/events/workshop.jpg",
    description: "Special full-day intensive masterclass."
}
```

---

## 🎨 Technologies Used

- **HTML5 & CSS3** (Custom Modern Grid & Flexbox)
- **Bootstrap 5.3.2** (CDN)
- **Vanilla JavaScript (ES6+)** (Dynamic Rendering, Modals, Lightbox, Counters)
- **Font Awesome 6.5.1** (Icons)
- **Google Fonts** (Cinzel, Montserrat, Poppins, Noto Sans Sinhala)

---

© 2026 **Adithya Dancing Academy**. Designed for Artistic Excellence.
