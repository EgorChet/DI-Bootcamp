let formvalues = {}

function handleInput(e) {
    formvalues[e.target.name] = e.target.value;
    console.log(formvalues);
}

// function handleInputPassword(e) {
//     formvalues.password = e.target.value;
//     console.log(formvalues);
// }