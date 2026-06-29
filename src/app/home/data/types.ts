export interface TeamMember {
  role: string
  name: string
  registration: string
  bio: string
  image: string
  alt: string
  photoHeight: string
}

export interface FaqItem {
  icon: string
  q: string
  a: string
  listItems?: string[]
}

export interface Result {
  beforeLabel: string
  afterLabel: string
  image: string
}
