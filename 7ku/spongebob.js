

const spongeMeme = sentence =>
    sentence.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')