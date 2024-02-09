import { CareerCompany } from "../../model/career";

export function getCareerContent(): CareerCompany[] {
    return [
        {
            name: "HMG Systems Engineering",
            location: "Fürth (Germany)",
            positions: [
                {
                    name: "Consultant",
                    startRange: "2020",
                    endRange: "present",
                    activities: [
                        "Debug Spring Boot and Angular applications to fix issues.",
                        "Develop internal software to improve company processes.",
                        "Maintain and deploy releases to production.",
                        "Develop and contribute to Git and Jenkins pipelines to speed up processes",
                        "Migrate production infrastructure to a container based system with docker compose.",
                        "Create complex SQL queries to generate test data.",
                        "Follow and support processes to achieve a medical product.",
                        "Migrate and improve the architecture and performance of automated tests with Python.",
                        "Work in teams following agile processes."
                    ]
                },
                {
                    name: "Junior Consultant",
                    startRange: "2019",
                    endRange: "2020",
                    activities: [
                        "Migrate infrastructure running on old hardware to a VMs using VMware.",
                        "Maintain development tools like Jenkins, Artifactory, Gitlab, Sonarqube...",
                        "Automate and maintain system tests.",
                    ]
                },
                {
                    name: "Trainee",
                    startRange: "2018",
                    endRange: "2019",
                    activities: [
                        "Contribute to implementing an automated test framework in perl to verify a medical product.",
                        "Automate frontend test cases using Selenium.",
                        "Maintain and extend test specification.",
                    ]
                }
            ]
        }
    ];
}