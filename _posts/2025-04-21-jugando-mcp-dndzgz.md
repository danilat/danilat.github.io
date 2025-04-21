---
layout: post
title: Jugando con MCP protocol
excerpt: 
image: /img/posts/2025/mcp/screenshot.png
---

Llevo unas semanas leyendo un poco sobre el hype de [**Model Context Protocol**](https://modelcontextprotocol.io/introduction), hay mucho escrito ya sobre MCP y en mi caso sólo me he asomado a este protocolo muy tímidamente, pero comparto algunas referencias que me han parecido muy interesantes:

- [La documentación oficial](https://modelcontextprotocol.io/docs/concepts/architecture). Hosts, Clients, Servers, Stdio/Http con SSE y el uso de JSON-RPC en la transport layer, etc.   
- [Everything Wrong with MCP](https://blog.sshh.io/p/everything-wrong-with-mcp). Shrivu Shankar escribe sobre problemas y limitaciones relacionados con seguridad y la experiencia de uso.
- [MCP: The Differential for Modern APIs and Systems](https://docs.mcp.run/blog/2025/03/27/mcp-differential-for-modern-apis). Steve Manuel escribe como MCP puede ayudar a tener integraciones más resilientes entre sistemas.

Mientras he ido leyendo fui pensando en qué pequeño pet-project podía hacer para experimentar un poco y me acordé de [DNDzgz](http://www.dndzgz.com/).

Y aunque el preguntarle a **Claude Desktop o a Cursor** las estimaciones de llegada del tranvía a plaza Aragón para ver si sales ya del estudio o del coworking en un día de cierzo 🥶 a mi tampoco me parece una killer feature. Pensé que podía ser una casuística fácil de implementar pedirle los tiempos de llegada del tranvía, que son datos que se requiere tener en tiempo real.

![En la captura se pregunta ¿Cuándo llegará el tranvía a la parada de Romareda? y luego se ve la respuesta de Claude](/img/posts/2025/mcp/screenshot.png "Captura de pantalla de Claude Desktop usando MCP DNDzgz")


Técnicamente no tiene mucho misterio:
- El MCP server está implementado con [Node y el transport Standard Input/Output](https://modelcontextprotocol.io/docs/concepts/transports#type-script-server), así que los MCP Hosts se encargan de arrancarlo.   
- Se hacen llamadas fetch al API de DNDzgz, a los endpoints que devuelven todas las paradas del tranvía y el tiempo estimado en cada parada.  
- Y esto se expone como dos diferentes [Tools](https://modelcontextprotocol.io/docs/concepts/tools) para que los modelos lo llamen tras que la persona que lo usa de el ok.

Podéis ver el código de [mcp-dndzgz en github](https://github.com/danilat/mcp-dndzgz).

