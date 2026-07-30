export const homeController = {
  handler(_request, h) {
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Welcome',
      routes: [
        { href: '/map', text: 'Map', description: 'Draw and colour polygons on an Azure Map' },
        { href: '/bing-search', text: 'Bing Maps Location Search', description: 'Search a location, view its bounding box and check polygon intersection' },
        { href: '/about', text: 'About', description: 'About this service' }
      ]
    })
  }
}
