// The admin panel only runs in production once the GitHub app credentials
// exist; until then /keystatic and /api/keystatic stay closed. Locally it
// always runs (local storage writes straight to the content/ folder).
export const githubAdminReady = Boolean(
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET &&
    process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
)

export const adminBlocked = process.env.NODE_ENV === "production" && !githubAdminReady
