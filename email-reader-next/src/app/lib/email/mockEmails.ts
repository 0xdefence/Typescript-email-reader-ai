import type { App, Email } from "./types";

export const app: App = {
    name: "TS Email Reader",
    unReadEmails: 12,
    isLoggedIn: true,
};

export const emails: Email[] = [
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
