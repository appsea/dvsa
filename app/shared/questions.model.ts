export interface IQuestion {
    number?: string;
    prashna?: Prashna;
    explanation?: string;
    category?: string;
    options?: Array<IOption>;
    skipped?: boolean;
    flagged?: boolean;
    show?: boolean;
}

export interface Prashna{
    text?: string;
    image?: string;
}

export interface IOption {
    tag: string;
    description: string;
    correct: boolean;
    image?: string;
    selected?: boolean;
    show?: boolean;
}

export interface ISetting {
    totalQuestionsQuick: number;
    totalQuestionsMock: number;
    totalTime: number;
}

export interface State {
    questionWrapper?: IQuestion;
    questions: Array<IQuestion>;
    questionNumber: number;
    totalQuestions: number;
    mode?: string;
    time?:number;
}

export interface Map {
    value: number;
    status: string;
}

export interface Result {
    itemType?: string;
    date?: string;
    correct: number;
    wrong?: number;
    skipped?: number;
    total: number;
    percentage: string;
    pass: boolean;
}

export interface Category {
    name: string;
    questionNumbers: Array<number>;
    wronglyAnswered?: Array<number>;
    attempted?: Array<number>;
    selected?: boolean;
    percentage?: string;
}

export interface TopicStatus {
    name?: string;
    attempted?: number;
    total?: number;
    percentage?: string;
}

export interface Topic {
    name?: string;
    subTopics: Array<SubTopic>;
}

export interface SubTopic {
    name?: string;
    link?: string;
    complete?: boolean;
}