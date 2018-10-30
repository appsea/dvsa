import {SubTopic, Topic, TopicStatus} from "../shared/questions.model";
import {PersistenceService} from "../services/persistence.service";

export class TopicService {
    private _topics: Topic[];

    static getInstance(): TopicService {
        return TopicService._instance;
    }

    private static _instance: TopicService = new TopicService();

    constructor() {
        if (!PersistenceService.getInstance().hasTopics()) {
            this._topics = this.createSubTopics();
        } else {
            this._topics = PersistenceService.getInstance().readTopics();
        }
    }

    public saveSubTopic(subTopic: SubTopic): void {
        let st: SubTopic = this.findSubTopicFromLink(subTopic.link);
        st.complete = subTopic.complete;
        PersistenceService.getInstance().saveTopics(this._topics);
    }

    public findSubTopicFromLink(link: string): SubTopic {
        let topic: Topic = this._topics.filter(t => t.subTopics.filter(st => st.link == link).length > 0)[0];
        let st: SubTopic = topic.subTopics.filter(st => st.link == link)[0];
        return st;
    }

    public getTopicStatus(): Array<TopicStatus> {
        return this.readTopicStatus();
    }

    public readTopicStatus(): Array<TopicStatus> {
        let status: Array<TopicStatus> = this._topics.map(t => {
            let attempted = t.subTopics.filter(s => s.complete).length;
            let percentage = (attempted * 100 / t.subTopics.length).toFixed(0);
            return {name: t.name, attempted: attempted, total: t.subTopics.length, percentage: percentage};
        });
        return status;
    }

    public findSubTopics(topic: string): Array<SubTopic> {
        return this._topics.filter(t => t.name == topic)[0].subTopics;
    }

    /*public createDefaultList(): Array<TopicStatus> {
        let list: Array<TopicStatus> = [];
        let first: TopicStatus = {
            name: "Vulnerable road users",
            attempted: 0,
            total: 9,
            percentage: "60.00%"
        };
        let second: TopicStatus = {
            name: "Incidents",
            attempted: 0,
            total: 7,
            percentage: "60.00%"
        };
        let third: TopicStatus = {
            name: "Safety and your vehicle",
            attempted: 0,
            total: 8,
            percentage: "60.00%"
        };
        let fourth: TopicStatus = {
            name: "Attitude",
            attempted: 0,
            total: 6,
            percentage: "60.00%"
        };
        let fifth: TopicStatus = {
            name: "Alertness",
            attempted: 0,
            total: 5,
            percentage: "60.00%"
        };
        let sixth: TopicStatus = {
            name: "Documents",
            attempted: 0,
            total: 5,
            percentage: "60.00%"
        };
        let seventh: TopicStatus = {
            name: "Safety margins",
            attempted: 0,
            total: 6,
            percentage: "60.00%"
        };
        let eighth: TopicStatus = {
            name: "Rules of the road",
            attempted: 0,
            total: 9,
            percentage: "60.00%"
        };
        let nineth: TopicStatus = {
            name: "Road and traffic sign",
            attempted: 0,
            total: 7,
            percentage: "60.00%"
        };
        let tenth: TopicStatus = {
            name: "Other types of vehicles",
            attempted: 0,
            total: 6,
            percentage: "60.00%"
        };
        let eleventh: TopicStatus = {
            name: "Hazard awareness",
            attempted: 0,
            total: 6,
            percentage: "60.00%"
        };
        let twelveth: TopicStatus = {
            name: "Vehicle loading",
            attempted: 0,
            total: 4,
            percentage: "60.00%"
        };
        let thirteenth: TopicStatus = {
            name: "Vehicle handling",
            attempted: 0,
            total: 7,
            percentage: "60.00%"
        };
        let fourteenth: TopicStatus = {
            name: "Motorway driving",
            attempted: 0,
            total: 6,
            percentage: "60.00%"
        };
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        list.push(eighth);
        list.push(nineth);
        list.push(tenth);
        list.push(eleventh);
        list.push(twelveth);
        list.push(thirteenth);
        list.push(fourteenth);
        return list;
    }*/

