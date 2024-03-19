
//ex1------------

const arr = [123,24,3567,44,5532,643,765,81,90,100, 'ASC', 'DSC']
// const sorted = arr.sort ((a, b) => {
//     if ('ASC') {
//         return a - b > 0 ? -1 : 1
//     }
//     if ('DSC') {
//         return b - a > 0 ? -1 : 1
// }})
// console.log(sorted) --- asta e incercarea fail:))

// function sorted2(order) {
//     if(order === 'ASC') {
//         return arr.sort((a,b) => a - b )
//     }
//     if (order === 'DSC') {
//         return arr.sort((a,b) => b - a)
//     } console.log(sorted2())
//     function everyNum(item) {
//     if(arr.every(item)) {
//         return typeof item === 'number'}
//     else {
//         return 'va rod sa introduceti doar liste cu cifre'  
//         }
//         console.log(everyNum())
//     }}
// console.log(sorted2())

 //incercarea numarul 2, pe jumatate fail;))


//ex2----------------------

const arr2 = [1,2,3,4,5]
function findInd(item,index) {
    if(arr2.findIndex((item) => index !== - 1)) {
        return index }
        else {
            "not found"
        }

}
console.log(findInd(2)) //iar problema ????

function findInd2() {
    arr2.findIndex((item,index) => {
        return index !== -1 ? index : 'not found'

    }) }

console.log(findInd2(2)) // rezultat undefined ???

function findInd3(item) {
    const ind = arr2.indexOf(item)
    return ind !== -1 ? ind : 'not found'
}
console.log(findInd3(2)) // URAA E CORECT

//ex 3 -------------------------

const arr3 = [23,45,81,27,16,43]

function radPatrata1(array,item) {
 return arr3.filter((item) =>{ 
    const sqrt1 = Math.sqrt(item)
     return Math.floor(sqrt1)
})

}
 console.log(radPatrata1(arr3)) // returneaza tot array-ul , nu intleeg de ce, vreau sa fac mai simplu

const radPatrata2 = arr3.filter((array, item) => {
    if (Math.sqrt(item) === Math.floor(item)) {
        return Math.sqrt(item) === Math.floor(item)
    }

})
console.log(radPatrata2) // returjneaza 23, 45 - nu ceea ce trebuie 

const radPatrata3 = arr3.map(function(item) {
    const x2 = Math.sqrt(item)
    return x2 === Math.floor(item)})
console.log(radPatrata3) // returneaza un array de false

function radPatrata5(item) {
    return arr3.filter((item)=> {
    const sqrt = Math.sqrt(item)
    return sqrt === Math.floor(sqrt)
})
}
console.log(radPatrata5(arr3)) // cu succes, ura

//ex4---------------------
function ex4(array) {
    const arr =[ 1,2,3,4,5,6,7]
    return arr.slice((arr.filter((item) => item%2 === 0)), (arr.filter((item) => item%2 !== 0)))
}

console.log(ex4()) // fail , returneaza []

function oddEvenNum() {
    const arr =[ 1,2,3,4,5,6,7]
    const evenNum = arr.filter((item) => item%2 === 0)
    const oddNum = arr.filter((item) => item %2 !== 0 )

return [evenNum.slice(), oddNum.slice()]}
const final = [evenNum, oddNum] = oddEvenNum()
console.log(oddEvenNum()) //ura 