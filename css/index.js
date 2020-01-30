function sun(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            console.log("fizz")

        }
        else if (i % 5 == 0) {
            console.log("buzz")
        }
        else if (i % 15 == 0) {
            console.log("fizzbuzz")
        }
        else {
            console.log(i)
        }

    }

}
console.log(sun(1, 10))


var students = [{
    lastname: 'mohseni',
    grad: 10
},
{
    lastname: 'reazeei',
    grad: 15

},
{
    lastname: 'majidi',
    grad: 13
},
{
    lastname: 'almasi',
    grad: 12
}]



students.sort((a,b)=>(a.grad - b.grad))
console.log(a.sort())

