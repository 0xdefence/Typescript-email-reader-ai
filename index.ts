// ── Types ──
type App = {
    name: string;
    unReadEmails: number;
    isLoggedIn: boolean;
};

type EmailType = "job" | "personal" | "newsletter" | "order" | "unknown";

type Email = {
    from: string;
    to: string;
    subject: string;
    body: string;
    isRead: boolean;
    timestamp: string;
    bucket: EmailType;
    attachmentUrl?: string;
    summary?: string;
};

type EmailCard = {
    title: string;
    sender: string;
    category: EmailType;
    read: boolean;
};

// ── Data ──
const app: App = {
    name: "TS Email Reader",
    unReadEmails: 12,
    isLoggedIn: true,
};

const emails: Email[] = [
    {
        from: 'gf@gmail.com',
        to: 'eli@gmail.com',
        subject: 're: deplorable',
        body: 'you',
        isRead: true,
        timestamp: '26/8/26',
        bucket: 'job',
        attachmentUrl: "https://example.com/invoice.pdf",
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
        summary: "A short AI newsletter covering the biggest stories of the week.",
    },
];

// ── Helper functions ──

// function to retrieve emails by bucket
function getEmailsByBucket(emails: Email[], bucket: EmailType): Email[] {
    return emails.filter((email) => email.bucket === bucket);
}

// function to retrieve unread emails
function getUnreadEmails(emails: Email[]): Email[] {
    return emails.filter((email) => email.isRead === false);
}

// email preview function + mapping
function createEmailPreviews(emails: Email[]): string[] {
    return emails.map((email) => {
        return `${email.from} - ${email.subject}`;
    });
}

function createEmailCards(emails: Email[]): EmailCard[] {
    return emails.map((email) => {
        return {
            title: email.subject,
            sender: email.from,
            category: email.bucket,
            read: email.isRead,
        };
    });
}

function getEmailSubjects(emails: Email[]): string[] {
    return emails.map((email) => email.subject);
}

function getEmailsWithAttachments(emails: Email[]): Email[] {
    return emails.filter((email) => email.attachmentUrl !== undefined);
}

// find first email matching a bucket
function findFirstEmailByBucket(emails: Email[], bucket: EmailType): Email | undefined {
    return emails.find((email) => email.bucket === bucket);
}

// ── Async functions ──
async function fetchMockEmails(): Promise<Email[]> {
    return emails;
}

async function fetchFirstEmailByBucket(bucket: EmailType): Promise<Email | undefined> {
    return findFirstEmailByBucket(emails, bucket);
}

// ── Entry point ──
async function main() {
    const fetchedEmails = await fetchMockEmails();

    const jobEmails = getEmailsByBucket(fetchedEmails, "job");
    const newsletterEmails = getEmailsByBucket(fetchedEmails, "newsletter");
    const orderEmails = getEmailsByBucket(fetchedEmails, "order");
    const firstOrderEmail = findFirstEmailByBucket(fetchedEmails, "order");
    const firstPersonalEmail = findFirstEmailByBucket(fetchedEmails, "personal");
    const unReadEmails = getUnreadEmails(fetchedEmails);
    const emailPreviews = createEmailPreviews(fetchedEmails);
    const emailCards = createEmailCards(fetchedEmails);
    const emailSubjects = getEmailSubjects(fetchedEmails);
    const emailsWithAttachments = getEmailsWithAttachments(fetchedEmails);

    console.log("App:");
    console.log(app);

    console.log("Job emails:");
    console.log(jobEmails);

    console.log("Newsletter emails:");
    console.log(newsletterEmails);

    console.log("Emails with attachments:");
    console.log(emailsWithAttachments);

    console.log("Order emails:");
    console.log(orderEmails);

    console.log("Unread email count:");
    console.log(unReadEmails.length);

    console.log("Email previews:");
    console.log(emailPreviews);

    console.log("Email cards:");
    console.log(emailCards);

    console.log("Email subjects:");
    console.log(emailSubjects);

    console.log("First order email:");
    console.log(firstOrderEmail);

    console.log("First personal email:");
    if (firstPersonalEmail) {
        console.log(firstPersonalEmail);
    } else {
        console.log("No personal email found.");
    }

    console.log("Email summaries:");
    for (const email of fetchedEmails) {
        if (email.summary) {
            console.log(email.summary);
        } else {
            console.log("No summary yet.");
        }
    }
}

main();
