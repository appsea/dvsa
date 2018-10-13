import { AndroidActivityBackPressedEventData, AndroidApplication } from "application";
import { EventData, Observable } from "data/observable";
import { isAndroid } from "platform";
import { CreateViewEventData } from "ui/placeholder";
import { NavigatedData, Page } from "ui/page";
import { Switch } from "tns-core-modules/ui/switch";
import { SubTopic } from "./../../shared/questions.model";
import * as navigationModule from "../../shared/navigation";

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
  page.on(AndroidApplication.activityBackPressedEvent,  onActivityBackPressedEvent, this);
  banner = page.getViewById("banner");
  const mySwitch: Switch = <Switch>page.getViewById("my-switch");
  mySwitch.on("checkedChange", swargs => {
    subTopic.complete = (<Switch>swargs.object).checked;
    pageData.set("complete", subTopic.complete);
  });
  subTopic = <SubTopic>page.navigationContext;
  page.bindingContext = pageData;
  pageData.set("complete", subTopic.complete ? subTopic.complete : false);
}

export function resetBanner() {
  if (banner) {
    banner.height = "0";
  }
}

export function onActivityBackPressedEvent(args: AndroidActivityBackPressedEventData) {
  navigationModule.goBack();
  args.cancel = true;
}

/************************************************************
 * According to guidelines, if you have a drawer on your page, you should always
 * have a button that opens it. Get a reference to the RadSideDrawer view and
 * use the showDrawer() function to open the app drawer section.
 *************************************************************/
export function onDrawerButtonTap(args: EventData) {
  resetBanner();
}

export function creatingView(args: CreateViewEventData) {}

export function goPrevious(args) {
  console.log("Previous");
}

export function goNext(args) {
  console.log("Next");
}
