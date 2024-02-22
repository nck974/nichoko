import { CareerCompany } from "../../model/career";

export function getStudiesContent(): CareerCompany[] {
    return [
        {
            name: "Universidad Politécnica de Valencia",
            location: "Valencia (Spain)",
            positions: [
                {
                    name: "Bachelor's Degree in Telecommunication Technologies and Services Engineering",
                    startRange: "2012",
                    endRange: "2017",
                    activities: [
                        "Learn in depth the protocols DNS, SMTP, HTTP, TCP/IP, UDP, DHCP, SSH, FTP, KERBEROS, RADIUS...",
                        "802.11, 802.3, VLANS, UMTS, GPRS, LTE, PON, GPON, WiMax, Bluetooth, NFC, Zigbee, FTTH",
                        "First experience with CISCO routing and switching.",
                        "Programming in Java, C, Matlab and databases (SQL).",
                        "Image, sound and signal analysis and processing.",
                        "Electronics (analog and digital), queuing theory."
                    ]
                }
            ]
        }, {
            name: "Technische Universität Hamburg",
            location: "Hamburg (Germany)",
            positions: [
                {
                    name: "Exchange year with the ERASMUS program",
                    startRange: "2015",
                    endRange: "2016",
                    activities: [
                        "Signal processing.",
                        "Network and application security.",
                        "Microwaves.",
                        "Audio processing.",
                        "Wireless communications: LTE+, ZigBee, WiMax, BLE..."
                    ]
                }
            ]
        },
    ];
}