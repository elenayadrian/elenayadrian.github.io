import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bus, Heart, Phone, PartyPopper } from 'lucide-react'
import { TimelineItem } from './components/TimelineItem'
import { HotelCard } from './components/HotelCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat' }}>
      {/* Main Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center" />
        <div className="relative z-10 space-y-6">
          <h1 className="text-6xl md:text-9xl font-serif text-gray-800" style={{ fontFamily: 'ImperialScript' }}>
            Elena y Adrián
          </h1>
          <p className="text-2xl md:text-2xl font-light text-gray-600">
            ¡Nos casamos!
          </p>
          <p className="text-5xl md:text-5xl font-light text-gray-600" style={{ fontFamily: 'PlayfairDisplay' }}>
            5 | 09 | 2025
          </p>
          <p className="text-lg md:text-xl text-gray-600 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-center">
            <a href="https://g.co/kgs/J7js8C8" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1" style={{ color: '#787954' }}>
              <MapPin style={{ color: '#787954' }}/>
              <span>Soto de Cerrolén, Madrid</span>
            </a>
            <span  style={{ color: '#787954' }}>19:00h</span>
          </p>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">¿Nos acompañas en este día tan especial?</h2>
          <Link
            href="https://forms.gle/WAmEHXbeVCrBsrqz7"
            target='_blank'
            className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
            style={{ backgroundColor: '#787954'}}
          >
            Ir al Formulario
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Nuestra historia</h2>
            <p className="text-gray-600 leading-relaxed">
              Hace diez años, nuestras vidas se cruzaron por primera vez en la universidad, dentro de la asociación cultural La Hermandad. Lo que comenzó como una amistad sencilla, cargada de complicidad, poco a poco se transformó en algo mucho más profundo: un amor que no ha dejado de crecer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Diez años después, con tantos momentos compartidos y recuerdos que nos han hecho más fuertes, seguimos descubriendo cada día nuevas razones para amarnos. Ahora, estamos listos para dar el siguiente paso en esta historia que, sin duda, aún tiene muchas páginas por escribir.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/img/history.png"
              alt="Nosotros"
              fill
              className="object-contain rounded-lg"
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
              description="Salida desde TBD"
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
              description="Regreso a TBD"
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
              name="Pax Torrelodones"
              distance="Distancia Finca: 11 min"
              website="https://paxhoteles.com/hotel-pax-torrelodones/"
            />
          </div>
        </div>
      </section>

      {/* Pets Section */}
      <section className="py-20 px-4 bg-gray-50" style={{ marginBottom: '0px', paddingBottom: '0px'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">Momento mascota</h2>
          <p className="text-gray-600 mb-8">
            Sube una foto de tu compañero más fiel y déjate sorprender el día de nuestra boda.
          </p>
          <Link
            href="https://forms.gle/myXcrymWJpdaj7by5"
            target='_blank'
            className="inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
            style={{ backgroundColor: '#787954'}}
          >
            ¡Sube una foto!
          </Link>
          <div className="relative w-full" style={{ height: '200px', overflow: 'hidden' }}>
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
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">Próxima parada: Japón</h2>
          <p className="text-gray-600 mb-8">
            Tu presencia en nuestra boda es el mejor regalo que podemos recibir. Si quieres hacernos un regalo extra para nuestra luna de miel, puedes contribuir en esta cuenta:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg inline-block">
            <p className="font-mono text-gray-800">ES74 0182 1294 1002 0293 0217</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        {/* Content Layer */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">
            ¡Te esperamos! 
          </h2>
          <p className="text-gray-600 mb-8">
            Si tienes alguna duda, por favor no dudes en contactarnos:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Phone style={{ color: '#787954' }} />
              <a
                href="tel:679203122"
                className="break-all"
                style={{ color: '#787954' }}
              >
                Adrián: 679 203 122
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone style={{ color: '#787954' }}/>
              <a
                href="tel:676222835"
                className="break-all"
                style={{ color: '#787954' }}
              >
                Elena: 676 222 835
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}