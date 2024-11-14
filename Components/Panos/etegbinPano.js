
// badorePano.js

const etegbinPano = {
    "default": {
        "firstScene": "Entrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "Entrance": {
            "title": "Etegbin Entrance",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/outside_stairs.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 20,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Jetty Entrance",
                    "sceneId": "entrance"
                }
            ]
        }
    }
};

export default etegbinPano;
