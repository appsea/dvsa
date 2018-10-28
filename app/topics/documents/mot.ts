import {AndroidActivityBackPressedEventData, AndroidApplication} from "application";
import {EventData, Observable} from "data/observable";
import {isAndroid} from "platform";
import {CreateViewEventData} from "ui/placeholder";
import {NavigatedData, Page} from "ui/page";
import {Switch} from "tns-core-modules/ui/switch";
import {SubTopic} from "./../../shared/questions.model";
import * as navigationModule from "../../shared/navigation";
import {TopicService} from "../topic.service";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {topmost} from "ui/frame";

let banner: any;
let pageData = new Observable();
let subTopic: SubTopic;

export function onPageLoaded(args: EventData): void {
    if (!isAndroid) {
        return;
    }
    resetBanner();
}

export function onNavigatingTo(args: NavigatedData) {
    /************************************************************
     * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
     * Skipping the re-initialization on back navigation means the user will see the
     * page in the same data state that he left it in before navigating.
     *************************************************************/

    if (args.isBackNavigation) {
        return;
    }
    const page = <Page>args.object;
    page.on(AndroidApplication.activityBackPressedEvent, onActivityBackPressedEvent, this);
    banner = page.getViewById("banner");
    const mySwitch: Switch = <Switch>page.getViewById("my-switch");
    mySwitch.on("checkedChange", swargs => {
        subTopic.complete = (<Switch>swargs.object).checked;
        pageData.set("complete", subTopic.complete);
        TopicService.getInstance().saveSubTopic(subTopic);
    });
    subTopic = <SubTopic>page.navigationContext;
    page.bindingContext = pageData;
    pageData.set("complete", subTopic.complete ? subTopic.complete : false);
}

export function onDrawerButtonTap(args: EventData) {
    resetBanner();
    const sideDrawer = <RadSideDrawer>topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}

export function resetBanner() {
    if (banner) {
        banner.height = "0";
    }
}

export function onActivityBackPressedEvent(args: AndroidActivityBackPressedEventData) {
    navigationModule.gotoSubtopics("Documents");
    args.cancel = true;
}

export function goPrevious(args) {
    let subTopic: SubTopic = TopicService.getInstance().findSubTopicFromLink("topics/documents/insurance");
    navigationModule.gotoChapters(subTopic);
}

export function goNext(args) {
    let subTopic: SubTopic = TopicService.getInstance().findSubTopicFromLink("topics/documents/faqs");
    navigationModule.gotoChapters(subTopic);
}
