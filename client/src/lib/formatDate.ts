export const formatDate = (dateString: string | undefined) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    return new Date(dateString!).toLocaleDateString("en-GB", options);
};
