/**
 * ==========================================================================
 * ADITHYA DANCING ACADEMY - MAIN JAVASCRIPT ENGINE
 * Highly Configurable & Easy-to-Edit Architecture
 * ==========================================================================
 */

"use strict";

/* ==========================================================================
   1. SITE CONFIGURATION (EDIT YOUR DETAILS HERE)
   ========================================================================== */
const SITE_CONFIG = {
    academyName: "ADITHYA DANCING",
    sinhalaName: "ආදිත්‍යා ඩාන්සින් ඇකඩමිය",
    tagline: "Dance • Passion • Performance",

    // Contact Information
    phoneDisplay: "+94 77 123 4567 / +94 11 234 5678",
    phoneCall: "+94771234567",
    whatsappNumber: "94771234567", // WhatsApp country code + number without '+'
    whatsappDefaultMessage: "Hello Adithya Dancing! I would like to inquire about your dance classes and admission details.",
    email: "info@adithyadancing.lk",
    address: "No. 128, High Level Road, Colombo 05, Sri Lanka",
    openingHours: "Tue - Sun: 8:30 AM – 7:30 PM (Mon Closed)",

    // Social Media Links
    socialMedia: {
        facebook: "https://facebook.com/adithyadancing",
        instagram: "https://instagram.com/adithyadancing",
        youtube: "https://youtube.com/@adithyadancing",
        tiktok: "https://tiktok.com/@adithyadancing"
    }
};

/* ==========================================================================
   2. DYNAMIC DATA ARRAYS (ADD / EDIT COURSES, PHOTOS, VIDEOS, EVENTS)
   ========================================================================== */

// --- 2.1 DANCE CLASSES DATA ---
const DATA_CLASSES = [
    {
        id: "kandyan",
        title: "Kandyan Dancing",
        sinhalaTitle: "සාම්ප්‍රදායික උඩරට නර්තනය",
        badge: "Traditional Heritage",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
        // Local path alternative: "assets/images/classes/kandyan-dance.jpg"
        description: "Master the rhythm, sacred rituals, Vannam, and dynamic footwork of Sri Lanka's supreme classical Kandyan tradition.",
        details: "Comprehensive syllabus including Thaalam, Saramba, Vannam, Kohomba Kankariya traditions, Ves Bandheema preparation, and stage performance mastery under certified traditional masters."
    },
    {
        id: "low-country",
        title: "Low Country Dancing",
        sinhalaTitle: "පහතරට නර්තන ශිල්පය",
        badge: "Folk & Ritual Arts",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
        // Local path alternative: "assets/images/classes/low-country.jpg"
        description: "Experience the vibrant energy, theatrical masks, Kolam, and mystical rhythm of Southern coastal Sri Lanka.",
        details: "Learn traditional mask dancing (Kolam), Shanthikarma rituals, drum accompaniment, and expressive theatrical movements unique to Ruhunu dance traditions."
    },
    {
        id: "western",
        title: "Western Dancing",
        sinhalaTitle: "Modern Western Dance",
        badge: "Modern & Hip Hop",
        image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=600&auto=format&fit=crop",
        // Local path alternative: "assets/images/classes/western-dance.jpg"
        description: "High-energy training in Hip-hop, Contemporary, Freestyle, Jazz, and Ballroom styles for stage and commercial entertainment.",
        details: "Focuses on flexibility, body isolations, groove, synchronization, musicality, and high-impact choreography for competitions and music videos."
    },
    {
        id: "bollywood",
        title: "Bollywood Dancing",
        sinhalaTitle: "Bollywood Dance Fusion",
        badge: "Cinematic Expressions",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=600&auto=format&fit=crop",
        // Local path alternative: "assets/images/classes/bollywood-dance.jpg"
        description: "A colorful fusion of classical semi-classical, folk, and modern Bollywood dance beats loaded with vibrant facial expressions.",
        details: "Learn theatrical storytelling, emotive Navarasa expressions, fast-paced rhythm routines, and popular cinematic performance choreography."
    },
    {
        id: "kids",
        title: "Kids Dancing Special",
        sinhalaTitle: "දරුවන් සඳහා විශේෂ පන්ති",
        badge: "Ages 4 - 12",
        image: "https://images.unsplash.com/photo-1509670811275-79453f576390?q=80&w=600&auto=format&fit=crop",
        // Local path alternative: "assets/images/classes/kids-dance.jpg"
        description: "Fun, caring, and encouraging dance training designed to build posture, rhythm, confidence, and agility in early childhood.",
        details: "Specially crafted child-friendly sessions with playful movement games, rhythm ear-training, group synchronization, and stage debut training."
    },
    {
        id: "creative",
        title: "Creative & Fusion Dance",
        sinhalaTitle: "නවීන නිර්මාණශීලී නර්තන",
        badge: "Experimental Arts",
        image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=600&auto=format&fit=crop",
        // Local path alternative: "assets/images/classes/creative-dance.jpg"
        description: "Breaking boundaries by fusing traditional Sri Lankan drums with modern contemporary ballet and artistic theatrical expression.",
        details: "Ideal for senior performers looking to compose original concert pieces, international dance festivals, and avant-garde stage choreography."
    }
];

