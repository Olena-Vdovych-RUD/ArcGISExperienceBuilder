import type { AlertPopupProps, AlertProps, BadgeProps, ButtonGroupProps, ButtonProps, CheckboxProps, CollapsableCheckboxProps, CollapsablePanelProps, CollapsableRadioProps, CollapsableToggleProps, CollapseProps, DrawerProps, DropdownButtonProps, DropdownItemProps, DropdownMenuProps, DropdownProps, FloatingPanelProps, IconProps, LinkProps, NavbarProps, NavItemProps, NavLinkProps, NavMenuProps, NavProps, PaperProps, PopperProps, RadioProps, SelectOptionProps, SelectProps, SliderProps, SurfaceProps, SVGProps, SwitchProps, TabProps, TabsProps, TooltipProps } from 'jimu-ui';
export type ComponentsProps = {
    [Name in keyof ComponentsStyleStateList]?: Partial<ComponentsStyleStateList[Name]>;
};
export interface ComponentsStyleStateList {
    Alert: AlertProps;
    AlertPopup: AlertPopupProps;
    Badge: BadgeProps;
    Button: ButtonProps;
    ButtonGroup: ButtonGroupProps;
    Checkbox: CheckboxProps;
    Collapse: CollapseProps;
    CollapsablePanel: CollapsablePanelProps;
    CollapsableCheckbox: CollapsableCheckboxProps;
    CollapsableRadio: CollapsableRadioProps;
    CollapsableToggle: CollapsableToggleProps;
    Drawer: DrawerProps;
    Dropdown: DropdownProps;
    DropdownMenu: DropdownMenuProps;
    DropdownItem: DropdownItemProps;
    DropdownButton: DropdownButtonProps;
    FloatingPanel: FloatingPanelProps;
    Icon: IconProps;
    Link: LinkProps;
    Nav: NavProps;
    Navbar: NavbarProps;
    NavItem: NavItemProps;
    NavMenu: NavMenuProps;
    NavLink: NavLinkProps;
    Option: SelectOptionProps;
    Paper: PaperProps;
    Popper: PopperProps;
    Radio: RadioProps;
    Select: SelectProps;
    Slider: SliderProps;
    Surface: SurfaceProps;
    SVG: SVGProps;
    Switch: SwitchProps;
    Tab: TabProps;
    Tabs: TabsProps;
    Tooltip: TooltipProps;
}
