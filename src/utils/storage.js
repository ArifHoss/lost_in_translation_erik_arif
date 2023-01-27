
//this is used to store the data in the local storage
export const storageSave = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))

}

//this is used to get the data from the local storage
export const storageRead = (key) => {
    const data = sessionStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
    return null
}

// this is used to remove the data from the local storage
export const storageDelete = (key) => {
    sessionStorage.removeItem(key)
}