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
        title: "A Better Impact",
        description: `|ReactJS| platform for influencers to connect with climate-conscious brands and promote |sustainable products|.Uses |Supabase|
        for database management and authentication, and |BackBlaze| for secure file storage.Implemented |TikTok| and |Instagram| API to fetch creators'
        most recent statistics for brands and even other creators to view. Created a |beautifully modern| interface for users to easily navigate
        and connect with brands`,
        inprogress: false,
        link1: "https://abimpact.co",
    },
    {
        picture: motivationImage,
        title: "LND's Motivational Media",
        description:
            "|Social Media App| for people to view and share motivational quotes with those across the world.Utilizes Firebase Authentication, Firestore, and Cloud Storage.Built on |React Native|.Allows user to choose an |emotion| and a |song| associated with their quote.|Collaborative| project",
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
            "|ReactJS| site that includes several tabs displaying information.On-site |E-invite creation| for Prestigious Gaming on Wheels Plus, a mobile gaming truck business. Integration of a |web-scraping review widget| I built to scan for Yelp and Google reviews using Puppeteer and NodeJS",
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

export const experiences = [
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
