import { fetchMockEmails } from "@/app/lib/email/emailService";

export async function GET() {
    const emails = await fetchMockEmails();

    if (emails.length > 0) {
    return Response.json({
        success: true,
        message: "Emails found",
        data: emails,
    });
}   else {
    return Response.json({
            success: false,
            message: "No emails found!",
            data: [],
        });
    }
}