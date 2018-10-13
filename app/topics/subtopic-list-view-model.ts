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
        this._subTopics = TopicService.getInstance().findSubTopics(topic);
        this.publish();
    }
    
    public showDrawer() {
        const sideDrawer = <RadSideDrawer>topmost().getViewById("sideDrawer");
        sideDrawer.showDrawer();
    }

    private publish() {
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
    }

    get subTopics() { 
        return this._subTopics;
    }

    get topic(){
        return this._topic;
    }

}

