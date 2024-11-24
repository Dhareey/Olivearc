



const takwabayPano = {
    "default": {
        "firstScene": "TakwayBayEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "TakwayBayEntrance": {
            "title": "Walk through round the building",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_4_around_bulding.jpg', // Adjust the path as needed
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": -5,
                    "type": "scene",
                    "text": "Walk through round the building",
                    "sceneId": "LandingArea2"
                }
            ]
        },
        "LandingArea2": {
            "title": "Walk through round the building",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_3_around_building.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk through round the building",
                    "sceneId": "Walkwayview",
                }
            ]
        },
        "Walkwayview": {
            "title": "Walk through round the building",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_2_around_building.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 15,
                    "type": "scene",
                    "text": "Walk through round the building",
                    "sceneId": "Walkwayview2",
                }
            ]
        },
        "Walkwayview2": {
            "title": "Walk through round the building",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkthrough_1_around_building.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Walk through round the building",
                    "sceneId": "Entrance",
                }
            ]
        },
        "Entrance":  { 
        "title": "Walk way",
        "hfov": 100,
        "type": "equirectangular",
        "panorama": '/takwa_bay/Walkway_view_1.jpg',
        "showControls": false,
        "hotSpots": [
            {
                "pitch": 1,
                "yaw": 1,
                "type": "scene",
                "text": "Walk way",
                "sceneId": "Walkwaythrough1",
            }
            ]
        },
        "Walkwaythrough1":  { 
            "title": "Walk way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkway_view_3.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "Walkwaythrough2",
                },
            ]
        },
        "Walkwaythrough2":  { 
            "title": "Walk way",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Walkway_view_2.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Walk way",
                    "sceneId": "Walkwaythrough2",
                },
            ]
        },
        "Walkwaythrough2":  { 
            "title": "Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Landing_area_2.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "Walkwaythrough4",
                },
            ]
        },
        "Walkwaythrough4":  { 
            "title": "Landing Area",
            "hfov": 100,
            "type": "equirectangular",
            "panorama": '/takwa_bay/Landing_area_1.jpg',
            "showControls": false,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Landing Area",
                    "sceneId": "TakwayBayEntrance",
                },
            ]
        },
        // "TakwayBay":  { 
        //     "title": "TakwayBay Entrance",
        //     "hfov": 100,
        //     "type": "equirectangular",
        //     "panorama": '/takwa_bay/Entrance_and_exit.jpg',
        //     "showControls": false,
        //     "hotSpots": [
        //         {
        //             "pitch": 1,
        //             "yaw": 1,
        //             "type": "scene",
        //             "text": "TakwayBay Entrance",
        //             "sceneId": "TakwayBay",
        //         },
        //     ]
        // }
    }
}

export default takwabayPano;