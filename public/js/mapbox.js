export const displayMap = locations => {

    mapboxgl.accessToken = 'pk.eyJ1IjoicmVubWlzc2lvbiIsImEiOiJjazk4a3duOHcwMzZ3M2dvcDNybHIzZjZ2In0.MKK1AH7p8WOX0TOCDEsNfQ';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/renmission/ck98l6htt00341ins66kjcdy1',
        scrollZoom: false,
        // center: [-118.113491, 34.111745],
        // zoom: 10,
        // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // add the marker
        new mapboxgl.Marker({
                element: el,
                anchor: 'bottom'
            })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // add popup
        new mapboxgl.Popup({
                offset: 30
            })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description} </p>`)
            .addTo(map);

        // extends the map bounds to include current locations
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
}