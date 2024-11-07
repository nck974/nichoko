import { CareerCompany } from "../../model/career";

export function getMocContent(): CareerCompany[] {
    return [
        {
            name: "Udemy",
            positions: [
                {
                    name: "Generative AI, from GANs to CLIP, with Python and Pytorch",
                    startRange: "2024",
                    activities: [
                        "This my latest ongoing course not finished yet.",
                        "Learning the fundamentals of how a GAN is trained.",
                    ]
                },
                {
                    name: "Ultimate Rust crash course",
                    startRange: "2023",
                    activities: [
                        "Improve my Rust skills.",
                        "Support the basics learn in 'The Rust Book'.",
                        "Support a project trying to build a guitar looper on a Raspberry Pi Zero.",
                    ]
                },
                {
                    name: "Spring Boot 3: Learn Spring 6, Spring Core, Spring REST, Spring MVC, Spring Security, Thymeleaf, JPA, Hibernate, MySQL",
                    startRange: "2023",
                    activities: [
                        "Solidify knowledge of Spring.",
                        "Support my project 'Diogenes'.",
                        "Learn the differences brought from spring 2.",
                    ]
                },
                {
                    name: "Java Programming Masterclass updated to Java 17",
                    startRange: "2023",
                    activities: [
                        "Solidify my knowledge of Java.",
                        "Learn the differences brought from Java 8.",
                    ]
                },
                {
                    name: "Flutter & Dart - The Complete Guide",
                    startRange: "2022",
                    activities: [
                        "Learn in depth Flutter.",
                        "Learn the state management using providers.",
                        "Support the creation of my app 'Compulsive Shopping'.",
                    ]
                },
                {
                    name: "CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass)",
                    startRange: "2022",
                    endRange: "2022",
                    activities: [
                        "Improve the web design skills by learning in depth the most common CSS concepts.",
                    ]
                },
                {
                    name: "The Complete Guide to Django REST Framework",
                    startRange: "2021",
                    activities: [
                        "Learn the basic architecture used in the Django REST framework.",
                        "Learn how the framework works."
                    ]
                },
                {
                    name: "Master JMeter from Basics (Performance + Load + API Testing)",
                    startRange: "2020",
                    activities: [
                        "Learn how to automate performance testing using JMeter."
                    ]
                },
            ]
        },
        {
            name: "CBT NUGGETS",
            positions: [
                {
                    name: "Microsoft Windows Server 2012 70-410 with R2",
                    startRange: "2017",
                    activities: [
                        "Introduction to the server administration of Windows servers."
                    ]
                },
            ]
        },
        {
            name: "Edx.org",
            positions: [
                {
                    name: "Introduction to Python for Data Science - Microsoft ",
                    startRange: "2017",
                    activities: [
                        "Basics of the the programming language python."
                    ]
                },
            ]
        },
        {
            name: "Coursera",
            positions: [
                {
                    name: "Computer Networks - University of Washington",
                    startRange: "2013",
                    activities: [
                        "Learn the basic of computer networks."
                    ]
                },
            ]
        },
    ];
}