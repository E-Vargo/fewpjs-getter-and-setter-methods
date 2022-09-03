// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return this.radius ** 2 * Math.PI
    }

    set diameter(d) {
        return this.radius = d/2
    }

    set circumference(c) {
        return this.radius = c/(2*Math.PI)
    }

    set area(a) {
        return this.radius = Math.sqrt(a/Math.PI)
    }
}