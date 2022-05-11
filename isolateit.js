

const isolateIt = arr => arr.map(x =>
    x.length % 2 === 0 ?
        x.slice(0, x.length / 2) + '|' + x.slice(x.length / 2)
        : x.slice(0, Math.floor(x.length / 2)) + '|' + x.slice(Math.floor(x.length / 2) + 1)
)
