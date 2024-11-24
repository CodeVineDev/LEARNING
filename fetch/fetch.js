const newUser = {
    name: "Divine",
    jon: "Programmer"
}
fetch('https://reqres.in/api/users/SS', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    .then(res => {
        if (!res.ok) {
            console.log('problem')
            return
        }
        return res.json()
    })
    .then(data => {
        console.log('Success');
    }).catch(error => {
        console.log(error)
    })
