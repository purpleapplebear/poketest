
export function SaveData(data) {
    sessionStorage.setItem('data', data)
    console.log('Data saved to session storage')
    return
}

export function GetData() {
    let savedData = (JSON.parse(sessionStorage.getItem('data')))
    return savedData
}