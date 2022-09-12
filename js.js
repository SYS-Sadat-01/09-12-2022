// const input = document.querySelector('#email')
const inputs = document.querySelectorAll('input')

    const patterns = {
        email : /^([a-zA-Z0-9\.-]+)@([a-zA-Z]{2,8})\.([a-zA-Z0-9]{2,8})(\.[a-zA-Z0-9]{2,8})?$/,
        phone : /^\d{10}$/,
        pass :  /^[\w@-_]{6,20}$/

    }

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid'

    } else {
        field.className = 'invalid'
    }
}

inputs.forEach(function(input){

input.addEventListener('keyup', function(e){
    // console.log(e.target.attributes.name.value)

    validate(e.target, patterns[e.target.attributes.name.value])

})
})