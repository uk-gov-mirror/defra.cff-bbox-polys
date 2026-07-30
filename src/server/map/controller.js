import { config } from '../../config/config.js'

export const mapController = {
  handler(_request, h) {
    return h.view('map/index', {
      pageTitle: 'Map',
      heading: 'Map',
      azureMapsKey: config.get('azureMapsKey'),
      azureMapsUrl: config.get('azureMapsUrl'),
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Map'
        }
      ]
    })
  }
}
