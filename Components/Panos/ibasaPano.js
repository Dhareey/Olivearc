// badorePano.js


const ibasaPano = {
    "default": {
        "firstScene": "IbasaEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "IbasaEntrance": {
            "title": "Ibasa Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/ibasa_jetty/Walkway_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Waiting Room Entrance",
                    "sceneId": "waitingEntrance"
                },
                {
                    "pitch": -1,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Walkway1",
                    "sceneId": "walkway1"
                },
                {
                    "pitch": 5,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Walkway2",
                    "sceneId": "walkway2"
                }
                
            ]
        },
        "waitingEntrance": {
            "title": "Waiting Room",
            "hfov": 10000,
            "pitch": 15,
            "type": "equirectangular",
            "panorama": '/ibasa_jetty/Waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Entrance",
                    "sceneId": "IbasaEntrance"
                },
                {
                    "pitch": -15,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Walkway1",
                    "sceneId": "walkway1"
                },
                {
                    "pitch": -8,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Walkway2",
                    "sceneId": "walkway2"
                }
                
            ]
        },
        "walkway1": {
            "title": "Walkway1",
            "hfov": 10000,
            "pitch": 15,
            "type": "equirectangular",
            "panorama": '/ibasa_jetty/Walkway_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -18,
                    "yaw": 169,
                    "type": "scene",
                    "text": "Waiting Room Entrance",
                    "sceneId": "waitingEntrance"
                },
                {
                    "pitch": -16,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Ibasa Entrance",
                    "sceneId": "IbasaEntrance"
                },
                {
                    "pitch": 2,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walkway2",
                    "sceneId": "walkway2"
                }
                
            ]
        },
        "walkway2": {
            "title": "Walkway2",
            "hfov": 10000,
            "pitch": -2,
            "pitch": -15,
            "type": "equirectangular",
            "panorama": '/ibasa_jetty/Walkway_view_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -6,
                    "yaw": -1,
                    "type": "scene",
                    "text": "Boarding Area",
                    "sceneId": "boardingArea1"
                },
                {
                    "pitch": -15,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Walkway",
                    "sceneId": "walkway1"
                },
                
            ]
        },
        "boardingArea1": {
            "title": "Boarding Area",
            "hfov": 10000,
            "pitch": -2,
            "pitch": -15,
            "type": "equirectangular",
            "panorama": '/ibasa_jetty/Boarding_area_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Loading Dock",
                    "sceneId": "loadingDock"
                },
                {
                    "pitch": -15,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Walkway2",
                    "sceneId": "walkway2"
                },
                
            ]
        },
        "loadingDock": {
            "title": "Loading Dock",
            "hfov": 10000,
            "pitch": -2,
            "pitch": -15,
            "type": "equirectangular",
            "panorama": '/ibasa_jetty/Boarding_area_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Boarding Area",
                    "sceneId": "boardingArea1"
                },
                
            ]
        }
    }
};

export default ibasaPano;