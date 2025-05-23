import { React, ReactRedux, type ImmutableObject, type ImmutableArray, type DataSourceInfo, type UseDataSource, type WidgetJson } from 'jimu-core';
import { type Step, type Steps, type StepOnChangeCallBackProps, type GuideProps } from 'jimu-ui/basic/guide';
interface StateToProps {
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: DataSourceInfo;
    }>;
    widgetDs: ImmutableArray<UseDataSource>;
    widgetJson: WidgetJson;
}
export declare const DataSourceSelectionGuide: ReactRedux.ConnectedComponent<(props: GuideProps & StateToProps) => React.JSX.Element, {
    disabled?: boolean;
    className?: string;
    params?: any;
    steps: Steps;
    stepIndex?: number;
    run?: boolean;
    isInjected?: boolean;
    onStepChange?: (data: StepOnChangeCallBackProps) => void;
    conditionalStepIndexes?: import("jimu-ui/basic/guide").ConditionalStepIndexes;
    onActionTriggered?: (e: any, step: Step, index: number) => void;
    sectionJson?: import("jimu-core").SectionJson;
    footerNav?: string | React.JSX.Element;
    widgetJson?: WidgetJson;
    context?: React.Context<ReactRedux.ReactReduxContextValue<any, import("redux").UnknownAction>>;
    store?: import("redux").Store;
}>;
export {};
