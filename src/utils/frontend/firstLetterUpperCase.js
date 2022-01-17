export const firstLetterUpperCase = (string) => {
    return [...string].map((e, i) => 
        i === 0 ?
            e.toUpperCase() :
            e.toLowerCase()
    ).join('')
};