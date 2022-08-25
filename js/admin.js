let usuarioSTG = JSON.parse(localStorage.getItem('usuario'))
let tBody = document.getElementById('tBody')
tBody.innerHTML = usuarioSTG.map(usuarioLocalSTG =>
    `   
    <tr>
    <th scope="row">${usuarioLocalSTG.id}</th>
    <td>${usuarioLocalSTG.user}</td>
    <td>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success" data-bs-toggle="modal"
            data-bs-target="#exampleModal${usuarioLocalSTG.id}">
            Modificar
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${usuarioLocalSTG.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modificar usuario</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" class="form">
                            <label for="">usuario</label>
                            <input type="text" value="${usuarioLocalSTG.user}" id="userModal${usuarioLocalSTG.id}">
                            <label for="">contraseña</label>
                            <input type="password" value="${usuarioLocalSTG.pass}" id="passModal${usuarioLocalSTG.id}">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onclick="modificarUsuario(${usuarioLocalSTG.id})">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- boton eliminar -->
    
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-danger" data-bs-toggle="modal"
            data-bs-target="#exampleModal2${usuarioLocalSTG.id}">
            Eliminar
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal2${usuarioLocalSTG.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">¿Estas Seguro de que
                            quieres eliminar este Usuario?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">NO</button>
                        <button type="button" class="btn btn-primary" onclick="borrarUsuario(${usuarioLocalSTG.id})">SI</button>
                    </div>
                </div>
            </div>
        </div>
    </td>
    <td>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
            data-bs-target="#exampleModal3${usuarioLocalSTG.id}">
            Cambiar Role
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal3${usuarioLocalSTG.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">¿Estas Seguro de Cambiar
                            de Role (Role Actual: ${usuarioLocalSTG.role}) a este usuario?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">NO</button>
                        <button type="button" class="btn btn-primary" onclick="cambiarRole(${usuarioLocalSTG.id})">SI</button>
                    </div>
                </div>
            </div>
        </div>
    </td>
    </tr>`
)

const modificarUsuario = (id) => {
    let userModal = document.getElementById(`userModal${id}`).value
    let passModal = document.getElementById(`passModal${id}`).value
    let array = []

    for (let i = 0; i < usuarioSTG.length; i++) {
        const usuariosEnLocalSTG = usuarioSTG[i];
        if (usuariosEnLocalSTG.id === id) {
            array.push({ id, user: userModal, pass: passModal, role: usuariosEnLocalSTG.role })
        } else {
            array.push(usuariosEnLocalSTG)
        }
    }

    localStorage.setItem('usuario', JSON.stringify(array))
    location.href = '../html/homeAdmin.html'

}

const borrarUsuario = (id) => {
    let array = []

    for (let i = 0; i < usuarioSTG.length; i++) {
        const usuariosEnLocalSTG = usuarioSTG[i];
        if (usuariosEnLocalSTG.id !== id) {
            array.push(usuariosEnLocalSTG)
        }
    }

    localStorage.setItem('usuario', JSON.stringify(array))
    location.href = '../html/homeAdmin.html'
}

const cambiarRole = (id) => {
    let array = []

    for (let i = 0; i < usuarioSTG.length; i++) {
        const usuariosEnLocalSTG = usuarioSTG[i];
        if (usuariosEnLocalSTG.id === id) {
            array.push({ id, user: usuariosEnLocalSTG.user, pass: usuariosEnLocalSTG.pass, role: usuariosEnLocalSTG.role === 'admin' ? 'user' : 'admin' })
        } else {
            array.push(usuariosEnLocalSTG)
        }
    }

    localStorage.setItem('usuario', JSON.stringify(array))
    location.href = '../html/homeAdmin.html'
}