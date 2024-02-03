import { Project } from "../../model/project";

export function getSoftwareProjects(): Project[] {

    return [
        {
            id: 0,
            title: "Compulsive Shopping",
            images: [
                "/assets/images/projects/software/compulsive-shopping-1.png",
                "/assets/images/projects/software/compulsive-shopping-2.png",
                "/assets/images/projects/software/compulsive-shopping-3.png",
            ],
            tags: [
                { color: "#0468D7", name: "Flutter" },
                { color: "#1c2834", name: "Dart" },
                { color: "#044a64", name: "SQLite" },
            ],
            link: "https://play.google.com/store/apps/details?id=com.nck.dev.app.compulsive_shopping",
            linkIcon: "/assets/icons/play-store.svg",
            description: "\"Compulsive Shopping\" is an Android mobile application that was developed during 2022 and its current state is in maintenance.<br><br>The app is designed to help planning unnecessary expenses by tracking how much of your budget takes an item/activity you want to buy. Before buying something you should check your priorities there and see if you really want to buy that. Instead of tracking your expenses this app aims to avoid them in first place.<br><br>The code of this app is closed, but the app is available for free and all data is stored locally in a SQLite database which can be exported to keep having access to your data. No connections to the internet are done within the app."
        },
        {
            id: 1,
            title: "Diogenes",
            images: ["/assets/images/projects/software/diogenes.gif"],
            tags: [
                { color: "#80ea6e", name: "Spring Boot" },
                { color: "#006b8f", name: "Java" },
                { color: "#1976d2", name: "Angular" },
                { color: "#3178c6", name: "Typescript" },
                { color: "#1d63ed", name: "Docker" },
                { color: "#099639", name: "Nginx" },
            ],
            link: "https://github.com/nck974/diogenes",
            linkIcon: "/assets/icons/github.svg",
            description: "Diogenes is an ongoing project started early 2023.<br><br>This project aims to create an home inventory of all items that someone has at home to get an overview of what you have and what you could get rid off. The first goal of this project is minimizing the time spent using the app adding items, therefore some functionality like bulk import of images or saving the properties of the last item have been implemented.<br><br>This project is build with a backend using Spring Boot (Java 17) connected to a postgres database and a frontend build on Angular 17 using Material. Everything is self hosted running on containers with nginx as a web server.<br><br>This code is open source and can be checked out on github."
        },
        {
            id: 2,
            title: "GPX Geo filter",
            images: [
                "/assets/images/projects/software/gpx-geo-filter-1.png",
            ],
            tags: [
                { color: "#1b362b", name: "Rust" },
            ],
            link: "https://github.com/nck974/gpx-geo-filter",
            linkIcon: "/assets/icons/github.svg",
            description: "This project filters a set of GPS files to return only the ones that are within the given area.<br><br>This project was created to filter a big amount of recorded GPS tracks (around 6000 files) to then be able to visualize them in some frontend, (for example erik.github.io/derive/).<br><br>Initially this project started in python but the performance was not good enough in a 2020 i7 laptop, so it was migrated to rust and then optimized by doing some pre-filtering based on the first coordinate found on the file.<br><br>The performance improvements went from between 5 to 15 minutes to under 20 seconds for 6000 files.<br><br>A frontend to select the coordinates and retrieve the file is still to be implemented."
        },
        {
            id: 3,
            title: "py-geo-locator",
            images: [
                "/assets/images/projects/software/py-geo-locator-1.png",
                "/assets/images/projects/software/py-geo-locator-2.png"
            ],
            tags: [
                { color: "#2980B9", name: "Python" },
                { color: "#0073A1", name: "Perl" },
            ],
            link: "https://github.com/nck974/py-geo-locator",
            linkIcon: "/assets/icons/github.svg",
            description: "This small projects was written as part of a bigger task of geo locating all my old photos to be able to search by the place they were take instead of just by folders or dates.<br><br>What is implemented is matching GPX tracks (recorded in different apps like the old 'Endomondo' or 'Strava) and overwriting the metadata of the photo if the time taken was within a track.<br><br>It is mostly written in Python but it has some code written in Perl making use of the library Image::ExifTool which performed better overwriting data of RAW images."
        },
        {
            id: 4,
            title: "Memories",
            images: [
                "/assets/images/projects/software/memories-1.gif",
            ],
            tags: [
                { color: "#0468D7", name: "Flutter" },
                { color: "#1c2834", name: "Dart" },
            ],
            link: "https://github.com/nck974/Memories",
            linkIcon: "/assets/icons/github.svg",
            description: "This is a small android game that was developed as a gift. It is a quiz game where the player has to answer some questions and in return they get some memories as photos or just plain text unlocked.<br><br>The game is written in Fluter (Dart) and the content of the game can dynamically be extended by just adding images and configuring a JSON file with the questions."
        },
        {
            id: 5,
            title: "Self hosted vaultwarden",
            images: [
                "/assets/images/projects/software/vaultwarden-1.png",
            ],
            tags: [
                { color: "#1d63ed", name: "Docker" },
                { color: "#099639", name: "Nginx" },
            ],
            link: "https://github.com/nck974/self-hosted-vaultwarden-setup",
            linkIcon: "/assets/icons/github.svg",
            description: "This project contains the documentation of how to configure and deploy the infrastructure I used to locally deploy and self-host a password manager."
        },
        {
            id: 6,
            title: "Interactive Expenses Report",
            images: [
                "/assets/images/projects/software/interactive-expenses-report-1.gif",
            ],
            tags: [
                { color: "#2980B9", name: "Python" },
            ],
            link: "https://github.com/nck974/interactive-expenses-report",
            linkIcon: "/assets/icons/github.svg",
            description: "This project is built on top of the data extracted from expenses tracking apps (before 'Mobills' now 'Money Manager'). The goal was to display a better visualization of the statistics that what the apps offer by them self, and just use the apps for the ease of tracking.<br><br>This project is written in python (with some HTML & CSS templates) and the main motivation was to generate a single file report that could be shared, so that the receiver can just open the file and be able to interact with it."
        },
    ];

}
