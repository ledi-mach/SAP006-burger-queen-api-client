import { useEffect } from "react"

export function Menu() {
    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("usersToken")
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h1>MENU</h1>

        </div >
    )
}