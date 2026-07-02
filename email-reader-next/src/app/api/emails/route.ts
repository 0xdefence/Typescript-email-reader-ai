export async function GET() {
    const isWorking = true;

    if (isWorking) {
    return Response.json({
        success: true,
        message: "Emails route working"
    });
}   else {
    return Response.json({
            success: false,
            message: "Emails route not working, please check API routes!"
        });
    }
}