import type { EmailType, EmailCard, Email } from "./types";
import { emails } from "./mockEmails"
import { findFirstEmailByBucket } from "./emailFinders";
import { createEmailCards } from "./emailMappers";

export async function fetchMockEmails(): Promise<Email[]> {
    return emails;
}

export async function fetchFirstEmailByBucket(bucket: EmailType): Promise<Email | undefined> {
    return findFirstEmailByBucket(emails, bucket);
}

export async function fetchEmailCards(): Promise<EmailCard[]> {
    return createEmailCards(emails);
}