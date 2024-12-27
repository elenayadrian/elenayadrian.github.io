import { ReactNode } from 'react'

export function TimelineItem({ icon, time, title, description }: {
  icon: ReactNode
  time: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center" style={{ color: '#787954', backgroundColor: '#edede7' }}>
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-800">{time} - {title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}