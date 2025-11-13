<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<c:forEach items="${listaAlumnos}" var="alumno">
<li> ID: ${alumno.id}. Nombre: ${alumno.nombre} ${alumno.apellido} </li>
</c:forEach>
</body>
</html>