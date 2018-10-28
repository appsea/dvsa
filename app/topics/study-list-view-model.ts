import {EventData, Observable} from "data/observable";
import {TopicService} from "./topic.service";
import {TopicStatus} from "../shared/questions.model";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {topmost} from "ui/frame";

export class StudyListViewModel extends Observable {

    private _topicStatus: Array<TopicStatus>;

    constructor() {
        super();
        this._topicStatus = TopicService.getInstance().getTopicStatus();
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
            propertyName: 'topicStatus',
            value: this._topicStatus
        });
    }

    get topicStatus() {
        return this._topicStatus;
    }

}

