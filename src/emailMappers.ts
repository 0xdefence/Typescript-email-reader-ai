import type { Email, EmailCard } from "./types";

export function createEmailPreviews(emails: Email[]): string[] {
    return emails.map((email) => {
        return `${email.from} - ${email.subject}`;
    });
}

export function createEmailCards(emails: Email[]): EmailCard[] {
    return emails.map((email) => {
        return {
            title: email.subject,
            sender: email.from,
            category: email.bucket,
            read: email.isRead,
        };
    });
}

export function getEmailSubjects(emails: Email[]): string[] {
    return emails.map((email) => email.subject);
}