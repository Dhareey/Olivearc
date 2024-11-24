
const oworoPano = {
    "default": {
        "firstScene": "oworoEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "oworoEntrance": {
            "title": "Oworoshoki Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Main_entrance.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -5,
                    "type": "scene",
                    "text": "Main Entrance",
                    "sceneId": "gatewalkway"
                }
            ]
        },
        "gatewalkway": {
            "title": "Gate Walk way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Gate_walkway.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Gate Walk Way",
                    "sceneId": "WaitingArea"
                }
            ]
        },
        "WaitingArea": {
            "title": "Waiting Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Waiting_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": -30,
                    "type": "scene",
                    "text": "Waiting Area",
                    "sceneId": "Waitingcorridor"
                }
            ]
        },
        "Waitingcorridor": {
            "title": "Waiting Area Corridor",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Waiting_area_corridor.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Waiting Corridor",
                    "sceneId": "Carpark1"
                }
            ]
        },
        "Carpark1": {
            "title": "Car Park",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Car_park_area_4.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Car Park",
                    "sceneId": "Backyard"
                }
            ]
        },
        "Backyard": {
            "title": "Back yard",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Backyard_walkway_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Back yard",
                    "sceneId": "Backyard2"
                }
            ]
        },
        "Backyard2": {
            "title": "Back yard 2",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Backyard_walk_way_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Back yard 2",
                    "sceneId": "Toilet"
                }
            ]
        },
        "Toilet": {
            "title": "Toilet",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Toilet_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Toilet",
                    "sceneId": "Toilet1"
                }
            ]
        },
        "Toilet1": {
            "title": "Toilet 1",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Toilet_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Toilet1",
                    "sceneId": "GardenArea2"
                }
            ]
        },
        "GardenArea2": {
            "title": "Garden Area 1",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Garden_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Garden Area",
                    "sceneId": "Walkwaytoboat"
                }
            ]
        },
        "Walkwaytoboat": {
            "title": "Walk way to Boat",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Walkway_to_boat_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way to Boat 2",
                    "sceneId": "Walkwaytoboat2"
                }
            ]
        },
        "Walkwaytoboat2": {
            "title": "Walk way to Boat",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Walkway_to_boat_3jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way to Boat 2",
                    "sceneId": "Walkwaytoboat2"
                }
            ]
        },
        "Walkwaytoboat2": {
            "title": "Walk way to Boat",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Walkway_to_boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way to Boat 3",
                    "sceneId": "LandingArea"
                }
            ]
        },
        "LandingArea": {
            "title": "Landing and Takeoff Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Landing_and_takeoff_area_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "LandingArea1"
                }
            ]
        },
        "LandingArea1": {
            "title": "Landing and Takeoff Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Landing_and_takeoff_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "LandingArea2"
                }
            ]
        },
        "LandingArea2": {
            "title": "Landing and Takeoff Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/oworo/Landing_and_takeoff_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "oworoEntrance"
                }
            ]
        },
        }
}

export default oworoPano;