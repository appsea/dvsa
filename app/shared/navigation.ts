import * as frameModule from 'ui/frame';
import {topmost} from 'ui/frame';
import {State, SubTopic} from "./questions.model";

export function	gotoResultPage(state: State) {
    frameModule.topmost().navigate({
        moduleName: 'shared/result/result-page',
        clearHistory: true,
        context: state,
        transition: {
            name: "fade"
        }
    });
}

export function	gotoEditPage(state: State) {
    frameModule.topmost().navigate({
        moduleName: 'question/edit-question',
        context: state,
        transition: {
            name: "fade"
        }
    });
}

export function	gotoQuestionMap(state: State) {
    frameModule.topmost().navigate({
        moduleName: 'question/map',
        context: state,
        transition: {
            name: "fade"
        }
    });
}

export function	toPage(path: string) {
    frameModule.topmost().navigate({
        moduleName: path,
        transition: {
            name: "fade"
        }
    });
}

export function	gotoDetailsPage(state: State) {
    frameModule.topmost().navigate({
        moduleName: 'shared/details/detailed-result',
        context: state,
        transition: {
            name: "fade"
        }
    });
}

export function	goBack() {
    topmost().goBack();
}

export function	gotoCategoryPractice(numbers: Array<number>) {
    frameModule.topmost().navigate({
        moduleName: 'category/category-practice',
        context: numbers,
        transition: {
            name: "fade"
        }
    });
}

export function	gotoSubtopics(topic: string) {
    frameModule.topmost().navigate({
        moduleName: 'topics/subtopic-list',
        context: topic,
        transition: {
            name: "fade"
        }
    });
}


export function	gotoChapters(subTopic: SubTopic) {
    frameModule.topmost().navigate({
        moduleName: subTopic.link,
        context: subTopic,
        transition: {
            name: "fade"
        }
    });
}