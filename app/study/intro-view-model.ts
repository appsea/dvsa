import {CreateViewEventData} from "ui/placeholder";
import {EventData, Observable} from "data/observable";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {topmost} from "ui/frame";
import {NavigatedData, Page} from "ui/page";
import {ScrollView} from "tns-core-modules/ui/scroll-view";
import {TextView} from "ui/text-view";
import {AndroidActivityBackPressedEventData, AndroidApplication} from "application";
import {isAndroid, screen} from "platform";
import {Repeater} from 'ui/repeater';
import {Label} from 'ui/label';

export class IntroViewModel extends Observable {
    private _description: string;

    constructor() {
        super();
        this._description = "Hi";
        this.publish();
    }

    public publish() {
        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertyName: 'question',
            value: this._description
        });
    }

    get description(){
        return this._description;
    }
}