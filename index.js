// Code your solution in this file!

function distanceFromHqInBlocks(x){
    return Math.abs(42 - x)
}

function  distanceFromHqInFeet(x){
    return distanceFromHqInBlocks(x) * 264
}

function  distanceTravelledInFeet(x, y){
    let dis = Math.abs(x-y) 
    return dis * 264
}

function  calculatesFarePrice(x, y){
    let dis = distanceTravelledInFeet(x, y) 
    if(dis < 400 )
        return 0
    else if(dis > 400 && dis < 2000)
        return (dis - 400) * 0.02
    else if(dis > 2000 && dis < 2500)    
        return 25
    else if (dis > 2500) 
        return 'cannot travel that far'   

}

console.log(calculatesFarePrice(34, 32))