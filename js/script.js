
let UlEl = document.getElementById ("lista")


for (let i = 1 ; i <= 100 ; i++) {

    let LiEl = document.createElement ("li")

    UlEl.append(LiEl)

 
    if (i % 3 == 0) {

        LiEl.innerHTML = "Fizz"

        } else
            if ( i % 5 == 0) {

                LiEl.innerHTML = "Buzz"

            } else {
        
                LiEl.innerHTML = "FizzBuzz"

            }

}

