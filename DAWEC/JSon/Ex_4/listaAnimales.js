        const BASE = 'http://localhost:3000';

        // Obtiene la lista completa de animales y extrae los tipos únicos
        async function cargarTipos() {
            try {
                const res = await fetch(`${BASE}/animales`);
                if (!res.ok) throw new Error('Error al obtener animales');
                const animales = await res.json();
                // Si el JSON viene envuelto en { animales: [...] } manejarlo
                const lista = Array.isArray(animales) ? animales : (animales.animales || []);
                const tipos = [...new Set(lista.map(a => (a.Tipo || a.tipo || '').trim()).filter(Boolean))].sort();
                const select = document.getElementById('tipoSelect');
                select.innerHTML = '<option value="">-- Selecciona un tipo --</option>' + tipos.map(t=>`<option value="${t}">${t}</option>`).join('');
            } catch (err) {
                console.error(err);
                document.getElementById('tipoSelect').innerHTML = '<option value="">Error cargando tipos</option>';
            }
        }

        // Consulta al servidor los animales filtrando por tipo
        async function buscarPorTipo(tipo) {
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = 'Cargando...';
            try {
                const url = new URL(`${BASE}/animales`);
                url.searchParams.set('Tipo', tipo); // json-server es case-sensitive si las claves coinciden
                // También probar por 'tipo' en caso de que el servidor tenga claves diferentes
                const res = await fetch(url);
                if (!res.ok) throw new Error('Error en la petición');
                let data = await res.json();
                data = Array.isArray(data) ? data : (data.animales || []);
                if (!data.length) {
                    resultados.innerHTML = `<p>No se encontraron animales de tipo "${tipo}".</p>`;
                    return;
                }
                resultados.innerHTML = data.map(a=>{
                    const nombre = a.Nombre || a.nombre || 'Sin nombre';
                    const rasgos = a.Rasgos || a.rasgos || a.Observacion || 'Sin rasgos descritos';
                    const img = a.Imagen ? `<img src="${a.Imagen}" alt="${nombre}"/>` : '';
                    return `<div class="animal"><strong>${nombre}</strong><div>${rasgos}</div>${img}</div>`;
                }).join('');
            } catch (err) {
                console.error(err);
                resultados.innerHTML = '<p>Error al obtener resultados. Asegúrate de que json-server esté ejecutándose.</p>';
            }
        }

        document.getElementById('buscarForm').addEventListener('submit', e=>{
            e.preventDefault();
            const tipo = document.getElementById('tipoSelect').value;
            if (!tipo) return alert('Selecciona un tipo de animal');
            buscarPorTipo(tipo);
        });

        // Cargar tipos al inicio
        cargarTipos();