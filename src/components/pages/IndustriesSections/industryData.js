import Mock1 from "../../../assets/Activities.png";
import Mock2 from "../../../assets/Mockup2.png";
import Mock3 from "../../../assets/LeftTiltMockup.png";
import Mock4 from "../../../assets/Mockup.png";

export const industries = [
    {
        id: "ecommerce",
        title: "Building the Future of Digital Payments",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        img: Mock4,

        features: [
            { title: "Secure & Reliable", desc: "Lorem ipsum dolor sit amet.", icon: "shield" },
            { title: "Global Support", desc: "Conse ctetur adipiscing elit.", icon: "globe" },
        ],
    },
    {
        id: "education",
        title: "Empowering Modern Education",
        subtitle: "Collect fees, automate payouts and enhance your institute.",
        img: Mock2,
        features: [
            { title: "Fee Automation", desc: "Auto-collect + reminders.", icon: "university" },
            { title: "Digital Receipts", desc: "Instant secure receipt.", icon: "receipt" },
        ],
    },
    {
        id: "saas",
        title: "Next-Gen Payments for SaaS",
        subtitle: "Smooth recurring billing and subscription management.",
        img: Mock3,
        features: [
            { title: "Subscription Billing", desc: "Automated monthly cycles.", icon: "sync" },
            { title: "Fraud Protection", desc: "Advanced security layer.", icon: "lock" },
        ],
    },
    {
        id: "freelancer",
        title: "Empowering Freelancers Worldwide",
        subtitle: "Get instant payouts and global client support.",
        img: Mock1,
        features: [
            { title: "Instant Payouts", desc: "Real-time settlement.", icon: "bolt" },
            { title: "Global Payments", desc: "Clients pay from anywhere.", icon: "money" },
        ],
    },
];
