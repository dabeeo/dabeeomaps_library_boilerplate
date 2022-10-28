import {Maps} from 'dabeeomaps';

    async function init () {

        const dabeeoMaps = new Maps();

        const mapData = await dabeeoMaps.getMapData({
            clientId: "75hb8YSnAokb-sZ04aDR91",
            clientSecret: "0f7ad84f160c7b3fd1849a7920af718b",
        });
        const mapContainer = document.getElementById('map');

        const mapOption = Object.assign({
        });
        const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);

        // naviResponse 객체 반환

        ///////////////////////////////////////

    }

    init(); 
