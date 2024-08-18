export function calculateDifference(year, month) {
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    let yearDiff = currentYear - year;
    let monthDiff = currentMonth - month;
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    const yearsText = yearDiff === 1 ? `${yearDiff} year` : `${yearDiff} years`;

    const monthsText =
        monthDiff === 0
            ? ""
            : monthDiff === 1
            ? ` and ${monthDiff} month`
            : ` and ${monthDiff} months`;
    return `${yearsText}${monthsText}`;
}
