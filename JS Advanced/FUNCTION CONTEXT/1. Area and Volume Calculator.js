function solve(area, vol, input) {
    let figures = JSON.parse(input)

    let result = figures.map(function (figure) {
        return {
            area: Math.abs(area.call(figure)),
            volume: Math.abs(vol.call(figure))
        }
    })
    return result;
}