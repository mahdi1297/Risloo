import { CounselingCenter } from "@/types/CounselingCenter";


export const fetchMoreCenters = async (page: number): Promise<CounselingCenter[]> => {
    const URL = `/api/centers?page=${page}&limit=10`

    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error('Failed to fetch centers');
    }

    const data = await response.json();
    return data.data;
};
