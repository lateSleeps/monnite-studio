export type Lang = "en" | "id";

const translations = {
  en: {
    nav: {
      project: "Project",
      about: "About",
      services: "Services",
      question: "Question",
      cta: "Book a 15 min Call",
      copyright: "Monnite Studio © 2026",
    },
    // MONNITE-SEO: Hero section — problem-aware headline, no-handoff positioning
    hero: {
      heading1: "We build",
      headingGlitch: "digital products",
      heading2: "that grow as you do.",
      subheading:
        "Building digital products that scale with your business,\nfrom first launch to enterprise level.",
      cta: "Book a 15 min Call",
      whatsapp: "Message via WhatsApp",
      brands: [
        "Design + build, one studio",
        "4–8 weeks, brief to launch",
        "Outcomes over aesthetics",
        "Partner, not vendor",
      ],
    },
    // MONNITE-SEO: Services — no-handoff differentiator as heading
    services: {
      heading:
        "Most agencies hand off between design and code. We don't.",
      subheading: "We design + build",
      selectService: "Start Consultation",
      items: [
        "Custom Software & Systems",
        "Design System",
        "Product Websites",
        "Brand Strategy",
        "E-commerce",
        "Product Discovery",
      ],
      descriptions: [
        "Bespoke POS, ERP, and internal tools designed around how your business actually works — not retrofitted around what exists off the shelf.",
        "A single source of truth for your UI: components, tokens, and guidelines that keep every screen consistent as your product scales.",
        "High-performance product websites and landing pages built to convert — on Webflow, Framer, or custom code, depending on what fits.",
        "Positioning, naming, and visual identity for businesses that need to stand for something specific before they spend money looking like it.",
        "End-to-end e-commerce — storefront design, custom checkout flows, and backend integrations — built to sell from day one.",
        "Not sure what to build, or why what you have isn't working? We run structured sessions to validate ideas and map the clearest path forward.",
      ],
    },
    portfolio: {
      categories: [
        {
          title: "Design memorable first products",
          description:
            "You only have one shot at a first impression. Your product doesn't have to be perfect — it has to make people want to come back. We help early-stage teams go beyond minimum viable and build something that actually leaves a mark.",
          projects: [
            {
              name: "Corner 32",
              description:
                "Brand website for a health-focused café targeting remote workers. SEO-optimized to rank for 'healthy workspace café Bali' and drive foot traffic from digital nomads.",
            },
            {
              name: "Tenang",
              description:
                "Website for Ubud's premium spa, yoga studio, and restaurant. Three distinct services, one brand, one seamless booking experience.",
            },
          ],
        },
        {
          title: "Reinvent what already works",
          description:
            "Most product design chases the new. We also love elevating what already exists — preserving what makes it special, rethinking what's broken, and adding what's needed to stay relevant. Legacy doesn't have to mean outdated.",
          projects: [
            {
              name: "Sushi Tei",
              description:
                "Custom point-of-sale application for a restaurant chain. Handles transactions, real-time inventory, and service monitoring across multiple locations.",
            },
            {
              name: "Fitground",
              description:
                "End-to-end system managing member subscriptions, trainer scheduling, class bookings, and multi-location oversight. Cut admin time by 60%.",
            },
          ],
        },
        {
          title: "Shape challenger brands",
          description:
            "We work best with businesses that question the norm. We help them find the right positioning, build narratives that resonate, and create identities that stand out without feeling forced — with strategic clarity and honest craft.",
          projects: [
            {
              name: "Lenka Studio",
              description:
                "Visual identity for a Bali-based design and technology agency. Built to reflect technical precision and creative craft in equal measure.",
            },
            {
              name: "Webstein",
              description:
                "Complete brand identity for an Australian digital agency focused on WordPress and marketing. Logo, typography, color, and collateral.",
            },
          ],
        },
      ],
      tags: ["Strategy", "UI Design", "UX Design", "Software Development"],
      tooltip: "Project WIP",
    },
    // MONNITE-SEO: Social proof section heading
    social: {
      heading: "Numbers from doing the work, not promising it.",
      cards: [
        {
          title: "Projects Delivered",
          suffix: undefined,
          description:
            "From landing pages to complex systems — for F&B, clinics, retail, and local startups across Bali.",
        },
        {
          title: "Average Delivery",
          suffix: "Weeks",
          description:
            "Focused sprints, real progress every week. You always know where things stand.",
        },
        {
          title: "Support Response",
          suffix: "Hours",
          description:
            "Questions answered, bugs fixed, urgent changes deployed. Same timezone, always available.",
        },
        {
          title: "On-Time Delivery",
          suffix: undefined,
          description:
            "Every project delivered on schedule. We plan carefully and communicate before things slip — not after.",
        },
      ],
    },
    // MONNITE-SEO: About section — why-first, ends with who it's for
    about: {
      heading: "We ask why before we build anything.",
      body1:
        "Most growing businesses don't have a design problem. They have a clarity problem — they know what to build, but not why it isn't working yet. We start there. Before wireframes, before code, before timelines. Monnite is a design and technology studio in Tabanan, Bali. We work end-to-end — brand, product, website, and systems — from one team, so nothing gets lost between design and development.",
      body2:
        "The process is direct: week one is for understanding the problem, not pitching solutions. We build in weekly sprints so you see progress in real time. After launch, we stay for 30 days — because that's when you find out what actually works. Built for F&B owners, clinics, retailers, and local startups that are growing but need their digital side to catch up.",
    },
    qna: {
      heading: "Things people usually ask us.",
      subheading:
        "Everything you need to know before we start working together.",
      faqs: [
        {
          question: "How much does a project cost?",
          answer:
            "It depends on scope and complexity. We use fixed-price packages — no hourly surprises. Book a 15-min call and we'll give you a clear quote based on what you actually need.",
        },
        {
          question: "How long does it take?",
          answer:
            "Most projects ship in 4–8 weeks. Brand websites take 4–6 weeks, e-commerce 6–8 weeks, custom systems 8–12 weeks. Timeline is confirmed at kickoff, not estimated mid-project.",
        },
        {
          question: "How does the process work?",
          answer:
            "We start with a discovery call, then move into weekly sprints so you always know where things stand. After launch, we stay for 30 days to make sure everything runs right.",
        },
        {
          question: "What if the scope needs to change midway?",
          answer:
            "We reassess and adjust if needed. Small tweaks are included. Bigger changes get a quick brief amendment before we proceed — no surprises on either side.",
        },
        {
          question: "Is there support after the project?",
          answer:
            "All projects include 30 days of post-launch support. After that, you can choose a monthly retainer or pay per request. No lock-in — you own everything.",
        },
      ],
    },
    contact: {
      heading: "Let's figure out what you need",
      subheading:
        "Tell us what you're working on. We'll tell you honestly whether we're the right fit — and what it would take.",
      namePlaceholder: "Your name",
      nameLabel: "Name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project...",
      cta: "Send Message",
    },
    footer: {
      contact: "Contact",
      navigation: "Navigation",
      links: {
        email: "Email",
        linkedin: "LinkedIn",
        threads: "Threads",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      nav: {
        project: "Project",
        about: "About",
        services: "Services",
        question: "Question",
      },
      comingSoon: "(Coming Soon)",
      blog: "Blog",
      creativeSpace: "Creative Space",
      studioName: "Monnite Studio",
      // MONNITE-SEO: Footer tagline — end-to-end positioning
      studioDesc:
        "One studio. Design, build, and ship — end to end.",
      location: "Tabanan, Bali, Indonesia.",
      copyright: "©2026 Monnite Studio",
    },
    // MONNITE-SEO: Service page meta tags
    serviceMeta: {
      uiux: {
        title: "UI/UX Design Studio Bali — Monnite",
        description:
          "User research, flows, and high-fidelity UI by a Bali design studio that also builds what it designs. End-to-end, no handoffs. Serving clients in Tabanan, Bali.",
      },
      webDev: {
        title: "Webflow & Web Development Bali — Monnite",
        description:
          "Custom Webflow and Framer development by Monnite Studio, Tabanan Bali. Pixel-perfect builds with CMS, animation, and SEO built in from day one.",
      },
      customSoftware: {
        title: "Custom ERP & POS Development Bali — Monnite",
        description:
          "Bespoke software, ERP, and POS systems for F&B, clinics, and retail in Bali. Designed for real workflows — built by Monnite Studio, Tabanan.",
      },
    },
  },

  id: {
    nav: {
      project: "Proyek",
      about: "Tentang",
      services: "Layanan",
      question: "Pertanyaan",
      cta: "Ngobrol 15 Menit",
      copyright: "Monnite Studio © 2026",
    },
    // MONNITE-SEO: Hero section ID
    hero: {
      heading1: "Kita bangun",
      headingGlitch: "produk digital",
      heading2: "yang ikut tumbuh sama kamu.",
      subheading:
        "Produk digital yang scale bareng bisnis kamu,\ndari hari pertama launch sampai skala enterprise.",
      cta: "Ngobrol 15 Menit",
      whatsapp: "Chat via WhatsApp",
      brands: [
        "Design + build, satu studio",
        "4–8 minggu, dari brief ke launch",
        "Hasil di atas estetika",
        "Partner, bukan vendor",
      ],
    },
    // MONNITE-SEO: Services ID
    services: {
      heading:
        "Kebanyakan agency nyerahin desain ke developer lain. Kita tidak.",
      subheading: "Kita desain + bangun",
      selectService: "Mulai Konsultasi",
      items: [
        "Software & Sistem Custom",
        "Design System",
        "Website Produk",
        "Brand Strategy",
        "E-commerce",
        "Product Discovery",
      ],
      descriptions: [
        "POS, ERP, dan tools internal yang dirancang sesuai cara bisnis kamu berjalan — bukan dipaksain ke template yang ada.",
        "Satu sumber kebenaran untuk UI kamu: komponen, token, dan panduan yang menjaga konsistensi setiap layar seiring produk berkembang.",
        "Website produk dan landing page berperforma tinggi yang dirancang untuk konversi — di Webflow, Framer, atau kode custom.",
        "Positioning, naming, dan visual identity untuk bisnis yang perlu punya makna sebelum mengeluarkan uang untuk terlihat seperti itu.",
        "E-commerce end-to-end — desain storefront, alur checkout custom, dan integrasi backend — siap jualan dari hari pertama.",
        "Nggak yakin mau bangun apa, atau kenapa yang ada sekarang nggak ngefek? Kita jalankan sesi terstruktur untuk validasi ide dan menemukan jalur yang paling jelas.",
      ],
    },
    portfolio: {
      categories: [
        {
          title: "Bikin produk pertama yang nggak terlupakan",
          description:
            "Kesan pertama cuma ada satu kali. Produkmu nggak harus sempurna — tapi harus bikin orang mau balik. Kita bantu tim early-stage buat melampaui minimum viable dan bikin sesuatu yang beneran ninggalin kesan.",
          projects: [
            {
              name: "Corner 32",
              description:
                "Website untuk kafe sehat yang nyasar ke remote worker. Dioptimasi SEO biar muncul di pencarian 'kafe workspace sehat Bali' dan narik traffic dari digital nomad.",
            },
            {
              name: "Tenang",
              description:
                "Website untuk spa premium, studio yoga, dan restoran di Ubud. Tiga layanan berbeda, satu merek, satu pengalaman booking yang mulus.",
            },
          ],
        },
        {
          title: "Revamp apa yang sudah ada",
          description:
            "Kebanyakan desain produk ngejar yang baru. Kita juga suka upgrade yang udah ada — jagain apa yang bikin dia spesial, beresin yang rusak, dan tambahin yang dibutuhkan buat tetap relevan. Legacy bukan berarti ketinggalan zaman.",
          projects: [
            {
              name: "Sushi Tei",
              description:
                "Aplikasi kasir custom untuk jaringan restoran. Urus transaksi, pantau stok real-time, dan monitor layanan di banyak cabang.",
            },
            {
              name: "Fitground",
              description:
                "Sistem lengkap untuk kelola langganan member, jadwal trainer, booking kelas, dan pantau banyak lokasi. Admin time-nya kepotong 60%.",
            },
          ],
        },
        {
          title: "Bantu merek penantang tampil beda",
          description:
            "Kita paling cocok kerja sama bisnis yang berani mempertanyakan norma. Kita bantu mereka nemuin positioning yang tepat, bangun cerita yang nyambung, dan ciptakan identitas yang menonjol tanpa terasa dipaksakan.",
          projects: [
            {
              name: "Lenka Studio",
              description:
                "Visual identity untuk agency desain dan teknologi di Bali. Dibangun untuk mencerminkan presisi teknis dan sentuhan kreatif secara bersamaan.",
            },
            {
              name: "Webstein",
              description:
                "Brand identity lengkap untuk digital agency asal Australia yang fokus di WordPress dan marketing. Logo, tipografi, warna, dan kolateral.",
            },
          ],
        },
      ],
      tags: ["Strategi", "UI Design", "UX Design", "Software Development"],
      tooltip: "Proyek dalam pengerjaan",
    },
    // MONNITE-SEO: Social proof section ID
    social: {
      heading: "Angka dari hasil kerja, bukan janji.",
      cards: [
        {
          title: "Proyek Selesai",
          suffix: undefined,
          description:
            "Dari landing page sampai sistem yang kompleks — untuk F&B, klinik, retail, dan startup lokal di Bali.",
        },
        {
          title: "Rata-rata Pengerjaan",
          suffix: "Minggu",
          description:
            "Sprint yang terstruktur, progress nyata setiap minggu. Kamu selalu tahu progress-nya sampai mana.",
        },
        {
          title: "Respons Support",
          suffix: "Jam",
          description:
            "Pertanyaan langsung dijawab, bug langsung dibenerin, perubahan urgent langsung dieksekusi. Timezone sama, selalu siap.",
        },
        {
          title: "Tepat Waktu",
          suffix: undefined,
          description:
            "Semua proyek selesai sesuai jadwal. Kita plan dengan matang dan komunikasi sebelum ada yang meleset — bukan sesudah.",
        },
      ],
    },
    // MONNITE-SEO: About section ID — why-first
    about: {
      heading: "Kita tanya kenapa dulu sebelum mulai bangun.",
      body1:
        "Kebanyakan bisnis yang berkembang bukan punya masalah desain. Mereka punya masalah kejelasan — tahu apa yang mau dibangun, tapi belum tahu kenapa yang ada sekarang nggak berhasil. Kita mulai dari sana. Sebelum wireframe, sebelum kode, sebelum timeline. Monnite adalah studio desain dan teknologi di Tabanan, Bali — yang kerja end-to-end, satu tim, dari brand sampai sistem.",
      body2:
        "Prosesnya langsung: minggu pertama untuk memahami masalah, bukan jualan solusi. Kita bangun dalam sprint mingguan biar kamu bisa lihat progress secara real time. Setelah launch, kita tetap ada 30 hari — karena di situlah hal yang beneran penting mulai keliatan. Cocok buat pemilik F&B, klinik, retail, dan startup lokal yang bisnisnya udah tumbuh, tapi sisi digitalnya perlu mengejar.",
    },
    qna: {
      heading: "Yang sering orang tanyain ke kita.",
      subheading:
        "Semua yang perlu kamu tau sebelum kita mulai kerja sama.",
      faqs: [
        {
          question: "Berapa harga sebuah proyek?",
          answer:
            "Tergantung scope dan kompleksitasnya. Kita pakai paket harga tetap — nggak ada kejutan per jam. Book call 15 menit dan kita kasih penawaran yang jelas sesuai kebutuhanmu.",
        },
        {
          question: "Berapa lama prosesnya?",
          answer:
            "Kebanyakan proyek selesai dalam 4–8 minggu. Website brand 4–6 minggu, e-commerce 6–8 minggu, sistem custom 8–12 minggu. Timeline dikonfirmasi pas kickoff, bukan diperkirakan di tengah jalan.",
        },
        {
          question: "Proses kerjanya gimana?",
          answer:
            "Kita mulai dengan discovery call, terus bangun dalam sprint mingguan biar kamu selalu tahu progress-nya. Setelah launch, kita tetap standby 30 hari buat mastiin semuanya berjalan beneran.",
        },
        {
          question: "Kalau scope-nya berubah di tengah jalan gimana?",
          answer:
            "Kita evaluasi ulang dan sesuaikan kalau perlu. Perubahan kecil udah include. Perubahan besar dikomunikasikan dulu sebelum lanjut — nggak ada surprise dari dua sisi.",
        },
        {
          question: "Ada support setelah proyek selesai?",
          answer:
            "Semua proyek udah include 30 hari support pasca-launch. Setelahnya, kamu bisa pilih retainer bulanan atau bayar per request. Nggak ada lock-in — semua milik kamu.",
        },
      ],
    },
    contact: {
      heading: "Yuk, kita cari tahu dulu yang kamu butuhkan",
      subheading:
        "Ceritain apa yang lagi kamu kerjain. Kita akan jujur soal apakah kita cocok — dan apa yang dibutuhkan untuk mulai.",
      namePlaceholder: "Nama kamu",
      nameLabel: "Nama",
      emailLabel: "Email",
      emailPlaceholder: "email@kamu.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritain tentang project kamu...",
      cta: "Kirim Pesan",
    },
    footer: {
      contact: "Kontak",
      navigation: "Navigasi",
      links: {
        email: "Email",
        linkedin: "LinkedIn",
        threads: "Threads",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      nav: {
        project: "Proyek",
        about: "Tentang",
        services: "Layanan",
        question: "Pertanyaan",
      },
      comingSoon: "(Segera Hadir)",
      blog: "Blog",
      creativeSpace: "Creative Space",
      studioName: "Monnite Studio",
      // MONNITE-SEO: Footer tagline ID
      studioDesc:
        "Satu studio. Desain, bangun, dan ship — dari awal sampai akhir.",
      location: "Tabanan, Bali, Indonesia.",
      copyright: "©2026 Monnite Studio",
    },
    // MONNITE-SEO: Service page meta tags ID
    serviceMeta: {
      uiux: {
        title: "Studio UI/UX Design Bali — Monnite",
        description:
          "Riset pengguna, alur, dan UI high-fidelity oleh studio desain di Bali yang juga membangun apa yang didesain. End-to-end, tanpa handoff.",
      },
      webDev: {
        title: "Webflow & Web Development Bali — Monnite",
        description:
          "Pengembangan Webflow dan Framer custom oleh Monnite Studio, Tabanan Bali. Build presisi dengan CMS, animasi, dan SEO dari awal.",
      },
      customSoftware: {
        title: "Pengembangan ERP & POS Custom Bali — Monnite",
        description:
          "Software, ERP, dan POS custom untuk F&B, klinik, dan retail di Bali. Dirancang untuk alur kerja nyata — dibangun oleh Monnite Studio, Tabanan.",
      },
    },
  },
};

export type Translations = typeof translations["en"];
export default translations;
