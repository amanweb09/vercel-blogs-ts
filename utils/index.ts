export const makeCategory = (slug: string): string => {

    if (typeof slug === 'string') {
        return slug.split('-').join(' ')
    }

    return ''
}

export const capitalizeFirstLetter = (str: string): string => {

    return str.charAt(0).toUpperCase() + str.slice(1)

}

//to detect if the user has stopped typing in the input
export const debounce = (
    fn: (query: string) => void,
    timeout: number = 300) => {

    let timer: NodeJS.Timeout;

    const debounced = (...arg: any) => {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, timeout)
    }

    return debounced
}