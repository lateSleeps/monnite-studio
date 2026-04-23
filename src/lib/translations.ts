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
    hero: {
      heading1: "We build",
      headingGlitch: "digital products",
      heading2: "that grow as you do.",
      subheading:
        "Building digital products that scale with your business,\nfrom first launch to enterprise level.",
      cta: "Book a 15 min Call",
      whatsapp: "Message via WhatsApp",
      brands: [
        "Unlimited request",
        "Fast Delivery",
        "Expert Designer",
        "Easy Management",
      ],
    },
    services: {
      heading:
        "Most agencies either design beautifully but never ship, or ship fast but look generic. You need both.",
      subheading: "We design + build",
      selectService: "Select Service",
      items: [
        "Software systems",
        "Design system",
        "Product websites",
        "Brand strategies",
        "E-commerce",
        "Consultation",
      ],
    },
    portfolio: {
      categories: [
        {
          title: "Design memorable first products",
          description:
            "You only have one shot for a first impression. Your product doesn't have to be perfect, but it must convince users it's worth sticking around for. We help early-stage teams go beyond 'minimum viable' and create first products that truly leave a mark.",
          projects: [
            {
              name: "Corner 32",
              description:
                "Brand website for a health-focused café targeting remote workers. SEO-optimized to rank for 'healthy workspace café Bali' and drive foot traffic from digital nomads.",
            },
            {
              name: "Tenang",
              description:
                "Website for Ubud's premium spa, yoga studio, and restaurant. Built to showcase three distinct services under one brand with a unified booking experience.",
            },
          ],
        },
        {
          title: "Reinvent iconic digital products",
          description:
            "Countless iconic digital products have shaped how we live and work. Yet, most product design focuses on the new. We also love to elevate what already exists — preserve what makes it special, radically rethink what's broken and add what's needed to succeed in the future.",
          projects: [
            {
              name: "Sushi Tei",
              description:
                "Custom point-of-sale application for restaurant chain. Handles transactions, real-time inventory tracking, and service monitoring across multiple locations.",
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
            "We love challengers. Companies that question the norm and take on bigger competitors. Those who attack rather than defend. We help them nail their positioning, craft narratives that resonate, and design identities that stand out without being off. With strategic precision and creative imagination.",
          projects: [
            {
              name: "Lenka Studio",
              description:
                "Logo design for a Bali-based design and technology agency specializing in custom web applications. Visual identity built to reflect technical precision with creative craft.",
            },
            {
              name: "Webstein",
              description:
                "Complete visual identity for an Australian digital agency focused on WordPress development and marketing. Includes logo, typography, color palette, and collateral.",
            },
          ],
        },
      ],
      tags: ["Strategy", "UI Design", "UX Design", "Software Development"],
      tooltip: "Project WIP",
    },
    social: {
      heading: "Expertly crafted projects built with design excellence",
      cards: [
        {
          title: "Projects Delivered",
          suffix: undefined,
          description:
            "From simple landing pages to complex SaaS platforms across UMKM, startups & agencies.",
        },
        {
          title: "Average Delivery",
          suffix: "Weeks",
          description:
            "We work in focused sprints so you see real progress every week, not just at the end.",
        },
        {
          title: "Support Response",
          suffix: "Hours",
          description:
            "Questions answered, bugs fixed, urgent changes deployed. We're in your timezone and always available.",
        },
        {
          title: "On-Time Delivery",
          suffix: undefined,
          description:
            "Every project delivered on schedule. We plan carefully and communicate proactively so nothing slips.",
        },
      ],
    },
    about: {
      heading: "A collaborative partnership.",
      body1:
        "Most agencies either design beautifully but never launch, or ship fast but look generic. We built Monnite because we were tired of choosing between the two. Great products need both craft and speed.",
      body2:
        "Our process is simple: spend week one understanding the problem, not pitching solutions. Build in weekly sprints so you see progress in real time. Launch with 30 days of support because that's when you learn what actually works. No mystery timelines, no disappearing after handoff, just clear phases and quality execution.",
    },
    qna: {
      heading: "Questions we often get.",
      subheading:
        "Everything you need to know about partnering with Monnite Studio.",
      faqs: [
        {
          question: "How much does a project cost?",
          answer:
            "It depends on scope and complexity. We work with fixed-price packages, not hourly rates. Book a 15-min call and we'll give you an exact quote based on your needs.",
        },
        {
          question: "How long does it take?",
          answer:
            "Most projects ship in 4-8 weeks. Brand websites take 4-6 weeks, e-commerce 6-8 weeks, custom products 8-12 weeks. Timeline confirmed during kickoff.",
        },
        {
          question: "How does the process work?",
          answer:
            "We kick off with a discovery call, then build in weekly sprints so you're never left guessing. After launch, we stick around for 30 days to make sure everything runs smooth.",
        },
        {
          question: "What if the scope needs to change midway?",
          answer:
            "We reassess and adjust pricing if needed. Small tweaks are included. Major scope changes require a brief amendment to timeline and budget. We keep you in the loop before proceeding.",
        },
        {
          question: "Is there maintenance after the project?",
          answer:
            "All projects include 30 days of post-launch support. After that, you can opt for a monthly retainer or pay per request. No vendor lock-in — you own the code.",
        },
      ],
    },
    contact: {
      heading: "Let's start a conversation",
      subheading:
        "Tell us about your project or idea. We help companies explore product opportunities and build digital products people actually want to use.",
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
      studioDesc:
        "We help companies explore product opportunities, build products from scratch or elevate them to new levels.",
      location: "Tabanan, Bali, Indonesia.",
      copyright: "©2026 Monnite Studio",
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
    hero: {
      heading1: "Kita bangun",
      headingGlitch: "produk digital",
      heading2: "yang ikut tumbuh sama kamu.",
      subheading:
        "Produk digital yang scale bareng bisnis kamu,\ndari hari pertama launch sampai skala enterprise.",
      cta: "Ngobrol 15 Menit",
      whatsapp: "Chat via WhatsApp",
      brands: [
        "Request tak terbatas",
        "Delivery cepat",
        "Designer berpengalaman",
        "Gampang dikelola",
      ],
    },
    services: {
      heading:
        "Kebanyakan agency bisa bikin desain bagus tapi nggak pernah rilis, atau rilis cepat tapi tampilannya generik. Kamu butuh keduanya.",
      subheading: "Kita desain + bangun",
      selectService: "Pilih Layanan",
      items: [
        "Sistem perangkat lunak",
        "Design system",
        "Website produk",
        "Brand strategy",
        "E-commerce",
        "Konsultasi",
      ],
    },
    portfolio: {
      categories: [
        {
          title: "Bikin produk pertama yang nggak terlupakan",
          description:
            "Kesan pertama cuma ada satu kali. Produkmu nggak harus sempurna, tapi harus bisa bikin orang mau balik lagi. Kita bantu tim early-stage buat nggak cuma sekadar 'minimum viable' — tapi bikin produk yang beneran ninggalin kesan.",
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
          title: "Revamp produk digital yang udah ikonik",
          description:
            "Banyak produk digital ikonik yang udah ngebentuk cara kita hidup dan kerja. Tapi kebanyakan orang cuma fokus bikin yang baru. Kita juga suka upgrade yang udah ada — jagain apa yang bikin dia spesial, beresin yang rusak, dan nambahin apa yang dibutuhkan buat tetap relevan.",
          projects: [
            {
              name: "Sushi Tei",
              description:
                "Aplikasi kasir custom untuk jaringan restoran. Urus transaksi, pantau stok real-time, dan monitor layanan di banyak cabang sekaligus.",
            },
            {
              name: "Fitground",
              description:
                "Sistem lengkap untuk kelola langganan member, jadwal trainer, booking kelas, dan pantau banyak lokasi. Admin time-nya kepotong 60%.",
            },
          ],
        },
        {
          title: "Bantu merek penantang jadi yang terdepan",
          description:
            "Kita suka sama yang berani nantang. Perusahaan yang berani mempertanyakan norma dan ngambil risiko lawan kompetitor yang lebih besar. Kita bantu mereka nemuin positioning yang pas, bangun cerita yang nyambung, dan desain identitas yang nggak gampang dilupain.",
          projects: [
            {
              name: "Lenka Studio",
              description:
                "Desain logo untuk agency desain dan teknologi di Bali yang spesialis bikin web app custom. Visual identity-nya dibangun buat nyerminkan ketepatan teknis sekaligus sentuhan kreatif.",
            },
            {
              name: "Webstein",
              description:
                "Visual identity lengkap untuk digital agency asal Australia yang fokus di WordPress dan marketing. Meliputi logo, tipografi, palet warna, dan materi kolateral.",
            },
          ],
        },
      ],
      tags: ["Strategi", "UI Design", "UX Design", "Software Development"],
      tooltip: "Proyek dalam pengerjaan",
    },
    social: {
      heading: "Proyek-proyek yang digarap serius dengan standar desain yang tinggi",
      cards: [
        {
          title: "Proyek Selesai",
          suffix: undefined,
          description:
            "Dari landing page simpel sampai platform SaaS yang kompleks — buat UMKM, startup, dan agency.",
        },
        {
          title: "Rata-rata Pengerjaan",
          suffix: "Minggu",
          description:
            "Kita kerja dalam sprint yang terstruktur, jadi kamu bisa lihat progress nyata tiap minggu — bukan cuma di akhir.",
        },
        {
          title: "Respons Support",
          suffix: "Jam",
          description:
            "Pertanyaan langsung dijawab, bug langsung dibenerin, perubahan urgent langsung dieksekusi. Kita siap dan ada di timezone yang sama.",
        },
        {
          title: "Tepat Waktu",
          suffix: undefined,
          description:
            "Semua proyek selesai sesuai jadwal. Kita plan dengan matang dan selalu update progress, biar nggak ada yang kelewat.",
        },
      ],
    },
    about: {
      heading: "Kolaborasi yang beneran kerja.",
      body1:
        "Kebanyakan agency bisa bikin desain yang indah tapi nggak pernah launch, atau launch cepat tapi tampilannya generik. Kita bangun Monnite karena udah capek harus milih salah satu. Produk yang bagus butuh keduanya — keahlian dan kecepatan.",
      body2:
        "Prosesnya simpel: minggu pertama kita pahami dulu masalahnya, bukan langsung jualan solusi. Kita bangun dalam sprint mingguan biar kamu bisa lihat progress secara real time. Launch dengan 30 hari support, karena di situlah hal-hal yang beneran penting mulai keliatan. Nggak ada timeline yang misterius, nggak ada menghilang setelah selesai — cuma fase yang jelas dan eksekusi yang beneran.",
    },
    qna: {
      heading: "Yang sering orang tanyain ke kita.",
      subheading:
        "Semua yang perlu kamu tau sebelum mulai kerja sama Monnite Studio.",
      faqs: [
        {
          question: "Berapa harga sebuah proyek?",
          answer:
            "Tergantung scope dan kompleksitasnya. Kita pakai paket harga tetap, bukan tarif per jam. Book call 15 menit dan kita kasih penawaran yang pas buat kebutuhanmu.",
        },
        {
          question: "Berapa lama prosesnya?",
          answer:
            "Kebanyakan proyek selesai dalam 4-8 minggu. Website brand 4-6 minggu, e-commerce 6-8 minggu, produk custom 8-12 minggu. Timeline dikonfirmasi pas kickoff.",
        },
        {
          question: "Proses kerjanya gimana?",
          answer:
            "Kita mulai dengan discovery call, terus bangun dalam sprint mingguan biar kamu nggak pernah bingung progress-nya sampai mana. Setelah launch, kita tetap standby 30 hari buat mastiin semuanya berjalan lancar.",
        },
        {
          question: "Kalau scope-nya berubah di tengah jalan gimana?",
          answer:
            "Kita evaluasi ulang dan sesuaikan harga kalau perlu. Perubahan kecil udah include. Kalau scope-nya berubah besar, kita bicarain dulu sebelum lanjut — nggak ada surprise.",
        },
        {
          question: "Ada maintenance setelah proyek selesai?",
          answer:
            "Semua proyek udah include 30 hari support pasca-launch. Setelahnya, kamu bisa pilih retainer bulanan atau bayar per request. Nggak ada vendor lock-in — kodenya milik kamu.",
        },
      ],
    },
    contact: {
      heading: "Yuk, kita ngobrol dulu",
      subheading:
        "Ceritain project atau ide kamu. Kita bantu explore peluang produk dan bangun yang beneran dibutuhin orang.",
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
      studioDesc:
        "Kita bantu perusahaan explore peluang produk, bangun dari nol, atau bawa ke level berikutnya.",
      location: "Tabanan, Bali, Indonesia.",
      copyright: "©2026 Monnite Studio",
    },
  },
};

export type Translations = typeof translations["en"];
export default translations;
