interface Triangle{
    firstSide: number,
    secondSide: number
}

interface ColoredTriangle extends Triangle{  // it means ColoredTriangle must have all the properties of Triangle
    color: string
}

const ct: ColoredTriangle = {
    firstSide: 20,
    secondSide: 10,
    color: 'Blue'
}

console.log(ct.color, ct.firstSide);