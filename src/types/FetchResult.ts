import { CounselingCenter } from './CounselingCenter'

export type FetchResult =
  | { data: CounselingCenter[]; error: null }
  | { data: null; error: { message: string } }
