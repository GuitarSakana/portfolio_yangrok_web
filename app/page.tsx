"use client"

import { useState } from "react"
import ProfileCardGrid from "@/profile-card-grid"
import PortfolioHeader from "@/components/portfolio-header"

export default function Home() {
  const [language, setLanguage] = useState<"KR" | "JP">("KR")

  return (
    <main>
      <PortfolioHeader language={language} />
      <ProfileCardGrid language={language} setLanguage={setLanguage} />
    </main>
  )
}
