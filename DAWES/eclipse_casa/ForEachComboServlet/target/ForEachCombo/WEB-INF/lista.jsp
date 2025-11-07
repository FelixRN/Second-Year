<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="jakarta.tags.core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Lista personas</title>
</head>
<body>
	<h1>Lista personas:</h1>
	<c:forEach items="${listaPersonas}" var="p">
<li>${p.nombre} - ${p.saldoCuenta}</li>
</c:forEach>
	
	<c:forEach items="${listaPersonas}" var="p">
<c:if test="${p.saldoCuenta < 0 }">
<li style="color: red">${p.nombre} : ${p.saldoCuenta}</li>
</c:if>
<c:if test="${p.saldoCuenta > 0 }">
<li style="color: black">${p.nombre} : ${p.saldoCuenta}</li>
</c:if>
</c:forEach>
	
<c:forEach items="${listaPersonas}" var="p">
<c:choose>
<c:when test="${p.saldoCuenta < 1000 }">
<li> PERSONA CON AHORROS BAJOS - ${p.nombre} - ${p.saldoCuenta}
</li>
</c:when>
<c:when test="${p.saldoCuenta < 10000 }">
<li> PERSONA CON AHORROS MEDIOS - ${p.nombre} - ${p.saldoCuenta}
</li>
</c:when>
<c:when test="${p.saldoCuenta < 100000 }">
<li> PERSONA CON AHORROS ALTOS - ${p.nombre} - ${p.saldoCuenta}
</li>
</c:when>
<c:otherwise>
<li> PERSONA CON AHORROS MUY ALTOS - ${p.nombre} -
${p.saldoCuenta} </li>
</c:otherwise>
</c:choose>
</c:forEach>


	<select name='provincias'>
		<c:forEach items="${opcionesDesplegable}" var="provincia">
			<option value="${provincia.id}">${provincia.nombre}</option>
		</c:forEach>
	</select>
	
	

</body>
</html>
