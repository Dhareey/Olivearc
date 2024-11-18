

const falomoPano = {
    "default": {
        "firstScene": "JettyEntrance",
        "author": "Olivearc",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "JettyEntrance": {
            "title": "Drive through 1",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Drive_through_1_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -9,
                    "type": "scene",
                    "text": "Drive way 2",
                    "sceneId": "drivethrough2"
                },
                {
                    "pitch": 20,
                    "yaw": -60,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                  
                },
                {
                    "pitch": 30,
                    "yaw": 80,
                    "type": "info",
                    "text": "Falomo Bridge",
                  
                },
                
            ]
        },
        "drivethrough2": {
            "title": "Drive through 2",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Drive_through_2_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Drive through 3",
                    "sceneId": "drivethrough3"
                },
                {
                    "pitch": 10,
                    "yaw": -60,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                  
                },
                {
                    "pitch": 40,
                    "yaw": 60,
                    "type": "info",
                    "text": "Falomo Bridge",
                  
                },
                {
                    "pitch": -9,
                    "yaw": 185,
                    "type": "scene",
                    "text": "Terrace",
                    "sceneId": "JettyEntrance"
                }
            ]
        },
        "drivethrough3": {
            "title": "Drive through 3",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Drive_through_3_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Drive way 1",
                    "sceneId": "driveway1"
                },
                {
                    "pitch": 10,
                    "yaw": -60,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                  
                },
                {
                    "pitch": 20,
                    "yaw": 60,
                    "type": "info",
                    "text": "Falomo Bridge",
                  
                },
                {
                    "pitch": -9,
                    "yaw": -140,
                    "type": "scene",
                    "text": "Drive through 2",
                    "sceneId": "drivethrough2"
                }
            ]
        },
        "driveway1": {
            "title": "Drive way 1",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Drive_way_1_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 3,
                    "yaw": -2,
                    "type": "scene",
                    "text": "Drive way 2",
                    "sceneId": "driveway2"
                },
                {
                    "pitch": 10,
                    "yaw": -60,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                  
                },
               
                {
                    "pitch": -12,
                    "yaw": -110,
                    "type": "scene",
                    "text": "Drive through 3",
                    "sceneId": "drivethrough3"
                },
                {
                    "pitch": -4,
                    "yaw": 117,
                    "type": "scene",
                    "text": "Local Jetty Gate",
                    "sceneId": "localJettyGate"
                }
            ]
        },
        "localJettyGate": {
            "title": "Local Jetty Gate",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Entrance_to_local_jetty_area_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -3,
                    "yaw": -12,
                    "type": "scene",
                    "text": "Local Jetty Entrance",
                    "sceneId": "localJettyEntrance"
                },
               
                {
                    "pitch": -6,
                    "yaw": 120,
                    "type": "scene",
                    "text": "Drive way 1",
                    "sceneId": "driveway1"
                },
                {
                    "pitch": 20,
                    "yaw": -6,
                    "type": "info",
                    "text": "Falomo underbridge",
                  
                }
            ]
        },

        "localJettyEntrance": {
            "title": "Local Jetty Entrance",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Walkway_1_to_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -3,
                    "yaw": -12,
                    "type": "scene",
                    "text": "Local Jetty Walkway",
                    "sceneId": "localJettyWalkway1"
                },
               
                {
                    "pitch": -6,
                    "yaw": 135,
                    "type": "scene",
                    "text": "Local Jetty Gate",
                    "sceneId": "localJettyGate"
                },
                {
                    "pitch": 20,
                    "yaw": -6,
                    "type": "info",
                    "text": "Falomo underbridge",
                  
                }
            ]
        },
        "localJettyWalkway1": {
            "title": "Local Jetty Walkway 1",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Walkway_2_to_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 4,
                    "yaw": 3,
                    "type": "scene",
                    "text": "Local Jetty Walkway 2",
                    "sceneId": "localJettyWalkway2"
                },
               
                {
                    "pitch": -10,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Drive way 1",
                    "sceneId": "localJettyEntrance"
                },
                {
                    "pitch": 20,
                    "yaw": -6,
                    "type": "info",
                    "text": "Falomo underbridge",
                  
                }
            ]
        },
        "localJettyWalkway2": {
            "title": "Local Jetty Walkway 2",
            "hfov": 1000,
            "type": "equirectangular",
            "panorama": '/Falomo/Walkway_3_to_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 4,
                    "yaw": 2,
                    "type": "scene",
                    "text": "Local Jetty Walkway 3",
                    "sceneId": "localJettyWalkway3"
                },
               
                {
                    "pitch": -15,
                    "yaw": 180,
                    "type": "scene",
                    "text": "local Jetty Walkway2",
                    "sceneId": "localJettyWalkway1"
                },
                {
                    "pitch": 20,
                    "yaw": 90,
                    "type": "info",
                    "text": "Falomo underbridge",
                  
                }
            ]
        },
        "localJettyWalkway3": {
            "title": "Local Jetty Walkway 3",
            "hfov": 1000,
            "yaw": -120,
            'pitch': -10,
            "type": "equirectangular",
            "panorama": '/Falomo/Walkway_4_to_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": -176,
                    "type": "scene",
                    "text": "Local Jetty Main Entrance",
                    "sceneId": "localJettyMainEntrance"
                },
               
                {
                    "pitch": -1,
                    "yaw": 80,
                    "type": "scene",
                    "text": "Loca Jetty Walkway 2",
                    "sceneId": "localJettyWalkway2"
                },
            ]
        },
        "localJettyMainEntrance": {
            "title": "Local Jetty Main Entrance",
            "hfov": 1000,
            "pitch": -22,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": '/Falomo/Walkway_to_landing_area_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -22,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Local Jetty Landing 1",
                    "sceneId": "localJettyLanding1"
                },
               
                {
                    "pitch": 3,
                    "yaw": -3,
                    "type": "scene",
                    "text": "Loca Jetty Walkway 3",
                    "sceneId": "localJettyWalkway3"
                },
            ]
        },
        "localJettyLanding1": {
            "title": "Local Jetty Landing 1",
            "hfov": 1000,
            "pitch": -22,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": '/Falomo/Landing_area_1_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Local Jetty Landing 2",
                    "sceneId": "localJettyLanding2"
                },
               
                {
                    "pitch": 7,
                    "yaw": -3,
                    "type": "scene",
                    "text": "Loca Jetty Walkway 3",
                    "sceneId": "localJettyMainEntrance"
                },
            ]
        },
        "localJettyLanding2": {
            "title": "Local Jetty Landing 1",
            "hfov": 1000,
            "yaw": -100,
            "type": "equirectangular",
            "panorama": '/Falomo/Landing_area_2_LJA_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -2,
                    "yaw": 70,
                    "type": "scene",
                    "text": "Local Jetty Landing 2",
                    "sceneId": "localJettyLanding1"
                },
               
            
            ]
        },
        "driveway2": {
            "title": "Drive way 2",
            "hfov": 1000,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": '/Falomo/Drive_way_2_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 3,
                    "yaw": -2,
                    "type": "scene",
                    "text": "Drive way 1",
                    "sceneId": "driveway1"
                },
                {
                    "pitch": 10,
                    "yaw": -110,
                    "type": "info",
                    "text": "Laswa Buiding",
                  
                },
                {
                    "pitch": -9,
                    "yaw": -95,
                    "type": "scene",
                    "text": "Falomo Terminal Entrance",
                    "sceneId": "terminalEntrance"
                  
                },
               
                {
                    "pitch": -11,
                    "yaw": 190,
                    "type": "scene",
                    "text": "Drive way 3",
                    "sceneId": "driveway3"
                },
                {
                    "pitch": -4,
                    "yaw": 117,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                }
            ]
        },
        "driveway3": {
            "title": "Drive way 2",
            "hfov": 1000,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": '/Falomo/Drive_way_4_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 3,
                    "yaw": -2,
                    "type": "scene",
                    "text": "Drive way 2",
                    "sceneId": "driveway2"
                },
                {
                    "pitch": -3,
                    "yaw": 89,
                    "type": "info",
                    "text": "Falomo Terminal Exit"
                  
                },
               
           
                {
                    "pitch": 20,
                    "yaw": 70,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                }
            ]
        },

        "terminalEntrance": {
            "title": "Falomo Terminal Entrance",
            "hfov": 1000,
            "yaw": 180,
            "pitch": -15,
            "type": "equirectangular",
            "panorama": '/Falomo/Entrance_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Terminal Lobby",
                    "sceneId": "lobby"
                },
           
                {
                    "pitch": 4,
                    "yaw": 0,
                    "type": "info",
                    "text": "Mtn & Laswa Car Park",
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Driveway 2",
                    "sceneId": "driveway2"
                }
            ]
        },
        "lobby": {
            "title": "Falomo Lobby",
            "hfov": 1000,
            "yaw": 180,
            "pitch": -30,
            "type": "equirectangular",
            "panorama": '/Falomo/Entry_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 180,
                    "type": "info",
                    "text": "Luggage Check",
                },
                {
                    "pitch": -15,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Mini Restaurant",
                    "sceneId": "snacksArea"
                },
                {
                    "pitch": -15,
                    "yaw": 200,
                    "type": "scene",
                    "text": "Terminal Lobby2",
                    "sceneId": "lobby2"
                },
           
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Terminal Entrance",
                    "sceneId": "terminalEntrance"
                },
                {
                    "pitch": -5,
                    "yaw": 100,
                    "type": "info",
                    "text": "Ticketing Area",
                },
                {
                    "pitch": -5,
                    "yaw": -100,
                    "type": "info",
                    "text": "Rest rooms",
                },
                {
                    "pitch": -10,
                    "yaw": 215,
                    "type": "info",
                    "text": "ATM",
                }
            ]
        },
        "lobby2": {
            "title": "Falomo Lobby",
            "hfov": 1000,
            "yaw": 180,
            "pitch": -8,
            "type": "equirectangular",
            "panorama": '/Falomo/Path_to_waiting_area_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 8,
                    "type": "info",
                    "text": "Luggage Check",
                },
                {
                    "pitch": 0,
                    "yaw": 2,
                    "type": "scene",
                    "text": "Terminal Entrance",
                    "sceneId": "lobby"
                },
         
                {
                    "pitch": -1,
                    "yaw": -29,
                    "type": "info",
                    "text": "ATM",
                },
                {
                    "pitch": -17,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Departure Waiting Area 2",
                    "sceneId": "departureWaitingArea2"
                },
                {
                    "pitch": -17,
                    "yaw": 220,
                    "type": "scene",
                    "text": "Departure Waiting Area 1",
                    "sceneId": "departureWaitingArea1"
                }
            ]
        },
        "snacksArea": {
            "title": "Falomo Lobby",
            "hfov": 1000,
            "yaw": 110,
            "pitch": 0,
            "type": "equirectangular",
            "panorama": '/Falomo/Snacks_area_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": 137,
                    "type": "info",
                    "text": "Cowry Card Point",
                },
                {
                    "pitch": -6,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Lobby 3",
                    "sceneId": "lobby3"
                },
                {
                    "pitch": -10,
                    "yaw": 190,
                    "type": "info",
                    "text": "ATM",
                },
                {
                    "pitch": -17,
                    "yaw": 155,
                    "type": "scene",
                    "text": "Lobby 2",
                    "sceneId": "lobby2"
                },
           
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "info",
                    "text": "Mini Restaurant",
                },
                {
                    "pitch": -7,
                    "yaw": -45,
                    "type": "info",
                    "text": "Ticketing Area",
                },
                {
                    "pitch": -5,
                    "yaw": -135,
                    "type": "info",
                    "text": "Rest rooms",
                },
                {
                    "pitch": -20,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Lobby 1",
                    "sceneId": "lobby"
                }
               
            ]
        },
        "lobby3": {
            "title": "Falomo Lobby 3",
            "hfov": 1000,
            "yaw": -100,
            "pitch": -20,
            "type": "equirectangular",
            "panorama": '/Falomo/Path_to_arrivals_waiting_area_.jpg', // Adjust the path as needed
            "showControls": true,
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": 137,
                    "type": "info",
                    "text": "Entrance to Upstairs offices",
                },
                {
                    "pitch": -6,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Mini Restaurant",
                    "sceneId": "snacksArea"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "info",
                    "text": "Office",
                },
                {
                    "pitch": -15,
                    "yaw": -120,
                    "type": "scene",
                    "text": "Arrival Waiting Area",
                    "sceneId": "arrivalWaitingArea"
                }
               
            ]
        }
        

    }
}


export default falomoPano