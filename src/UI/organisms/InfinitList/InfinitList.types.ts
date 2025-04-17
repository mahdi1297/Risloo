import { CounselingCenter } from "@/types/CounselingCenter";

export interface InfinitListProps {
    initialData: CounselingCenter[],
    selectCenterItem: (item: CounselingCenter) => void
}