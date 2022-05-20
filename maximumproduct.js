

const adjacentElementsProduct = array =>
    Math.max(...array.map((x, i, w) =>
        typeof w[i + 1] === 'number' ?
            x * w[i + 1]
            : x * w[i - 1]
    ))
