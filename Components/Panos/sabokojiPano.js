

const sabokojiPano = {
    "default": {
        "firstScene": "JettyEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "JettyEntrance": {
            "title": "Sagbokoji Jetty Path",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Sagbokoji/Walkthrough_to_walkway.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -2,
                    "yaw": 7,
                    "type": "scene",
                    "text": "Landing",
                    "sceneId": "Landing"
                },
                
            ]
        },
        "Landing": {
            "title": "Dock Landing",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Sagbokoji/Walkway_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Jetty Path",
                    "sceneId": "JettyEntrance"
                },
                {
                    "pitch": 2,
                    "yaw": 3,
                    "type": "scene",
                    "text": "Concrete Landing",
                    "sceneId": "concreteLanding1"
                },
                {
                    "pitch": -5,
                    "yaw": 75,
                    "type": "scene",
                    "text": "Boat Area 1",
                    "sceneId": "boatArea1"
                }
             
            ]
        },
        "concreteLanding1": {
            "title": "Dock Landing1",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Sagbokoji/Walkway_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 178,
                    "type": "scene",
                    "text": "Landing Dock",
                    "sceneId": "Landing"
                },
                {
                    "pitch": 2,
                    "yaw": -1,
                    "type": "scene",
                    "text": "Dock",
                    "sceneId": "Dock"
                },
                {
                    "pitch": -12,
                    "yaw": 110,
                    "type": "scene",
                    "text": "Boarding Area 1",
                    "sceneId": "boatArea1"
                },
                {
                    "pitch": -12,
                    "yaw": -70,
                    "type": "scene",
                    "text": "Boarding Area 2",
                    "sceneId": "boatArea2"
                }
             
            ]
        },
        "Dock": {
            "title": "Dock",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Sagbokoji/Walkway_view_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 178,
                    "type": "scene",
                    "text": "Dock Walkway",
                    "sceneId": "concreteLanding1"
                }
             
            ]
        },
        "boatArea1": {
            "title": "Boarding Area 1",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Sagbokoji/Boat_area_1_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": -130,
                    "type": "scene",
                    "text": "Concrete Landing",
                    "sceneId": "Landing"
                },
                {
                    "pitch": 2,
                    "yaw": -1,
                    "type": "info",
                    "text": "Boarding Area"
                }
             
            ]
        },
        "boatArea2": {
            "title": "Boarding Area 1",
            "hfov": 300,
            "type": "equirectangular",
            "panorama": '/Sagbokoji/Boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Concrete Landing",
                    "sceneId": "concreteLanding1"
                },
                {
                    "pitch": 2,
                    "yaw": -1,
                    "type": "info",
                    "text": "Boarding Area 2"
                }
             
            ]
        }

    }
}

export default sabokojiPano