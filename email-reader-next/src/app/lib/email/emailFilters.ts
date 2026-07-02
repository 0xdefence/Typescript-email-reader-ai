import type { EmailType, Email } from "./types";

export function getEmailsByBucket(emails: Email[], bucket: EmailType): Email[] {
    return emails.filter((email) => email.bucket === bucket);
}

export function getUnreadEmails(emails: Email[]): Email[] {
    return emails.filter((email) => email.isRead === false);
}
export function getEmailsWithAttachments(emails: Email[]): Email[] {
    return emails.filter((email) => email.attachmentUrl !== undefined);
}