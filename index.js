// Code your solutions in this file
function writeCards(arr, event) {
    const thankYou = []
    for (let i = 0; i < arr.length; i++) {
        thankYou.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return thankYou 
}


function countDown(int) {
    while (int >= 0) {
        console.log(int--)
    }
}