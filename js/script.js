let BodyEl = document.getElementById ('body')

BodyEl.classList.add ('container' , 'pt-5')

let UlEl = document.getElementById ("lista")

UlEl.classList.add ("row" , 'row-cols-4')



for (let i = 1 ; i <= 100 ; i++) {

    let LiEl = document.createElement ("li")

    UlEl.append(LiEl)

    LiEl.style.listStyleType ='none'
    LiEl.classList.add ('text-center', 'p-1' )



 
    if (i % 3 == 0) {

        LiEl.innerHTML = "Fizz"
        LiEl.classList.add ('bg-primary')

        } else
            if ( i % 5 == 0) {

                LiEl.innerHTML = "Buzz"
                LiEl.classList.add ('bg-success')

            } else {
        
                LiEl.innerHTML = "FizzBuzz"
                LiEl.classList.add ('bg-danger')

            }

            
}