// --- 2.2 PHOTO GALLERY DATA ---
const DATA_GALLERY = [
    {
        id: 1,
        category: "performances",
        title: "Annual Grand Showcase Finale",
        sinhalaDesc: "වාර්ෂික වේදිකා නර්තන ප්‍රසංගය",
        src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/annual-show-01.jpg"
    },
    {
        id: 2,
        category: "classes",
        title: "Traditional Kandyan Thaalam Practice",
        sinhalaDesc: "උඩරට තාළම් සහ පාද අභ්‍යාස",
        src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/class-practice-01.jpg"
    },
    {
        id: 3,
        category: "competitions",
        title: "All Island Championship Trophy",
        sinhalaDesc: "සමස්ත ලංකා ප්‍රථම ස්ථානය දිනාගත් අවස්ථාව",
        src: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/competition-trophy.jpg"
    },
    {
        id: 4,
        category: "students",
        title: "Young Ballerina & Modern Youth Troupe",
        sinhalaDesc: "ආධුනික ශිෂ්‍ය ශිෂ්‍යාවන්ගේ නර්තන කුසලතා",
        src: "https://images.unsplash.com/photo-1509670811275-79453f576390?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/young-students.jpg"
    },
    {
        id: 5,
        category: "events",
        title: "National Cultural Festival Stage",
        sinhalaDesc: "ජාතික සංස්කෘතික නර්තන උළෙල",
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/cultural-festival.jpg"
    },
    {
        id: 6,
        category: "special",
        title: "Ves Mangalya Sacred Blessing",
        sinhalaDesc: "පාරම්පරික වෙස් මංගල්‍යය උළෙල",
        src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/ves-mangalya.jpg"
    },
    {
        id: 7,
        category: "classes",
        title: "Western Hip-Hop Synchronization",
        sinhalaDesc: "බස්නාහිර හිප්-හොප් පුහුණු සැසිය",
        src: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/hiphop-practice.jpg"
    },
    {
        id: 8,
        category: "performances",
        title: "Low Country Fire Dance Ritual",
        sinhalaDesc: "පහතරට ගිනි සිසිල නර්තන අංගය",
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
        // Local path: "assets/images/gallery/fire-dance.jpg"
    }
];

// --- 2.3 VIDEO GALLERY DATA (Supports YouTube URL or Local MP4) ---
const DATA_VIDEOS = [
    {
        id: "v1",
        title: "Grand Annual Showcase 2025 Highlights",
        sinhalaTitle: "වාර්ෂික නර්තන ප්‍රසංගය 2025",
        description: "Relive the majestic moments from the Nelum Pokuna Theatre main stage recital.",
        thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
        videoType: "youtube", // 'youtube' or 'mp4'
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube embed URL
        // If MP4 local: "assets/videos/annual-show.mp4"
        duration: "4:30 Min"
    },
    {
        id: "v2",
        title: "Traditional Ves Dance Performance",
        sinhalaTitle: "සාම්ප්‍රදායික වෙස් නර්තන නිර්මාණය",
        description: "Traditional sacred drums paired with supreme precision Vannam choreography.",
        thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "5:15 Min"
    },
    {
        id: "v3",
        title: "Bollywood & Western Fusion Routine",
        sinhalaTitle: "බොලිවුඩ් සහ බටහිර මිශ්‍ර නර්තනය",
        description: "Energetic beats and vibrant costumes in an electrifying youth fusion performance.",
        thumbnail: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=600&auto=format&fit=crop",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "3:45 Min"
    },
    {
        id: "v4",
        title: "Junior Academy Kids Dance Recital",
        sinhalaTitle: "කනිෂ්ඨ සිසුන්ගේ ප්‍රථම වේදිකා අත්දැකීම",
        description: "Charming performance by our youngest stars aged 5 to 10 years old.",
        thumbnail: "https://images.unsplash.com/photo-1509670811275-79453f576390?q=80&w=600&auto=format&fit=crop",
        videoType: "youtube",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "3:10 Min"
    }
];

