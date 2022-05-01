// finds how many years for population (p0) to reach num (p)
function nbYear(p0, percent, aug, p) {
    let years = 0
    while (p0 < p) {
      p0 += Math.floor(p0 * (percent / 100) + aug)
      ++years
      }
    return years
  }