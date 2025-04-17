
export const limitData = <T>(data: T[], limit: number): T[] => {
    return data.slice(0, limit);
}