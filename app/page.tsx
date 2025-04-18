import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bus, Heart, Phone, PartyPopper, HeartIcon } from 'lucide-react'
import { TimelineItem } from './components/TimelineItem'
import { HotelCard } from './components/HotelCard'
import { BankAccountDetails } from './components/BankAccountDetails'

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat' }}>
      {/* Main Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center" />
        <div className="relative z-10 space-y-6" data-aos="fade-up">
          <h1 className="text-6xl md:text-9xl text-gray-800" style={{ fontFamily: 'ImperialScript' }}>
            Elena y Adrián
          </h1>
          <p className="text-2xl md:text-2xl font-light text-gray-600">
            ¡Nos casamos!
          </p>
          <p className="text-5xl md:text-5xl font-light text-gray-600" style={{ fontFamily: 'PlayfairDisplay' }}>
            5 | 09 | 2025
          </p>
          <p className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-center">
            <a
              href="https://g.co/kgs/J7js8C8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center space-x-1
                text-lg md:text-xl
                text-[#787954]
                transition-transform transition-colors duration-200 ease-in-out
                hover:scale-105 hover:text-[#9a9a7d]
              ">
              <MapPin className="w-4 h-4" />
              <span>Soto de Cerrolén, Madrid 19:00h</span>
            </a>
          </p>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">        
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-800">¿Nos acompañas en este día tan especial?</h2>
          <Link
            href="https://forms.gle/WAmEHXbeVCrBsrqz7"
            target='_blank'
            className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-transform duration-200 ease-in-out hover:scale-105 focus-visible:outline-none focus-visible:ring-1"
            style={{ backgroundColor: '#787954'}}
          >
            Ir al Formulario
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]" data-aos="fade-left">
            <Image
              src="/img/history.png"
              alt="Nosotros"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-gray-800">Nuestra historia</h2>
            <p className="text-gray-600 leading-relaxed">
              Hace diez años, nuestras vidas se cruzaron por primera vez en la universidad, dentro de la asociación cultural La Hermandad. Lo que comenzó como una amistad sencilla, cargada de complicidad, poco a poco se transformó en algo mucho más profundo: un amor que no ha dejado de crecer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Diez años después, con tantos momentos compartidos y recuerdos que nos han hecho más fuertes, seguimos descubriendo cada día nuevas razones para amarnos. Ahora, estamos listos para dar el siguiente paso en esta historia que, sin duda, aún tiene muchas páginas por escribir.
            </p>
          </div>          
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-800">Detalles de la Boda</h2>
          <div className="space-y-8">
            <TimelineItem
              icon={<Bus className="w-6 h-6" />}
              time="18:30"
              title="Salida del autobús"
              description="Salida desde Plaza Castilla (Por confirmar)"
            />
            <TimelineItem
              icon={<Heart className="w-6 h-6" />}
              time="19:00"
              title="Inicio de la ceremonia"
              description="Soto de Cerrolén"
            />            
            <TimelineItem
              icon={<PartyPopper className="w-6 h-6" />}
              time="20:00"
              title="Celebración"
              description="Cocktail, cena y baile"
            />
            <TimelineItem
              icon={<Bus className="w-6 h-6" />}
              time="05:00"
              title="Vuelta del autobús"
              description="Regreso a Plaza Castilla (Por confirmar)"
            />
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-800">Alojamiento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HotelCard
              name="Pax Torrelodones"
              distance= " Distancia Finca: 11 min"
              website="https://paxhoteles.com/hotel-pax-torrelodones/"
              imageSrc="/img/pax.png"
            />
            <HotelCard
              name="Torre BoxArt"
              distance="Distancia Finca: 15 min"
              website="https://www.latorreboxarthotel.es"
              imageSrc="/img/boxart.png"
            />
            <HotelCard
              name="GH Las Rozas"
              distance="Distancia Finca: 12 min"
              website="https://www.attica21hotels.com/gran-hotel-attica21-las-rozas/"
              imageSrc="/img/attica.png"
            />
          </div>
        </div>
      </section>

      {/* Pets Section */}
      <section className="py-20 px-4 bg-gray-50" style={{ marginBottom: '0px', paddingBottom: '0px'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-800">Momento mascota</h2>
          <p className="text-gray-600 mb-8">
            Sube una foto de tu compañero más fiel y déjate sorprender el día de nuestra boda.
          </p>
          <Link
            href="https://forms.gle/myXcrymWJpdaj7by5"
            target='_blank'
            className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-transform duration-200 ease-in-out hover:scale-105 focus-visible:outline-none focus-visible:ring-1"
            style={{ backgroundColor: '#787954'}}
          >
            ¡Sube una foto!
          </Link>
          <div className="relative w-full" style={{ height: '200px', overflow: 'hidden' }} data-aos="fade-up" data-aos-delay="200" data-aos-offset="100">
            <Image
              src="/img/tina.png"
              fill
              alt="tina"
              className="object-cover rounded-lg"
            />
          </div>        
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-800">Próxima parada: Japón</h2>
          <p className="text-gray-600 mb-8">
            Tu presencia en nuestra boda es el mejor regalo que podemos recibir. Si quieres hacernos un regalo extra para nuestra luna de miel, puedes contribuir en esta cuenta:
          </p>
          <BankAccountDetails/>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 bg-[#47491C]">
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div
              className="font-handwritten text-5xl mb-4"
              style={{ fontFamily: 'ImperialScript' }}
            >
              Elena &amp; Adrián
            </div>
            <div className="flex items-center justify-center">
              <div className="h-px w-8 bg-white/50" />
              <HeartIcon className="mx-4 w-5 h-5 text-white" />
              <div className="h-px w-8 bg-white/50" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl mb-4">
            ¡Te esperamos!
          </h2>

          <p className="text-base md:text-lg mb-8">
            Si tienes alguna duda, por favor no dudes en contactarnos:
          </p>

          <div className="h-px bg-white/40 w-40 mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-white/90" />
              <a
                href="tel:679203122"
                className="break-all text-white font-medium"
              >
                Adrián: 679 203 122
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-white/90" />
              <a
                href="tel:676222835"
                className="break-all text-white font-medium"
              >
                Elena: 676 222 835
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}