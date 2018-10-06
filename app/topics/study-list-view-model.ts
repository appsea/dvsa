import { EventData, Observable } from "data/observable";
import { TopicService } from "./topcs.service";
import { TopicStatus } from "../shared/questions.model";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {topmost} from "ui/frame";

export class StudyListViewModel extends Observable {
    
    private _topicStatus: Array<TopicStatus>;

    constructor() {
        super();
        this._topicStatus = TopicService.getInstance().getTopicStatus();
        console.log("Size: ", this._topicStatus);
        this.publish();
    }
    
    public showDrawer() {
        const sideDrawer = <RadSideDrawer>topmost().getViewById("sideDrawer");
        sideDrawer.showDrawer();
    }

    private publish() {
        console.log("publishing Changed: ",this._topicStatus.length);
        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertyName: 'topicStatus',
            value: this._topicStatus
        });
        console.log("Done publishing Changed....");
    }

    get topicStatus() { 
        return this._topicStatus;
    }

}

