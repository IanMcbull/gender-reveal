let countBoy = 0;
let countGirl = 0;
let click = 0;
const girl = document.querySelector('.baby_girl');
const boy =  document.querySelector('.baby_boy');
girl.addEventListener('click',()=>{
    document.querySelector('.results').innerHTML =`<p class="lead text-center loading">Loading</p>`
    setTimeout(()=>{
        document.querySelector('.results').innerHTML = `
        <div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading"></h4>
                        <p>Oh no you got it wrong. It's a boy!!Better luck next time</p>
                        <hr>
                        <p class="mb-0">Baby I says hi!</p>
                      </div>`
    },3500)
})
boy.addEventListener('click',()=>{
    document.querySelector('.results').innerHTML =`<p class="lead text-center loading">Loading</p>`
    setTimeout(()=>{
        document.querySelector('.results').innerHTML = `
        <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">WELL DONE!!</h4>
                        <p>You got it right!! It's a bouncing baby boy!!</p>
                        <hr>
                        <p class="mb-0">Baby Irvin says hi!</p>
                      </div>`
    },3500)
})
//display the chart
