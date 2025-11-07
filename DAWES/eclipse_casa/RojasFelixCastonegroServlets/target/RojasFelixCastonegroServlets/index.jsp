<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Lista de jugadores</title>
</head>
<body>

<h2>Asignar rol</h2>

<form action="" method="post">
    <label for="jugador">Selecciona un jugador:</label>
    <select name="jugador" id="jugador">
        <c:forEach items="${listaJugadores}" var="jug">
            <option value="${jug.nombre}">${jug.nombre}</option>
        </c:forEach>
    </select>
    <button type="submit">Asignar rol</button>
</form>

<c:if test="${not empty jugadorSeleccionado}">
    <h3>Resultado:</h3>
    <p>Jugador: <strong>${jugadorSeleccionado}</strong></p>
    <p style="color:${color}">Rol asignado: <strong>${rolAsignado}</strong></p>
    <p style="color:${color}">${mensaje}</p>
</c:if>

</body>
</html>
