// defining type shape
type App = {
    name: string;
    unReadEmails: number;
    isLoggedIn: boolean;
}

type EmailType = "job" | "personal" | "newsletter" | "order" | "unknown";

type Email = {
    from: string;
    to: string;
    subject: string;
    body: string;
    isRead: boolean;
    timestamp: string; 
    bucket: EmailType;
}

// defining app shape
const app : App = {
    name: "TS Email Reader",
    unReadEmails: 12,
    isLoggedIn: true,
};

const emails : Email[] = [
{
    from: 'gf@gmail.com',
    to: 'eli@gmail.com',
    subject: 're: deplorable',
    body: 'you',
    isRead: true,
    timestamp: '26/8/26',
    bucket: 'job',
},
{
    from: "amazon@example.com",
    to: "eli@gmail.com",
    subject: "Your order has shipped",
    body: "Your package is on the way.",
    isRead: false,
    timestamp: "2026-06-28",
    bucket: "order",
},
{
    from: "newsletter@example.com",
    to: "eli@gmail.com",
    subject: "This week in AI",
    body: "Here are the biggest AI stories this week.",
    isRead: true,
    timestamp: "2026-06-27",
    bucket: "newsletter",
},
];

// function to retrieve emails by bucket
function getEmailsbyBucket(emails: Email[], bucket: EmailType): Email[] {
    return emails.filter((email) => email.bucket === bucket);
}

// filter to apply
const jobEmails = emails.filter((email) => email.bucket === "job");
const newsletterEmails = emails.filter((email) => email.bucket === "newsletter");
const unReadEmails = emails.filter((email) => email.isRead === false);

// printing app values
console.log ("Job emails:");
console.log(jobEmails);

console.log ("Newsletter emails:");
console.log(newsletterEmails);

console.log("Unread emails:");
console.log(unReadEmails);