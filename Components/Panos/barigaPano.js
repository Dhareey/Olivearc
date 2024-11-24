const barigaPano = {
    "default": {
        "firstScene": "BarigaEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "BarigaEntrance": {
            "title": "Bariga Entrance",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Main_entrance(1).jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Entrance",
                    "sceneId": "Drive"
                }
            ]
        },
        "Drive": {
            "title": "Drive Through",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Drive_through.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 8,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Drive Through",
                    "sceneId": "Carpark"
                }
            ]
        },
        "Carpark": {
            "title": "Car Park",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Car_pack_2_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Car Park",
                    "sceneId": "Carpark1"
                }
            ]
        },
        "Carpark1": {
            "title": "Car Park",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Car_park_1_view_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Car Park",
                    "sceneId": "Carpark2"
                }
            ]
        },
        "Carpark2": {
            "title": "Car Park",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Car_park_1_view_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Car Park",
                    "sceneId": "storage"
                }
            ]
        },
        "storage": {
            "title": "Storage Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Storage_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Storage",
                    "sceneId": "toilet"
                }
            ]
        },
        "toilet": {
            "title": "Toilet Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Tiolet_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Toilet Area",
                    "sceneId": "walkthrough"
                }
            ]
        },
        "walkthrough": {
            "title": "walkthrough to Baording Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Walk_through_to_boarding_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "walkthrough to Baording Area",
                    "sceneId": "walkthrough1"
                }
            ]
        },
        "walkthrough1": {
            "title": "Entry",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Entry.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Entry",
                    "sceneId": "water"
                }
            ]
        },
        "water": {
            "title": "Water Front",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Waterfont_and_sitting_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Water Front",
                    "sceneId": "water1"
                }
            ]
        },
        "water1": {
            "title": "Boarding Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boarding_area.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boarding Area",
                    "sceneId": "water2"
                }
            ]
        },
        "water2": {
            "title": "Boarding Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Entry_to_landing_&_boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boarding Area",
                    "sceneId": "boardingarea"
                }
            ]
        },
        "boardingarea": {
            "title": "Boarding Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Entry_to_landing_&_boat_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boarding Area",
                    "sceneId": "boardinglandingarea"
                }
            ]
        },
        "boardinglandingarea": {
            "title": "Boarding Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boat_area_1.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boarding Area",
                    "sceneId": "Boatarea"
                }
            ]
        },
        "Boatarea": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boatarea1"
                }
            ]
        },
        "Boatarea": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boat_area_2.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boatarea1"
                }
            ]
        },
        "Boatarea1": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boat_area_3.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boatarea2"
                }
            ]
        },
        "Boatarea2": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boat_area_4.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "Boatarea3"
                }
            ]
        },
        "Boatarea3": {
            "title": "Boat Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/bariga/Boat_area_5.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Boat Area",
                    "sceneId": "BarigaEntrance"
                }
            ]
        },
    }
}

export default barigaPano;