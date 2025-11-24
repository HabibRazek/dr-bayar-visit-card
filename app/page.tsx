'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Simple Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
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
                  <a href="tel:29402212" className="text-gray-900 hover:text-blue-900 transition-colors">
                    29 402 212
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
                  <a href="tel:29402212" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">GSM</div>
                      <div>29 402 212</div>
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
