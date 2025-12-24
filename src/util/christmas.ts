
export function isChristmas(): boolean {
    const today = new Date();
    return today.getMonth() === 11 && today.getDate() >= 1 && today.getDate() <= 31;
}