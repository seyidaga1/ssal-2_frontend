"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslations } from "next-intl"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('header')

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="Current Logo" width={100} height={60} className="h-auto" />
            </Link>

            <nav className="flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('home')}
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('about')}
              </Link>
              <Link href="/vacancies" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('vacancies')}
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('services')}
              </Link>
              <Link href="/projects" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('projects')}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Button asChild>
                <Link href="/contact">
                  {t('contact')} <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image src="/logo.png" alt="Current Logo" width={80} height={50} />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Button asChild className="w-full mt-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t('contact')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
