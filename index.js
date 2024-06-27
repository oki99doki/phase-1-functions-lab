// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination))
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    console.log(distance)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400)
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}