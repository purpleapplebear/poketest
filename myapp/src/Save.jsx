
export function SaveData(pokeId, data) {
    if (pokeId === undefined) {
        return
    }
    else {
        sessionStorage.setItem(pokeId, data)
        console.log('Data saved to session storage')
    }
}

export function GetData() {
    let savedData = (JSON.parse(sessionStorage.getItem('data')))
    return savedData
}