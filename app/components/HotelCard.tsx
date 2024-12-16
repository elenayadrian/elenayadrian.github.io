import { Hotel } from 'lucide-react'

export function HotelCard({ name, distance, website }: {
  name: string
  distance: string
  website: string
}) {
  return (
    <div className="p-6 border rounded-lg">
      <Hotel className="w-6 h-6 text-rose-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{distance}</p>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-600 hover:text-rose-700"
      >
        Web
      </a>
    </div>
  )
}