const baseUrl = 'https://api.github.com/users'

export const fetchUserData = userId => {
    fetch(`${baseUrl}/${userId}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Failed to fetch user data.')
        })
}