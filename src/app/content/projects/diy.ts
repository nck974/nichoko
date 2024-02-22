import { Project } from "../../model/project";

export function getDiyProjects(): Project[] {

    return [
        {
            id: 0,
            title: "Kitchen table",
            images: [
                "/assets/images/projects/diy/kitchen-table-1.jpg",
                "/assets/images/projects/diy/kitchen-table-2.jpg",
                "/assets/images/projects/diy/kitchen-table-3.jpeg",
            ],
            description: "This project was build with the goal of using as good as possible the available space in the kitchen, therefore it has asymmetrical legs to provide the biggest surface possible without colliding with the radiators."
        },
        {
            id: 1,
            title: "Kalimba",
            images: [
                "/assets/images/projects/diy/kalimba-1.jpg",
                "/assets/images/projects/diy/kalimba-2.jpg",
                "/assets/images/projects/diy/kalimba-3.jpg",
            ],
            description: "I built this instrument some time ago. It is made out of a coconut shell, an old piece of wood and the metal of some old car shield wipers.<br><br>This was done with only manual tools excluding the wood burner for the face."
        },
        {
            id: 2,
            title: "Electric guitar",
            images: [
                "/assets/images/projects/diy/guitar-1.jpg",
                "/assets/images/projects/diy/guitar-2.jpg",
                "/assets/images/projects/diy/guitar-3.jpg",
            ],
            description: "All the pieces where bought as a kit so most of the work involved just the preparation of the wood and then doing the paint job.<br><br>First it had to be sanded to get a smooth surface. Then it involved many paint layers as the primer included in the kit seems to be not working as expected. Spraying the color also required some experience which made me redo everything a couple of times. Finally for the shiny look it also required a good quality varnish and many hours of hand polishing to get to the results of the photo.<br><br>As it was part of an affordable kit, the electronic components where not great and some electric noise could be heard with the guitar connected which could be partially solved by using aluminum foil inside."
        },
        {
            id: 3,
            title: "Distortion pedal",
            images: [
                "/assets/images/projects/diy/distortion-pedal-1.jpg",
                "/assets/images/projects/diy/distortion-pedal-2.jpg",
                "/assets/images/projects/diy/distortion-pedal-3.jpg",
            ],
            description: "This small project was bought as a kit which involved soldering all components and assembling a frame for it. The frame was spray painted, and polished for its end result.<br><br>The pedal worked as expected but using an affordable power source introduced too much noise to the signal, so a buying a quality DC power source is required for this projects."
        },
        {
            id: 4,
            title: "Heater controller",
            images: [
                "/assets/images/projects/diy/heater-controller-1.jpg",
                "/assets/images/projects/diy/heater-controller-2.jpg",
                "/assets/images/projects/diy/heater-controller-3.jpg",
            ],
            tags: [
                {
                    name: "Arduino",
                    color: "#008184"
                }, {
                    name: "C++",
                    color: "#048"
                },
            ],
            description: "This project used an esp32 micro-controllers connected to a cheap timer to control the valves that regulated the heater. Its goal was to connect it to my home automation with Home Assistant<br><br>Unfortunately this project could not be finished. Everything was working as expected, but the energy consumption of the esp32 plus the motor was too high to have it running on batteries for a long time without having it charging all the time. Moving to a chip with lower energy consumption using BLE would have made the project too expensive compared to other solutions already in the market, so I decided to not continue it."
        },
        {
            id: 5,
            title: "Recycled bed wardrobe",
            images: [
                "/assets/images/projects/diy/wardrobe-1.jpg",
            ],
            description: "This wardrobe was built from a recycled bed frame made of good quality wood. It takes just the available space behind a door and under the roof."
        },
        {
            id: 6,
            title: "Recycled bed shelf",
            images: [
                "/assets/images/projects/diy/shelf-1.jpg",
                "/assets/images/projects/diy/shelf-2.jpg",
            ],
            description: "This shelf was again built from a recycled bed. It's only purpose was to be used to store stuff where it was not visible, so it just had to be functional."
        },
        {
            id: 7,
            title: "Coconut pot",
            images: [
                "/assets/images/projects/diy/pot-coconut-1.jpg",
                "/assets/images/projects/diy/pot-coconut-2.jpg",
            ],
            description: "This quick project used the shell of a coconut I ate to give home to a plant which has been living there for 4 years now."
        },
        {
            id: 8,
            title: "Shoe rack",
            images: [
                "/assets/images/projects/diy/shoe-rack-1.jpg",
                "/assets/images/projects/diy/shoe-rack-2.jpg",
                "/assets/images/projects/diy/shoe-rack-3.jpg",
            ],
            description: "Small and cheap shoe rack built to fit exactly under the available space of a table."
        },
        {
            id: 9,
            title: "Tools cabinet",
            images: [
                "/assets/images/projects/diy/tools-cabinet-1.jpg",
                "/assets/images/projects/diy/tools-cabinet-2.jpg",
                "/assets/images/projects/diy/tools-cabinet-3.jpg",
            ],
            description: "This was build to store all tools and have quick access to some of them. It used affordable particle board for the interior, then it was covered with a thin layer of oak on the outside to give it the look of wood. For the doors light pine was used.<br><br>The varnishing was done using and air compressor which I had not experience before, therefore the liens are too visible and could have been improved."
        },
        {
            id: 10,
            title: "Under-stairs cupboard",
            images: [
                "/assets/images/projects/diy/chairs-cupboard-1.jpg",
                "/assets/images/projects/diy/chairs-cupboard-2.jpg",
            ],
            description: "This was again built using a recycled Ikea table which was going to be thrown away and some wood leftovers. It was built to take the unused space under the stairs."
        },
        {
            id: 11,
            title: "Bike stand",
            images: [
                "/assets/images/projects/diy/bike-stand-1.jpg",
                "/assets/images/projects/diy/bike-stand-2.jpg",
            ],
            description: "A simple bike stand for a fixed wheel size that was built using wood leftovers and then spray painted to match the floor mats."
        },
    ];

}
