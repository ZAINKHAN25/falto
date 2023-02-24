// var names = {
//     first: "Zain",
//     second: "Huzaifa",
//     third: "don't know",
//     cars:["Lamborghini", "Swift", "Rolls Royce"]
// };
// console.log(names.cars)

// console.log(names.cars.push("Ferari"))
// console.log(names.cars)

// console.log(names.cars.push("Mehran"))
// console.log(names.cars)

// let name = 1
let number = +prompt("Write your name here")

for (let i = 1; i <= 10; i++) {
    document.write(`<table border="1"> <tr> <td>${number}</td> <td>X</td> <td>${i} </td><td>=</td> <td>${number * i}</td><br /></tr></table>`)   
}
