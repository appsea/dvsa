import {AndroidActivityBackPressedEventData, AndroidApplication} from "application";
import {EventData} from "data/observable";
import {isAndroid} from "platform";
import {NavigatedData, Page} from "ui/page";
import {CreateViewEventData} from "ui/placeholder";
import {Topic} from '../shared/questions.model';
import {StudyListViewModel} from "./study-list-view-model";
import * as navigationModule from '../shared/navigation';

let vm: StudyListViewModel;
let banner: any;

export function onPageLoaded(args: EventData): void {
    if (!isAndroid) {
        return;
    }
    resetBanner();
}

export function resetBanner() {
    if (banner) {
        banner.height = "0";
    }
}

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
export function onNavigatingTo(args: NavigatedData) {
    /* ***********************************************************
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
    vm = new StudyListViewModel();
    page.bindingContext = vm;
}

export function onActivityBackPressedEvent(args: AndroidActivityBackPressedEventData) {
    args.cancel = true;
}

/* ***********************************************************
* According to guidelines, if you have a drawer on your page, you should always
* have a button that opens it. Get a reference to the RadSideDrawer view and
* use the showDrawer() function to open the app drawer section.
*************************************************************/
export function onDrawerButtonTap(args: EventData) {
    resetBanner();
    vm.showDrawer();
}

export function selectTopic(args) {
    let selectedTopic: Topic = args.view.bindingContext;
    navigationModule.gotoSubtopics(selectedTopic.name);
}