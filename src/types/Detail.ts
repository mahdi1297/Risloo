import { Avatar } from './Avatar'

export interface Detail {
  title: string
  description: string | null
  address: string | null
  avatar: Avatar[]
  phone_numbers: string[] | null
}
