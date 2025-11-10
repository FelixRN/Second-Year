<%@ page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core"%>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt"%>

 <fmt:setLocale value="${idioma}"/>
<fmt:setBundle basename="t" />

<html>
<head>
<title>JSP/JSTL i18n</title>
</head>
<body><p>
<fmt:message key="saludo" />
</p>
<a href="./setLocale?idioma=en">ingles</a>
<a href="./setLocale?idioma=es">español</a>
<a href="./setLocale?idioma=fr">frances</a>
	</p>
</body>
</html>
