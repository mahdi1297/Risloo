import { Detail } from "./Detail";
import { Manager } from "./Manager";

export interface CounselingCenter {
    id: string;
    manager: Manager;
    acceptation: string | null;
    status: string;
    type: string;
    detail: Detail;
    created_at: number;
}