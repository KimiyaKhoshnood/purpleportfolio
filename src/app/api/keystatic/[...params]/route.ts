import { makeRouteHandler } from "@keystatic/next/route-handler"
import config from "../../../../../keystatic.config"
import { adminBlocked } from "@/content/adminAccess"

// makeRouteHandler throws when GitHub mode lacks its env vars, so only
// create it once the admin is actually enabled (otherwise the build fails)
const notFound = () => new Response("Not found", { status: 404 })
const handlers = adminBlocked ? { GET: notFound, POST: notFound } : makeRouteHandler({ config })

export const { GET, POST } = handlers