// --- 2.4 UPCOMING EVENTS DATA ---
const DATA_EVENTS = [
    {
        id: "event-1",
        name: "Annual Dance Show 2026",
        sinhalaName: "වාර්ෂික නර්තන ප්‍රසංගය 2026",
        dateDay: "18",
        dateMonth: "DEC",
        dateFull: "December 18, 2026",
        time: "6:30 PM Onwards",
        location: "Nelum Pokuna Mahinda Rajapaksa Theatre, Colombo",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
        description: "The grandest performing arts event of the year featuring over 300 student dancers in traditional, fusion, and modern dance acts."
    },
    {
        id: "event-2",
        name: "National Dance Masterclass & Workshop",
        sinhalaName: "ජාතික නර්තන වැඩමුළුව",
        dateDay: "15",
        dateMonth: "OCT",
        dateFull: "October 15, 2026",
        time: "9:00 AM – 4:00 PM",
        location: "Adithya Dancing Main Studio Complex, Colombo",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
        description: "An intensive full-day masterclass on traditional rhythmic timing, mask expressions, and modern contemporary techniques."
    },
    {
        id: "event-3",
        name: "New Student Auditions & Open Day",
        sinhalaName: "නවක සිසුන් බඳවාගැනීමේ දිනය",
        dateDay: "05",
        dateMonth: "NOV",
        dateFull: "November 05, 2026",
        time: "10:00 AM – 2:00 PM",
        location: "Adithya Dancing Studio Hall A, Colombo",
        image: "https://images.unsplash.com/photo-1509670811275-79453f576390?q=80&w=600&auto=format&fit=crop",
        description: "Free assessment, trial classes, and enrollment discounts for kids, teenagers, and adult beginners."
    }
];

// --- 2.5 ACHIEVEMENTS DATA ---
const DATA_ACHIEVEMENTS = [
    {
        icon: "fa-trophy",
        number: "18",
        title: "National Championship Awards",
        sinhalaText: "සමස්ත ලංකා ජාතික ශූරතා සම්මාන",
        desc: "Ranked 1st Place across All-Island School & Open Performing Arts Competitions."
    },
    {
        icon: "fa-medal",
        number: "45",
        title: "1st Place Gold Medals",
        sinhalaText: "ප්‍රථම ස්ථාන රන් පදක්කම්",
        desc: "Individual & group accolades in Kandyan, Low-country, and Modern Freestyle choreography."
    },
    {
        icon: "fa-award",
        number: "32",
        title: "2nd Place Silver & Merit",
        sinhalaText: "දෙවන ස්ථාන සහ කුසලතා සම්මාන",
        desc: "Consistent excellence at national youth dance festivals and inter-academy contests."
    },
    {
        icon: "fa-star",
        number: "280",
        title: "Grand Stage Performances",
        sinhalaText: "විශිෂ්ට වේදිකා සංදර්ශන",
        desc: "Television appearances, cultural state visits, and corporate galas across Sri Lanka."
    }
];

// --- 2.6 WHY CHOOSE US CARDS ---
const DATA_WHY_CHOOSE = [
    {
        icon: "fa-chalkboard-user",
        title: "Professional Training",
        sinhalaText: "විධිමත් වෘත්තීය පුහුණුව",
        desc: "Structured curriculum designed with traditional discipline and contemporary pedagogical excellence."
    },
    {
        icon: "fa-user-tie",
        title: "Experienced Instructors",
        sinhalaText: "ප්‍රවීණ නර්තනාචාර්යවරුන්",
        desc: "Learn directly from university graduates and celebrated masters of Sri Lankan and modern dance."
    },
    {
        icon: "fa-heart",
        title: "Friendly Environment",
        sinhalaText: "මිත්‍රශීලී ආරක්ෂිත පරිසරය",
        desc: "Positive, encouraging, and safe atmosphere that helps every student flourish naturally."
    },
    {
        icon: "fa-masks-theater",
        title: "Stage Opportunities",
        sinhalaText: "වේදිකා නිරාවරණ අවස්ථා",
        desc: "Guaranteed annual theatre recitals, national TV showcases, and corporate festival stages."
    },
    {
        icon: "fa-ranking-star",
        title: "Competition Training",
        sinhalaText: "තරඟ සඳහා විශේෂ පුහුණුව",
        desc: "Specialized coaching for national dance competitions, grade examinations, and Ves Bandheema."
    },
    {
        icon: "fa-yin-yang",
        title: "Traditional & Modern",
        sinhalaText: "දේශීය හා නවීන නර්තන සම්මිශ්‍රණය",
        desc: "A balanced balance of classical Sri Lankan roots with globally trending modern dance styles."
    },
    {
        icon: "fa-children",
        title: "Kids Friendly Classes",
        sinhalaText: "කුඩා දරුවන් සඳහා විශේෂිත",
        desc: "Engaging step-by-step methods that instill posture, motor coordination, and musicality."
    },
    {
        icon: "fa-bolt-lightning",
        title: "Confidence Building",
        sinhalaText: "පෞරුෂය හා විශ්වාසය වර්ධනය",
        desc: "Empowering students with stage presence, public speaking, leadership, and emotional poise."
    }
];

