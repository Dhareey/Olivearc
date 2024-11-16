
// badorePano.js

const etegbinPano = {
    "default": {
        "firstScene": "JettyEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "JettyEntrance": {
            "title": "Etegbin Entrance",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walk_through_to_jetty_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -2,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Entrance Walkway",
                    "sceneId": "walkway1"
                }
            ]
        },
        "walkway1": {
            "title": "Etegbin Walkway1",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walk_through_to_Jetty_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 14,
                    "type": "scene",
                    "text": "Entrance Walkway",
                    "sceneId": "walkway2"
                },
                {
                    "pitch": -15,
                    "yaw": -130,
                    "type": "scene",
                    "text": "Etegbin Entrance",
                    "sceneId": "JettyEntrance"
                },
                {
                    "pitch": -14,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Waiting room Front",
                    "sceneId": "waitingRoomFront"
                }
            ]
        },
        "walkway2": {
            "title": "Etegbin Walkway2",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkway_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 6,
                    "yaw": -1,
                    "type": "scene",
                    "text": "Concrete Landing",
                    "sceneId": "landing1"
                },
                {
                    "pitch": -12,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Entrance Walkway",
                    "sceneId": "walkway1"
                },
                {
                    "pitch": -12,
                    "yaw": 80,
                    "type": "scene",
                    "text": "Waiting Room Back Entrance",
                    "sceneId": "Entrance"
                }
            ]
        },
        "landing1": {
            "title": "Etegbin Landing1",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkay_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Landing Walkway",
                    "sceneId": "landing2"
                },
                {
                    "pitch": -30,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Etegbin walkway2",
                    "sceneId": "walkway2"
                }
            ]
        },
        "landing2": {
            "title": "Landing Walkway",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkway_view_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw":8,
                    "type": "scene",
                    "text": "Dock",
                    "sceneId": "Dock"
                },
                {
                    "pitch": -14,
                    "yaw": -170,
                    "type": "scene",
                    "text": "Concrete landing",
                    "sceneId": "landing1"
                }
            ]
        },
        "Dock": {
            "title": "Dock",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Walkway_view_4.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -14,
                    "yaw": -173,
                    "type": "scene",
                    "text": "Landing walkway",
                    "sceneId": "landing2"
                }
            ]
        },
        
        "Entrance": {
            "title": "Etegbin Entrance",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Stairs_to_waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 20,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Waiting Room",
                    "sceneId": "waitingArea"
                },
                {
                    "pitch": -30,
                    "yaw": 120,
                    "type": "scene",
                    "text": "Walkway",
                    "sceneId": "walkway2"
                }
            ]
        },
        "waitingArea": {
            "title": "Waiting Room",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/Waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -50,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Back Entrance",
                    "sceneId": "Entrance"
                },
                {
                    "pitch": 0,
                    "yaw": -4,
                    "type": "scene",
                    "text": "Front Entrance",
                    "sceneId": "waitingRoomFront"
                }
            ]
        },
        "waitingRoomFront": {
            "title": "Waiting Room Front",
            "hfov": 300,
            "yaw":100,
            "type": "equirectangular",
            "panorama": '/etegbin_jetty/entranceFront.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Entrance walkway",
                    "sceneId": "walkway1"
                },
                {
                    "pitch": 15,
                    "yaw": 120,
                    "type": "scene",
                    "text": "Waiting Room",
                    "sceneId": "waitingArea"
                }
            ]
        }
    }
};

export default etegbinPano;
