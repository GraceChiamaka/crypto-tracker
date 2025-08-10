export const currencyFormatter = (amount: number) => {
    const formattedPrice = Intl.NumberFormat("en", { style: "currency", currency: "usd" }).format(amount);
    return formattedPrice;
};

/**
 * Returns a relative timestamp string from a given date
 * @param date - The date to calculate relative time from
 * @returns A string like "2 minutes", "1 hour", "3 days"
 */
export const relativeTimestamp = (date: Date | string | number): string => {
    const now = new Date();
    const inputDate = new Date(date);

    // Calculate difference in milliseconds
    const diffInMs = now.getTime() - inputDate.getTime();

    // Convert to different time units
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    // Return appropriate relative time string
    if (diffInMinutes < 1) {
        return "just now";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"}`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours === 1 ? "" : "s"}`;
    } else {
        return `${diffInDays} day${diffInDays === 1 ? "" : "s"}`;
    }
};
