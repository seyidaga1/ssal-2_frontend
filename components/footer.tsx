'use client'

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <Image
              src="/logo.png"
              alt="Current Logo"
              width={100}
              height={60}
              className="mb-4 brightness-0 invert"
            />
            <p className="mb-6 text-sm">
              {t('description')}
            </p>
            <div className="flex gap-3">
              <Link href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">Electricity service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Air Conditioning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Electrical Panels
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Security System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Indoor Lighting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Electrical Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">{t('quickLinksTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-4">{t('contactTitle')}</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+880123456789" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>+994 55 202 71 82</span>
                </a>
              </li>
              <li>
                <a href="tel:+880123456789" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>+994 12 526 02 30</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@mail.com" className="flex items-start gap-3 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>sales@ssal-2.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start gap-3 hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Xəlil Rza Ulutürk küç. 2005, Bakı. (Həştərxan İş Mərkəzi)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
