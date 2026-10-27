import aaaImage from "./assets/images/aaa.webp";
import truckImage from "./assets/images/truck.png";
import boofyImage from "./assets/images/boofysupply.jpg";
import portcalcImage from "./assets/images/PortCalc.jpeg";
import motivationImage from "./assets/images/motivation.jpg";
import AceWiseImage from "./assets/images/Acewise.png";
import PGOWPImage from "./assets/images/PrestigiousPoster.jpg";
import MobuImage from "./assets/images/mobulogowbackground.png";

export const projects = [
    // picture, Title, Description and Link
    {
        picture: "https://i.ibb.co/vQk5rLp/mainimage.jpg",
        title: "widgie",
        description: `|React| platform that makes displaying reviews and testimonials on a business owner's website |easy| and |customizable|
        .Utilizes |Supabase| for database management and authentication.Implemented |Stripe| for subscription payments.Efficiently scrapes reviews from |Google|
        and |Yelp| using |Puppeteer| and |NodeJS|`,
        link1: "https://widgie.vip",
    },
    {
        title: "Infinite Academics Platform",
        description:
            "|Full stack| operations platform for Infinite Academics, the tutoring company I teach for.|React 19| and |Vite| frontend backed by an |Express 5| API and |PostgreSQL| through |Drizzle ORM|, with typed clients generated from an |OpenAPI| spec.Weekly |4R Scorecard| (Reviews, Referrals, Retention, Revenue) and utilization dashboards for tutors and managers.|Family portal|, online courses, in-app messaging, and a companion |mobile app|.Read-only |Square| bookings import and |Clerk| staff approval with an audit trail",
        inprogress: true,
    },
    {
        title: "Fishers of Men",
        description:
            "|React Native| app built with |Expo| for finding nearby churches and joining a home church community.Members share |prayer requests| and encouragement in each church's feed.|Supabase| backend with Postgres |row level security|, auth, storage, and |realtime| updates.Church directory imported from |OpenStreetMap| data.Church staff can |claim and verify| their listing, with moderation tools and report emails sent from a |Supabase Edge Function|",
        inprogress: true,
    },
    {
        title: "Baked Goods by Daniel",
        description:
            "|NextJS| and |React 19| site for a home bakery.Scrolling |marquee menu| and a featured dish showcase.Styled with |Tailwind CSS 4| and |React Bootstrap|.Social links so customers can follow the bakery",
        link1: "https://bakedgoodsbydaniel.vercel.app",
        inprogress: false,
    },
    {
        title: "A Better Impact",
        description: `|ReactJS| platform for influencers to connect with climate-conscious brands and promote |sustainable products|.Uses |Supabase|
        for database management and authentication, and |BackBlaze| for secure file storage.Implemented |TikTok| and |Instagram| API to fetch creators'
        most recent statistics for brands and even other creators to view. Created a |beautifully modern| interface for users to easily navigate
        and connect with brands`,
        inprogress: false,
    },
    {
        picture: motivationImage,
        title: "LND's Motivational Media",
        description:
            "|Social Media App| for people to view and share motivational quotes with those across the world.Utilizes Firebase Authentication, Firestore, and Cloud Storage.Built on |React Native|.Allows user to choose an |emotion| and a |song| associated with their quote.|Light and dark mode| across the app.|Collaborative| project",
        inprogress: true,
        sourceCode: "https://github.com/nathanuel0322/quotesapp",
    },
    {
        picture: aaaImage,
        title: "AAA Maintenance Solutions",
        description:
            "|React Native App| aimed to simplify the process of clocking in and out for workers.Enables |scheduling and viewing| of worker hours for management.Streamlines |worker time tracking| and management processes",
        link1: "https://apps.apple.com/us/app/aaa-maintenance-solutions/id6443511975",
        link2: "http://play.google.com/store/apps/details?id=com.aaa.aaamaintenance",
        inprogress: false,
        sourceCode: "https://github.com/nathanuel0322/aaa",
    },
    {
        picture: PGOWPImage,
        title: "Prestigious Gaming on Wheels Plus",
        description:
            "|ReactJS| site for Prestigious Gaming on Wheels Plus, a mobile gaming truck business, deployed on |Cloudflare Pages|.Built-in |online booking| with open-time scheduling, add-ons, and |Stripe| deposits, replacing a third-party booking service.Bookings stored in |Cloudflare D1| with a password-protected admin page to approve or decline requests, automatic deposit refunds, and a subscribable |calendar feed|.In-browser |birthday e-invite| generation and a contact form protected by |Cloudflare Turnstile|.|SEO prerendering| and a web-scraping review widget that pulls Yelp and Google reviews",
        link1: "https://www.prestigiousgamingonwheelsplus.com/",
        inprogress: false,
        sourceCode: "https://github.com/nathanuel0322/pgowp",
    },
    {
        picture: truckImage,
        title: "San Francisco Food Trucks",
        description:
            "|ReactJS| site that displays a list of food trucks in San Francisco, using data from the |San Francisco Data API|.Includes a search bar that filters the list of food trucks based on the user's input.|Light and dark mode| for user preference.Clean linear gradients for |modern look|.|Smooth animations| for truck information display",
        link1: "https://foodtruckmap.pages.dev/",
        inprogress: false,
        sourceCode: "https://github.com/nathanuel0322/foodtruckmap",
    },
    {
        title: "Support BPCC",
        description:
            "|ReactJS| site, built on |ViteJS|, for the |Boro Pregnancy Counseling Center|, a nonprofit in Queens, New York serving families facing unplanned pregnancy since 1989.|Multilingual| content across English, Spanish, and Chinese.Dedicated |donate| and |get involved| flows for financial gifts, in-kind items, and volunteering.|Impact| and client-story pages that surface the organization's yearly numbers",
        link1: "https://www.supportbpcc.org/",
        inprogress: false,
    },
    {
        picture: boofyImage,
        title: "Boofy Supply",
        description:
            "|HTML/CSS/JS| integrated into Wix for |clean and modern UI| design.Hover styles for buttons and links to improve user experience.Added contact form for customer inquiries and feedback.Various ways to contact the business, including phone number, email, and social media links",
        link1: "https://www.boofysupplyllc.com/",
        inprogress: false,
    },
    {
        picture: portcalcImage,
        title: "NCP's Portfolio Calculator",
        description:
            "ReactJS site, built on |ViteJS|, using |TailwindCSS| for styling, that calculates the value of a portfolio based on the user's input of stock symbols, their respective allocations, the start date, and the end date.Uses the |AlphaVantage API| to fetch stock data and calculate the value of the portfolio.Integrated |Firebase| for user authentication and storage of user's previous searches.Applied |Recharts| to seamlessly display a pie chart and line chart of the portfolio's value over time.Allows user to view |past searches| and view the results of those searches",
        link1: "https://portfolio-calculator.pages.dev",
        inprogress: false,
        sourceCode: "https://github.com/nathanuel0322/Portfolio-Calculator",
    },
];

