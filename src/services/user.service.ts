import { User } from "../model/user"
import { authStorage } from "./auth.storage"

class UserService{

    private readonly url = 'http://192.168.0.15:3030/users'

    public async list() {
        const logged = await authStorage.getLoggedUser()
        const token = logged && logged.token ? logged.token : null

        if (!token) throw new Error('Token is null')
        
        const response = await fetch(this.url, {
            method: 'GET',
            headers: { 
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
        })

        const data = await response.json()

        if (response.status === 200) {
            return data
        }
        else if (response.status === 401) {
            throw new Error(data.message)
        }
	}

    public async create(user: User) {
        const logged = await authStorage.getLoggedUser()
        const token = logged && logged.token ? logged.token : null

        if (!token) throw new Error('Token is null')
        
        const response = await fetch(this.url, {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(user)
        })

        const data = await response.json()

        if (response.status === 201) {
            return data
        }
        else if (response.status === 401) {
            throw new Error(data.message)
        }

    }

}

export const userService = new UserService()	