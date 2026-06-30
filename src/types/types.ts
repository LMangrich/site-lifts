export interface TeamMember {
  role: string
  name: string
  registration: string
  bio: string
  image: string
  alt: string
  photoHeight: string
}

export type ObjetivoValue = 'emagrecimento' | 'massa' | 'duas'
export type OrcamentoValue = 1 | 2

export interface ObjetivoOption {
  value: ObjetivoValue
  label: string
  icon: string
}

export interface OrcamentoOption {
  value: OrcamentoValue
  label: string
}

export interface FormField {
  name: string
  type: string
  placeholder: string
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
