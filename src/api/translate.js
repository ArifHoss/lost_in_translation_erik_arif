import {createHeaders} from "./index"

const apiUrl = process.env.REACT_APP_API_URL

export const translateAdd = async (user,translate) => {

    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translate]
            })
        })

        if (!response.ok) {
            throw new Error('Could not update the translation')
        }

        const result = await response.json()
        return [null, result]
    }catch (error) {
    return [error.message, null]
    }
}


export const translateClearHistory = async (userId) => {

    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if(!response.ok){
            throw new Error('Could not update translations')
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}

