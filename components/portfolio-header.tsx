import { Github, Mail } from "lucide-react"
import { SiNotion } from "react-icons/si"

const translations = {
  KR: {
    subtitle: "함께 일하고 싶은 개발자",
    title: "어양록의 PortFolio",
    description: "프로젝트로 이야기하는 개발 여정",
    github: "Visit Yangrok's GitHub",
    resume: "View Yangrok's Resume",
    notionUrl: "https://slender-eris-078.notion.site/26eb782e585c81939902d556e63ed9ce"
  },
  JP: {
    subtitle: "共に働きたい開発者",
    title: "オ ヤンロクのPortFolio",
    description: "プロジェクトで語る開発の旅",
    github: "YangrokのGitHubを見る",
    resume: "Yangrokの履歴書を見る",
    notionUrl: "https://slender-eris-078.notion.site/2a1b782e585c81bc9669e025cd40260a"
  },
}

interface PortfolioHeaderProps {
  language: "KR" | "JP"
}

export default function PortfolioHeader({ language }: PortfolioHeaderProps) {
  const t = translations[language]

  return (
    <header className="bg-white px-4 py-6 shadow-sm md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          {/* Left side: Profile and text */}
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-200 shadow-md md:h-20 md:w-20">
              <img src="/images/design-mode/myface.jpg" alt="GuitarFish" className="h-full w-full object-cover" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 md:text-base">{t.subtitle}</p>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">{t.title}</h1>
              <p className="text-xs text-gray-500 md:text-sm">{t.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {/* Email Link */}
            <a
              href="mailto:yangrokauh@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">yangrokauh@gmail.com</span>
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/GuitarSakana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">{t.github}</span>
            </a>

            {/* Notion Link */}
            <a
              href={t.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              <SiNotion className="h-5 w-5" />
              <span className="hidden sm:inline">{t.resume}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
