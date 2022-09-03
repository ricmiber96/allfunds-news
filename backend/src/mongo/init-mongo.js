db = db.getSiblingDB('newsDB')
db.createCollection('advice')

db.advice.insertMany([
  {
    title: 'Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitte Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitter',
    description: 'Twitter habilita su función Círculos, y te contamos cómo usarla',
    date: '2022-09-01T18:39:34.091Z',
    content: 'En este momento, Twitter está realizando las tareas de expansión de esta nueva funcionalidad a todas las cuentas. Esto quiere decir que de momento al entrar en la red social puede que no veas esta funcionalidad, aunque como mucho en unos pocos días estará plenamente disponible en iOS, Android y la versión web.',
    author: '@JoseAlberto1813',
    archiveDate: null
  },
  {
    title: 'Apple busca 40 trabajadores en España para integrar su equipo de inteligencia artificial, el mayor de Europa',
    description: 'Estas ofertas de Apple no incluyen información salarial ni sobre la modalidad de trabajo (presencial o remota), si bien Apple está manteniendo en general una clara política de retorno a las oficinas',
    date: '2022-09-02T18:39:34.091Z',
    content: 'En 2021, la plantilla de Apple España aumentó un 20%, pasando a superar los 2000 empleados. Necesitados de espacio para los nuevos empleados y los que pensaba sumar en 2022, la compañía decidió el pasado mes de diciembre Apple inaugurar unas nuevas oficinas en el céntrico Paseo de Gracia de Barcelona, justo enfrente de la enorme Apple Store situada en la esquina con la Plaza Cataluña. Dichas oficinas iban a albergar al equipo de AIML (Artificial Intelligence & Machine Learning) de Apple, cuyo personal creció el año pasado por encima de la media de la compañía (un 50%), hasta convertirse en el mayor grupo de profesionales de la IA de toda Europa occidental y, aun así, tiene ahora abiertas 30 vacantes en Barcelona para reforzarlo con nuevos ingenieros. La compañía busca, además, cubrir otras 10 vacantes en Madrid relacionadas también con el AIML.',
    author: '@AntonioSaban',
    archiveDate: null
  },
  {
    title: 'Photoshop, GIMP, Blender… ahora nos permiten generar imágenes a partir de texto gracias a estos plugins de la IA Stable Diffusion',
    description: 'Al ser open source, se facilita la integración con otras herramientas.',
    date: '2022-05-29T18:39:34.091Z',
    content: 'Hemos hablado largo y tendido sobre DALL-E 2, la asombrosa inteligencia artificial generadora de imágenes, en estos últimos meses. Y sin duda, hablaremos más de ella en el futuro. Pero empiezan a salirle competidores de debajo de las piedras, competidores muy prometedores (como Midjourney), y también competidores que, además de ser prometedores, cuentan con una ventaja que multiplica su potencial hablamos, por ejemplo, de Stable Diffusion, la alternativa libre a DALL-E 2 que, gracias a la condición abierta de su código y del propio modelo entrenado mediante machine learning, puede ser adaptado, personalizado e integrado con otras herramientas hasta el infinito.',
    author: '@MarcosMerino_B',
    archiveDate: '2022-05-12T12:39:34.091Z'
  }
])
