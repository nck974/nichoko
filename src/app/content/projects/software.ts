import { SoftwareProject } from "../../model/SoftwareProject";

export function getSoftwareProjects(): SoftwareProject[] {

    return [
        {
            id: 0,
            title: "Compulsive Shopping",
            images: ["/assets/images/projects/software/compulsive-shopping.png"],
            tags: ["Flutter", "SQLite"],
            link: "https://play.google.com/store/apps/details?id=com.nck.dev.app.compulsive_shopping",
            linkIcon: "/assets/icons/play-store.svg",
            description: "\"Compulsive Shopping\" is an Android mobile application that was developed during 2022 and its current state is in maintenance.<br><br>The app is designed to help planning unnecessary expenses by tracking how much of your budget takes an item/activity you want to buy. Before buying something you should check your priorities there and see if you really want to buy that. Instead of tracking your expenses this app aims to avoid them in first place.<br><br>The code of this app is closed, but the app is available for free and all data is stored locally in a SQLite database which can be exported to keep having access to your data. No connections to the internet are done within the app."
        },
        {
            id: 1,
            title: "Diogenes",
            images: ["/assets/images/projects/software/diogenes.gif"],
            tags: ["Spring Boot", "Java", "Angular", "Typescript", "Docker", "Nginx"],
            link: "https://github.com/nck974/diogenes",
            linkIcon: "/assets/icons/github.svg",
            description: "Diogenes is an ongoing project started early 2023.<br><br>This project aims to create an home inventory of all items that someone has at home to get an overview of what you have and what you could get rid off. The first goal of this project is minimizing the time spent using the app adding items, therefore some functionality like bulk import of images or saving the properties of the last item have been implemented.<br><br>This project is build with a backend using Spring Boot (Java 17) connected to a postgres database and a frontend build on Angular 17 using Material. Everything is self hosted running on containers with nginx as a web server.<br>This code is open source and can be checked out on github."
        },
    ];

}