    public createSubTopics(): Array<Topic> {
        let list: Array<Topic> = [];
        let first: Topic = {
            name: "Vulnerable road users",
            subTopics: this.createSubTopicsForVulnerableRoadUsers()
        };
        let second: Topic = {
            name: "Incidents",
            subTopics: this.createSubTopicsForIncidents()
        };
        let third: Topic = {
            name: "Safety and your vehicle",
            subTopics: this.createSubTopicsForSafetyAndYourVehicle()
        };
        let fourth: Topic = {
            name: "Attitude",
            subTopics: this.createSubTopicsForAttitude()
        };
        let fifth: Topic = {
            name: "Alertness",
            subTopics: this.createSubTopicsForAlertness()
        };
        let sixth: Topic = {
            name: "Documents",
            subTopics: this.createSubTopicsForDocuments()
        };
        let seventh: Topic = {
            name: "Safety margins",
            subTopics: this.createSubTopicsForSafetyMargins()
        };
        let eighth: Topic = {
            name: "Rules of the road",
            subTopics: this.createSubTopicsForRulesOfTheRoad()
        };
        let nineth: Topic = {
            name: "Road and traffic sign",
            subTopics: this.createSubTopicsForRoadAndTrafficSign()
        };
        let tenth: Topic = {
            name: "Other types of vehicles",
            subTopics: this.createSubTopicsForOtherTypesOfVehicles()
        };
        let eleventh: Topic = {
            name: "Hazard awareness",
            subTopics: this.createSubTopicsForHazzardAwareness()
        };
        let twelveth: Topic = {
            name: "Vehicle loading",
            subTopics: this.createSubTopicsForVehicleLoading()
        };
        let thirteenth: Topic = {
            name: "Vehicle handling",
            subTopics: this.createSubTopicsForVehicleHandling()
        };
        let fourteenth: Topic = {
            name: "Motorway driving",
            subTopics: this.createSubTopicsForMotorwayDriving()
        };
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        list.push(eighth);
        list.push(nineth);
        list.push(tenth);
        list.push(eleventh);
        list.push(twelveth);
        list.push(thirteenth);
        list.push(fourteenth);
        return list;
    }

