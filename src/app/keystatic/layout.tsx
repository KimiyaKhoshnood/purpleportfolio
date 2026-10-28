import type { Metadata } from "next"
import KeystaticApp from "./keystatic"
import { adminBlocked } from "@/content/adminAccess"

// The admin panel is its own root layout, separate from the [lang] site
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

export default function KeystaticLayout() {
  return (
    <html lang="en">
      <body>
        {adminBlocked
          ? <p style={{ fontFamily: "system-ui", padding: 40 }}>The admin panel is not set up on this deployment yet.</p>
          : <KeystaticApp />}
      </body>
    </html>
  )
}
