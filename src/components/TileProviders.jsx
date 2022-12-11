/**
 * Definition of providers.
 * Adapted from https://github.com/leaflet-extras/leaflet-providers/blob/master/leaflet-providers.js
 */

const attributionOpenStreetMap =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export const TileProviders = {
  OpenStreetMap: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    variants: {
      Mapnik: {},
      BlackWhite: {
        url: "https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
        options: {
          attribution: "" + attributionOpenStreetMap + "",
        },
      },
      DE: {
        url: "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
        options: {
          maxZoom: 18,
        },
      },
      France: {
        url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
        options: {
          maxZoom: 20,
          attribution:
            "&copy; OpenStreetMap France | " + attributionOpenStreetMap + "",
        },
      },
      HOT: {
        url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        options: {
          attribution:
            "" +
            attributionOpenStreetMap +
            ", " +
            'Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> ' +
            'hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
        },
      },
    },
  },
};
