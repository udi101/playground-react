export const sleep = (duration:number=200) :Promise<undefined> => {
return new Promise((res) => {
    setTimeout(() => {
        res(undefined)
    },duration)
})
}

export const block = (duration:number=100) => {
    const start = performance.now()
    while(performance.now() < start + duration){}
}