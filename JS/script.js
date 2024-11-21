const bottone = document.getElementById('botton')
const lampaSpenta = document.getElementById('spenta')
const lampaAccesa = document.getElementById('accesa')

bottone.addEventListener('click',() =>{
    lampaSpenta.classList.toggle('none')
    lampaAccesa.classList.toggle('none')
}
)