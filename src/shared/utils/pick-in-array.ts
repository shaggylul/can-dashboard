export const  pickInArray = <T>(arr: T[], step: number): T[] =>
    arr.filter((_, index) => index % step === 0)
