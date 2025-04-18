import { MapPin } from 'lucide-react'
import Image from 'next/image'

export function HotelCard({
  name,
  distance,
  website,
  imageSrc,
}: {
  name: string
  distance: string
  website: string
  imageSrc: string
}) {
  return (
    <div className="rounded-lg overflow-hidden border transition-shadow hover:shadow-lg hover:border-b-4 hover:border-[#e5e7eb] group">
      <div className="overflow-hidden h-48">
        <Image
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          width={400}
          height={200}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold truncate mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600 flex items-center pl-2 space-x-2">
          <MapPin className="w-4 h-4" style={{ color: '#787954' }} />
          <span>{distance}</span>
        </p>
        <p className="text-gray-700 text-sm mt-3 mb-4">
          Reserva ahora y aprovecha nuestra oferta exclusiva para invitados.
        </p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-[#787954] transition-colors duration-200 hover:text-[#9a9a7d]"
        >
          Visita la página web →
        </a>
      </div>
    </div>
  )
}