// --- 2.7 TESTIMONIALS DATA ---
const DATA_TESTIMONIALS = [
    {
        name: "Rashmi Wickramasinghe",
        role: "Parent of Junior Student",
        sinhalaRole: "දෙමාපිය අදහස්",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        stars: 5,
        review: "Adithya Dancing has been a second home for my daughter. In just two years, her posture, discipline, and stage confidence have grown tremendously. The teachers are extraordinarily caring and professional."
    },
    {
        name: "Dilshan Jayawardena",
        role: "Senior Kandyan Dancer & Alumnus",
        sinhalaRole: "ජ්‍යෙෂ්ඨ නර්තන ශිෂ්‍ය",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        stars: 5,
        review: "The traditional training here is truly unmatched. The masters respect the authentic roots of Kandyan dance while giving us opportunities to perform on Sri Lanka's biggest national stages."
    },
    {
        name: "Sanduni Fernando",
        role: "Bollywood & Fusion Troupe Member",
        sinhalaRole: "නවීන නර්තන ශිල්පිනී",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        stars: 5,
        review: "The energy and passion at Adithya Dancing are infectious! The choreographies are fresh, modern, and exciting. Joining this academy was the best creative decision of my life."
    }
];

// --- 2.8 INSTAGRAM FEED SAMPLES ---
const DATA_INSTAGRAM = [
    { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop", likes: "1.4k" },
    { img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&auto=format&fit=crop", likes: "980" },
    { img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=400&auto=format&fit=crop", likes: "2.1k" },
    { img: "https://images.unsplash.com/photo-1509670811275-79453f576390?q=80&w=400&auto=format&fit=crop", likes: "850" },
    { img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=400&auto=format&fit=crop", likes: "1.7k" },
    { img: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=400&auto=format&fit=crop", likes: "1.2k" }
];

const MEDIA_STORAGE_KEYS = {
    photos: "adithya-uploaded-photos",
    videos: "adithya-uploaded-videos"
};

function loadUploadedMedia() {
    try {
        const photos = JSON.parse(localStorage.getItem(MEDIA_STORAGE_KEYS.photos) || "[]");
        const videos = JSON.parse(localStorage.getItem(MEDIA_STORAGE_KEYS.videos) || "[]");
        DATA_GALLERY.push(...photos);
        DATA_VIDEOS.push(...videos);
    } catch (error) {
        console.warn("Uploaded media could not be restored.", error);
    }
}

/* ==========================================================================
   3. CORE APPLICATION LOGIC & RENDER ENGINE
   ========================================================================== */

let currentLightboxIndex = 0;
let currentFilteredGallery = [...DATA_GALLERY];

document.addEventListener("DOMContentLoaded", function () {
    loadUploadedMedia();

    // 1. Initialize Site Contacts & Socials
    initSiteConfig();

    // 2. Render Dynamic Components
    renderClasses();
    renderGallery("all");
    renderVideos();
    renderEvents();
    renderAchievements();
    renderWhyChoose();
    renderTestimonials();
    renderInstagramGrid();

    // 3. UI Interactions & Effects
    initStickyNavbar();
    initStatsCounter();
    initCustomCursor();
    initParticlesEffect();
    initContactForm();
    initGalleryFilterEvents();
    initLightboxKeyboardNav();
    initMediaUpload();
});

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

function saveUploadedMedia(key, items) {
    try {
        localStorage.setItem(key, JSON.stringify(items));
        return true;
    } catch (error) {
        console.warn("Uploaded media could not be saved.", error);
        return false;
    }
}

function setUploadStatus(elementId, message, isError = false) {
    const status = document.getElementById(elementId);
    if (status) {
        status.textContent = message;
        status.className = `media-upload-status small mt-3 ${isError ? "text-danger" : "text-gold"}`;
    }
}

function initMediaUpload() {
    document.getElementById("addPhotosBtn")?.addEventListener("click", async function () {
        const input = document.getElementById("photoUpload");
        const category = document.getElementById("photoCategory").value;
        const files = [...(input?.files || [])];
        if (!files.length) {
            setUploadStatus("photoUploadStatus", "Please choose at least one photo.", true);
            return;
        }

        try {
            const newPhotos = await Promise.all(files.map(async (file, index) => ({
                id: `uploaded-photo-${Date.now()}-${index}`,
                category,
                title: file.name.replace(/\.[^/.]+$/, ""),
                sinhalaDesc: "ඔබ එක් කළ ඡායාරූපය",
                src: await readFileAsDataUrl(file)
            })));
            const stored = saveUploadedMedia(MEDIA_STORAGE_KEYS.photos, [...DATA_GALLERY.filter(item => item.id.toString().startsWith("uploaded-photo-")), ...newPhotos]);
            DATA_GALLERY.push(...newPhotos);
            renderGallery(document.querySelector(".btn-filter.active")?.dataset.filter || "all");
            input.value = "";
            setUploadStatus("photoUploadStatus", stored ? `${newPhotos.length} photo(s) added successfully.` : "Photos added for this session, but could not be saved.", !stored);
        } catch (error) {
            setUploadStatus("photoUploadStatus", "The selected photo could not be added.", true);
        }
    });

    document.getElementById("addVideoBtn")?.addEventListener("click", async function () {
        const videoInput = document.getElementById("videoUpload");
        const thumbnailInput = document.getElementById("videoThumbnailUpload");
        const videoFile = videoInput?.files?.[0];
        if (!videoFile) {
            setUploadStatus("videoUploadStatus", "Please choose an MP4 or WebM video.", true);
            return;
        }

        try {
            const video = {
                id: `uploaded-video-${Date.now()}`,
                title: videoFile.name.replace(/\.[^/.]+$/, ""),
                sinhalaTitle: "ඔබ එක් කළ වීඩියෝව",
                description: "Uploaded academy video",
                thumbnail: thumbnailInput?.files?.[0] ? await readFileAsDataUrl(thumbnailInput.files[0]) : DATA_GALLERY[0].src,
                videoType: "mp4",
                videoUrl: await readFileAsDataUrl(videoFile),
                duration: "Uploaded video"
            };
            const stored = saveUploadedMedia(MEDIA_STORAGE_KEYS.videos, [...DATA_VIDEOS.filter(item => item.id.toString().startsWith("uploaded-video-")), video]);
            DATA_VIDEOS.push(video);
            renderVideos();
            videoInput.value = "";
            if (thumbnailInput) thumbnailInput.value = "";
            setUploadStatus("videoUploadStatus", stored ? "Video added successfully." : "Video added for this session, but could not be saved.", !stored);
        } catch (error) {
            setUploadStatus("videoUploadStatus", "The selected video is too large to save in this browser.", true);
        }
    });
}

/**
 * Populate Config Details Across HTML Elements
 */
function initSiteConfig() {
    // Contact display elements
    const phoneEl = document.getElementById("contact-phone-display");
    if (phoneEl) phoneEl.textContent = SITE_CONFIG.phoneDisplay;

    const waEl = document.getElementById("contact-whatsapp-display");
    if (waEl) waEl.textContent = SITE_CONFIG.phoneDisplay.split("/")[0].trim();

    const emailEl = document.getElementById("contact-email-display");
    if (emailEl) emailEl.textContent = SITE_CONFIG.email;

    const addressEl = document.getElementById("contact-address-display");
    if (addressEl) addressEl.textContent = SITE_CONFIG.address;

    const hoursEl = document.getElementById("contact-hours-display");
    if (hoursEl) hoursEl.textContent = SITE_CONFIG.openingHours;

    // Floating WhatsApp Button Link
    const floatingWaBtn = document.getElementById("floatingWhatsAppBtn");
    if (floatingWaBtn) {
        const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;
        floatingWaBtn.href = waUrl;
    }

    // Social Handles Header Bar
    const socialHandlesContainer = document.getElementById("social-handles-container");
    if (socialHandlesContainer) {
        socialHandlesContainer.innerHTML = `
            <a href="${SITE_CONFIG.socialMedia.facebook}" target="_blank" rel="noopener" class="social-handle-btn"><i class="fa-brands fa-facebook text-primary me-1"></i> Facebook</a>
            <a href="${SITE_CONFIG.socialMedia.instagram}" target="_blank" rel="noopener" class="social-handle-btn"><i class="fa-brands fa-instagram text-danger me-1"></i> Instagram</a>
            <a href="${SITE_CONFIG.socialMedia.youtube}" target="_blank" rel="noopener" class="social-handle-btn"><i class="fa-brands fa-youtube text-danger me-1"></i> YouTube</a>
            <a href="${SITE_CONFIG.socialMedia.tiktok}" target="_blank" rel="noopener" class="social-handle-btn"><i class="fa-brands fa-tiktok text-light me-1"></i> TikTok</a>
        `;
    }

    // Footer Social Circles
    const footerSocials = document.getElementById("footer-socials");
    if (footerSocials) {
        footerSocials.innerHTML = `
            <a href="${SITE_CONFIG.socialMedia.facebook}" target="_blank" rel="noopener" class="social-circle-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${SITE_CONFIG.socialMedia.instagram}" target="_blank" rel="noopener" class="social-circle-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="${SITE_CONFIG.socialMedia.youtube}" target="_blank" rel="noopener" class="social-circle-btn" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="${SITE_CONFIG.socialMedia.tiktok}" target="_blank" rel="noopener" class="social-circle-btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        `;
    }
}

/**
 * Render Dance Classes Cards
 */
function renderClasses() {
    const grid = document.getElementById("classes-grid");
    if (!grid) return;

    grid.innerHTML = DATA_CLASSES.map((c, index) => `
        <div class="col-lg-4 col-md-6">
            <div class="class-card glassmorphism-card">
                <div class="class-img-wrapper">
                    <img src="${c.image}" alt="${c.title} - Adithya Dancing" loading="lazy">
                    <span class="class-badge">${c.badge}</span>
                </div>
                <div class="class-content">
                    <div>
                        <h4 class="text-white fw-bold mb-1">${c.title}</h4>
                        <h6 class="sinhala-font text-gold mb-3">${c.sinhalaTitle}</h6>
                        <p class="text-muted-light small mb-4">${c.description}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                        <button class="btn btn-outline-gold btn-sm px-3" onclick="openClassModal('${c.id}')">
                            <i class="fa-solid fa-circle-info me-1"></i> Learn More
                        </button>
                        <a href="#contact" class="btn btn-gold btn-sm px-3" onclick="selectClassInForm('${c.title}')">
                            Enroll <i class="fa-solid fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

/**
 * Open Detailed Class Information Modal
 */
window.openClassModal = function (classId) {
    const classData = DATA_CLASSES.find(item => item.id === classId);
    if (!classData) return;

    document.getElementById("classModalTitle").innerHTML = `${classData.title} <small class="text-gold sinhala-font">(${classData.sinhalaTitle})</small>`;
    document.getElementById("classModalBody").innerHTML = `
        <div class="row g-4">
            <div class="col-md-5">
                <img src="${classData.image}" alt="${classData.title}" class="img-fluid rounded-3 shadow-gold-sm mb-3">
                <div class="badge bg-gold-gradient text-dark fw-bold px-3 py-2 w-100">${classData.badge}</div>
            </div>
            <div class="col-md-7">
                <h5 class="text-white fw-bold mb-2">Curriculum & Course Overview</h5>
                <p class="text-muted-light">${classData.details}</p>
                <hr class="border-secondary">
                <h6 class="text-gold fw-bold mb-2">Class Features:</h6>
                <ul class="text-light small ps-3 mb-4">
                    <li>Weekly live studio sessions with personalized correction</li>
                    <li>Audio beats & video practice materials provided</li>
                    <li>Audition opportunity for annual stage concerts</li>
                    <li>Certificate of completion upon grading examination</li>
                </ul>
            </div>
        </div>
    `;

    const classModal = new bootstrap.Modal(document.getElementById("classDetailsModal"));
    classModal.show();
};

/**
 * Pre-select Course in Contact Form Dropdown
 */
window.selectClassInForm = function (className) {
    const selectEl = document.getElementById("danceCategory");
    if (selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
            if (selectEl.options[i].text.includes(className) || selectEl.options[i].value.includes(className)) {
                selectEl.selectedIndex = i;
                break;
            }
        }
    }
};

/**
 * Render Gallery Items Based on Filter
 */
function renderGallery(filterCategory = "all") {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    if (filterCategory === "all") {
        currentFilteredGallery = [...DATA_GALLERY];
    } else {
        currentFilteredGallery = DATA_GALLERY.filter(item => item.category === filterCategory);
    }

    grid.innerHTML = currentFilteredGallery.map((item, index) => `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="gallery-item" onclick="openLightbox(${index})">
                <div class="gallery-thumb-wrapper">
                    <img src="${item.src}" alt="${item.title}" loading="lazy">
                </div>
                <div class="gallery-overlay">
                    <span class="badge bg-gold-gradient text-dark mb-2 align-self-start text-uppercase small">${item.category}</span>
                    <h6 class="text-white fw-bold mb-0">${item.title}</h6>
                    <small class="sinhala-font text-gold">${item.sinhalaDesc}</small>
                </div>
            </div>
        </div>
    `).join("");
}

/**
 * Setup Filter Buttons Event Listeners
 */
function initGalleryFilterEvents() {
    const filterButtons = document.querySelectorAll(".btn-filter");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const filterVal = this.getAttribute("data-filter");
            renderGallery(filterVal);
        });
    });
}

/**
 * Open Lightbox Popup for Photo
 */
window.openLightbox = function (index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    const lightboxModal = new bootstrap.Modal(document.getElementById("galleryLightboxModal"));
    lightboxModal.show();
};

function updateLightboxContent() {
    if (!currentFilteredGallery || currentFilteredGallery.length === 0) return;
    const item = currentFilteredGallery[currentLightboxIndex];
    const imgEl = document.getElementById("lightboxImage");
    const titleEl = document.getElementById("lightboxTitle");
    const captionEl = document.getElementById("lightboxCaption");

    if (imgEl && item) {
        imgEl.src = item.src;
        titleEl.textContent = item.title;
        captionEl.innerHTML = `<span class="sinhala-font text-gold">${item.sinhalaDesc}</span> — <small class="text-muted">(${currentLightboxIndex + 1} of ${currentFilteredGallery.length})</small>`;
    }
}

/**
 * Lightbox Navigation Controls
 */
document.getElementById("lightboxPrevBtn")?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
    } else {
        currentLightboxIndex = currentFilteredGallery.length - 1;
    }
    updateLightboxContent();
});

document.getElementById("lightboxNextBtn")?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentLightboxIndex < currentFilteredGallery.length - 1) {
        currentLightboxIndex++;
    } else {
        currentLightboxIndex = 0;
    }
    updateLightboxContent();
});

function initLightboxKeyboardNav() {
    document.addEventListener("keydown", function (e) {
        const modal = document.getElementById("galleryLightboxModal");
        if (modal && modal.classList.contains("show")) {
            if (e.key === "ArrowLeft") {
                document.getElementById("lightboxPrevBtn")?.click();
            } else if (e.key === "ArrowRight") {
                document.getElementById("lightboxNextBtn")?.click();
            }
        }
    });
}

/**
 * Render Video Gallery Cards
 */
function renderVideos() {
    const grid = document.getElementById("video-grid");
    if (!grid) return;

    grid.innerHTML = DATA_VIDEOS.map((v, index) => `
        <div class="col-lg-6 col-md-6">
            <div class="video-card glassmorphism-card" data-video-index="${index}" tabindex="0" role="button" aria-label="Play ${v.title}">
                <div class="video-thumb-container">
                    <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
                    <div class="play-button-overlay">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <span class="position-absolute bottom-0 end-0 bg-black bg-opacity-75 text-gold px-2 py-1 m-2 rounded small fw-bold">
                        ${v.duration}
                    </span>
                </div>
                <div class="p-4">
                    <h5 class="text-white fw-bold mb-1">${v.title}</h5>
                    <h6 class="sinhala-font text-gold mb-2">${v.sinhalaTitle}</h6>
                    <p class="text-muted-light small mb-0">${v.description}</p>
                </div>
            </div>
        </div>
    `).join("");

    grid.querySelectorAll("[data-video-index]").forEach(card => {
        const playVideo = () => {
            const video = DATA_VIDEOS[Number(card.dataset.videoIndex)];
            openVideoModal(video.videoUrl, video.title, video.videoType);
        };
        card.addEventListener("click", playVideo);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                playVideo();
            }
        });
    });
}

/**
 * Open Video Modal (Supports YouTube Embed or Local MP4)
 */
window.openVideoModal = function (videoUrl, title = "Adithya Dancing Video", videoType = "youtube") {
    const titleEl = document.getElementById("videoModalTitle");
    const container = document.getElementById("videoContainer");
    if (titleEl) titleEl.textContent = title;

    if (container) {
        if (videoType === "mp4" || videoUrl.endsWith(".mp4")) {
            container.innerHTML = `
                <video controls autoplay class="w-100 h-100 rounded-3">
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            // YouTube or Vimeo Embed
            const autoplayUrl = videoUrl.includes("?") ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`;
            container.innerHTML = `
                <iframe src="${autoplayUrl}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        }
    }

    const videoModal = new bootstrap.Modal(document.getElementById("videoPlayerModal"));
    videoModal.show();
};

window.stopVideoPlayback = function () {
    const container = document.getElementById("videoContainer");
    if (container) container.innerHTML = "";
};

// Clear video when modal is closed
document.getElementById("videoPlayerModal")?.addEventListener("hidden.bs.modal", function () {
    stopVideoPlayback();
});

/**
 * Render Upcoming Events
 */
function renderEvents() {
    const grid = document.getElementById("events-grid");
    if (!grid) return;

    grid.innerHTML = DATA_EVENTS.map(ev => `
        <div class="col-lg-4 col-md-6">
            <div class="event-card glassmorphism-card">
                <div class="event-image-box">
                    <img src="${ev.image}" alt="${ev.name}" loading="lazy">
                    <div class="event-date-badge">
                        <span class="fs-4 d-block">${ev.dateDay}</span>
                        <span class="small text-uppercase">${ev.dateMonth}</span>
                    </div>
                </div>
                <div class="event-details-content">
                    <div>
                        <h4 class="text-white fw-bold mb-1">${ev.name}</h4>
                        <h6 class="sinhala-font text-gold mb-3">${ev.sinhalaName}</h6>
                        <p class="text-muted-light small mb-3">${ev.description}</p>
                        
                        <div class="event-meta small text-white-50 mb-3">
                            <div class="mb-1"><i class="fa-solid fa-clock text-gold me-2"></i> ${ev.time}</div>
                            <div><i class="fa-solid fa-location-dot text-gold me-2"></i> ${ev.location}</div>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-outline-gold w-100 py-2 mt-2">
                        <i class="fa-solid fa-ticket me-1"></i> Inquire / Reserve Seats
                    </a>
                </div>
            </div>
        </div>
    `).join("");
}

/**
 * Render Achievements
 */
function renderAchievements() {
    const grid = document.getElementById("achievements-grid");
    if (!grid) return;

    grid.innerHTML = DATA_ACHIEVEMENTS.map(ach => `
        <div class="col-lg-3 col-md-6">
            <div class="achievement-card glassmorphism-card">
                <div class="icon-box-gold">
                    <i class="fa-solid ${ach.icon}"></i>
                </div>
                <h2 class="gold-gradient-text fw-bold mb-1">${ach.number}+</h2>
                <h5 class="text-white fw-bold mb-1">${ach.title}</h5>
                <p class="sinhala-font text-gold small mb-2">${ach.sinhalaText}</p>
                <p class="text-muted-light small mb-0">${ach.desc}</p>
            </div>
        </div>
    `).join("");
}

/**
 * Render Why Choose Us Cards
 */
function renderWhyChoose() {
    const grid = document.getElementById("why-choose-grid");
    if (!grid) return;

    grid.innerHTML = DATA_WHY_CHOOSE.map(item => `
        <div class="col-lg-3 col-md-6">
            <div class="why-card glassmorphism-card">
                <div class="icon-box-gold">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <h5 class="text-white fw-bold mb-1">${item.title}</h5>
                <h6 class="sinhala-font text-gold small mb-2">${item.sinhalaText}</h6>
                <p class="text-muted-light small mb-0">${item.desc}</p>
            </div>
        </div>
    `).join("");
}

/**
 * Render Testimonials Carousel
 */
function renderTestimonials() {
    const container = document.getElementById("testimonials-container");
    if (!container) return;

    container.innerHTML = DATA_TESTIMONIALS.map((t, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="testimonial-item glassmorphism-card text-center rounded-4">
                <i class="fa-solid fa-quote-left quote-icon mb-3 d-block"></i>
                <img src="${t.avatar}" alt="${t.name}" class="student-avatar mb-3">
                <div class="stars-rating">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(t.stars)}
                </div>
                <p class="text-light fst-italic lead mb-4">"${t.review}"</p>
                <h5 class="text-white fw-bold mb-0">${t.name}</h5>
                <span class="text-gold small">${t.role} • <span class="sinhala-font">${t.sinhalaRole}</span></span>
            </div>
        </div>
    `).join("");
}

/**
 * Render Instagram Photos Grid
 */
function renderInstagramGrid() {
    const grid = document.getElementById("instagram-grid");
    if (!grid) return;

    grid.innerHTML = DATA_INSTAGRAM.map(item => `
        <div class="col-lg-2 col-md-4 col-4">
            <a href="${SITE_CONFIG.socialMedia.instagram}" target="_blank" rel="noopener" class="instagram-post-card d-block">
                <img src="${item.img}" alt="Instagram dance post" loading="lazy">
                <div class="instagram-overlay">
                    <span class="text-white fw-bold small"><i class="fa-solid fa-heart text-danger me-1"></i> ${item.likes}</span>
                </div>
            </a>
        </div>
    `).join("");
}

/**
 * Sticky Navbar on Scroll
 */
function initStickyNavbar() {
    const navbar = document.getElementById("mainNavbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }
    });
}

/**
 * Animated Numbers on Scroll (Stats Counter)
 */
function initStatsCounter() {
    const statsContainer = document.getElementById("stats-container");
    if (!statsContainer) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                const counters = document.querySelectorAll(".counter-number");
                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    const duration = 1800; // ms
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.ceil(current);
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsContainer);
}

/**
 * Custom Cursor for Desktop
 */
function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const outline = document.getElementById("cursor-outline");
    if (!dot || !outline || window.innerWidth < 992) return;

    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 350, fill: "forwards" });
    });
}

/**
 * Subtle Gold Stardust Canvas Particles
 */
function initParticlesEffect() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            speedY: Math.random() * 0.4 + 0.1,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.6 + 0.2
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y -= p.speedY;
            p.x += p.speedX;

            if (p.y < 0) p.y = height;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

/**
 * Contact Form Submission & Validation + Direct WhatsApp Forwarding Option
 */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const alertBox = document.getElementById("form-alert");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("userName").value.trim();
        const phone = document.getElementById("userPhone").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const category = document.getElementById("danceCategory").value;
        const message = document.getElementById("userMessage").value.trim();

        if (!name || !phone || !email || !category || !message) {
            form.classList.add("was-validated");
            return;
        }

        // Display Success Alert
        alertBox.className = "alert alert-success d-block bg-dark border-gold text-white";
        alertBox.innerHTML = `
            <strong><i class="fa-solid fa-circle-check text-gold me-2"></i> Message Sent Successfully!</strong><br>
            Thank you <b>${name}</b>, our team will call you back on <b>${phone}</b> shortly.
            <div class="mt-2">
                <a href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi Adithya Dancing! My name is ${name}. I am interested in ${category}. Message: ${message}`)}" target="_blank" class="btn btn-gold btn-sm mt-1">
                    <i class="fa-brands fa-whatsapp me-1"></i> Send Copy via WhatsApp
                </a>
            </div>
        `;

        form.reset();
        form.classList.remove("was-validated");
    });
}
