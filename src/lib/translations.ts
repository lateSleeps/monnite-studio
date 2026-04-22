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
      cta: "Jadwalkan 15 Menit",
      copyright: "Monnite Studio © 2026",
    },
    hero: {
      heading1: "Kami membangun",
      headingGlitch: "produk digital",
      heading2: "yang tumbuh bersama kamu.",
      subheading:
        "Membangun produk digital yang skalabel bersama bisnismu,\ndari peluncuran pertama hingga skala enterprise.",
      cta: "Jadwalkan 15 Menit",
      whatsapp: "Pesan via WhatsApp",
      brands: [
        "Permintaan tak terbatas",
        "Pengiriman cepat",
        "Designer ahli",
        "Manajemen mudah",
      ],
    },
    services: {
      heading:
        "Kebanyakan agensi bisa desain indah tapi tidak pernah rilis, atau rilis cepat tapi terlihat biasa. Kamu butuh keduanya.",
      subheading: "Kami desain + bangun",
      items: [
        "Sistem perangkat lunak",
        "Sistem desain",
        "Website produk",
        "Strategi merek",
        "E-commerce",
        "Konsultasi",
      ],
    },
    portfolio: {
      categories: [
        {
          title: "Desain produk pertama yang berkesan",
          description:
            "Kamu hanya punya satu kesempatan untuk kesan pertama. Produkmu tidak harus sempurna, tapi harus meyakinkan pengguna bahwa produk itu layak untuk digunakan. Kami membantu tim tahap awal melampaui 'minimum viable' dan menciptakan produk pertama yang benar-benar berkesan.",
          projects: [
            {
              name: "Corner 32",
              description:
                "Website merek untuk kafe bertema kesehatan yang menyasar pekerja remote. Dioptimasi SEO untuk meranking 'kafe workspace sehat Bali' dan mendatangkan pengunjung dari digital nomad.",
            },
            {
              name: "Tenang",
              description:
                "Website untuk spa premium, studio yoga, dan restoran di Ubud. Dibangun untuk menampilkan tiga layanan berbeda dalam satu merek dengan pengalaman pemesanan terpadu.",
            },
          ],
        },
        {
          title: "Wujudkan ulang produk digital ikonik",
          description:
            "Banyak produk digital ikonik yang telah membentuk cara kita hidup dan bekerja. Namun, kebanyakan desain produk berfokus pada yang baru. Kami juga suka meningkatkan yang sudah ada — menjaga apa yang membuatnya istimewa, memikirkan ulang yang rusak secara radikal, dan menambahkan apa yang dibutuhkan untuk sukses di masa depan.",
          projects: [
            {
              name: "Sushi Tei",
              description:
                "Aplikasi point-of-sale kustom untuk jaringan restoran. Menangani transaksi, pelacakan inventaris real-time, dan pemantauan layanan di berbagai lokasi.",
            },
            {
              name: "Fitground",
              description:
                "Sistem end-to-end yang mengelola langganan anggota, penjadwalan pelatih, pemesanan kelas, dan pengawasan multi-lokasi. Memangkas waktu administrasi hingga 60%.",
            },
          ],
        },
        {
          title: "Bentuk merek penantang",
          description:
            "Kami menyukai para penantang. Perusahaan yang mempertanyakan norma dan menghadapi pesaing yang lebih besar. Mereka yang menyerang bukan bertahan. Kami membantu mereka menemukan positioning yang tepat, membangun narasi yang resonan, dan mendesain identitas yang menonjol. Dengan presisi strategis dan imajinasi kreatif.",
          projects: [
            {
              name: "Lenka Studio",
              description:
                "Desain logo untuk agensi desain dan teknologi berbasis Bali yang mengkhususkan diri dalam aplikasi web kustom. Identitas visual dibangun untuk mencerminkan presisi teknis dengan keahlian kreatif.",
            },
            {
              name: "Webstein",
              description:
                "Identitas visual lengkap untuk agensi digital Australia yang berfokus pada pengembangan WordPress dan pemasaran. Termasuk logo, tipografi, palet warna, dan materi kolateral.",
            },
          ],
        },
      ],
      tags: ["Strategi", "Desain UI", "Desain UX", "Pengembangan Perangkat Lunak"],
      tooltip: "Proyek dalam pengerjaan",
    },
    social: {
      heading: "Proyek berkualitas tinggi yang dibangun dengan keunggulan desain",
      cards: [
        {
          title: "Proyek Selesai",
          suffix: undefined,
          description:
            "Dari landing page sederhana hingga platform SaaS kompleks untuk UMKM, startup, & agensi.",
        },
        {
          title: "Rata-rata Pengerjaan",
          suffix: "Minggu",
          description:
            "Kami bekerja dalam sprint terstruktur agar kamu melihat kemajuan nyata setiap minggu, bukan hanya di akhir.",
        },
        {
          title: "Respons Dukungan",
          suffix: "Jam",
          description:
            "Pertanyaan dijawab, bug diperbaiki, perubahan mendesak langsung diterapkan. Kami selalu siap dan di zona waktu yang sama.",
        },
        {
          title: "Tepat Waktu",
          suffix: undefined,
          description:
            "Setiap proyek diselesaikan sesuai jadwal. Kami merencanakan dengan cermat dan berkomunikasi proaktif agar tidak ada yang terlewat.",
        },
      ],
    },
    about: {
      heading: "Kemitraan yang kolaboratif.",
      body1:
        "Kebanyakan agensi bisa desain indah tapi tidak pernah rilis, atau rilis cepat tapi terlihat biasa. Kami membangun Monnite karena lelah harus memilih antara keduanya. Produk hebat butuh keduanya: keahlian dan kecepatan.",
      body2:
        "Proses kami sederhana: minggu pertama memahami masalah, bukan menjual solusi. Membangun dalam sprint mingguan agar kamu melihat kemajuan secara langsung. Rilis dengan 30 hari dukungan karena di situlah kamu belajar apa yang benar-benar berhasil. Tidak ada timeline misterius, tidak ada menghilang setelah selesai — hanya fase yang jelas dan eksekusi berkualitas.",
    },
    qna: {
      heading: "Pertanyaan yang sering kami terima.",
      subheading:
        "Semua yang perlu kamu ketahui tentang bermitra dengan Monnite Studio.",
      faqs: [
        {
          question: "Berapa biaya sebuah proyek?",
          answer:
            "Tergantung lingkup dan kompleksitasnya. Kami menggunakan paket harga tetap, bukan tarif per jam. Jadwalkan panggilan 15 menit dan kami akan memberikan penawaran tepat berdasarkan kebutuhanmu.",
        },
        {
          question: "Berapa lama pengerjaannya?",
          answer:
            "Sebagian besar proyek selesai dalam 4-8 minggu. Website merek 4-6 minggu, e-commerce 6-8 minggu, produk kustom 8-12 minggu. Timeline dikonfirmasi saat kickoff.",
        },
        {
          question: "Bagaimana proses kerjanya?",
          answer:
            "Kami mulai dengan discovery call, lalu membangun dalam sprint mingguan agar kamu tidak pernah bertanya-tanya. Setelah rilis, kami tetap ada selama 30 hari untuk memastikan semuanya berjalan lancar.",
        },
        {
          question: "Bagaimana jika lingkup berubah di tengah jalan?",
          answer:
            "Kami mengevaluasi ulang dan menyesuaikan harga jika perlu. Perubahan kecil sudah termasuk. Perubahan lingkup besar memerlukan amandemen singkat pada timeline dan anggaran. Kami akan selalu memberitahumu sebelum melanjutkan.",
        },
        {
          question: "Apakah ada pemeliharaan setelah proyek selesai?",
          answer:
            "Semua proyek sudah termasuk 30 hari dukungan pasca-rilis. Setelahnya, kamu bisa memilih retainer bulanan atau bayar per permintaan. Tidak ada ketergantungan vendor — kamu memiliki kodenya.",
        },
      ],
    },
    contact: {
      heading: "Mari mulai percakapan",
      subheading:
        "Ceritakan tentang proyek atau idemu. Kami membantu perusahaan mengeksplorasi peluang produk dan membangun produk digital yang benar-benar diinginkan orang.",
      namePlaceholder: "Namamu",
      nameLabel: "Nama",
      emailLabel: "Email",
      emailPlaceholder: "email@kamu.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan tentang proyekmu...",
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
      creativeSpace: "Ruang Kreatif",
      studioName: "Monnite Studio",
      studioDesc:
        "Kami membantu perusahaan mengeksplorasi peluang produk, membangun produk dari nol, atau membawanya ke level berikutnya.",
      location: "Tabanan, Bali, Indonesia.",
      copyright: "©2026 Monnite Studio",
    },
  },
};

export type Translations = typeof translations["en"];
export default translations;
