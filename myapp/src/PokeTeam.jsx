// change functions to only run when clicked. 
// Maybe on click pass through props clicked = true but on exit of function change clicked to false
// only run the loop when click is true


    function clicked(pokemon) {

        var chosenTeam = document.getElementById('pokemon-team')

        let data = JSON.parse(sessionStorage.getItem(pokemon))
        chosenTeam.innerHTML += `<div className="pokemon"><h2>${data.name}</h2><img src="${data.sprites.front_default}" /></div>`
    }

    export default clicked