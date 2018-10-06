import { SubTopic, Topic, TopicStatus } from "../shared/questions.model";
import * as constantsModule from "../shared/constants";

export class TopicService {
  private _topics: Topic[];

  static getInstance(): TopicService {
    return TopicService._instance;
  }

  private static _instance: TopicService = new TopicService();

  constructor() {
    this._topics = this.createSubTopics();
  }

  public getTopicStatus(): Array<TopicStatus> {
    return this.createDefaultList();
  }

  public findSubTopics(topic: string): Array<SubTopic> {
    return this._topics.filter(t => t.name == topic)[0].subTopics;
  }

  public createDefaultList(): Array<TopicStatus> {
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
  }

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
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Pedestrians", complete: false };
    let third: SubTopic = { name: "Children", complete: false };
    let fourth: SubTopic = {
      name: "Older and disabled pedestrians",
      complete: false
    };
    let fifth: SubTopic = { name: "Cyclists", complete: false };
    let sixth: SubTopic = { name: "Motorcyclists", complete: false };
    let seventh: SubTopic = { name: "Animals", complete: false };
    let eighth: SubTopic = { name: "Other drivers", complete: false };
    let nineth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Breakdowns", complete: false };
    let second: SubTopic = { name: "Safety in tunnels", complete: false };
    let third: SubTopic = {
      name: "Warning others of an incident",
      complete: false
    };
    let fourth: SubTopic = { name: "Stopping at an incident", complete: false };
    let fifth: SubTopic = { name: "First aid", complete: false };
    let sixth: SubTopic = { name: "Reporting", complete: false };
    let seventh: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Basic maintenance", complete: false };
    let second: SubTopic = { name: "Defects", complete: false };
    let third: SubTopic = { name: "Safety equipment", complete: false };
    let fourth: SubTopic = { name: "Security", complete: false };
    let fifth: SubTopic = {
      name: "Considering other road users",
      complete: false
    };
    let sixth: SubTopic = { name: "Environment", complete: false };
    let seventh: SubTopic = { name: "Avoiding congestion", complete: false };
    let eighth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Consideration", complete: false };
    let third: SubTopic = { name: "Following safely", complete: false };
    let fourth: SubTopic = { name: "Courtesy", complete: false };
    let fifth: SubTopic = { name: "Priority", complete: false };
    let sixth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Observation", complete: false };
    let second: SubTopic = {
      name: "Anticipation and awareness",
      complete: false
    };
    let third: SubTopic = { name: "Concentration", complete: false };
    let fourth: SubTopic = { name: "Distraction and boredom", complete: false };
    let fifth: SubTopic = { name: "FAQs", complete: false };
    list.push(first);
    list.push(second);
    list.push(third);
    list.push(fourth);
    list.push(fifth);
    return list;
  }
  public createSubTopicsForDocuments(): Array<SubTopic> {
    let list: Array<SubTopic> = [];
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Licenses", complete: false };
    let third: SubTopic = { name: "Insurance", complete: false };
    let fourth: SubTopic = { name: "MOT certificate", complete: false };
    let fifth: SubTopic = { name: "FAQs", complete: false };
    list.push(first);
    list.push(second);
    list.push(third);
    list.push(fourth);
    list.push(fifth);
    return list;
  }
  public createSubTopicsForSafetyMargins(): Array<SubTopic> {
    let list: Array<SubTopic> = [];
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Stopping distances", complete: false };
    let third: SubTopic = { name: "Weather conditions", complete: false };
    let fourth: SubTopic = { name: "Skidding", complete: false };
    let fifth: SubTopic = { name: "Contraflow systems", complete: false };
    let sixth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Speed limits", complete: false };
    let third: SubTopic = { name: "Lanes and junctions", complete: false };
    let fourth: SubTopic = {
      name: "Overtaking, turning and reversing",
      complete: false
    };
    let fifth: SubTopic = { name: "Crossings", complete: false };
    let sixth: SubTopic = { name: "Level crossings", complete: false };
    let seventh: SubTopic = { name: "Stopping and parking", complete: false };
    let eighth: SubTopic = { name: "Smoking in your car", complete: false };
    let nineth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Signs", complete: false };
    let second: SubTopic = { name: "Road markings", complete: false };
    let third: SubTopic = {
      name: "Traffic lights and warning lights",
      complete: false
    };
    let fourth: SubTopic = {
      name: "Signal given by other drivers",
      complete: false
    };
    let fifth: SubTopic = { name: "Signal given by police", complete: false };
    let sixth: SubTopic = { name: "Use of road lanes", complete: false };
    let seventh: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Motorcycles", complete: false };
    let third: SubTopic = { name: "Large vehicles", complete: false };
    let fourth: SubTopic = { name: "Buses", complete: false };
    let fifth: SubTopic = { name: "Trams", complete: false };
    let sixth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Static hazards", complete: false };
    let third: SubTopic = { name: "Moving hazards", complete: false };
    let fourth: SubTopic = { name: "Yourself", complete: false };
    let fifth: SubTopic = {
      name: "Road and weather conditions",
      complete: false
    };
    let sixth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Vehicle stability", complete: false };
    let second: SubTopic = { name: "Passengers", complete: false };
    let third: SubTopic = { name: "Towing", complete: false };
    let fourth: SubTopic = { name: "FAQs", complete: false };
    list.push(first);
    list.push(second);
    list.push(third);
    list.push(fourth);
    return list;
  }

  public createSubTopicsForVehicleHandling(): Array<SubTopic> {
    let list: Array<SubTopic> = [];
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Weather conditions", complete: false };
    let third: SubTopic = { name: "Driving at night", complete: false };
    let fourth: SubTopic = { name: "Control and speed", complete: false };
    let fifth: SubTopic = {
      name: "Traffic calming and road surface",
      complete: false
    };
    let sixth: SubTopic = { name: "Motorcyclists", complete: false };
    let seventh: SubTopic = { name: "Animals", complete: false };
    let eighth: SubTopic = { name: "Other Drivers", complete: false };
    let nineth: SubTopic = { name: "FAQs", complete: false };
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
    let first: SubTopic = { name: "Introduction", complete: false };
    let second: SubTopic = { name: "Driving on the motorway", complete: false };
    let third: SubTopic = { name: "Speed limits", complete: false };
    let fourth: SubTopic = { name: "Reducing congestion", complete: false };
    let fifth: SubTopic = { name: "Lane markings", complete: false };
    let sixth: SubTopic = { name: "Stopping and breakdowns", complete: false };
    let seventh: SubTopic = { name: "FAQs", complete: false };
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