interface HomelabProject {
    picture?: string;
    title: string;
    description: string;
    link1?: string;
    inprogress: boolean;
    sourceCode?: string;
}

export const homelabProjects: HomelabProject[] = [
    {
        picture: "https://brands.home-assistant.io/_/proxmoxve/logo@2x.png",
        title: "Proxmox VE Cluster",
        description:
            "|Proxmox VE| hypervisor cluster spanning |5 nodes| built from repurposed laptops and desktops, the foundation of my homelab.Hosts |LXC containers| and |VMs| for every service, provisioned largely with |community helper scripts|.|Proxmox Backup Server| runs nightly snapshot backups with retention and scheduled verification.Manages |resource limits|, |quorum|, and isolation between services across the cluster",
        sourceCode: "https://community-scripts.github.io/ProxmoxVE/",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/homeassistant/logo@2x.png",
        title: "Home Assistant",
        description:
            "|Home Assistant OS| running as a VM on the |Proxmox| cluster, orchestrating |980+ entities| across |50+ integrations|.Zigbee devices through a |ZHA| coordinator, plus |Matter| and |Thread| support.Connects |TP-Link Kasa|, |Philips Hue|, |Tuya|, |Broadlink| IR, |ESPHome|, Apple TV, LG webOS, AV receivers, |Ring|, and a |Bambu Lab| 3D printer.Custom |Jinja template| sensors, |history stats|, and several room-specific |dashboards|.Extended with |HACS|, and exposed to |Claude| through the |Model Context Protocol| server integration for natural-language control",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/ollama/logo@2x.png",
        title: "Local AI Inference Server",
        description:
            "|Ollama| serving a local LLM on a dedicated |GPU-equipped| node for private, fully offline AI tasks.|Whisper| speech-to-text and |Piper| text-to-speech power a local voice pipeline with no cloud round trip.A custom |speaker identification| model recognizes who is talking before acting on a voice command.Feeds |Home Assistant|'s voice assistant and an AI-generated doorbell description, keeping audio and video off the cloud",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/frigate/logo@2x.png",
        title: "Frigate NVR",
        description:
            "|Frigate| running in an LXC container with |iGPU-accelerated| object detection for real-time camera analysis.Face recognition identifies known people at the front door and feeds the AI doorbell notification pipeline.Tuned detection zones and motion masks to cut down false positives from weather, headlights, and passing cars",
        inprogress: false,
    },
    {
        title: "Jarvis Voice Assistant Robot",
        description:
            "A |Raspberry Pi|-based robot with wake-word detection, |APA102 LEDs|, and a fully local speech pipeline for hands-free control of the smart home.|Speaker identification| gates sensitive actions, like unlocking a door, behind a recognized voice and a spoken confirmation.Integrates with |Claude| for natural-language conversation, home status reports, and spoken announcements.Built end to end: SBC provisioning, voice hardware, and the control software running on it",
        inprogress: true,
    },
    {
        picture: "https://brands.home-assistant.io/_/immich/logo@2x.png",
        title: "Self-Hosted Photos & Files",
        description:
            "|Immich| photo library and |Seafile| file sync running in a dedicated VM, replacing cloud photo storage for the whole family.Backed by a |2 TB| disk with nightly file-level backups.Desktop and mobile sync clients reach it remotely over |Tailscale|",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/cloudflare/logo@2x.png",
        title: "Cloudflare Tunnel",
        description:
            "|Cloudflare Tunnel| running in an |LXC container| on Proxmox for |secure remote access| to homelab services |without opening any ports| on the router.Requests are proxied through |Cloudflare| with |DNS| and |access policies| managed from the Cloudflare dashboard",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/tailscale/logo@2x.png",
        title: "Tailscale Mesh VPN",
        description:
            "|Tailscale| connects every node in the cluster over an encrypted mesh for secure remote administration from anywhere.Runs alongside the Cloudflare Tunnel for family-facing services, with no ports ever forwarded on the router",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/adguard/logo@2x.png",
        title: "AdGuard Home",
        description:
            "|AdGuard Home| running in an |LXC container| on Proxmox, installed with a community helper script.Serves |DNS| to opted-in devices with |filter lists| for ad and tracker blocking",
        sourceCode: "https://community-scripts.github.io/ProxmoxVE/scripts?id=adguard",
        inprogress: false,
    },
    {
        picture: "https://brands.home-assistant.io/_/uptime_kuma/logo@2x.png",
        title: "Monitoring & Status Dashboard",
        description:
            "|Uptime Kuma| monitors every service across the cluster with push-based alerting.A |Homepage| dashboard gives an at-a-glance view of the lab and quick links into each service.Alerts route through |Home Assistant| so they land on the devices I actually use",
        inprogress: false,
    },
];

