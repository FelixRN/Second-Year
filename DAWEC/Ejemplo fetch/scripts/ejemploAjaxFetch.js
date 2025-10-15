function recuperarDatos() {
  let idUser = document.getElementById("idUser").value;
  if (isNaN(idUser) || idUser == "") {
    alert("Debes introducir un número");
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts?" + "userId=" + idUser)
      .then((response) => response.json()) //En la ejecucuión del primer then, recuperamos los datos incluidos en la respuesta
      .then((infoPosts) => mostrarDatos(infoPosts))
      .catch((error) => console.error(error));
  }
}

function mostrarDatos(infoPosts) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  infoPosts.forEach((post) => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>`;
    tbody.appendChild(newPost);
  });
}
