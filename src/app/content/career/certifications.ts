import { CareerCompany } from "../../model/career";

export function getCertificationsContent(): CareerCompany[] {
    return [
        {
            name: "TÜV Rheinland",
            positions: [
                {
                    name: "Training in Quality management system according to EN ISO 13485",
                    startRange: "2021",
                    activities: []
                }
            ]
        },
        {
            name: "IREB",
            positions: [
                {
                    name: "Certified Professional for Requirements Engineering Foundation Level",
                    startRange: "2020",
                    activities: []
                }
            ]
        },
        {
            name: "ISTQB",
            positions: [
                {
                    name: "ISTQB Certified Tester Foundation Level",
                    startRange: "2020",
                    activities: []
                }
            ]
        },
    ];
}