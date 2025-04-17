import { Avatar } from "./Avatar";

export interface Manager {
    id: string;
    name: string;
    user_id: string;
    avatar: Avatar[] | null;
}