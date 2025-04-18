import { CounselingCenter } from "@/types/CounselingCenter";
import { CSSProperties, ReactNode } from "react";

export interface InfinitListProps {
    /**
     * Initial array of counseling centers to display
     */
    initialData: CounselingCenter[];

    /**
     * Callback function when a center item is selected
     * @param center - The selected counseling center
     */
    selectCenterItem: (center: CounselingCenter) => void;

    /**
     * Function to fetch more data when scrolling reaches the bottom
     * @returns Promise containing additional counseling centers
     */
    fetchMoreData: () => Promise<CounselingCenter[]>;

    /**
     * Boolean indicating whether more data can be loaded
     */
    hasMore: boolean;

    /**
     * Optional: Custom loading component to display while fetching more data
     */
    loadingComponent?: ReactNode;

    /**
     * Optional: Custom component to display when no more data is available
     */
    endMessageComponent?: ReactNode;

    /**
     * Optional: Threshold for triggering infinite scroll (0-1)
     * @default 0.1 (10% of the target visible)
     */
    scrollThreshold?: number;

    /**
     * Optional: Root margin for the intersection observer
     * @default '20px'
     */
    rootMargin?: string;

    /**
     * Optional: Additional class names for styling
     */
    className?: string;

    /**
     * Optional: Additional styles for the container
     */
    style?: CSSProperties;

    /**
     * This item is for detecting and adding active styles to selected box
     */
    activeItem: CounselingCenter| null;
}