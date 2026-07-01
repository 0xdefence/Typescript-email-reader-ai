export type app = {
    name: string;
    unReadEmails: number;
    isLoggedIn: boolean;
};

export type EmailType = "job" | "personal" | "newsletter" | "order" | "unknown";

export type Email = {
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

export type EmailCard = {
    title: string;
    sender: string;
    category: EmailType;
    read: boolean;
};