import { Hotel } from 'lucide-react'

export function HotelCard({ name, distance, website }: {
  name: string
  distance: string
  website: string
}) {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Hotel className="w-6 h-6" style={{ color: '#787954' }} />
        <h3
          className="text-xl font-semibold truncate"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">{distance}</p>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#787954' }}
      >
        Web
      </a>
      <p className="mt-4 font-bold text-sm p-2 rounded-lg"  style={{ color: '#787954', backgroundColor: '#edede7' }}>
        5% de descuento para invitados
      </p>
    </div>
  )
}