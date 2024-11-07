import { PageContent } from "../../model/PageContent";

export function getHomePageContent(): PageContent[] {

    return [
        {
            id: 1,
            title: "Welcome to my page!",
            body: "If you have arrived here you already know my name 😊, so there is no need to have it here for privacy reasons.",
            image: "/assets/images/home/image-0-cover.png",
            altNameImage: "Cover",
        },
        {
            id: 2,
            title: "Checkout my latest projects",
            body: "I take the time to always be creating some personal projects while learning new technologies.",
            clickText: "My latest projects",
            link: "/projects/software",
            image: "/assets/images/home/image-2-software.png",
            altNameImage: "Software",
        },
        {
            id: 3,
            title: "Not only software!",
            body: "I also like to keep building outside of the screen.",
            clickText: "Some other projects",
            link: "/projects/diy",
            image: "/assets/images/home/image-3-build.png",
            altNameImage: "Build",
        },
        {
            id: 4,
            title: "Contact",
            body: "If you are here probably you already now how to contact me, should not be the case reach me through:",
            clickText: "nck.dev.app@gmail.com",
            link: "mailto:nck.dev.app@gmail.com",
            image: "/assets/images/home/image-4-mail.png",
            altNameImage: "Mail",
        },
    ];
}
