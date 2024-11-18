

const coconutPano = {
    "default": {
        "firstScene": "JettyEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "JettyEntrance": {
            "title": "Coconut Landing terrace",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Coconut/Waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -2,
                    "yaw": 7,
                    "type": "scene",
                    "text": "Landing",
                    "sceneId": "Landing"
                },
                {
                    "pitch": -20,
                    "yaw": 180,
                    "type": "info",
                    "text": "Waiting Area",
                  
                }
            ]
        },
        "Landing": {
            "title": "Dock Landing",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Coconut/Landing_area_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Terrace",
                    "sceneId": "JettyEntrance"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "info",
                    "text": "Waiting Area",
                  
                }
            ]
        }

    }
}

export default coconutPano