export const experiences = [
    {
        title: "Infinite Academics",
        description: `Tutor |SAT|, |ACT|, and STEM subjects for a roster of |15+ students|, running live sessions over |Zoom| booked
        through |Square Appointments|.Maintain detailed per-student |Notion| logs tracking score history, strengths, gaps, and
        techniques taught, including |Desmos|-based methods for the math section.Build out each student's private |Thinkific| course
        after every session with recordings, homework, and curated practice question sets.Building internal automation tooling that
        turns daily bookings into session-plan checklists and generates Notion recaps and Thinkific chapters from session transcripts`,
        location: "On-site",
        range: "Aug. 2026 - Present",
        role: "Instructor",
    },
    {
        picture: AceWiseImage,
        title: "AceWise",
        description: `Developed an end-to-end web platform helping students from over 15 schools in New York City explore the career path that’s best
        fit for them.Created a user authentication system with |Supabase| Authentication, enabling secure access across multiple devices for
        personalized career guidance features.Implemented real-time notifications and surveys to improve student engagement with instructor updates,
        which resulted in a |73% increase| in student survey completion rate, which allowed instructors to gather valuable feedback from a larger
        portion of the student body`,
        location: "New York, NY",
        range: "Oct. 2023 - Nov. 2024",
        role: "Full Stack Developer",
    },
    {
        picture: MobuImage,
        title: "Mobu",
        description: `Leveraged |React Native| to develop a cross-platform mobile app, following Figma designs and mockups, resulting in a 60%
        reduction in development time compared to native app development.Streamlined mobile app development by utilizing |Firebase|’s backend
        solutions like Cloud Storage, Firestore, and Firebase Authentication, which reduced development time, resources, and cost needed for
        back-end infrastructure.Identified and resolved 17 critical bugs within the mobile app’s architecture, which resulted in an elimination
        of app crashes and a 36% improvement in user satisfaction, as measured by in-app surveys.Conducted a comprehensive performance evaluation
        of the mobile app using automated and manual testing frameworks, which resulted in an 80% improvement in app loading time`,
        location: "Remote",
        range: "Mar. 2022 - Feb. 2023",
        role: "Full Stack Developer",
    },
];
