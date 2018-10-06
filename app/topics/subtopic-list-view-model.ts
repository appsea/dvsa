import { EventData, Observable } from "data/observable";
import { TopicService } from "./topcs.service";
import { TopicStatus, SubTopic } from "../shared/questions.model";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {topmost} from "ui/frame";

export class SubtopicListViewModel extends Observable {
    
    private _subTopics: Array<SubTopic>;
    private _topic: string;

    constructor(topic: string) {
        super();
        this._topic = topic;
        console.log("Received Topic: ", topic);
        this._subTopics = TopicService.getInstance().findSubTopics(topic);
        console.log("Size: ", this._subTopics);
        this.publish();
    }
    
    public showDrawer() {
        const sideDrawer = <RadSideDrawer>topmost().getViewById("sideDrawer");
        sideDrawer.showDrawer();
    }

    private publish() {
        console.log("publishing Changed: ",this._subTopics.length);
        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertyName: 'subTopics',
            value: this._subTopics
        });
        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertyName: 'topic',
            value: this._topic
        });
        console.log("Done publishing Changed....");
    }

    get subTopics() { 
        return this._subTopics;
    }

    get topic(){
        return this._topic;
    }

}

