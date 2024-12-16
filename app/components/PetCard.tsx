import Image from 'next/image'

export function PetCard({ name, image, description }: {
  name: string
  image: string
  description: string
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="relative h-48 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}