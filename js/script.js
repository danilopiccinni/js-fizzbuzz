let BodyEl = document.getElementById ('body')

BodyEl.classList.add ( 'p-5' , 'd-flex' , 'justify-content-center')
BodyEl.style.backgroundColor = '#031322'


let UlEl = document.getElementById ("lista")

UlEl.style.maxWidth = '1500px'
UlEl.style.textAlign = 'center'
UlEl.classList.add ("row" , 'd-flex' , 'justify-content-center' , 'p-5')


for (let i = 1 ; i <= 100 ; i++) {

    let LiEl = document.createElement ("li")

    UlEl.append(LiEl)

    LiEl.style.listStyleType ='none'
    LiEl.classList.add ('p-1' , 'm-3' , 'd-flex' , 'align-items-center' , 'justify-content-center' , 'border' , 'border-dark-subtle' , 'rounded-3')
    LiEl.style.height = '150px'
    LiEl.style.width = '150px'
    LiEl.style.fontSize ='20px'
    
    if ( i % 3 ==0  && i % 5 ==0) {
        LiEl.innerHTML = "FizzBuzz"
        // LiEl.classList.add ('bg-danger')
        LiEl.style.backgroundColor ='#0011ff'
    } else

     if (i % 3 == 0) {

        LiEl.innerHTML = "Fizz"

        LiEl.style.backgroundColor ='#ff0000'

        } else
            if ( i % 5 == 0) {

                LiEl.innerHTML = "Buzz"
                // LiEl.classList.add ('bg-success')
                LiEl.style.backgroundColor ='#00ff00'

            } else {
        
                LiEl.innerHTML = i 
                // LiEl.classList.add ('bg-danger')
                LiEl.style.backgroundColor ='yellow'

            }

            
}

