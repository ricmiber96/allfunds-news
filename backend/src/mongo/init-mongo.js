db = db.getSiblingDB('newsDB')
db.createCollection('advice')

db.advice.insertMany([
  {
    title: 'Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitte Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitter',
    description: 'Twitter habilita su función Círculos, y te contamos cómo usarla',
    date: '2022-05-29T18:39:34.091Z',
    content: 'En este momento, Twitter está realizando las tareas de expansión de esta nueva funcionalidad a todas las cuentas. Esto quiere decir que de momento al entrar en la red social puede que no veas esta funcionalidad, aunque como mucho en unos pocos días estará plenamente disponible en iOS, Android y la versión web.',
    author: '@JoseAlberto1813'
  },
  {
    title: 'Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitte Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitter',
    description: 'Twitter habilita su función Círculos, y te contamos cómo usarla',
    date: '2022-05-29T18:39:34.091Z',
    content: 'En este momento, Twitter está realizando las tareas de expansión de esta nueva funcionalidad a todas las cuentas. Esto quiere decir que de momento al entrar en la red social puede que no veas esta funcionalidad, aunque como mucho en unos pocos días estará plenamente disponible en iOS, Android y la versión web.',
    author: '@JoseAlberto1813'
  },
  {
    title: 'Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitte Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitter',
    description: 'Twitter habilita su función Círculos, y te contamos cómo usarla',
    date: '2022-05-29T18:39:34.091Z',
    content: 'En este momento, Twitter está realizando las tareas de expansión de esta nueva funcionalidad a todas las cuentas. Esto quiere decir que de momento al entrar en la red social puede que no veas esta funcionalidad, aunque como mucho en unos pocos días estará plenamente disponible en iOS, Android y la versión web.',
    author: '@JoseAlberto1813'
  }
])
