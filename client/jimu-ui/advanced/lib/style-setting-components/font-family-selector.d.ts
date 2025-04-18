import { React } from 'jimu-core';
export declare enum FontFamilyValue {
    AVENIRNEXT = "Avenir Next",
    CALIBRI = "Calibri",
    PMINGLIU = "PmingLiu",
    IMPACT = "Impact",
    GEORGIA = "Georgia",
    ARIAL = "Arial",
    TIMESNEWROMAN = "Times New Roman",
    SIMHEI = "SimHei",
    MICROSOFTYAHEI = "Microsoft YaHei"
}
export interface FontFamilySelectorProps {
    'aria-label'?: string;
    className?: string;
    style?: React.CSSProperties;
    /**
     * One value of enum FontFamilyValue
     */
    font?: FontFamilyValue;
    onChange?: (font: string) => void;
}
export declare const fontValue: FontFamilyValue[];
/**
 * A react component for choosing a font we support
 */
export declare const FontFamilySelector: (props: FontFamilySelectorProps) => React.JSX.Element;
