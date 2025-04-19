import { CounselingCenter } from '@/types/CounselingCenter'

export interface CenterModalProps {
  data: CounselingCenter | null
  clearActiveItem: () => void
}
