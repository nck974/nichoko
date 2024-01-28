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
            description: "\"Compulsive Shopping\" is an Android mobile application that was developed during 2022 and its current state is in maintenance. The app is designed to help planning unnecessary expenses by tracking how much of your budget takes an item/activity you want to buy. Before buying something you should check your priorities there and see if you really want to buy that. Instead of tracking your expenses this app aims to avoid them in first place.<br><br>The code of this app is closed, but the app is available for free and all data is stored locally in a SQLite database which can be exported to keep having access to your data. No connections to the internet are done within the app."
        },
        {
            id: 1,
            title: "Diogenes",
            images: ["/assets/images/projects/software/compulsive-shopping.png"],
            tags: ["Spring Boot", "Java", "Angular", "Typescript"],
            link: "https://play.google.com/store/apps/details?id=com.nck.dev.app.compulsive_shopping",
            linkIcon: "/assets/icons/play-store.svg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ];

}
