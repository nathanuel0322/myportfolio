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
        picture:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaoAAAGqCAMAAABtUfDEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjIxQTJERDUwNzk1MTFFOUJENURFMDJGMzI2ODdGQUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjIxQTJERDQwNzk1MTFFOUJENURFMDJGMzI2ODdGQUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzM2QzNDRDAwNzkwMTFFOTlDOUM4NDE0Q0REOEU3OTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzM2QzNDRDEwNzkwMTFFOTlDOUM4NDE0Q0REOEU3OTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6V8aMfAAAAq1BMVEXMzNE6laBDZpRTSZ1eXXAgP1NeXW1eXW9eXW5MSV1JR1paWWtcW25cW21aV2lcW2xcW2scJEVOTWBMS11RTmMQEi4OCyYTGzUYFC4YFy8SFzAfGUIeGzQkHkszMEURDSlHRFgjIDguLEIUEixUUWYcGTMTDi4RECopKD8PDCdFQlY3NElCP1MTECo9PFAmIzpVU2VST2ERDSwRDSsRDScQDiv///8NCiX///93WzqBAAAAOXRSTlP//////////////////////////////////////////////////////////////////////////wA6rGVAAAAVdElEQVR42uzdiXbbthIG4L8pq5VaIiuqFe/77qwl9f5PVjuOY5IiJYAcDGZooOfctreUIuLjACBWrEJSkhCyIFCFFKgCVUiBKqRAFahCClRuUmqYApV0ofaY4T0h6QbD+0PSCob3y6SNC+9aSZUXApMWLgQnLVoITFq4EJy0aCE4adFCcNKihQClBQvBSYsWApQWLAQnLVoIUFqwEJy0aCFAacFCgNKChQClBQsBSgsWApQWLAQoLVgIUFqwEKS0WCFAacFCgNKChQClBQtBSosVApQWLAQpLVYIUFqwEKS0WCFAacFCkNJihQClBQtBSosVApQWLAQpLVYIUlqsEKC0YCFIabFCkNJihQClBQtBSosVgpQWKwQpLVYIUlqsEKC0YCFIabFCkNJihSClxQpBSosVgpQWKwQpLVYIUlqsEKS0WCFIabFCkNJihSClxQpBSosVgpQWKwQpLVYIUlqsEKS0WOFdSN3snlzvpunR2UKxFdovhaeUPKXnvwERtFqh7VKTF6e3hMlIpxVaLlWEegkvlVZ4f1JarVpO1U1K0+hdUYnROLrYP7MLqoqweth9WDy1Fc9+CrWCbqnfrTu8pLWmeIXU0wfWvmn/+Yvw+3+wEGgFzVIoRM1asIxMqTpr3/Qgzgp6pUpKt6KVaVQZfJV/K7RJai2DDalMvsq/lWIqgwaDWQFY0fhoA5XgN6YiggnVwqaZ6NEKYqUuhr/bddH5/Mw0qAoZ3DWhsmgmerWCUKllLmpKHnCQKVRf9EWUlVCqtT5WwKz8o6RKIt1U3trhkVlQUVK57Sp0TeWxHT40aApookrdUrFIDSsaz5nenqvzFlCl+qlgkHNxoJLQ+hsZ5Fx1VPX0UKXuqHik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",
        title: "Triple A Mobile Gaming",
        description:
            "|ReactJS| site designed for a |mobile gaming business| in New Jersey.Features a streamlined slideshow with |fluid pop-up animations|.|Mobile-friendly| design.Created an API connected to |Firebase Storage|, allowing business owners to easily upload new images to their slideshow.Includes a contact form that sends an email to the business owners when a user submits a message, powered by |EmailJS|",
        link1: "http://www.tripleamobilegaming.com/#/",
        inprogress: false,
        sourceCode: "https://github.com/nathanuel0322/TripleATruck",
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
