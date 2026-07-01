import { fetchMockEmails, fetchEmailCards } from "./src/emailService";
import { getEmailsByBucket, getUnreadEmails, getEmailsWithAttachments } from "./src/emailFilters";
import { findFirstEmailByBucket } from "./src/emailFinders";
import { createEmailPreviews, getEmailSubjects } from "./src/emailMappers.ts";

async function main() {
    const fetchedEmails = await fetchMockEmails();

    const jobEmails = getEmailsByBucket(fetchedEmails, "job");
    const newsletterEmails = getEmailsByBucket(fetchedEmails, "newsletter");
    const orderEmails = getEmailsByBucket(fetchedEmails, "order");
    const unreadEmails = getUnreadEmails(fetchedEmails);
    const emailsWithAttachments = getEmailsWithAttachments(fetchedEmails);

    const emailPreviews = createEmailPreviews(fetchedEmails);
    const emailCards = await fetchEmailCards();
    const emailSubjects = getEmailSubjects(fetchedEmails);

    const firstOrderEmail = findFirstEmailByBucket(fetchedEmails, "order");
    const firstPersonalEmail = findFirstEmailByBucket(fetchedEmails, "personal");

    console.log("Job emails:");
    console.log(jobEmails);

    console.log("Newsletter emails:");
    console.log(newsletterEmails);

    console.log("Order emails:");
    console.log(orderEmails);

    console.log("Unread email count:");
    console.log(unreadEmails.length);

    console.log("Emails with attachments:");
    console.log(emailsWithAttachments);

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