export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((ex) => {
        // if the startDate is undefined it will result in true ,, if the created at is bigger than the start date filter it will result in true 
        const startDateMatch = typeof startDate !== 'number' || ex.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || ex.createdAt <= endDate;
        const textMatch = ex.descreption.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch // if any of these results in true , the ex wont be returned .
    }).sort((a, b) => {
        if (sortBy === 'Date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'Amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}