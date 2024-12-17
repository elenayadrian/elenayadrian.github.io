import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bus, Heart, Phone, PartyPopper } from 'lucide-react'
import { TimelineItem } from './components/TimelineItem'
import { HotelCard } from './components/HotelCard'
import { PetCard } from './components/PetCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 space-y-6">
          <h1 className="text-5xl md:text-9xl font-serif text-gray-800" style={{ fontFamily: 'ImperialScript' }}>
            Elena y Adrián
          </h1>
          <p className="text-3xl md:text-3xl font-light text-gray-600">
            Frasecita intensa intro
          </p>
          <p className="text-3xl md:text-3xl font-light text-gray-600">
            ¡Nos casamos!
          </p>
          <p className="text-5xl md:text-7xl font-light text-gray-600" style={{ fontFamily: 'PlayfairDisplay' }}>
            5 | 09 | 2025
          </p>
          <p className="text-lg md:text-xl text-gray-600 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-center">
            <a href="https://g.co/kgs/J7js8C8" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 flex items-center space-x-1">
              <MapPin className="text-rose-600"/>
              <span>Soto de Cerrolen, Madrid</span>
            </a>
            <span>- 19.00h</span>
          </p>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">Confirma tu asistencia</h2>
          <Link
            href="https://forms.gle/WAmEHXbeVCrBsrqz7"
            className="inline-flex h-12 items-center justify-center rounded-md bg-rose-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-700"
          >
            Ir al Formulario
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-no-repeat bg-[url('/img/history.png')] bg-left-bottom">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Nuestra historia</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/img/nosotros.png"
              alt="Couple photo"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-800">Detalles de la Boda</h2>
          <div className="space-y-8">
            <TimelineItem
              icon={<Bus className="w-6 h-6" />}
              time="18:30"
              title="Salida del autobús"
              description="Salida desde Moncloa"
            />
            <TimelineItem
              icon={<Heart className="w-6 h-6" />}
              time="19:00"
              title="Inicio de la ceremonia"
              description="Soto de Cerrolen"
            />
            
            <TimelineItem
              icon={<PartyPopper className="w-6 h-6" />}
              time="20:00"
              title="Celebración"
              description="Cocktail, cena y baile"
            />
            <TimelineItem
              icon={<Bus className="w-6 h-6" />}
              time="04:00"
              title="Vuelta del autobús"
              description="Regreso a Moncloa"
            />
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-800">Alojamiento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HotelCard
              name="Torre BoxArt"
              distance="Distancia Finca: 15 min"
              website="https://www.latorreboxarthotel.es"
            />
            <HotelCard
              name="GH Las Rozas"
              distance="Distancia Finca: 12 min"
              website="https://www.attica21hotels.com/gran-hotel-attica21-las-rozas/"
            />
            <HotelCard
              name="Hotel Pax Torrelodones"
              distance="Distancia Finca: 11 min"
              website="https://paxhoteles.com/hotel-pax-torrelodones/"
            />
          </div>
        </div>
      </section>

      {/* Pets Section */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">Frasecita Mascotas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PetCard
              name="Tina"
              image="/img/tina.jpeg"
              description="Nuestra gatita"
            />
            <PetCard
              name="Las vuestras"
              image="/img/shishiYAni.jpg"
              description="Las cuales no podemos olvidar"
            />
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">Nuestro viaje</h2>
          <p className="text-gray-600 mb-8">
            Tu presencia en nuestra boda es el mejor regalo de todos. Sin embargo, si deseas ayudarnos con nuestra luna de miel, puedes contribuir en esta cuenta:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg inline-block">
            <p className="font-mono text-gray-800">ES74 0182 1294 1002 0293 0217</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        {/* Background with opacity using ::before */}
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/history2.png'), url('/img/history2.png')",
            backgroundPosition: "left center, right center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            opacity: 0.3, // Adjust opacity level here
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">
            Gracias por ser parte de nuestro día especial!
          </h2>
          <p className="text-gray-600 mb-8">
            Si tienes alguna duda, por favor no dudes en contactarnos:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Phone className="text-rose-600" />
              <a
                href="tel:676222835"
                className="text-rose-600 hover:text-rose-700 break-all"
              >
                676222835 (Elena)
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-rose-600" />
              <a
                href="tel:679203122"
                className="text-rose-600 hover:text-rose-700 break-all"
              >
                679203122 (Adrián)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}