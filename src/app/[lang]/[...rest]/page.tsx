import { notFound } from "next/navigation";

// Unknown paths land here so the localized not-found page renders inside the [lang] layout.
export default function CatchAll() {
  notFound()
}
