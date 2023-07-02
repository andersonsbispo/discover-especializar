const url = "http://localhost:5500/api";

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data;
            userId.textContent = data.id;
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userAvatar.src = data.avatar;
        })
        .catch(error => console.error(error))
}

function updateUser(id, updatedUser) {
    axios.put(`${url}/${id}`, updatedUser)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

getUsers();
getUser(1);

const newUser = {
    name: "Josefa Santos",
    avatar: "http://picsum.photos/400/200",
    city: "Coronel João Sá"
}
addNewUser(newUser);

const updatedUser = {
    name: "Jose Bispo",
    avatar: "http://picsum.photos/400/200",
    city: "Coronel João Sá"
}
updateUser(3, updatedUser);

deleteUser(2);