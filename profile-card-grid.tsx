"use client"

import type React from "react"

import { useState } from "react"
import { Download, Search, X, ArrowUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

type ProfileCardProps = {
  projectName: { KR: string; JP: string }
  projectDate: string
  picture?: { KR: string; JP: string }
  date: string
  skillTag?: string[]
  pdfUrl?: { KR: string; JP: string }
  company: { KR: string; JP: string }
}

const translations = {
  KR: {
    searchPlaceholder: "이름으로 검색...",
    sortNone: "정렬 안함",
    sortOldest: "오래된 순",
    sortNewest: "최신 순",
    modalTitle: "프로젝트 상세보기",
    downloadButton: "다운로드",
  },
  JP: {
    searchPlaceholder: "名前で検索...",
    sortNone: "並び替えなし",
    sortOldest: "古い順",
    sortNewest: "新しい順",
    modalTitle: "プロジェクト詳細",
    downloadButton: "ダウンロード",
  },
}

const profiles: ProfileCardProps[] = [
    {
    projectName: { KR: "Portfilio Gallery", JP: "Portfilio Gallery" },
    projectDate: "2025.11-2025.11",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_9.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_9.png" },
    date: "2025-11-08",
    skillTag: ["V0","TypeScript", "React", "TailwindCSS"],
    pdfUrl: { KR: "/pdfs-kr/Portfolio_어양록_포트폴리오 갤러리.pdf", JP: "/pdfs-jp/Portfolio_魚洋緑_ポートフォリオギャラリー.pdf" },
    company: { KR: "개인 프로젝트", JP: "個人プロジェクト" },
  },
  {
    projectName: { KR: "시스템 운영 자동화", JP: "システム運用自動化" },
    projectDate: "2025.07-2025.12",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_8.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_8.png" },
    date: "2025-07-01",
    skillTag: ["Java", "Spring Boot", "Oracle", "My Batis"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_시스템 운영 자동화(2025.07 ~ 2025.12).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_システム自動化.pdf" },
    company: { KR: "페이페이 카드 / 시스오페 자동화 팀", JP: "P社 / 自動化チーム" },
  },
  {
    projectName: { KR: "기간 시스템 유지보수", JP: "基幹システム保守" },
    projectDate: "2025.01-2025.06",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_7.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_7.png" },
    date: "2025-01-01",
    skillTag: ["Java", "Interfarm", "Oracle", "Shell Script"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_기간 시스템(2025.01 ~ 2025.06).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_基幹システム保守.pdf" },
    company: { KR: "페이페이 카드 / 공통 그룹", JP: "P社 / 共通チーム" },
  },
  {
    projectName: { KR: "범용 데이터 집계 시스템", JP: "汎用データ集計システム" },
    projectDate: "2024.10-2024.12",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_6.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_6.png" },
    date: "2024-10-01",
    skillTag: ["Python", "Django", "PostgreSQL", "Swagger"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_범용 데이터 집계 시스템(2024.10 ~ 2024.12).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_汎用データ集計システム.pdf" },
    company: { KR: "아시아 정보 시스템 / 신규 시스템 개발 팀", JP: "A社 / 新規システム開発チーム" },
  },
  {
    projectName: { KR: "검사치료 워크리스트", JP: "検査治療ワークリスト" },
    projectDate: "2024.02-2024.03",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_5.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_5.png" },
    date: "2024-02-01",
    skillTag: ["Java", "JavaScript", "Oracle", "X-platform"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_검사치료 워크리스트(InternProject).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_検査治療ワークリスト.pdf" },
    company: { KR: "평화이즈 / 인턴", JP: "平和イズ / インターン" },
  },
  {
    projectName: { KR: "항암 프로토콜 마스터", JP: "抗がんプロトコルマスター" },
    projectDate: "2024.01-2024.01",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_4.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_4.png" },
    date: "2024-01-01",
    skillTag: ["Java", "JavaScript", "Oracle", "X-platform"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_항암 프로토콜(InternProject).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_抗癌プロトコルマスター.pdf" },
    company: { KR: "평화이즈 / 인턴", JP: "平和イズ / インターン" },
  },
  {
    projectName: { KR: "Health Note", JP: "Health Note" },
    projectDate: "2023.07-2023.10",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_3.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_3.png" },
    date: "2023-10-01",
    skillTag: ["Java", "JavaScript", "Oracle", "X-platform"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_HealthNote(Capstone Project).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_HealthNote.pdf" },
    company: { KR: "폴리텍 대학 / 졸업 프로젝트", JP: "ポリテク大学 / 卒業プロジェクト" },
  },
  {
    projectName: { KR: "Nagano Planner", JP: "Nagano Planner" },
    projectDate: "2023.02-2023.03",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_2.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_2.png" },
    date: "2023-02-01",
    skillTag: ["Html", "CSS", "JavaScript"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_NaganoPlanner(ToyProject).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_NaganoPlanner.pdf" },
    company: { KR: "개인 프로젝트", JP: "個人プロジェクト" },
  },
  {
    projectName: { KR: "Picture Board", JP: "Picture Board" },
    projectDate: "2023.04-2023.05",
    picture: { KR: "/images/design-mode-pf-pic/pf_pic_1.png", JP: "/images/design-mode-pf-pic-jp/pf_pic_1.png" },
    date: "2023-04-01",
    skillTag: ["Html", "CSS", "JavaScript"],
    pdfUrl: { KR: "/pdfs-kr/PortFolio_어양록_PictureBoard(ToyProject).pdf", JP: "/pdfs-jp/PortFolio_魚洋緑_PictureBoard.pdf" },
    company: { KR: "개인 프로젝트", JP: "個人プロジェクト" },
  },
]
interface ProfileCardGridProps {
  language?: "KR" | "JP"
  setLanguage?: React.Dispatch<React.SetStateAction<"KR" | "JP">>
}

export default function ProfileCardGrid({
  language: propsLanguage,
  setLanguage: propsSetLanguage,
}: ProfileCardGridProps) {
  const [internalLanguage, setInternalLanguage] = useState<"KR" | "JP">("KR")

  // currentLanguage / setCurrentLanguage는 실제로 컴포넌트가 사용하는 값과 setter
  const isControlled = typeof propsLanguage !== "undefined" && typeof propsSetLanguage === "function"
  const currentLanguage = isControlled ? propsLanguage! : internalLanguage
  const setCurrentLanguage = isControlled ? propsSetLanguage! : setInternalLanguage

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null)


  const filteredProfiles = profiles.filter((profile) => {
    let matchesFilter = true

    if (selectedFilter === "2025") {
      const projectYear = new Date(profile.date).getFullYear()
      matchesFilter = projectYear === 2025
    } else if (selectedFilter === "2024") {
      const projectYear = new Date(profile.date).getFullYear()
      matchesFilter = projectYear === 2024
    } else if (selectedFilter === "2023") {
      const projectYear = new Date(profile.date).getFullYear()
      matchesFilter = projectYear === 2023
    }

    const matchesSearch = profile.projectName[currentLanguage].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const sortedProfiles = sortOrder
    ? [...filteredProfiles].sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA
      })
    : filteredProfiles

  const handleSortToggle = () => {
    if (sortOrder === null) {
      setSortOrder("asc")
    } else if (sortOrder === "asc") {
      setSortOrder("desc")
    } else {
      setSortOrder(null)
    }
  }

  const handleOpenPdf = (pdfUrlObj?: { KR: string; JP: string } | null) => {
    if (!pdfUrlObj) return
    const url = pdfUrlObj[currentLanguage]
    setSelectedPdf(url)
}

  const t = translations[currentLanguage]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 pt-12 md:p-8 md:pt-16 relative">
      <div className="mx-auto max-w-6xl">
        <div className="fixed"style={{top: "calc(7.8rem + 2rem)", right: "2rem"}}>
          <button
            onClick={() => setCurrentLanguage(currentLanguage === "KR" ? "JP" : "KR")}
            className="flex rounded-full bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] p-0.5"
          >
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-all",
                currentLanguage === "KR" ? "bg-gray-600 text-white shadow-[2px_2px_4px_rgba(0,0,0,0.2)]" : "text-gray-600",
              )}
            >
              KR
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-all",
                currentLanguage === "JP" ? "bg-gray-600 text-white shadow-[2px_2px_4px_rgba(0,0,0,0.2)]" : "text-gray-600",
              )}
            >
              JP
            </span>
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter(null)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                !selectedFilter
                  ? "bg-white text-gray-800 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]"
                  : "bg-white text-gray-700 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]",
              )}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter("2025")}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                selectedFilter === "2025"
                  ? "bg-white text-blue-600 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]"
                  : "bg-white text-gray-700 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]",
              )}
            >
              2025
            </button>
            <button
              onClick={() => setSelectedFilter("2024")}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                selectedFilter === "2024"
                  ? "bg-white text-blue-600 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]"
                  : "bg-white text-gray-700 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]",
              )}
            >
              2024
            </button>
            <button
              onClick={() => setSelectedFilter("2023")}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                selectedFilter === "2023"
                  ? "bg-white text-blue-600 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]"
                  : "bg-white text-gray-700 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]",
              )}
            >
              2023
            </button>
          </div>
        </div>

        <div className="mb-8 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-gray-700 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSortToggle}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)]",
              sortOrder && "text-blue-600",
            )}
            title={sortOrder === "asc" ? t.sortOldest : sortOrder === "desc" ? t.sortNewest : t.sortNone}
          >
            <ArrowUpDown className={cn("h-5 w-5 transition-transform", sortOrder === "desc" && "rotate-180")} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProfiles.map((profile, index) => (
            <ProfileCard
              key={index}
              {...profile}
              language={currentLanguage}
              onCardClick={() => profile.pdfUrl && handleOpenPdf(profile.pdfUrl)}
            />
          ))}
        </div>
      </div>

      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => {
            setSelectedPdf(null)
          }}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-5xl flex-col rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-800">{t.modalTitle}</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <iframe src={selectedPdf} className="h-full w-full rounded-lg border-0" title="PDF Viewer" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProfileCard({
  projectName,
  projectDate,
  picture,
  skillTag,
  pdfUrl,
  company,
  language,
  onCardClick,
}: ProfileCardProps & { language: "KR" | "JP"; onCardClick?: () => void }) {
  const tagColors = [
    "text-blue-600 bg-blue-50",
    "text-green-600 bg-green-50",
    "text-purple-600 bg-purple-50",
    "text-orange-600 bg-orange-50",
  ]

  const handleDownload = (e: React.MouseEvent) => {
   e.stopPropagation()
    if (!pdfUrl) return
    const url = pdfUrl[language]
    if (!url) return
    const filename = url.split("/").pop() || "download.pdf"
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const t = translations[language]

  return (
    <div
      onClick={onCardClick}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] transition-all duration-300 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] cursor-pointer"
    >
      <div className="relative h-40 p-2">
        <img
          src={picture?.[language] || "/placeholder.svg"}
          alt={projectName[language]}
          className="h-full w-full rounded-2xl object-cover shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 pt-2">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">{projectName[language]}</h3>
          <p className="mt-1 text-sm text-gray-500">{projectDate}</p>
          <p className="mt-1 text-xs text-gray-400">{company[language]}</p>
        </div>

        {skillTag && skillTag.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {skillTag.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  "inline-block rounded-full px-3 py-1 text-xs font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)]",
                  tagColors[index % tagColors.length],
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4">
          <button
            onClick={handleDownload}
            className="w-full rounded-full bg-white py-3 text-sm font-medium text-gray-700 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" />
            <span>{t.downloadButton}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
