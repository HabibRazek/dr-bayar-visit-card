'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Gradient Circle */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full opacity-40 blur-3xl"></div>

        {/* Bottom Left Gradient Circle */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-30 blur-3xl"></div>

        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-900 shadow-lg">
              <Image
                src="/dr-mourad-bayar.jpg"
                alt="Dr. BAYAR Mourad"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-light text-blue-900 mb-3">
            Dr. BAYAR Mourad
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-4">
            Chirurgien Dentiste
          </p>

          {/* Credentials */}
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Diplômé de l&apos;UFR d&apos;Odontologie de Marseille - France
          </p>
        </div>

        {/* Specialties Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-blue-900 text-center mb-10">
            Spécialités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-blue-900 text-lg font-normal">Prothèse Dentaire</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-sm">
                  Solutions complètes de restauration
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <CardTitle className="text-blue-900 text-lg font-normal">Implantologie Orale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-sm">
                  Implants dentaires de haute qualité
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <CardTitle className="text-blue-900 text-lg font-normal">Chirurgie Parodontale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-sm">
                  Soins des gencives et tissus
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-blue-900 text-center mb-10">
            Informations
          </h2>

          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="pt-6 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Adresse</p>
                  <p className="text-gray-900">
                    111, Av. Hédi nouira - Imm. JASMIN MEDICAL<br />
                    6 ème étage ( en face clinique El Amen )
                  </p>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <a href="tel:72220392" className="text-gray-900 hover:text-blue-900 transition-colors">
                    72 220 392
                  </a>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              {/* Mobile */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">GSM</p>
                  <a href="tel:+21620239567" className="text-gray-900 hover:text-blue-900 transition-colors">
                    +216 20 239 567
                  </a>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/dr.bayar_mourad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-900 transition-colors"
                  >
                    @dr.bayar_mourad
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Me Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="border border-blue-900 bg-blue-50/30">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl font-light text-blue-900">
                Prendre Rendez-vous
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Contactez-moi pour une consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-900 text-white font-normal hover:bg-blue-800 h-14"
                >
                  <a href="tel:72220392" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Téléphone</div>
                      <div>72 220 392</div>
                    </div>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-blue-900 text-white font-normal hover:bg-blue-800 h-14"
                >
                  <a href="tel:+21620239567" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">GSM</div>
                      <div>+216 20 239 567</div>
                    </div>
                  </a>
                </Button>
              </div>

              <Separator className="bg-gray-300 my-6" />

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 h-12"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=111+Av+Hédi+nouira+JASMIN+MEDICAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Voir l&apos;emplacement sur la carte
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dr. Bayar Mourad
          </p>
        </div>
      </div>
    </main>
  );
}