    public createSubTopicsForVulnerableRoadUsers(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/vru/introduction", complete: false};
        let second: SubTopic = {name: "Pedestrians", link: "topics/vru/pedestrians", complete: false};
        let third: SubTopic = {name: "Children", link: "topics/vru/children", complete: false};
        let fourth: SubTopic = {name: "Older and disabled pedestrians", link: "topics/vru/older", complete: false};
        let fifth: SubTopic = {name: "Cyclists", link: "topics/vru/cyclists", complete: false};
        let sixth: SubTopic = {name: "Motorcyclists", link: "topics/vru/motorcyclists", complete: false};
        let seventh: SubTopic = {name: "Animals", link: "topics/vru/animals", complete: false};
        let eighth: SubTopic = {name: "Other drivers", link: "topics/vru/otherDrivers", complete: false};
        let nineth: SubTopic = {name: "FAQs", link: "topics/vru/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        list.push(eighth);
        list.push(nineth);
        return list;
    }

    private createSubTopicsForIncidents(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Breakdowns", link: "topics/incidents/breakdowns", complete: false};
        let second: SubTopic = {name: "Safety in tunnels", link: "topics/incidents/safety", complete: false};
        let third: SubTopic = {
            name: "Warning others of an incident",
            link: "topics/incidents/warning",
            complete: false
        };
        let fourth: SubTopic = {name: "Stopping at an incident", link: "topics/incidents/stopping", complete: false};
        let fifth: SubTopic = {name: "First aid", link: "topics/incidents/firstaid", complete: false};
        let sixth: SubTopic = {name: "Reporting", link: "topics/incidents/reporting", complete: false};
        let seventh: SubTopic = {name: "FAQs", link: "topics/incidents/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        return list;
    }

    private createSubTopicsForSafetyAndYourVehicle(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Basic maintenance", link: "topics/safety/basic", complete: false};
        let second: SubTopic = {name: "Defects", link: "topics/safety/defects", complete: false};
        let third: SubTopic = {name: "Safety equipment", link: "topics/safety/safety", complete: false};
        let fourth: SubTopic = {name: "Security", link: "topics/safety/security", complete: false};
        let fifth: SubTopic = {
            name: "Considering other road users",
            link: "topics/safety/considering",
            complete: false
        };
        let sixth: SubTopic = {name: "Environment", link: "topics/safety/environment", complete: false};
        let seventh: SubTopic = {name: "Avoiding congestion", link: "topics/safety/avoiding", complete: false};
        let eighth: SubTopic = {name: "FAQs", link: "topics/safety/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        list.push(eighth);
        return list;
    }

    public createSubTopicsForAttitude(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/attitude/introduction", complete: false};
        let second: SubTopic = {name: "Consideration", link: "topics/attitude/consideration", complete: false};
        let third: SubTopic = {name: "Following safely", link: "topics/attitude/following", complete: false};
        let fourth: SubTopic = {name: "Courtesy", link: "topics/attitude/courtesy", complete: false};
        let fifth: SubTopic = {name: "Priority", link: "topics/attitude/priority", complete: false};
        let sixth: SubTopic = {name: "FAQs", link: "topics/attitude/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        return list;
    }

    public createSubTopicsForAlertness(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Observation", link: "topics/alertness/observation", complete: false};
        let second: SubTopic = {
            name: "Anticipation and awareness",
            link: "topics/alertness/anticipation",
            complete: false
        };
        let third: SubTopic = {name: "Concentration", link: "topics/alertness/concentration", complete: false};
        let fourth: SubTopic = {name: "Distraction and boredom", link: "topics/alertness/distraction", complete: false};
        let fifth: SubTopic = {name: "FAQs", link: "topics/alertness/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        return list;
    }

    public createSubTopicsForDocuments(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/documents/introduction", complete: false};
        let second: SubTopic = {name: "Licenses", link: "topics/documents/licenses", complete: false};
        let third: SubTopic = {name: "Insurance", link: "topics/documents/insurance", complete: false};
        let fourth: SubTopic = {name: "MOT certificate", link: "topics/documents/mot", complete: false};
        let fifth: SubTopic = {name: "FAQs", link: "topics/documents/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        return list;
    }

    public createSubTopicsForSafetyMargins(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/safetymargins/introduction", complete: false};
        let second: SubTopic = {name: "Stopping distances", link: "topics/safetymargins/stopping", complete: false};
        let third: SubTopic = {name: "Weather conditions", link: "topics/safetymargins/weather", complete: false};
        let fourth: SubTopic = {name: "Skidding", link: "topics/safetymargins/skidding", complete: false};
        let fifth: SubTopic = {name: "Contraflow systems", link: "topics/safetymargins/contraflow", complete: false};
        let sixth: SubTopic = {name: "FAQs", link: "topics/safetymargins/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        return list;
    }

    public createSubTopicsForRulesOfTheRoad(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/rules/introduction", complete: false};
        let second: SubTopic = {name: "Speed limits", link: "topics/rules/speed", complete: false};
        let third: SubTopic = {name: "Lanes and junctions", link: "topics/rules/lanes", complete: false};
        let fourth: SubTopic = {
            name: "Overtaking, turning and reversing",
            link: "topics/rules/overtaking",
            complete: false
        };
        let fifth: SubTopic = {name: "Crossings", link: "topics/rules/crossings", complete: false};
        let sixth: SubTopic = {name: "Level crossings", link: "topics/rules/level", complete: false};
        let seventh: SubTopic = {name: "Stopping and parking", link: "topics/rules/stopping", complete: false};
        let eighth: SubTopic = {name: "Smoking in your car", link: "topics/rules/smoking", complete: false};
        let nineth: SubTopic = {name: "FAQs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        list.push(eighth);
        list.push(nineth);
        return list;
    }

    public createSubTopicsForRoadAndTrafficSign(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Signs", link: "topics/road/signs", complete: false};
        let second: SubTopic = {name: "Road markings", link: "topics/road/road", complete: false};
        let third: SubTopic = {name: "Traffic lights and warning lights", link: "topics/road/traffic", complete: false};
        let fourth: SubTopic = {
            name: "Signal given by other drivers",
            link: "topics/road/signalother",
            complete: false
        };
        let fifth: SubTopic = {name: "Signal given by police", link: "topics/road/signalpolice", complete: false};
        let sixth: SubTopic = {name: "Use of road lanes", link: "topics/road/use", complete: false};
        let seventh: SubTopic = {name: "FAQs", link: "topics/road/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        return list;
    }

    public createSubTopicsForOtherTypesOfVehicles(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/other/introduction", complete: false};
        let second: SubTopic = {name: "Motorcycles", link: "topics/other/motorcycles", complete: false};
        let third: SubTopic = {name: "Large vehicles", link: "topics/other/large", complete: false};
        let fourth: SubTopic = {name: "Buses", link: "topics/other/buses", complete: false};
        let fifth: SubTopic = {name: "Trams", link: "topics/other/trams", complete: false};
        let sixth: SubTopic = {name: "FAQs", link: "topics/other/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        return list;
    }

    public createSubTopicsForHazzardAwareness(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/hazzard/introduction", complete: false};
        let second: SubTopic = {name: "Static hazards", link: "topics/hazzard/static", complete: false};
        let third: SubTopic = {name: "Moving hazards", link: "topics/hazzard/moving", complete: false};
        let fourth: SubTopic = {name: "Yourself", link: "topics/hazzard/yourself", complete: false};
        let fifth: SubTopic = {name: "Road and weather conditions", link: "topics/hazzard/road", complete: false};
        let sixth: SubTopic = {name: "FAQs", link: "topics/hazzard/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        return list;
    }

    public createSubTopicsForVehicleLoading(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Vehicle stability", link: "topics/vehicleLoading/vehicle", complete: false};
        let second: SubTopic = {name: "Passengers", link: "topics/vehicleLoading/passengers", complete: false};
        let third: SubTopic = {name: "Towing", link: "topics/vehicleLoading/towing", complete: false};
        let fourth: SubTopic = {name: "FAQs", link: "topics/vehicleLoading/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        return list;
    }

    public createSubTopicsForVehicleHandling(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/vehicleHandling/introduction", complete: false};
        let second: SubTopic = {name: "Weather conditions", link: "topics/vehicleHandling/weather", complete: false};
        let third: SubTopic = {name: "Driving at night", link: "topics/vehicleHandling/driving", complete: false};
        let fourth: SubTopic = {name: "Control and speed", link: "topics/vehicleHandling/control", complete: false};
        let fifth: SubTopic = {
            name: "Traffic calming and road surface",
            link: "topics/vehicleHandling/traffic",
            complete: false
        };
        let sixth: SubTopic = {name: "Motorcyclists", link: "topics/vehicleHandling/motorcyclists", complete: false};
        let seventh: SubTopic = {name: "Animals", link: "topics/vehicleHandling/animals", complete: false};
        let eighth: SubTopic = {name: "Other Drivers", link: "topics/vehicleHandling/other", complete: false};
        let nineth: SubTopic = {name: "FAQs", link: "topics/vehicleHandling/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        list.push(eighth);
        list.push(nineth);
        return list;
    }

    public createSubTopicsForMotorwayDriving(): Array<SubTopic> {
        let list: Array<SubTopic> = [];
        let first: SubTopic = {name: "Introduction", link: "topics/motorway/introduction", complete: false};
        let second: SubTopic = {name: "Driving on the motorway", link: "topics/motorway/driving", complete: false};
        let third: SubTopic = {name: "Speed limits", link: "topics/motorway/speed", complete: false};
        let fourth: SubTopic = {name: "Reducing congestion", link: "topics/motorway/reducing", complete: false};
        let fifth: SubTopic = {name: "Lane markings", link: "topics/motorway/lane", complete: false};
        let sixth: SubTopic = {name: "Stopping and breakdowns", link: "topics/motorway/stopping", complete: false};
        let seventh: SubTopic = {name: "FAQs", link: "topics/motorway/faqs", complete: false};
        list.push(first);
        list.push(second);
        list.push(third);
        list.push(fourth);
        list.push(fifth);
        list.push(sixth);
        list.push(seventh);
        return list;
    }
}
