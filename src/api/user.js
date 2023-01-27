import {createHeaders} from "./index"

const apiUrl = process.env.REACT_APP_API_URL


// this function is used to check if the user exists in the database
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not fetch users')
        }

        const data = await response.json()

        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}

// this function is used to add a new user to the database
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username: ' + username)
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}

// this function is used to first check if the user exists in the database
// then it will create a new user if the user does not exist
export const loginUser = async (username) => {
    const [checkError, user] = await checkForUser(username)

    if (checkError !== null) {
        return [checkError, null]
    }

    if (user.length > 0) {
        return [null, user.pop()]
    }


    return await createUser(username)


}

// this function is used to get the user from the database
export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if (!response.ok) {
            throw new Error('Could not fetch user')
        }

        const user = await response.json()
        return [null, user]

    } catch (error) {
        return [error.message, null]
    }
}