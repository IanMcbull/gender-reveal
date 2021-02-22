const loader = document.querySelector('.loader');
const content = document.querySelector('#content');

function init(){
    setTimeout(()=>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        content.style.display = 'block';
        setTimeout(()=>{
           content.style.opacity = 1;
        },50)
    })
}

init();
let database = [
    "dennis ogingo",
    "eric mugenya",
    "ryan kamau",
    "caroline wambui",
    "samuel mugenya",
    "samoina wangui",
    "jayden gathatwa",
    "patrick mbuguah",
    "nancy njeri",
    "jane doe"
]
document.querySelector('.btn').addEventListener('submit',(e)=>{
    e.preventDefault(); 
   const userInput = document.querySelector('.form-control').value.toLowerCase();
   if(database.includes(userInput)){
    fetch('http://localhost:9900/').then(data=>{
        console.log(data)
    })
   }else{
       alert('Not authorized')
   }
})
