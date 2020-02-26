export const enumToarray = (obj: any): {name: string, value: number}[] => {
    return Object.keys(obj).filter(elem => typeof obj[elem] === "number").map(el => {
        return {
            name: el, 
            value: obj[el]
        }
    })
}