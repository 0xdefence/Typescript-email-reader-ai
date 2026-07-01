import type { EmailType, Email } from "./types";

export function findFirstEmailByBucket(emails: Email[], bucket: EmailType): Email | undefined {
    return emails.find((email) => email.bucket === bucket);
}