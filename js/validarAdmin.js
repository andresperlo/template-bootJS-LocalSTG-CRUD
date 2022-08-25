(
    function validarDato() {
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('usuario')) || []
        let userExists = localSTG.filter(local => local.id === Number(id))

        if (id === null) {
            window.location.href = './login.html'
        } else if(userExists[0].role === 'user'){
            window.location.href = './homeUser.html'
        }
    }
)()

const logout = () => {
    localStorage.removeItem('id')
    window.location.href = './login.html'
}

