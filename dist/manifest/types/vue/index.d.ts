import type { HTMLAttributes } from 'vue'
import type { Dayjs } from 'dayjs'

import type {
  AccordionBaseElement,
  ArrowsArrowDownLine,
  ArrowsArrowDownSFill,
  ArrowsArrowDownSLine,
  ArrowsArrowLeftDownLine,
  ArrowsArrowLeftLLine,
  ArrowsArrowLeftLine,
  ArrowsArrowLeftSFill,
  ArrowsArrowLeftSLine,
  ArrowsArrowLeftUpLine,
  ArrowsArrowRightDownLine,
  ArrowsArrowRightLLine,
  ArrowsArrowRightLine,
  ArrowsArrowRightSFill,
  ArrowsArrowRightSLine,
  ArrowsArrowRightUpLine,
  ArrowsArrowUpLine,
  ArrowsArrowUpSFill,
  ArrowsArrowUpSLine,
  ArrowsExpandUpDownFill,
  BuildingsHome6Line,
  BusinessCalendarLine,
  DapDSAccordion,
  DapDSAccordionGroup,
  DapDSAnchorHeading,
  DapDSAvatar,
  DapDSAvatarGroup,
  DapDSBadge,
  DapDSBanner,
  DapDSBreadcrumb,
  DapDSBreadcrumbItem,
  DapDSButton,
  DapDSCalendar,
  DapDSCalendarCell,
  DapDSCallout,
  DapDSCard,
  DapDSCardActions,
  DapDSCardContent,
  DapDSCardImage,
  DapDSCardSubtitle,
  DapDSCardTitle,
  DapDSCheckbox,
  DapDSCombobox,
  DapDSCommand,
  DapDSCommandGroup,
  DapDSCommandItem,
  DapDSContentSwitcher,
  DapDSContentSwitcherItem,
  DapDSCopyBoxInput,
  DapDSDAPBadge,
  DapDSDataTable,
  DapDSDatePicker,
  DapDSDivider,
  DapDSFeedback,
  DapDSFileInput,
  DapDSFileInputList,
  DapDSFileInputListItem,
  DapDSFormLabel,
  DapDSIcon,
  DapDSIconButton,
  DapDSInput,
  DapDSInputGroup,
  DapDSLabel,
  DapDSLink,
  DapDSListItem,
  DapDSModal,
  DapDSNavigationMenu,
  DapDSNavigationMenuItem,
  DapDSNotificationBadge,
  DapDSNumberInput,
  DapDSOfficialWebsiteBanner,
  DapDSOptionItem,
  DapDSOptionList,
  DapDSOverlay,
  DapDSPager,
  DapDSPasswordInput,
  DapDSPopup,
  DapDSRadioButton,
  DapDSRadioGroup,
  DapDSRating,
  DapDSScrollArea,
  DapDSSearch,
  DapDSSelect,
  DapDSSideNav,
  DapDSSideNavGroup,
  DapDSSideNavItem,
  DapDSSkeleton,
  DapDSSkipLink,
  DapDSSnackbar,
  DapDSSnackbarMessage,
  DapDSSpinner,
  DapDSStack,
  DapDSSwitch,
  DapDSTOC,
  DapDSTab,
  DapDSTabGroup,
  DapDSTable,
  DapDSTableCell,
  DapDSTableHeader,
  DapDSTableRow,
  DapDSTextarea,
  DapDSTimeGrid,
  DapDSTimePicker,
  DapDSTimeline,
  DapDSTimelineItem,
  DapDSToggleButton,
  DapDSTooltip,
  DapDSTray,
  DapDSTypography,
  DesignEditLine,
  DesignToolsLine,
  DeviceComputerLine,
  DocumentClipboardLine,
  DocumentFileCopyLine,
  DocumentFileImageLine,
  DocumentFileMusicLine,
  DocumentFileTextLine,
  DocumentFileVideoLine,
  DocumentFolderLine,
  DocumentFolderOpenLine,
  ExtendedColumnDef,
  FileListElement,
  HealthHeartFill,
  HealthHeartLine,
  OthersCookieLine,
  PaginationState,
  RowSelectionState,
  SortingState,
  SystemAddLine,
  SystemAlertFill,
  SystemAlertLine,
  SystemCheckLine,
  SystemCheckLine2,
  SystemCheckboxBlankCircleFill,
  SystemCheckboxBlankCircleFillCheck,
  SystemCheckboxBlankCircleLine,
  SystemCheckboxCircleFill,
  SystemCheckboxCircleLine,
  SystemCloseCircleFill,
  SystemCloseCircleLine,
  SystemCloseFill,
  SystemCloseLine,
  SystemDeleteBinFill,
  SystemDeleteBinLine,
  SystemDownloadLine,
  SystemErrorWarningFill,
  SystemErrorWarningLine,
  SystemExternalLinkLine,
  SystemEyeLine,
  SystemEyeOffLine,
  SystemForbidFill,
  SystemInformation2Fill,
  SystemInformationFill,
  SystemInformationLine,
  SystemLightbulbFill,
  SystemLoadingSpinner,
  SystemLockFill,
  SystemLockLine,
  SystemMenuLine,
  SystemMenuLineS,
  SystemMore2Line,
  SystemMoreLine,
  SystemSearchLine,
  SystemShareLine,
  SystemShieldCheckFill,
  SystemShieldCheckLine,
  SystemStarFill,
  SystemSubtractLine,
  SystemSubtractLine2,
  SystemTimeFill,
  SystemTimeLine,
  SystemUpload2Fill,
  SystemUpload2Line,
  SystemUploadLine,
  UserAccountCircleFill,
  UserAccountCircleLine,
  UserUserFill,
  UserUserLine
} from '../../../dds.d.ts'

type DefineCustomElement<
  ElementType extends HTMLElement,
  Props extends Record<string, any> = {},
  Events extends Record<string, any> = {}
> = new () => ElementType & {
  $props: Partial<Omit<HTMLAttributes, keyof ElementType>> & Partial<Omit<ElementType, keyof Props>> & Props & Events
}

// Generic type helper for components with type parameters
type DefineGenericCustomElement<
  ElementType extends HTMLElement,
  Props extends Record<string, any> = {},
  TypeParams extends readonly any[] = [],
  Events extends Record<string, any> = {}
> = new () => ElementType & {
  $props: Partial<Omit<HTMLAttributes, keyof ElementType>> & Partial<Omit<ElementType, keyof Props>> & Props & Events
}

export interface DapDSAccordionEvents {
  /** Event fired when the accordion is opened. */
  onDdsOpened?: (event: CustomEvent<{ open: boolean, item: AccordionBaseElement }>) => void
  /** Event fired when the accordion is closed. */
  onDdsClosed?: (event: CustomEvent<{ open: boolean, item: AccordionBaseElement }>) => void
}

export interface DapDSAvatarGroupEvents {
  /** Fired when the overflow indicator is clicked. */
  onDdsOverflowClick?: (event: CustomEvent) => void
}

export interface DapDSAvatarEvents {
  /** Fired when the avatar is clicked (only when interactive). */
  onDdsClick?: (event: CustomEvent) => void
  /** Fired when the image loads successfully. */
  onDdsLoad?: (event: CustomEvent) => void
  /** Fired when the image fails to load. */
  onDdsError?: (event: CustomEvent) => void
}

export interface DapDSBannerEvents {
  /** Event fired when the banner is closed. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSButtonEvents {
  /** Emitted when the loading timeout is reached */
  onDdsLoadingTimeout?: (event: CustomEvent) => void
}

export interface DapDSCalendarEvents {
  /** Fired when the calendar value changes. */
  onDdsChange?: (event: CustomEvent<{ value: Dayjs }>) => void
}

export interface DapDSCalloutEvents {
  /** Fired when the close button is clicked. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSCheckboxEvents {
  /** Fired when the checkbox is checked or unchecked. */
  onDdsChange?: (event: CustomEvent<{ checked: boolean, indeterminate: boolean, value: string, disabled: boolean, readonly: boolean, type: 'checkbox' }>) => void
  /** Emitted when the checkbox loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the checkbox gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the checkbox receives input. */
  onDdsInput?: (event: CustomEvent<{ checked: boolean, indeterminate: boolean, value: string, disabled: boolean, readonly: boolean }>) => void
}

export interface DapDSComboboxEvents {
  /** Fired when the select value changes. */
  onDdsChange?: (event: CustomEvent<{ value }>) => void
  /** Emitted when the select loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the select gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the select is cleared. */
  onDdsClear?: (event: CustomEvent) => void
  /** Emitted when the manual input value changes. */
  onDdsSearch?: (event: CustomEvent<{ search: string }>) => void
  /** Emitted when typing happens in the input. */
  onDdsInput?: (event: CustomEvent<{ input: string, originalEvent: Event }>) => void
}

export interface DapDSCommandItemEvents {
  /** Fired when the command item is clicked. */
  onDdsCommandItemClick?: (event: CustomEvent<{ value: string, closeOnSelect: boolean }>) => void
}

export interface DapDSCommandEvents {
  /** Fired when the command value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the popup is opened. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Fired when the popup is closed. */
  onDdsClosed?: (event: CustomEvent) => void
  /** Fired when the popup should be closed. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSContentSwitcherEvents {
  /** Fired when the content switcher is changed. */
  onDdsChange?: (event: CustomEvent<{ value: string, selected: boolean }>) => void
}

export interface DapDSCopyBoxInputEvents {
  /** Fired when the user clicks on the copy button. */
  onDdsCopy?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the input value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the input value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when a key is pressed down. */
  onDdsKeydown?: (event: CustomEvent<{ value: string, originalEvent: Event }>) => void
  /** Fired when the input loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the input gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the value cannot be copied. */
  onDdsNotAllowed?: (event: CustomEvent) => void
}

export interface DapDSDataTableEvents<T> {
  /** Fired when the sorting of the table changes. */
  onDdsSortingChange?: (event: CustomEvent<{ sorting: SortingState }>) => void
  /** Fired when the selection of the table changes. */
  onDdsSelectionChange?: (event: CustomEvent<{ selection: RowSelectionState }>) => void
  /** Fired when the pagination of the table changes. */
  onDdsPaginationChange?: (event: CustomEvent<{ pagination: PaginationState }>) => void
  /** Fired when a row is clicked. */
  onDdsRowClick?: (event: CustomEvent<{ row: Row<T> }>) => void
}

export interface DapDSDatePickerEvents {
  /** Fired when the datepicker value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the datepicker input value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the datepicker input value is valid. Happens on manual input typing. */
  onDdsValidDate?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the datepicker input value is invalid. Happens on manual input typing. */
  onDdsInvalidDate?: (event: CustomEvent<{ value: string, type: 'invalid' | 'out-of-range' }>) => void
  /** Fired when the datepicker is cleared. */
  onDdsClear?: (event: CustomEvent) => void
  /** Emitted when the datepicker gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the datepicker loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
}

export interface DapDSFileInputListItemEvents {
  /** Dispatched when a file is removed from the list. */
  onDdsFileRemove?: (event: CustomEvent<{ file: FileListElement }>) => void
}

export interface DapDSFileInputEvents {
  /** Fired when a file upload starts. */
  onDdsUploadStart?: (event: CustomEvent<{ file: File }>) => void
  /** Fired during file upload progress. */
  onDdsUploadProgress?: (event: CustomEvent<{ file: File, progress: number }>) => void
  /** Fired when a file upload completes successfully. */
  onDdsUploadComplete?: (event: CustomEvent<{ file: File, item: DapDSFileInputListItem, result: any }>) => void
  /** Fired when a file upload encounters an error. Can contain a single error or an array of validation errors. */
  onDdsUploadError?: (event: CustomEvent<{ file: File, item: DapDSFileInputListItem, error: Error } | { errors: Error[] }>) => void
  /** Fired when all file uploads are complete. */
  onDdsAllUploadsComplete?: (event: CustomEvent) => void
  /** Fired when a file is removed from the file input. */
  onDdsFileRemoved?: (event: CustomEvent<{ file: FileListElement }>) => void
  /** Fired when a file deletion from server encounters an error. */
  onDdsFileDeleteError?: (event: CustomEvent<{ file: FileListElement, error: Error }>) => void
  /** Fired when the file input value changes. */
  onDdsFileChange?: (event: CustomEvent<{ files: File[] }>) => void
}

export interface DapDSInputEvents {
  /** Fired when the input value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the input value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when a key is pressed down. */
  onDdsKeydown?: (event: CustomEvent<{ value: string, originalEvent: Event }>) => void
  /** Fired when the input loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the input gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
}

export interface DapDSLinkEvents {
  /** Emitted when the link is clicked. */
  onDdsClick?: (event: CustomEvent<{ event: Event }>) => void
}

export interface DapDSModalEvents {
  /** Fires before the modal opens. */
  onDdsBeforeOpen?: (event: CustomEvent) => void
  /** Fires after the modal opens. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Fires before the modal closes. */
  onDdsBeforeClose?: (event: CustomEvent) => void
  /** Fires after the modal closed. */
  onDdsClosed?: (event: CustomEvent) => void
  /** Fires when the modal is closes. You can prevent the modal from closing by calling `event.preventDefault()`. */
  onDdsClose?: (event: CustomEvent) => void
  /** Fires when the OK button is clicked. You can prevent the modal from closing by calling `event.preventDefault()`. */
  onDdsOk?: (event: CustomEvent) => void
  /** Fires when the Cancel button is clicked. You can prevent the modal from closing by calling `event.preventDefault()`. */
  onDdsCancel?: (event: CustomEvent) => void
}

export interface DapDSNavigationMenuItemEvents {
  /** Fired when a navigation item is clicked. */
  onDdsNavigationItemClick?: (event: CustomEvent<{ href: string, event: Event }>) => void
  /** Fired when a navigation dropdown is opened. */
  onDdsNavigationDropdownOpen?: (event: CustomEvent<{ item: DapDSNavigationMenuItem }>) => void
  /** Fired when the popup is opened. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Fired when the popup is closed. */
  onDdsClosed?: (event: CustomEvent) => void
  /** Fired when the popup should be closed. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSNavigationMenuEvents {
  /** Fired when a navigation item is clicked. */
  onDdsNavigationItemClick?: (event: CustomEvent<{ href: string, event: Event }>) => void
}

export interface DapDSNumberInputEvents {
  /** Fired when the input value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the input value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when a key is pressed down. */
  onDdsKeydown?: (event: CustomEvent<{ value: string, originalEvent: Event }>) => void
  /** Fired when the input loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the input gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
}

export interface DapDSOfficialWebsiteBannerEvents {
  /** Event fired when the accordion is opened. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Event fired when the accordion is closed. */
  onDdsClosed?: (event: CustomEvent) => void
}

export interface DapDSOptionListEvents {
  /** Fired when the escape key is pressed. */
  onDdsCancel?: (event: CustomEvent) => void
  /** Fired when the option list value changes. */
  onDdsOptionChange?: (event: CustomEvent<{ option: DapDSOptionItem, value: string, index: number, text: string }>) => void
  /** Fired when a key is pressed down. */
  onDdsKeydown?: (event: CustomEvent) => void
  /** Fired when the available options list changes. */
  onDdsListChanged?: (event: CustomEvent<{ elements: DapDSOptionItem[] }>) => void
}

export interface DapDSPagerEvents {
  /** Event fired when the pagination changes */
  onDdsPaginationChange?: (event: CustomEvent<{ action: string, pagination: { pageIndex: number, pageSize: number } }>) => void
}

export interface DapDSPasswordInputEvents {
  /** Fired when the input value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the input value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when a key is pressed down. */
  onDdsKeydown?: (event: CustomEvent<{ value: string, originalEvent: Event }>) => void
  /** Fired when the input loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the input gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
}

export interface DapDSPopupEvents {
  /** Fired when the popup is opened. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Fired when the popup is closed. */
  onDdsClosed?: (event: CustomEvent) => void
  /** Fired when the popup should be closed. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSRadioButtonEvents {
  /** Fired when the radio button is checked. */
  onDdsChange?: (event: CustomEvent<{ checked: boolean, value: string, disabled: boolean, readonly: boolean, type: 'radio' }>) => void
  /** Emitted when the radio button loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the radio button gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the radio button receives input. */
  onDdsInput?: (event: CustomEvent<{ checked: boolean, value: string, disabled: boolean, readonly: boolean }>) => void
}

export interface DapDSRatingEvents {
  /** Event fired when the rating value changes. */
  onDdsChange?: (event: CustomEvent<{ value: number }>) => void
}

export interface DapDSSearchEvents {
  /** Fired when the search value changes. */
  onDdsChange?: (event: CustomEvent) => void
  /** Emitted when the search loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the search gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the search is cleared. */
  onDdsClear?: (event: CustomEvent) => void
  /** Emitted when the search input value changes. */
  onDdsSearch?: (event: CustomEvent) => void
  /** Emitted when typing happens in the search input. */
  onDdsInput?: (event: CustomEvent) => void
}

export interface DapDSSelectEvents {
  /** Fired when the select value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Emitted when the select loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the select gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the select dropdown is opened. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Emitted when the select dropdown is closed. */
  onDdsClosed?: (event: CustomEvent) => void
}

export interface DapDSSideNavEvents {
  /** Event fired when the side navigation item is clicked. */
  onDdsItemClick?: (event: CustomEvent<{ href: string, event: Event }>) => void
}

export interface DapDSSnackbarMessageEvents {
  /** Fires when the snackbar closes. */
  onDdsClose?: (event: CustomEvent<{ id: string }>) => void
}

export interface DapDSSwitchEvents {
  /** Fired when the input value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Emitted when the input loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the input gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the input receives input. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
}

export interface DapDSTabGroupEvents {
  /** Fired when select a new tab. */
  onDdsTabSelect?: (event: CustomEvent) => void
}

export interface DapDSTextareaEvents {
  /** Fires when the count of the textarea changes. */
  onDdsCountChange?: (event: CustomEvent<{ value: number }>) => void
  /** Fired when the textarea value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the textarea value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when a key is pressed down. */
  onDdsKeydown?: (event: CustomEvent<{ value: string, originalEvent: Event }>) => void
  /** Fired when the textarea loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the textarea gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when select text in textarea. */
  onDdsSelect?: (event: CustomEvent<{ value: string }>) => void
}

export interface DapDSTimeGridEvents {
  /** Fired when time selection changes. */
  onDdsChange?: (event: CustomEvent<{ detail: TimeSelection }>) => void
  /** Fired when the time grid should close. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSTimePickerEvents {
  /** Fired when the timepicker value changes. */
  onDdsChange?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the timepicker input value changes. */
  onDdsInput?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the timepicker input value is valid. Happens on manual input typing. */
  onDdsValidTime?: (event: CustomEvent<{ value: string }>) => void
  /** Fired when the timepicker input value is invalid. Happens on manual input typing. */
  onDdsInvalidTime?: (event: CustomEvent<{ value: string, type: 'invalid' | 'out-of-range' }>) => void
  /** Fired when the timepicker is cleared. */
  onDdsClear?: (event: CustomEvent) => void
  /** Emitted when the timepicker gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
  /** Emitted when the timepicker loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
}

export interface DapDSTOCEvents {
  /** Event that is triggered when the anchor changes. */
  onDdsAnchorChange?: (event: CustomEvent<{ selectedItem: HTMLAnchorElement, anchorElement: IntersectionObserverEntry | HTMLElement }>) => void
}

export interface DapDSTrayEvents {
  /** Fires before the tray opens. */
  onDdsBeforeOpen?: (event: CustomEvent) => void
  /** Fires after the tray opens. */
  onDdsOpened?: (event: CustomEvent) => void
  /** Fires before the tray closes. */
  onDdsBeforeClose?: (event: CustomEvent) => void
  /** Fires after the tray closed. */
  onDdsClosed?: (event: CustomEvent) => void
  /** Fires when the tray is closes. You can prevent the tray from closing by calling `event.preventDefault()`. */
  onDdsClose?: (event: CustomEvent) => void
}

export interface DapDSRadioGroupEvents {
  /** Fired when the radio group is checked. */
  onDdsChange?: (event: CustomEvent) => void
  /** Emitted when the radio group loses focus. */
  onDdsBlur?: (event: CustomEvent) => void
  /** Emitted when the radio group gains focus. */
  onDdsFocus?: (event: CustomEvent) => void
}

export interface DapDSAccordionSlots {
  /** The content of the accordion. */
  default?: () => any
  /** The heading of the accordion. */
  'heading'?: () => any
  /** The icon when the accordion is opened. */
  'icon-opened'?: () => any
  /** The icon when the accordion is closed. */
  'icon-closed'?: () => any
}

export interface DapDSAccordionGroupSlots {
  /** The content of the accordion group. */
  default?: () => any
}

export interface DapDSAvatarGroupSlots {
  /** The avatars to display in the group. */
  default?: () => any
}

export interface DapDSAvatarSlots {
  /** The icon to display when variant is 'icon'. */
  'icon'?: () => any
  /** Custom fallback content when image fails to load. */
  'fallback'?: () => any
}

export interface DapDSBadgeSlots {
  /** The content of the badge. */
  default?: () => any
  /** The icon of the badge. */
  'icon'?: () => any
}

export interface DapDSBannerSlots {
  /** The content of the banner. */
  default?: () => any
  /** Actions of banner */
  'actions'?: () => any
  /** The icon of the banner. */
  'icon'?: () => any
}

export interface DapDSBreadcrumbSlots {
  /** The content of the breadcrumb. */
  default?: () => any
  /** The separator between breadcrumb items. Default is '/'. */
  'separator'?: () => any
}

export interface DapDSBreadcrumbItemSlots {
  /** The content of the breadcrumb item. */
  default?: () => any
  /** The separator between breadcrumb items. Default is an arrow-right-s-line icon. */
  'separator'?: () => any
}

export interface DapDSButtonSlots {
  /** The content of the button. Can contain text, icons, or other elements. */
  default?: () => any
}

export interface DapDSCalendarCellSlots {
  /** The content of the calendar cell. */
  default?: () => any
}

export interface DapDSCalendarSlots {
  /** The content of the calendar. */
  default?: () => any
}

export interface DapDSCalloutSlots {
  /** The content of the callout. */
  default?: () => any
  /** The title of the callout. */
  'title'?: () => any
  /** The icon of the callout. */
  'icon'?: () => any
  /** The actions of the callout. */
  'actions'?: () => any
  /** The close button of the callout. */
  'close'?: () => any
}

export interface DapDSCardActionsSlots {
  /** The content of the card actions. */
  default?: () => any
}

export interface DapDSCardContentSlots {
  /** The content of the card-content. */
  default?: () => any
}

export interface DapDSCardImageSlots {
  /** The default slot for the image. The slot can accept any element, for example a video. If nothing is added to the slot, the image will be rendered. */
  default?: () => any
}

export interface DapDSCardSubtitleSlots {
  /** The content of the subtitle. */
  default?: () => any
}

export interface DapDSCardTitleSlots {
  /** The content of the title. */
  default?: () => any
}

export interface DapDSCardSlots {
  /** The content of the card. */
  default?: () => any
}

export interface DapDSComboboxSlots {
  /** The default slot for the options. */
  default?: () => any
}

export interface DapDSCommandGroupSlots {
  /** The default slot for the command group. */
  default?: () => any
}

export interface DapDSCommandItemSlots {
  /** The label of the command item. */
  default?: () => any
  /** The check of the command item. */
  'check'?: () => any
}

export interface DapDSCommandSlots {
  /** The trigger element for the command dropdown. */
  'trigger'?: () => any
  /** The command items. */
  default?: () => any
}

export interface DapDSContentSwitcherItemSlots {
  /** The icon content of the segmented control item. */
  'iconcontent'?: () => any
}

export interface DapDSContentSwitcherSlots {
  /** The content switcher items. */
  default?: () => any
}

export interface DapDSDAPBadgeSlots {
  /** Description of badge * */
  default?: () => any
}

export interface DapDSDataTableSlots {
  /** The loading content of the table. */
  'loading'?: () => any
  /** The empty content of the table. */
  'empty'?: () => any
}

export interface DapDSFeedbackSlots {
  /** The custom icon of the feedback. */
  'icon'?: () => any
  /** The text of the feedback. */
  default?: () => any
}

export interface DapDSFileInputListItemSlots {
  /** The delete button. */
  'delete-button'?: () => any
}

export interface DapDSFileInputListSlots {
  /** The delete button. */
  'delete-button'?: () => any
}

export interface DapDSFileInputSlots {
  /** The content to display in the dropzone. */
  'dropzone-content'?: () => any
}

export interface DapDSIconSlots {
  /** The content of the icon for custom svg icons. */
  default?: () => any
}

export interface DapDSIconButtonSlots {
  /** The icon of the button. */
  default?: () => any
}

export interface DapDSInputSlots {
  /** The postfix of the input. */
  'postfix'?: () => any
  /** The prefix of the input. */
  'prefix'?: () => any
  /** The addon before the input. */
  'addon-before'?: () => any
  /** The addon after the input. */
  'addon-after'?: () => any
  /** The custom icon of the feedback. */
  'feedback-icon'?: () => any
}

export interface DapDSLinkSlots {
  /** The text of the link. */
  default?: () => any
}

export interface DapDSListItemSlots {
  /** The content of the list item. */
  default?: () => any
  /** The icon of the list item. */
  'icon'?: () => any
  /** The title of the list item. */
  'title'?: () => any
  /** The actions of the list item. */
  'actions'?: () => any
}

export interface DapDSModalSlots {
  /** The content of the modal. */
  default?: () => any
  /** The title of the modal. */
  'title'?: () => any
  /** The description of the modal. */
  'description'?: () => any
  /** The footer of the modal. */
  'footer'?: () => any
}

export interface DapDSNavigationMenuItemSlots {
  /** The trigger element (link, button, etc.) for this navigation item. */
  'trigger'?: () => any
  /** The title of the navigation item. */
  'title'?: () => any
  /** The dropdown content (only used if trigger slot is provided). */
  default?: () => any
}

export interface DapDSNavigationMenuSlots {
  /** The navigation menu list and items. */
  default?: () => any
}

export interface DapDSNotificationBadgeSlots {
  /** The content of the notification badge. */
  default?: () => any
}

export interface DapDSNumberInputSlots {
  /** The custom icon of the feedback. */
  'feedback-icon'?: () => any
}

export interface DapDSOfficialWebsiteBannerSlots {
  /** The content of the accordion. */
  default?: () => any
  /** The heading of the accordion. */
  'heading'?: () => any
  /** The icon when the accordion is opened. */
  'icon-opened'?: () => any
  /** The icon when the accordion is closed. */
  'icon-closed'?: () => any
}

export interface DapDSOptionItemSlots {
  /** The prefix of the option item. */
  'prefix'?: () => any
  /** The label of the option item. */
  default?: () => any
  /** The suffix of the option item. */
  'suffix'?: () => any
}

export interface DapDSOptionListSlots {
  /** The default slot for the options. */
  default?: () => any
}

export interface DapDSPopupSlots {
  /** The trigger of the popup. */
  'trigger'?: () => any
  /** The content of the popup. */
  default?: () => any
}

export interface DapDSScrollAreaSlots {
  /** The content to be scrolled */
  default?: () => any
}

export interface DapDSSearchSlots {
  /** The default slot for the options. */
  default?: () => any
}

export interface DapDSSelectSlots {
  /** The option list of the select. */
  default?: () => any
  /** The indicator icon of the select. */
  'indicator-icon'?: () => any
}

export interface DapDSSideNavGroupSlots {
  /** The content of the side navigation group. */
  default?: () => any
  /** The submenu of the side navigation group. */
  'submenu'?: () => any
  /** The suffix of the side navigation group. */
  'suffix'?: () => any
}

export interface DapDSSideNavItemSlots {
  /** The content of the side navigation item. */
  default?: () => any
  /** The suffix of the side navigation item. */
  'suffix'?: () => any
}

export interface DapDSSideNavSlots {
  /** The content of the side navigation. */
  default?: () => any
}

export interface DapDSSkipLinkSlots {
  /** The content of the skip link. */
  default?: () => any
}

export interface DapDSSnackbarMessageSlots {
  /** The content of the snackbar. */
  default?: () => any
}

export interface DapDSSpinnerSlots {
  /** The loading text content. */
  default?: () => any
}

export interface DapDSStackSlots {
  /** The content of the stack. */
  default?: () => any
}

export interface DapDSTabGroupSlots {
  /** The tab items. */
  default?: () => any
}

export interface DapDSTabSlots {
  /** The tab title template. */
  default?: () => any
  /** The tab content. */
  'content'?: () => any
}

export interface DapDSTableCellSlots {
  /** The default slot. */
  default?: () => any
}

export interface DapDSTableHeaderSlots {
  /** The default slot. */
  default?: () => any
}

export interface DapDSTableRowSlots {
  /** The default slot. Accepts `dap-ds-table-cell` and `dap-ds-table-header` elements. */
  default?: () => any
}

export interface DapDSTableSlots {
  /** The default slot. Accepts `dap-ds-table-row` elements. */
  default?: () => any
}

export interface DapDSTextareaSlots {
  /** The custom icon of the feedback. */
  'feedback-icon'?: () => any
}

export interface DapDSTimelineItemSlots {
  /** The default slot for the item content. */
  default?: () => any
}

export interface DapDSTimelineSlots {
  /** The default slot for the timeline items. */
  default?: () => any
}

export interface DapDSToggleButtonSlots {
  /** The content of the toggle button. */
  default?: () => any
}

export interface DapDSTooltipSlots {
  /** The content of the tooltip. */
  default?: () => any
  /** The trigger element of the tooltip. */
  'trigger'?: () => any
}

export interface DapDSTraySlots {
  /** The content of the tray. */
  default?: () => any
  /** The header of the tray. */
  'header'?: () => any
  /** The footer of the tray. */
  'footer'?: () => any
}

export interface DapDSTypographySlots {
  /** The content of the typography. */
  default?: () => any
}

export interface DapDSInputGroupSlots {
  /** The content of the input group items. */
  default?: () => any
  /** The custom icon of the feedback. */
  'feedback-icon'?: () => any
}

export interface DapDSRadioGroupSlots {
  /** The content of the radio group. */
  default?: () => any
  /** The custom icon of the feedback. */
  'feedback-icon'?: () => any
}

export type DapDSAccordionProps = {
  /** The size of the accordion. Default is `sm`. */
  size?: DapDSAccordion["size"]
  /** The heading text of the accordion, this will be used as the aria label of the heading also if ariaLabel is not provided */
  heading?: DapDSAccordion["heading"]
  /** The heading level of the accordion. Default is `4`. */
  headingLevel?: DapDSAccordion["headingLevel"]
  /** Whether the accordion is opened. Default is `false`. */
  opened?: DapDSAccordion["opened"]
  /** The location of the icon. Default is `right`. */
  iconLocation?: DapDSAccordion["iconLocation"]
  /** The variant of the accordion. */
  variant?: DapDSAccordion["variant"]
  /** Whether the accordion is the last item. */
  lastItem?: DapDSAccordion["lastItem"]
  /** Whether the accordion is disabled. */
  disabled?: DapDSAccordion["disabled"]
  /** Whether the accordion is in loading state. */
  loading?: DapDSAccordion["loading"]
}

export type DapDSAccordionGroupProps = {
  /** Whether to close other accordions when one is opened. */
  autoClose?: DapDSAccordionGroup["autoClose"]
  /** The variant of the accordion */
  variant?: DapDSAccordionGroup["variant"]
}

export type DapDSAvatarGroupProps = {
  /** The size of avatars in the group */
  size?: DapDSAvatarGroup["size"]
  /** Layout type for the avatar group */
  layout?: DapDSAvatarGroup["layout"]
  /** Maximum number of avatars to show before showing overflow */
  max?: DapDSAvatarGroup["max"]
  /** Whether to show the total count in overflow indicator */
  "show-total"?: DapDSAvatarGroup["showTotal"]
  /** Interactive overflow indicator */
  "interactive-overflow"?: DapDSAvatarGroup["interactiveOverflow"]
  /** Accessible label for the avatar group */
  label?: DapDSAvatarGroup["label"]
  /** Accessible label for the overflow indicator */
  "overflow-label"?: DapDSAvatarGroup["overflowLabel"]
}

export type DapDSAvatarProps = {
  /** The size of the avatar */
  size?: DapDSAvatar["size"]
  /** The shape of the avatar */
  shape?: DapDSAvatar["shape"]
  /** The variant type of the avatar */
  variant?: DapDSAvatar["variant"]
  /** The source of the avatar image */
  src?: DapDSAvatar["src"]
  /** The alt text of the avatar */
  alt?: DapDSAvatar["alt"]
  /** The initials to display when variant is 'initials' */
  initials?: DapDSAvatar["initials"]
  /** Accessible label for the avatar */
  label?: DapDSAvatar["label"]
  /** Loading state indicator */
  loading?: DapDSAvatar["loading"]
  /** Whether the avatar is interactive (clickable) */
  interactive?: DapDSAvatar["interactive"]
  /** The width of the avatar. This will override the size */
  width?: DapDSAvatar["width"]
  /** The height of the avatar. This will override the size */
  height?: DapDSAvatar["height"]
}

export type DapDSBadgeProps = {
  /** The type of the badge */
  type?: DapDSBadge["type"]
  /** The size of the badge */
  size?: DapDSBadge["size"]
  /** The icon of the badge, this is a name of a built in icon */
  icon?: DapDSBadge["icon"]
  /** Whether the badge represents dynamic content that should announce changes */
  live?: DapDSBadge["live"]
}

export type DapDSAnchorHeadingProps = {
  /** The variant of the heading. Default is `h2`. Can be `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`. */
  variant?: DapDSAnchorHeading["variant"]
  /** The label of the heading. */
  label?: DapDSAnchorHeading["label"]
  /**  */
  elementId?: DapDSAnchorHeading["elementId"]
  /**  */
  anchorTitle?: DapDSAnchorHeading["anchorTitle"]
}

export type DapDSBannerProps = {
  /** The variant of the banner */
  variant?: DapDSBanner["variant"]
  /** Whether the banner is closeable */
  closeable?: DapDSBanner["closeable"]
  /** State of the banner. If false banner is hidden */
  opened?: DapDSBanner["opened"]
  /** The aria-label for the close button */
  closeButtonLabel?: DapDSBanner["closeButtonLabel"]
  /** The icon of the banner, this is a name of a built icon icon */
  icon?: DapDSBanner["icon"]
}

export type DapDSBreadcrumbProps = {
  /**  */
  variant?: DapDSBreadcrumb["variant"]
  /** Mobile version of the breadcrumb */
  mobile?: DapDSBreadcrumb["mobile"]
  /** The aria-labelledby of the breadcrumb */
  "aria-labelledby"?: DapDSBreadcrumb["ariaLabelledBy"]
}

export type DapDSBreadcrumbItemProps = {
  /** The URL of the breadcrumb item. */
  href?: DapDSBreadcrumbItem["href"]
  /** The target of the breadcrumb item. */
  target?: DapDSBreadcrumbItem["target"]
  /** The rel of the breadcrumb item link. */
  rel?: DapDSBreadcrumbItem["rel"]
  /** Whether the breadcrumb item is disabled. */
  disabled?: DapDSBreadcrumbItem["disabled"]
  /** The variant of the breadcrumb item. */
  variant?: DapDSBreadcrumbItem["variant"]
}

export type DapDSButtonProps = {
  /** The visual style variant of the button */
  variant?: DapDSButton["variant"]
  /** The size of the button affecting padding and font size */
  size?: DapDSButton["size"]
  /** Whether the button is in loading state, showing a spinner and disabling interaction */
  loading?: DapDSButton["loading"]
  /** Whether the button represents a destructive action (applies danger styling) */
  danger?: DapDSButton["danger"]
  /** The shape of the button - use 'circle' for icon-only buttons */
  shape?: DapDSButton["shape"]
  /** The HTML type attribute for form interaction */
  htmlType?: DapDSButton["htmlType"]
  /** The URL to navigate to. When present, the button renders as an anchor element */
  href?: DapDSButton["href"]
  /** The target attribute for link navigation */
  target?: DapDSButton["target"]
  /** The rel attribute for link security and behavior */
  rel?: DapDSButton["rel"]
  /** The ID of the element controlled by this button */
  "aria-controls"?: DapDSButton["ariaControls"]
  /** The ID of the element that describes the button */
  "aria-describedby"?: DapDSButton["ariaDescribedBy"]
  /** Controls loading timeout in milliseconds */
  loadingTimeout?: DapDSButton["loadingTimeout"]
  /** Whether the button is active */
  active?: DapDSButton["active"]
}

export type DapDSCalendarCellProps = {
  /** Whether the calendar cell is selected. */
  selected?: DapDSCalendarCell["selected"]
  /** Whether the calendar cell is disabled. */
  disabledDay?: DapDSCalendarCell["disabledDay"]
  /** Whether the calendar cell is today. */
  today?: DapDSCalendarCell["today"]
  /** Whether the calendar cell is out of range. */
  outOfRange?: DapDSCalendarCell["outOfRange"]
  /** Whether the calendar cell is a date header. */
  header?: DapDSCalendarCell["header"]
  /** Whether the calendar cell is focused. */
  focused?: DapDSCalendarCell["focused"]
  /** The value of the calendar cell. */
  value?: DapDSCalendarCell["value"]
  /**  */
  label?: DapDSCalendarCell["label"]
  /**  */
  focusElement?: DapDSCalendarCell["focusElement"]
}

export type DapDSCalendarProps = {
  /** The locale of the calendar. */
  locale?: DapDSCalendar["locale"]
  /** The value of the calendar. */
  value?: DapDSCalendar["value"]
  /** The current visible date of the calendar. Only the month and year are considered. */
  currentDate?: DapDSCalendar["currentDate"]
  /** The minimum date of the calendar. Only the month and year are considered. */
  minDate?: DapDSCalendar["minDate"]
  /** The maximum date of the calendar. Only the month and year are considered. */
  maxDate?: DapDSCalendar["maxDate"]
  /** The function to determine if the date is disabled. */
  disabledDate?: DapDSCalendar["disabledDate"]
  /**  */
  startDate?: DapDSCalendar["startDate"]
  /**  */
  endDate?: DapDSCalendar["endDate"]
}

export type DapDSCalloutProps = {
  /** The variant of the callout */
  variant?: DapDSCallout["variant"]
  /** The alignment of the callout. Can be `vertical` or `horizontal`. */
  alignment?: DapDSCallout["alignment"]
  /** The strongness of the callout colors. Can be `subtle`, `base`, `medium`, or `strong`. */
  shade?: DapDSCallout["shade"]
  /** If the callout has a border */
  noBorder?: DapDSCallout["noBorder"]
  /** If the callout has a close button */
  closeable?: DapDSCallout["closeable"]
  /** The header of the callout */
  title?: DapDSCallout["title"]
  /** The label of the close button */
  closeButtonLabel?: DapDSCallout["closeButtonLabel"]
  /** If the callout is opened */
  opened?: DapDSCallout["opened"]
}

export type DapDSCardActionsProps = {
  /** Whether the card actions should be sized from the parent. */
  parentSized?: DapDSCardActions["parentSized"]
  /** The spacing of the card actions. This adds a margin to the card actions. Default is `bottom`. */
  spacing?: DapDSCardActions["spacing"]
  /** The size of the card actions. Default is `sm`. */
  size?: DapDSCardActions["size"]
}

export type DapDSCardContentProps = {
  /** The base rendered root tag of the card content. */
  renderAs?: DapDSCardContent["renderAs"]
  /** Whether the card content should be sized from the parent. */
  parentSized?: DapDSCardContent["parentSized"]
  /** The spacing of the card content. This adds a margin to the card subtitle. Default is `bottom`. */
  spacing?: DapDSCardContent["spacing"]
  /** The size of the card subtitle. Default is `sm`. */
  size?: DapDSCardContent["size"]
}

export type DapDSCardImageProps = {
  /** The source of the image. */
  src?: DapDSCardImage["src"]
  /** The alt text of the image. */
  alt?: DapDSCardImage["alt"]
  /** The width of the image. */
  width?: DapDSCardImage["width"]
  /** The height of the image. */
  height?: DapDSCardImage["height"]
}

export type DapDSCardSubtitleProps = {
  /** The base rendered root tag of the card subtitle. */
  renderAs?: DapDSCardSubtitle["renderAs"]
  /** Whether the card subtitle should be sized from the parent. */
  parentSized?: DapDSCardSubtitle["parentSized"]
  /** The spacing of the card subtitle. This adds a margin to the card subtitle. Default is `top`. */
  spacing?: DapDSCardSubtitle["spacing"]
  /** The size of the card subtitle. Default is `sm`. */
  size?: DapDSCardSubtitle["size"]
}

export type DapDSCardTitleProps = {
  /** The base rendered root tag of the card title. */
  renderAs?: DapDSCardTitle["renderAs"]
  /** Whether the card title should be sized from the parent. */
  parentSized?: DapDSCardTitle["parentSized"]
  /** Whether the card title should have no padding. */
  noPadding?: DapDSCardTitle["noPadding"]
  /** The spacing of the card title. This adds a margin to the card title. Default is `top`. */
  spacing?: DapDSCardTitle["spacing"]
  /** The size of the card title. Default is `sm`. */
  size?: DapDSCardTitle["size"]
}

export type DapDSCardProps = {
  /** Whether the card is interactive. Default is false. If true, the card will be rendered as an anchor element. */
  interactive?: DapDSCard["interactive"]
  /** The render as type of the card, only applicable when interactive. */
  renderAs?: DapDSCard["renderAs"]
  /** Whether the card is disabled. */
  disabled?: DapDSCard["disabled"]
  /** Removes the border around the card */
  noBorder?: DapDSCard["noBorder"]
  /** Removes the padding around the card */
  noPadding?: DapDSCard["noPadding"]
  /** The link target of the card */
  target?: DapDSCard["target"]
  /** The URL of the card. */
  href?: DapDSCard["href"]
  /** The rel of the card link. */
  rel?: DapDSCard["rel"]
  /** The size of the card title. Default is `sm`. */
  size?: DapDSCard["size"]
}

export type DapDSCheckboxProps = {
  /** Whether the checkbox is indeterminate */
  indeterminate?: DapDSCheckbox["indeterminate"]
  /** Whether the checkbox should prevent the default action */
  preventDefault?: DapDSCheckbox["preventDefault"]
  /** This sets up border around the checkbox, when true. */
  border?: DapDSCheckbox["border"]
  /** Whether the checkbox is readonly (cannot be changed but value is submitted with form). */
  readonly?: DapDSCheckbox["readonly"]
  /** The type of the checkbox */
  type?: DapDSCheckbox["type"]
  /**  */
  focusElement?: DapDSCheckbox["focusElement"]
  /** The name of the checkbox. */
  name?: DapDSCheckbox["name"]
  /** The value of the checkbox. */
  value?: DapDSCheckbox["value"]
  /** Whether the checkbox is checked. */
  checked?: DapDSCheckbox["checked"]
  /** The label of the checkbox. */
  label?: DapDSCheckbox["label"]
  /** The description of the checkbox. */
  description?: DapDSCheckbox["description"]
  /** Whether the checkbox is disabled. */
  disabled?: DapDSCheckbox["disabled"]
  /** Whether the checkbox is required. */
  required?: DapDSCheckbox["required"]
  /** The size of the checkbox. Default is 'sm'. */
  size?: DapDSCheckbox["size"]
  /** The placement of the label. */
  labelPlacement?: DapDSCheckbox["labelPlacement"]
  /** The placement of the description. */
  descriptionPlacement?: DapDSCheckbox["descriptionPlacement"]
  /** The weight of the label. */
  subtle?: DapDSCheckbox["subtle"]
  /** The feedback of the checkbox. */
  feedback?: DapDSCheckbox["feedback"]
  /** The feedback type of the checkbox. */
  feedbackType?: DapDSCheckbox["feedbackType"]
  /** The invalid state of the checkbox. */
  invalid?: DapDSCheckbox["invalid"]
  /** The optional state of the checkbox. */
  optional?: DapDSCheckbox["optional"]
  /** The optional label of the checkbox. */
  optionalLabel?: DapDSCheckbox["optionalLabel"]
}

export type DapDSComboboxProps = {
  /** The value of the select. */
  value?: DapDSCombobox["value"]
  /** The placeholder of the select. */
  placeholder?: DapDSCombobox["placeholder"]
  /** The placement of the select dropdown. Default is 'bottom-start'. */
  placement?: DapDSCombobox["placement"]
  /** Whether the select dropdown is opened. */
  opened?: DapDSCombobox["opened"]
  /** The sync mode of the select dropdown. How the dropdown item size is synced to the trigger element'. */
  sync?: DapDSCombobox["sync"]
  /** The label of the select. */
  label?: DapDSCombobox["label"]
  /** The description of the select. */
  description?: DapDSCombobox["description"]
  /** The tooltip of the select. */
  tooltip?: DapDSCombobox["tooltip"]
  /** The tooltip placement of the input. */
  tooltipPlacement?: DapDSCombobox["tooltipPlacement"]
  /** The size of the select. Default is 'sm'. */
  size?: DapDSCombobox["size"]
  /** Whether the select is disabled. */
  disabled?: DapDSCombobox["disabled"]
  /** Whether the select is required. */
  required?: DapDSCombobox["required"]
  /** Whether the select is readonly. */
  readonly?: DapDSCombobox["readonly"]
  /** Whether the select is autofocus. */
  autofocus?: DapDSCombobox["autofocus"]
  /** The feedback content of the select. */
  feedback?: DapDSCombobox["feedback"]
  /** The feedback type of the select. */
  feedbackType?: DapDSCombobox["feedbackType"]
  /** The search mode of the select. */
  searchMode?: DapDSCombobox["searchMode"]
  /** Whether the combobox should open on empty results. */
  openOnEmpty?: DapDSCombobox["openOnEmpty"]
  /** Whether the combobox allows manual input, or free text. */
  allowManualInput?: DapDSCombobox["allowManualInput"]
  /** Whether the combobox should search for the selected item text. */
  searchForText?: DapDSCombobox["searchForText"]
  /** Whether the combobox should complete the text. */
  textComplete?: DapDSCombobox["textComplete"]
  /** The aria label of the search button. */
  searchButtonAriaLabel?: DapDSCombobox["searchButtonAriaLabel"]
  /** Show the selected item check mark in the dropdown. 'true' or 'false' */
  selectable?: DapDSCombobox["selectable"]
  /** Whether the combobox open indicator should be animated. */
  noAnimation?: DapDSCombobox["noAnimation"]
}

export type DapDSCommandGroupProps = {
  /** The label of the command group. */
  label?: DapDSCommandGroup["label"]
  /** Whether the command group is exclusive, only one item can be selected at a time. */
  exclusive?: DapDSCommandGroup["exclusive"]
}

export type DapDSCommandItemProps = {
  /** The value of the command item. */
  value?: DapDSCommandItem["value"]
  /** Whether the command item is disabled. */
  disabled?: DapDSCommandItem["disabled"]
  /** The name of the button */
  name?: DapDSCommandItem["name"]
  /** The Href of the button. If this present the button will be rendered as an anchor `<a></a>` element. */
  href?: DapDSCommandItem["href"]
  /** The target of the button */
  target?: DapDSCommandItem["target"]
  /** The rel of the button link. Default is `noreferrer noopener`. */
  rel?: DapDSCommandItem["rel"]
  /** Whether the command item is selectable. */
  selectable?: DapDSCommandItem["selectable"]
  /** Whether the command item is selected. */
  selected?: DapDSCommandItem["selected"]
  /** Whether the command item should close the command when selected. */
  closeOnSelect?: DapDSCommandItem["closeOnSelect"]
}

export type DapDSCommandProps = {
  /** The value of the command. */
  value?: DapDSCommand["value"]
  /** Whether the command popup should take full width of the screen. */
  fullWidth?: DapDSCommand["fullWidth"]
  /** ID of element that labels the command dropdown. */
  "aria-labelledby"?: DapDSCommand["ariaLabelledBy"]
  /** The placement of the popup. */
  placement?: DapDSCommand["placement"]
  /** Whether the popup should overflow. */
  overflow?: DapDSCommand["overflow"]
  /** The size of the popup. */
  size?: DapDSCommand["size"]
  /** The disabled state of the popup. */
  disabled?: DapDSCommand["disabled"]
  /** The open state of the popup. */
  opened?: DapDSCommand["opened"]
  /** The floating strategy of the popup. */
  floatingStrategy?: DapDSCommand["floatingStrategy"]
  /** The offset of the popup. */
  offset?: DapDSCommand["offset"]
  /** Whether the popup should sync its width with the trigger. */
  sync?: DapDSCommand["sync"]
  /** The maximum height of the popup. */
  maxHeight?: DapDSCommand["maxHeight"]
  /** The maximum width of the popup. */
  maxWidth?: DapDSCommand["maxWidth"]
  /** Whether the popup has an arrow. */
  hasArrow?: DapDSCommand["hasArrow"]
}

export type DapDSContentSwitcherItemProps = {
  /** The value of the segmented control item. */
  value?: DapDSContentSwitcherItem["value"]
  /** The checked state of the segmented control item. */
  checked?: DapDSContentSwitcherItem["checked"]
  /** The disabled state of the segmented control item. */
  disabled?: DapDSContentSwitcherItem["disabled"]
  /** The name of the segmented control item. */
  name?: DapDSContentSwitcherItem["name"]
}

export type DapDSContentSwitcherProps = {
  /** Whether the content switcher allows multiple selections. */
  multiSelect?: DapDSContentSwitcher["multiSelect"]
  /** The value of the content switcher. A comma-separated list if `multiSelect` is `true`. */
  value?: DapDSContentSwitcher["value"]
}

export type DapDSCopyBoxInputProps = {
  /** The aria label of the copy button. */
  copyButtonAriaLabel?: DapDSCopyBoxInput["copyButtonAriaLabel"]
  /**  */
  type?: DapDSCopyBoxInput["type"]
  /** The label of the input. */
  label?: DapDSCopyBoxInput["label"]
  /** The placeholder of the input. */
  placeholder?: DapDSCopyBoxInput["placeholder"]
  /** The description of the input. */
  description?: DapDSCopyBoxInput["description"]
  /** The tooltip of the input. */
  tooltip?: DapDSCopyBoxInput["tooltip"]
  /** The position of the tooltip. Can be `top`, `right`, `bottom`, or `left`. */
  tooltipPlacement?: DapDSCopyBoxInput["tooltipPlacement"]
  /** The status of the input. Can be `success` or `error`. */
  status?: DapDSCopyBoxInput["status"]
  /** The size of the input. Default is `sm`. */
  size?: DapDSCopyBoxInput["size"]
  /** The name of the input. */
  name?: DapDSCopyBoxInput["name"]
  /** The value of the input. */
  value?: DapDSCopyBoxInput["value"]
  /** The disabled state of the input. Default is false. */
  disabled?: DapDSCopyBoxInput["disabled"]
  /** The required state of the input. Default is false. */
  required?: DapDSCopyBoxInput["required"]
  /** The readonly state of the input. Default is false. */
  readonly?: DapDSCopyBoxInput["readonly"]
  /** The autofocus state of the input. Default is false. */
  autofocus?: DapDSCopyBoxInput["autofocus"]
  /** The feedback of the input. */
  feedback?: DapDSCopyBoxInput["feedback"]
  /** The feedback type of the input. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSCopyBoxInput["feedbackType"]
  /** The loading state of the input. Default is false. */
  loading?: DapDSCopyBoxInput["loading"]
  /** The optional state of the input. */
  optional?: DapDSCopyBoxInput["optional"]
  /** The optional label of the input. */
  optionalLabel?: DapDSCopyBoxInput["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSCopyBoxInput["subtle"]
}

export type DapDSDAPBadgeProps = {
  /** The variant of the DÁP badge */
  variant?: DapDSDAPBadge["variant"]
  /** The size of the DÁP badge */
  size?: DapDSDAPBadge["size"]
}

export type DapDSDataTableProps<T> = {
  /** Row key to use for row selection, this should be a unique key for each row */
  rowKey?: DapDSDataTable<T>["rowKey"]
  /** Enable row selection on the table, can be a boolean or a function that returns a boolean */
  enableRowSelection?: DapDSDataTable<T>["enableRowSelection"]
  /** Enable sorting on the table */
  enableSorting?: DapDSDataTable<T>["enableSorting"]
  /** Enable manual sorting on the table */
  manualSorting?: DapDSDataTable<T>["manualSorting"]
  /** Enables manual pagination. If this option is set to true, the table will not automatically paginate rows and instead will expect you to manually paginate the rows before passing them to the table. This is useful if you are doing server-side pagination and aggregation. */
  manualPagination?: DapDSDataTable<T>["manualPagination"]
  /** If set to true, pagination will be reset to the first page when page-altering state changes eg. data is updated, filters change, grouping changes, etc. This behavior is automatically disabled when manualPagination is true but it can be overridden by explicitly assigning a boolean value to the autoResetPageIndex table option. */
  autoResetPageIndex?: DapDSDataTable<T>["autoResetPageIndex"]
  /** Enable row click on the table */
  enableRowClick?: DapDSDataTable<T>["enableRowClick"]
  /** Loading state of the table */
  loading?: DapDSDataTable<T>["loading"]
  /** Whether to enable striped rows */
  enableStripedRows?: DapDSDataTable<T>["enableStripedRows"]
  /** Number of rows in the table */
  rowCount?: DapDSDataTable<T>["rowCount"]
  /** ID of element describing the table */
  ariaDescribedBy?: DapDSDataTable<T>["ariaDescribedBy"]
  /** Caption text for the table */
  caption?: DapDSDataTable<T>["caption"]
  /** The type of loading to use */
  loadingType?: DapDSDataTable<T>["loadingType"]
  /** The variant of the spinner. Only used if loadingType is 'spinner'. */
  loadingVariant?: DapDSDataTable<T>["loadingVariant"]
  /** The size of the spinner. Only used if loadingType is 'spinner'. */
  loadingSize?: DapDSDataTable<T>["loadingSize"]
  /** The size of the spinner in pixels. This overrides the size attribute. Only used if loadingType is 'spinner'. */
  loadingStaticSize?: DapDSDataTable<T>["loadingStaticSize"]
  /** The loading text. Only used if loadingType is 'spinner'. */
  loadingText?: DapDSDataTable<T>["loadingText"]
  /** The text to display when the table is empty. */
  emptyText?: DapDSDataTable<T>["emptyText"]
  /** Whether to disable the header when the table is empty. */
  disableHeaderOnEmpty?: DapDSDataTable<T>["disableHeaderOnEmpty"]
  /** Whether to show the pager component when the table is empty. */
  showPagerOnEmpty?: DapDSDataTable<T>["showPagerOnEmpty"]
  /** Whether to show the pager component */
  pager?: DapDSDataTable<T>["pager"]
  /** Show the page size options. */
  showPageSizeOptions?: DapDSDataTable<T>["showPageSizeOptions"]
  /** Show the page index. */
  showPageIndex?: DapDSDataTable<T>["showPageIndex"]
  /** Show the page count. */
  showPageCount?: DapDSDataTable<T>["showPageCount"]
  /** Show the first button. */
  showFirstButton?: DapDSDataTable<T>["showFirstButton"]
  /** Show the previous button. */
  showPreviousButton?: DapDSDataTable<T>["showPreviousButton"]
  /** Show the next button. */
  showNextButton?: DapDSDataTable<T>["showNextButton"]
  /** Show the last button. */
  showLastButton?: DapDSDataTable<T>["showLastButton"]
  /** The label of the first button */
  firstButtonLabel?: DapDSDataTable<T>["firstButtonLabel"]
  /** The label of the previous button */
  previousButtonLabel?: DapDSDataTable<T>["previousButtonLabel"]
  /** The label of the next button */
  nextButtonLabel?: DapDSDataTable<T>["nextButtonLabel"]
  /** The label of the last button */
  lastButtonLabel?: DapDSDataTable<T>["lastButtonLabel"]
  /** Available page size options for the pager */
  pageSizeOptions?: DapDSDataTable<T>["pageSizeOptions"]
  /** Sorting state of the table */
  sorting?: DapDSDataTable<T>["sorting"]
  /** Selection state of the table */
  rowSelection?: DapDSDataTable<T>["rowSelection"]
  /** Pagination state of the table */
  pagination?: DapDSDataTable<T>["pagination"]
  /** Data to display in the table */
  data?: DapDSDataTable<T>["data"]
  /** Columns to display in the table */
  columns?: DapDSDataTable<T>["columns"]
  /** The function to determine the pager text */
  pageStateText?: DapDSDataTable<T>["pageStateText"]
}

export type DapDSDatePickerProps = {
  /** The disabled date of the datepicker. This function will be called for each date to determine if it is disabled. */
  disabledDate?: DapDSDatePicker["disabledDate"]
  /** The placement of the dropdown of the datepicker. */
  placement?: DapDSDatePicker["placement"]
  /** The open state of the datepicker. */
  opened?: DapDSDatePicker["opened"]
  /** Wheter the calendar should open on typing. */
  openCalendarOnInput?: DapDSDatePicker["openCalendarOnInput"]
  /** Wheter the calendar should send an empty event on typing. */
  sendEmptyEventOnInput?: DapDSDatePicker["sendEmptyEventOnInput"]
  /** The placeholder of the datepicker. */
  placeholder?: DapDSDatePicker["placeholder"]
  /** The loading state of the datepicker. */
  loading?: DapDSDatePicker["loading"]
  /** The format of the datepicker. This is a comma separated list of [formats](https://day.js.org/docs/en/display/format). */
  format?: DapDSDatePicker["format"]
  /** The format separator character in the format attribute. */
  formatSeparator?: DapDSDatePicker["formatSeparator"]
  /** Whether the clear button should be shown. */
  clearButton?: DapDSDatePicker["clearButton"]
  /** The aria label of the clear button. */
  clearButtonAriaLabel?: DapDSDatePicker["clearButtonAriaLabel"]
  /** The floating strategy of the datepicker. */
  floatingStrategy?: DapDSDatePicker["floatingStrategy"]
  /** The locale of the datepicker. By default it uses the global locale from dayjs. It is determined from the browser language. */
  locale?: DapDSDatePicker["locale"]
  /** The current visible date of the calendar. Only the month and year are considered. */
  currentDate?: DapDSDatePicker["currentDate"]
  /** The minimum date of the datepicker. This date will be the minimum selectable date. */
  minDate?: DapDSDatePicker["minDate"]
  /** The maximum date of the datepicker. This date will be the maximum selectable date. */
  maxDate?: DapDSDatePicker["maxDate"]
  /**  */
  focusElement?: DapDSDatePicker["focusElement"]
  /**  */
  validity?: DapDSDatePicker["validity"]
  /** The value of the datepicker. */
  value?: DapDSDatePicker["value"]
  /** The label of the datepicker. */
  label?: DapDSDatePicker["label"]
  /** The description of the datepicker. */
  description?: DapDSDatePicker["description"]
  /** The size of the datepicker. */
  size?: DapDSDatePicker["size"]
  /** The disabled state of the datepicker. */
  disabled?: DapDSDatePicker["disabled"]
  /** The required state of the datepicker. */
  required?: DapDSDatePicker["required"]
  /** The readonly state of the datepicker. */
  readonly?: DapDSDatePicker["readonly"]
  /** The autofocus of the datepicker. */
  autofocus?: DapDSDatePicker["autofocus"]
  /** The tooltip of the datepicker. */
  tooltip?: DapDSDatePicker["tooltip"]
  /** The tooltip placement of the datepicker. */
  tooltipPlacement?: DapDSDatePicker["tooltipPlacement"]
  /** The feedback of the datepicker. */
  feedback?: DapDSDatePicker["feedback"]
  /** The feedback type of the datepicker. */
  feedbackType?: DapDSDatePicker["feedbackType"]
  /** The optional state of the datepicker. */
  optional?: DapDSDatePicker["optional"]
  /** The optional label of the datepicker. */
  optionalLabel?: DapDSDatePicker["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSDatePicker["subtle"]
  /** The autocomplete of the datepicker. */
  autocomplete?: DapDSDatePicker["autocomplete"]
}

export type DapDSDividerProps = {
  /** Whether the divider is vertical */
  vertical?: DapDSDivider["vertical"]
  /** The spacing of the divider */
  spacing?: DapDSDivider["spacing"]
  /** The variant of the divider */
  variant?: DapDSDivider["variant"]
}

export type DapDSFeedbackProps = {
  /** The feedback message. */
  feedback?: DapDSFeedback["feedback"]
  /** The type of the feedback. */
  feedbackSize?: DapDSFeedback["feedbackSize"]
  /** The weight of the feedback. */
  feedbackSubtle?: DapDSFeedback["feedbackSubtle"]
  /** Removes the margins around the feedback. */
  feedbackNoMargin?: DapDSFeedback["feedbackNoMargin"]
  /** The id of the feedback. */
  feedbackId?: DapDSFeedback["feedbackId"]
}

export type DapDSFileInputListItemProps = {
  /** Disables the file input list item. */
  disabled?: DapDSFileInputListItem["disabled"]
  /** The name of the file input. */
  inputName?: DapDSFileInputListItem["inputName"]
  /** The feedback message. */
  feedback?: DapDSFileInputListItem["feedback"]
  /** Feedback type. */
  feedbackType?: DapDSFileInputListItem["feedbackType"]
  /** Loading state of the file input list item. */
  loading?: DapDSFileInputListItem["loading"]
  /** Show delete button. */
  showDeleteButton?: DapDSFileInputListItem["showDeleteButton"]
  /** Show file size. */
  showSize?: DapDSFileInputListItem["showSize"]
  /** Show file link. */
  showFileLink?: DapDSFileInputListItem["showFileLink"]
  /** The label of the file link. */
  fileLinkLabel?: DapDSFileInputListItem["fileLinkLabel"]
  /** The file data. */
  fileData?: DapDSFileInputListItem["fileData"]
  /** Subtle style. */
  subtle?: DapDSFileInputListItem["subtle"]
  /** The progress of the file upload. */
  progress?: DapDSFileInputListItem["progress"]
  /** The url of the item link. If present, the item title will rendered as a link. */
  href?: DapDSFileInputListItem["href"]
  /** The rel of the item link. Only used if href is present. */
  rel?: DapDSFileInputListItem["rel"]
  /** The target of the item link. Only used if href is present. */
  target?: DapDSFileInputListItem["target"]
  /** Whether the file should be downloaded when clicked. */
  download?: DapDSFileInputListItem["download"]
  /** Whether to show thumbnail preview for supported file types. */
  showThumbnail?: DapDSFileInputListItem["showThumbnail"]
  /** Size of the thumbnail preview. */
  thumbnailSize?: DapDSFileInputListItem["thumbnailSize"]
  /** File item template function */
  fileItemTemplate?: DapDSFileInputListItem["fileItemTemplate"]
  /**  */
  formattedSize?: DapDSFileInputListItem["formattedSize"]
}

export type DapDSFileInputListProps = {
  /** The id of the file input element to bind to. */
  for?: DapDSFileInputList["for"]
  /** Disables the file input list. */
  disabled?: DapDSFileInputList["disabled"]
  /** The label for the file input list. */
  label?: DapDSFileInputList["label"]
  /** Whether to show the delete button in the file input list item. */
  showDeleteButton?: DapDSFileInputList["showDeleteButton"]
  /** Whether to show the file link in the file input list item. */
  showFileLink?: DapDSFileInputList["showFileLink"]
  /** The label of the file link. */
  fileLinkLabel?: DapDSFileInputList["fileLinkLabel"]
  /** Whether to show the file size in the file input list item */
  showFileSize?: DapDSFileInputList["showFileSize"]
  /** File item template function */
  fileItemTemplate?: DapDSFileInputList["fileItemTemplate"]
  /**  */
  files?: DapDSFileInputList["files"]
}

export type DapDSFileInputProps = {
  /** The label for the upload button. */
  uploadButtonLabel?: DapDSFileInput["uploadButtonLabel"]
  /** The label for the browse button. */
  browseButtonLabel?: DapDSFileInput["browseButtonLabel"]
  /** Whether to show a separate dropzone area. */
  showDropzone?: DapDSFileInput["showDropzone"]
  /** Text to display in the dropzone. */
  dropzoneText?: DapDSFileInput["dropzoneText"]
  /** Whether to show the built-in file list. */
  showFileList?: DapDSFileInput["showFileList"]
  /** Whether to show confirmation dialog before removing files. */
  confirmRemove?: DapDSFileInput["confirmRemove"]
  /** Whether to show the upload button. Default is `true`. */
  showUploadButton?: DapDSFileInput["showUploadButton"]
  /** Whether to show the browse button */
  showBrowseButton?: DapDSFileInput["showBrowseButton"]
  /** The file types that the file input accepts. */
  accept?: DapDSFileInput["accept"]
  /** Whether the file input accepts multiple files. */
  multiple?: DapDSFileInput["multiple"]
  /** Whether to keep the value when new files are selected. */
  keepValue?: DapDSFileInput["keepValue"]
  /** A remote URL to upload files to. */
  uploadUrl?: DapDSFileInput["uploadUrl"]
  /** Whether to automatically upload files after selection. */
  autoupload?: DapDSFileInput["autoupload"]
  /** The property to use when uploading files */
  uploadProperty?: DapDSFileInput["uploadProperty"]
  /** The HTTP method to use when uploading files */
  uploadMethod?: DapDSFileInput["uploadMethod"]
  /** A remote URL to delete uploaded files from. Supports placeholders: `{fileName}`, `{id}`, `{key}`, `{location}`. */
  deleteUrl?: DapDSFileInput["deleteUrl"]
  /** The HTTP method to use when deleting files */
  deleteMethod?: DapDSFileInput["deleteMethod"]
  /** Whether to send credentials with the file upload request */
  withCredentials?: DapDSFileInput["withCredentials"]
  /** Custom headers for upload requests (JSON string). */
  uploadHeaders?: DapDSFileInput["uploadHeaders"]
  /** Custom headers for delete requests (JSON string). */
  deleteHeaders?: DapDSFileInput["deleteHeaders"]
  /** The maximum number of files that can be uploaded. */
  maxFiles?: DapDSFileInput["maxFiles"]
  /** The maximum size of files that can be uploaded (in bytes). */
  maxFileSize?: DapDSFileInput["maxFileSize"]
  /** Text for the max file size error. */
  maxFileSizeErrorText?: DapDSFileInput["maxFileSizeErrorText"]
  /** Text for the max file amount error. */
  maxFileAmountErrorText?: DapDSFileInput["maxFileAmountErrorText"]
  /** Text for the file type error. */
  fileTypeErrorText?: DapDSFileInput["fileTypeErrorText"]
  /** The label for the remove button. */
  removeButtonLabel?: DapDSFileInput["removeButtonLabel"]
  /** The label for the cancel button. */
  cancelButtonLabel?: DapDSFileInput["cancelButtonLabel"]
  /** Whether the remove button is dangerous */
  removeButtonDanger?: DapDSFileInput["removeButtonDanger"]
  /** Whether to show thumbnail preview for supported file types in the built-in file list */
  showThumbnail?: DapDSFileInput["showThumbnail"]
  /** Size of the thumbnail preview in the built-in file list */
  thumbnailSize?: DapDSFileInput["thumbnailSize"]
  /** The file list component to bind to */
  fileList?: DapDSFileInput["fileList"]
  /**  */
  files?: DapDSFileInput["files"]
  /**  */
  focusElement?: DapDSFileInput["focusElement"]
  /** The name of the file input. */
  name?: DapDSFileInput["name"]
  /** The value of the file input. */
  value?: DapDSFileInput["value"]
  /** The status of the file input. */
  status?: DapDSFileInput["status"]
  /** The label for the file input. */
  label?: DapDSFileInput["label"]
  /** The description for the file input. */
  description?: DapDSFileInput["description"]
  /** The tooltip for the file input. */
  tooltip?: DapDSFileInput["tooltip"]
  /** The tooltip placement of the input. */
  tooltipPlacement?: DapDSFileInput["tooltipPlacement"]
  /** Whether the file input is disabled. */
  disabled?: DapDSFileInput["disabled"]
  /** The size of the file input. */
  size?: DapDSFileInput["size"]
  /** The feedback for the file input. */
  feedback?: DapDSFileInput["feedback"]
  /** The type of feedback for the file input. */
  feedbackType?: DapDSFileInput["feedbackType"]
  /** Whether the file input is required. */
  required?: DapDSFileInput["required"]
  /** Whether the file input is optional. */
  optional?: DapDSFileInput["optional"]
  /** Font weight of the feedback label. Default is `false` which is bold. */
  subtle?: DapDSFileInput["subtle"]
}

export type DapDSIconProps = {
  /** The name of the icon */
  name?: DapDSIcon["name"]
  /** The size of the icon */
  size?: DapDSIcon["size"]
  /** The size of the icon in pixels. This overrides the size attribute. */
  staticSize?: DapDSIcon["staticSize"]
  /** Whether the icon is focusable. Default is false. */
  focusable?: DapDSIcon["focusable"]
  /** Whether the icon is hidden from the accessibility tree. Default is true. */
  ariaHidden?: DapDSIcon["ariaHidden"]
  /** The aria label of the icon. */
  ariaLabel?: DapDSIcon["ariaLabel"]
}

export type DapDSIconButtonProps = {
  /** The type of the button. */
  variant?: DapDSIconButton["variant"]
  /** Adds a transparent background to the button */
  clean?: DapDSIconButton["clean"]
  /** The size of the icon */
  size?: DapDSIconButton["size"]
  /** The size of the icon in pixels. By default the icon gets the size of the button. This property overwrites the size of the icon. */
  iconSize?: DapDSIconButton["iconSize"]
  /** The disabled state of the button. */
  disabled?: DapDSIconButton["disabled"]
  /** The type of the button. */
  htmlType?: DapDSIconButton["htmlType"]
  /** The icon of the button. You can use the icon names from the icon component */
  icon?: DapDSIconButton["icon"]
  /** The name of the button */
  name?: DapDSIconButton["name"]
  /** The aria label of the button. */
  ariaLabel?: DapDSIconButton["ariaLabel"]
}

export type DapDSInputProps = {
  /** The label of the input. */
  label?: DapDSInput["label"]
  /** The description of the input. */
  description?: DapDSInput["description"]
  /** Text of optional label. */
  optionalLabel?: DapDSInput["optionalLabel"]
  /** Text weight of label. If true the label is subtle. Default value is false. */
  subtle?: DapDSInput["subtle"]
  /** The value of the input. */
  value?: DapDSInput["value"]
  /** The placeholder of the input. */
  placeholder?: DapDSInput["placeholder"]
  /** The loading state of the input. Default is false. */
  loading?: DapDSInput["loading"]
  /** The tooltip of the input. */
  tooltip?: DapDSInput["tooltip"]
  /** The tooltip placement of the input. */
  tooltipPlacement?: DapDSInput["tooltipPlacement"]
  /** The aria label of the tooltip. */
  tooltipAriaLabel?: DapDSInput["tooltipAriaLabel"]
  /** The feedback of the input. */
  feedback?: DapDSInput["feedback"]
  /** The feedback type of the input. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSInput["feedbackType"]
  /** The status of the input. Can be `success` or `error`. */
  status?: DapDSInput["status"]
  /** The size of the input. Default is `sm`. */
  size?: DapDSInput["size"]
  /** The name of the input. */
  name?: DapDSInput["name"]
  /** The type of the input. Default is 'text'. */
  type?: DapDSInput["type"]
  /** The disabled state of the input. Default is false. */
  disabled?: DapDSInput["disabled"]
  /** The required state of the input. Default is false. */
  required?: DapDSInput["required"]
  /** The readonly state of the input. Default is false. */
  readonly?: DapDSInput["readonly"]
  /** The autofocus state of the input. Default is false. */
  autofocus?: DapDSInput["autofocus"]
  /** The autocapitalize state of the input. Default is false. */
  autocapitalize?: DapDSInput["autocapitalize"]
  /** The minimum length of the input. */
  minlength?: DapDSInput["minlength"]
  /** The maximum length of the input. */
  maxlength?: DapDSInput["maxlength"]
  /** The minimum value of the number input. */
  min?: DapDSInput["min"]
  /** The maximum value of the number input. */
  max?: DapDSInput["max"]
  /** The step value of the number input. */
  step?: DapDSInput["step"]
  /** The inputmode of the input. */
  inputmode?: DapDSInput["inputmode"]
  /** The regex pattern of the input. */
  pattern?: DapDSInput["pattern"]
}

export type DapDSLabelProps = {
  /** The label text */
  label?: DapDSLabel["label"]
  /** The description of the label */
  description?: DapDSLabel["description"]
  /** The tooltip text */
  tooltip?: DapDSLabel["tooltip"]
  /** The size of the input. Default is `sm`. */
  size?: DapDSLabel["size"]
  /** The tooltip placement of the label. */
  tooltipPlacement?: DapDSLabel["tooltipPlacement"]
  /** If the label is optional. Default value is `false`. */
  optional?: DapDSLabel["optional"]
  /** Label of optional text */
  optionalLabel?: DapDSLabel["optionalLabel"]
  /** Text weight of label. If true the label is subtle. Default value is `false`. */
  subtle?: DapDSLabel["subtle"]
  /** The disabled state of the label. Default is `false`. */
  disabled?: DapDSLabel["disabled"]
  /** The required state of the label. Default is `false`. */
  required?: DapDSLabel["required"]
}

export type DapDSLinkProps = {
  /** The size of the link */
  size?: DapDSLink["size"]
  /** The theme of the link */
  variant?: DapDSLink["variant"]
  /** The target of the link. */
  target?: DapDSLink["target"]
  /** Bold link style */
  bold?: DapDSLink["bold"]
  /** Removes underline style */
  noUnderline?: DapDSLink["noUnderline"]
  /** The href / URL of the link */
  href?: DapDSLink["href"]
  /** Disabled state of the link */
  disabled?: DapDSLink["disabled"]
  /** The rel of the link */
  rel?: DapDSLink["rel"]
  /** The download attribute of the link */
  download?: DapDSLink["download"]
}

export type DapDSListItemProps = {
  /** The variant of the list item. */
  variant?: DapDSListItem["variant"]
  /** The background strongness of the list item. */
  shade?: DapDSListItem["shade"]
  /** The status of the list item. */
  status?: DapDSListItem["status"]
  /** The alignment of the list item. */
  alignment?: DapDSListItem["alignment"]
  /** The title of the list item. */
  title?: DapDSListItem["title"]
  /** The icon of the list item. This is an icon name from the built in icons. */
  icon?: DapDSListItem["icon"]
  /** The number of the list item. Only used when variant is 'number'. */
  number?: DapDSListItem["number"]
  /** Whether the list item is interactive. Generates an anchor tag. */
  interactive?: DapDSListItem["interactive"]
  /** The link target of the list item when interactive. */
  target?: DapDSListItem["target"]
  /** The href of the list item when interactive */
  href?: DapDSListItem["href"]
  /** The rel of the list item when interactive */
  rel?: DapDSListItem["rel"]
  /** Whether the list item has an icon. */
  noIcon?: DapDSListItem["noIcon"]
  /** Whether the list item has no padding. */
  noPadding?: DapDSListItem["noPadding"]
  /** The render as type of the list item, only applicable when interactive. */
  renderAs?: DapDSListItem["renderAs"]
}

export type DapDSModalProps = {
  /** Pushes the footer to bottom. */
  bottomFooter?: DapDSModal["bottomFooter"]
  /** The open state of the modal. */
  open?: DapDSModal["open"]
  /** The full screen version of the modal. */
  fullScreen?: DapDSModal["fullScreen"]
  /** Wide layout mode for footer. */
  wideFooter?: DapDSModal["wideFooter"]
  /** Whether the modal should close on pressing the escape key. Default is true. */
  closeOnEsc?: DapDSModal["closeOnEsc"]
  /** Whether the modal should close on clicking the overlay. Default is true. */
  closeOnOverlayClick?: DapDSModal["closeOnOverlayClick"]
  /** Whether the modal should have a close button. Default is true. */
  closeButton?: DapDSModal["closeButton"]
  /** The title of the modal. */
  title?: DapDSModal["title"]
  /** The description of the modal. */
  description?: DapDSModal["description"]
  /** The label of the OK button. */
  okButtonLabel?: DapDSModal["okButtonLabel"]
  /** The label of the Cancel button. */
  cancelButtonLabel?: DapDSModal["cancelButtonLabel"]
  /** Whether the OK button should be disabled. */
  okButtonDisabled?: DapDSModal["okButtonDisabled"]
  /** Whether the Cancel button should be disabled. */
  cancelButtonDisabled?: DapDSModal["cancelButtonDisabled"]
  /** Whether the Cancel button should be a danger button. */
  cancelButtonDanger?: DapDSModal["cancelButtonDanger"]
  /** Whether the OK button should be a danger button. */
  okButtonDanger?: DapDSModal["okButtonDanger"]
  /** Whether the OK button should be hidden. */
  hideOkButton?: DapDSModal["hideOkButton"]
  /** Whether the Cancel button should be hidden. */
  hideCancelButton?: DapDSModal["hideCancelButton"]
  /** Whether the modal should have a footer. Default is true. */
  footer?: DapDSModal["footer"]
  /** Whether the modal should have a header. Default is true. */
  header?: DapDSModal["header"]
  /** Whether the modal should use native focus. Default is false. */
  useNativeFocus?: DapDSModal["useNativeFocus"]
}

export type DapDSNavigationMenuItemProps = {
  /** The name of the icon to display in the trigger. */
  icon?: DapDSNavigationMenuItem["icon"]
  /** The name of the element that labels the navigation dropdown. */
  "aria-labelledby"?: DapDSNavigationMenuItem["ariaLabelledBy"]
  /** The href of the navigation item that is active. */
  activeHref?: DapDSNavigationMenuItem["activeHref"]
  /** The href of the navigation item. If provided, the navigation item will be active if the href is a substring of the activeHref. It is useful for dropdowns that are not direct children of the navigation menu. */
  baseHref?: DapDSNavigationMenuItem["baseHref"]
  /** Whether the navigation item should be active if the href is exactly the same as the activeHref. */
  exactHref?: DapDSNavigationMenuItem["exactHref"]
  /** The placement of the popup. */
  placement?: DapDSNavigationMenuItem["placement"]
  /** Whether the popup should overflow. */
  overflow?: DapDSNavigationMenuItem["overflow"]
  /** The floating strategy of the popup. */
  floatingStrategy?: DapDSNavigationMenuItem["floatingStrategy"]
  /** The size of the popup. */
  size?: DapDSNavigationMenuItem["size"]
  /** The disabled state of the popup. */
  disabled?: DapDSNavigationMenuItem["disabled"]
  /** The open state of the popup. */
  opened?: DapDSNavigationMenuItem["opened"]
  /** The offset of the popup. */
  offset?: DapDSNavigationMenuItem["offset"]
  /** Whether the popup should sync its width with the trigger. */
  sync?: DapDSNavigationMenuItem["sync"]
  /** The maximum height of the popup. */
  maxHeight?: DapDSNavigationMenuItem["maxHeight"]
  /** The maximum width of the popup. */
  maxWidth?: DapDSNavigationMenuItem["maxWidth"]
  /** Whether the popup has an arrow. */
  hasArrow?: DapDSNavigationMenuItem["hasArrow"]
  /** Whether the popup should take full width of the screen. */
  fullWidth?: DapDSNavigationMenuItem["fullWidth"]
}

export type DapDSNavigationMenuProps = {
  /** The currently active href for highlighting active navigation items. */
  activeHref?: DapDSNavigationMenu["activeHref"]
  /** The orientation of the navigation menu. */
  orientation?: DapDSNavigationMenu["orientation"]
  /** Whether the navigation menu should take full width of the screen. */
  fullWidth?: DapDSNavigationMenu["fullWidth"]
}

export type DapDSNotificationBadgeProps = {
  /** The content of the badge, it can be a number or a string. Content tried to be parsed as a number, if it's not a number, it will be displayed as a string. */
  badgeContent?: DapDSNotificationBadge["badgeContent"]
  /** This switch decides the visibility of the badge. This property overrides the badge content visibility. Use it for explicit control. */
  visible?: DapDSNotificationBadge["visible"]
  /** This switch decides whether to show a zero value or not. */
  showZero?: DapDSNotificationBadge["showZero"]
  /** The color scheme of the badge */
  type?: DapDSNotificationBadge["type"]
  /** The variant of the badge. */
  variant?: DapDSNotificationBadge["variant"]
  /** The cap value of badge content, if the badge content is greater than the max value, it will be displayed as `[number]+`. Zero means no cap. */
  max?: DapDSNotificationBadge["max"]
  /** The position of the badge content around the slot content. */
  placement?: DapDSNotificationBadge["placement"]
  /** Whether to automatically detect circular elements and adjust positioning accordingly */
  "circular-auto"?: DapDSNotificationBadge["circularAuto"]
  /** Override circular positioning detection - forces circular positioning calculation */
  "force-circular"?: DapDSNotificationBadge["forceCircular"]
}

export type DapDSNumberInputProps = {
  /** The thousand separator of the input. */
  thousandSeparator?: DapDSNumberInput["thousandSeparator"]
  /** The decimal separator of the input. */
  decimalSeparator?: DapDSNumberInput["decimalSeparator"]
  /** The decimal scale of the input. */
  decimalScale?: DapDSNumberInput["decimalScale"]
  /** The allow negative state of the input. */
  allowNegative?: DapDSNumberInput["allowNegative"]
  /** The allow decimal state of the input. */
  allowDecimal?: DapDSNumberInput["allowDecimal"]
  /** Hides the increment and decrement buttons. */
  hideControls?: DapDSNumberInput["hideControls"]
  /**  */
  _thousandSeparator?: DapDSNumberInput["_thousandSeparator"]
  /**  */
  manualValueSet?: DapDSNumberInput["manualValueSet"]
  /** The label of the input. */
  label?: DapDSNumberInput["label"]
  /** The placeholder of the input. */
  placeholder?: DapDSNumberInput["placeholder"]
  /** The description of the input. */
  description?: DapDSNumberInput["description"]
  /** The tooltip of the input. */
  tooltip?: DapDSNumberInput["tooltip"]
  /** The tooltip placement of the input. */
  tooltipPlacement?: DapDSNumberInput["tooltipPlacement"]
  /** The status of the input. Can be `success` or `error`. */
  status?: DapDSNumberInput["status"]
  /** The size of the input. Default is `sm`. Can be `sm` or `lg`. */
  size?: DapDSNumberInput["size"]
  /** The name of the input. */
  name?: DapDSNumberInput["name"]
  /** The value of the input. */
  value?: DapDSNumberInput["value"]
  /** The disabled state of the input. Default is false. */
  disabled?: DapDSNumberInput["disabled"]
  /** The required state of the input. Default is false. */
  required?: DapDSNumberInput["required"]
  /** The readonly state of the input. Default is false. */
  readonly?: DapDSNumberInput["readonly"]
  /** The autofocus state of the input. Default is false. */
  autofocus?: DapDSNumberInput["autofocus"]
  /** The minimum value of the number input. */
  min?: DapDSNumberInput["min"]
  /** The maximum value of the number input. */
  max?: DapDSNumberInput["max"]
  /** The step value of the number input. */
  step?: DapDSNumberInput["step"]
  /** The feedback of the input. */
  feedback?: DapDSNumberInput["feedback"]
  /** The feedback type of the input. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSNumberInput["feedbackType"]
  /** The loading state of the input. Default is false. */
  loading?: DapDSNumberInput["loading"]
  /** The optional state of the input. */
  optional?: DapDSNumberInput["optional"]
  /** The optional label of the input. */
  optionalLabel?: DapDSNumberInput["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSNumberInput["subtle"]
  /** Disables the enter key from being used to submit the form. */
  disableEnter?: DapDSNumberInput["disableEnter"]
}

export type DapDSOfficialWebsiteBannerProps = {
  /** The size of the official website banner. Default is `sm`. */
  size?: DapDSOfficialWebsiteBanner["size"]
  /** The heading text of the accordion, this will be used as the aria label of the heading also if ariaLabel is not provided */
  heading?: DapDSOfficialWebsiteBanner["heading"]
  /** The heading level of the accordion. Default is `4`. */
  headingLevel?: DapDSOfficialWebsiteBanner["headingLevel"]
  /** Whether the accordion is opened. Default is `false`. */
  opened?: DapDSOfficialWebsiteBanner["opened"]
  /** The location of the icon. Default is `right`. */
  iconLocation?: DapDSOfficialWebsiteBanner["iconLocation"]
  /** The variant of the accordion. */
  variant?: DapDSOfficialWebsiteBanner["variant"]
  /** Whether the accordion is the last item. */
  lastItem?: DapDSOfficialWebsiteBanner["lastItem"]
}

export type DapDSOptionItemProps = {
  /** The selected state of the option item */
  selected?: DapDSOptionItem["selected"]
  /** Wheteher the item is selectable, whether it shows the selected icon */
  selectable?: DapDSOptionItem["selectable"]
  /** The position of the selected icon */
  selectedIconPosition?: DapDSOptionItem["selectedIconPosition"]
  /** The value of the option item */
  value?: DapDSOptionItem["value"]
  /** The disabled state of the option item */
  disabled?: DapDSOptionItem["disabled"]
  /** The focused state of the option item */
  focused?: DapDSOptionItem["focused"]
  /** The label of the option item, it can be a simplier version of an item */
  label?: DapDSOptionItem["label"]
  /**  */
  optionText?: DapDSOptionItem["optionText"]
}

export type DapDSOptionListProps = {
  /** The filter text of the option list */
  filterText?: DapDSOptionList["filterText"]
  /** The value of the option list */
  value?: DapDSOptionList["value"]
  /** The focused state of the option list. */
  focused?: DapDSOptionList["focused"]
  /** Whether the option list is searchable */
  search?: DapDSOptionList["search"]
  /** The search mode of the option list. Default is `none` */
  searchMode?: DapDSOptionList["searchMode"]
  /** Whether the option list items are selectable, whether it shows the selected icon */
  selectable?: DapDSOptionList["selectable"]
  /**  */
  queryTimeout?: DapDSOptionList["queryTimeout"]
  /**  */
  queryString?: DapDSOptionList["queryString"]
  /**  */
  firstLoad?: DapDSOptionList["firstLoad"]
  /**  */
  selectedIndex?: DapDSOptionList["selectedIndex"]
  /**  */
  isAutoComplete?: DapDSOptionList["isAutoComplete"]
  /**  */
  getSearchString?: DapDSOptionList["getSearchString"]
  /**  */
  buildQueryString?: DapDSOptionList["buildQueryString"]
}

export type DapDSOverlayProps = {
  /** The open state of the overlay. */
  open?: DapDSOverlay["open"]
}

export type DapDSPagerProps = {
  /** Whether the pager is disabled. */
  disabled?: DapDSPager["disabled"]
  /** Enable manual pagination. If true, the component will not automatically update the page index. */
  manualPagination?: DapDSPager["manualPagination"]
  /** The current page index. */
  pageIndex?: DapDSPager["pageIndex"]
  /** The number of items per page. */
  pageSize?: DapDSPager["pageSize"]
  /** The total number of rows. */
  totalRows?: DapDSPager["totalRows"]
  /** Available page size options */
  pageSizeOptions?: DapDSPager["pageSizeOptions"]
  /** Show the page size options. */
  showPageSizeOptions?: DapDSPager["showPageSizeOptions"]
  /** Show the page index. */
  showPageIndex?: DapDSPager["showPageIndex"]
  /** Show the page count. */
  showPageCount?: DapDSPager["showPageCount"]
  /** Show the first button. */
  showFirstButton?: DapDSPager["showFirstButton"]
  /** Show the previous button. */
  showPreviousButton?: DapDSPager["showPreviousButton"]
  /** Show the next button. */
  showNextButton?: DapDSPager["showNextButton"]
  /** Show the last button. */
  showLastButton?: DapDSPager["showLastButton"]
  /** The first button label. */
  firstButtonLabel?: DapDSPager["firstButtonLabel"]
  /** The previous button label. */
  previousButtonLabel?: DapDSPager["previousButtonLabel"]
  /** The next button label. */
  nextButtonLabel?: DapDSPager["nextButtonLabel"]
  /** The last button label. */
  lastButtonLabel?: DapDSPager["lastButtonLabel"]
  /** The function to determine the pager text */
  pageStateText?: DapDSPager["pageStateText"]
}

export type DapDSPasswordInputProps = {
  /**  */
  passwordVisibile?: DapDSPasswordInput["passwordVisibile"]
  /**  */
  type?: DapDSPasswordInput["type"]
  /** The label of the password input. */
  label?: DapDSPasswordInput["label"]
  /** The placeholder of the password input. */
  placeholder?: DapDSPasswordInput["placeholder"]
  /** The description of the password input. */
  description?: DapDSPasswordInput["description"]
  /** The tooltip of the password input. */
  tooltip?: DapDSPasswordInput["tooltip"]
  /** The tooltip placement of the input. */
  tooltipPlacement?: DapDSPasswordInput["tooltipPlacement"]
  /** The status of the password input. Can be `success` or `error`. */
  status?: DapDSPasswordInput["status"]
  /** The size of the password input. Default is `sm`. */
  size?: DapDSPasswordInput["size"]
  /** The name of the password input. */
  name?: DapDSPasswordInput["name"]
  /** The value of the password input. */
  value?: DapDSPasswordInput["value"]
  /** The disabled state of the password input. Default is false. */
  disabled?: DapDSPasswordInput["disabled"]
  /** The required state of the password input. Default is false. */
  required?: DapDSPasswordInput["required"]
  /** The readonly state of the password input. Default is false. */
  readonly?: DapDSPasswordInput["readonly"]
  /** The autofocus state of the password input. Default is false. */
  autofocus?: DapDSPasswordInput["autofocus"]
  /** The feedback of the input. */
  feedback?: DapDSPasswordInput["feedback"]
  /** The feedback type of the input. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSPasswordInput["feedbackType"]
  /** The loading state of the password input. Default is false. */
  loading?: DapDSPasswordInput["loading"]
  /** The optional state of the password input. */
  optional?: DapDSPasswordInput["optional"]
  /** The optional label of the password input. */
  optionalLabel?: DapDSPasswordInput["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSPasswordInput["subtle"]
}

export type DapDSPopupProps = {
  /** The size of the popup. */
  size?: DapDSPopup["size"]
  /** The disabled state of the popup. */
  disabled?: DapDSPopup["disabled"]
  /** The open state of the popup. */
  opened?: DapDSPopup["opened"]
  /** The placement of the popup. */
  placement?: DapDSPopup["placement"]
  /** The floating strategy of the popup. */
  floatingStrategy?: DapDSPopup["floatingStrategy"]
  /** The offset of the popup. */
  offset?: DapDSPopup["offset"]
  /** Whether the popup should sync its width with the trigger. */
  sync?: DapDSPopup["sync"]
  /** The maximum height of the popup. */
  maxHeight?: DapDSPopup["maxHeight"]
  /** The maximum width of the popup. */
  maxWidth?: DapDSPopup["maxWidth"]
  /** Whether the popup has an arrow. */
  hasArrow?: DapDSPopup["hasArrow"]
  /** Whether the popup should overflow. */
  overflow?: DapDSPopup["overflow"]
  /** Whether the popup should take full width of the screen. */
  fullWidth?: DapDSPopup["fullWidth"]
}

export type DapDSRadioButtonProps = {
  /** Whether the radio button is focusable. */
  focusable?: DapDSRadioButton["focusable"]
  /** Whether the radio button should prevent the default action. */
  preventDefault?: DapDSRadioButton["preventDefault"]
  /** Whether the radio button is readonly (cannot be changed but value is submitted with form). */
  readonly?: DapDSRadioButton["readonly"]
  /** This sets up a border around the radio button, when true. */
  border?: DapDSRadioButton["border"]
  /** The type of the radio button. */
  type?: DapDSRadioButton["type"]
  /**  */
  focusElement?: DapDSRadioButton["focusElement"]
  /** The name of the radio button. */
  name?: DapDSRadioButton["name"]
  /** The value of the radio button. */
  value?: DapDSRadioButton["value"]
  /** Whether the radio button is checked. */
  checked?: DapDSRadioButton["checked"]
  /** The label of the radio button. */
  label?: DapDSRadioButton["label"]
  /** The description of the radio button. */
  description?: DapDSRadioButton["description"]
  /** Whether the radio button is disabled. */
  disabled?: DapDSRadioButton["disabled"]
  /** Whether the radio button is required. */
  required?: DapDSRadioButton["required"]
  /** The size of the radio button. Default is 'sm'. */
  size?: DapDSRadioButton["size"]
  /** The placement of the label. */
  labelPlacement?: DapDSRadioButton["labelPlacement"]
  /** The placement of the description. */
  descriptionPlacement?: DapDSRadioButton["descriptionPlacement"]
  /** The weight of the label. */
  subtle?: DapDSRadioButton["subtle"]
  /** The feedback of the radio button. */
  feedback?: DapDSRadioButton["feedback"]
  /** The feedback type of the radio button. */
  feedbackType?: DapDSRadioButton["feedbackType"]
  /** The invalid state of the radio button. */
  invalid?: DapDSRadioButton["invalid"]
  /** The optional state of the radio button. */
  optional?: DapDSRadioButton["optional"]
  /** The optional label of the radio button. */
  optionalLabel?: DapDSRadioButton["optionalLabel"]
}

export type DapDSRatingProps = {
  /** The label of the rating */
  label?: DapDSRating["label"]
  /** The maximum number of stars */
  max?: DapDSRating["max"]
  /**  */
  _handleContainerFocus?: DapDSRating["_handleContainerFocus"]
  /**  */
  _handleContainerBlur?: DapDSRating["_handleContainerBlur"]
  /**  */
  _handleContainerKeyDown?: DapDSRating["_handleContainerKeyDown"]
  /** Handle keyboard events for the entire component
This is a backup to catch keyboard events if they bubble up */
  _handleKeyDown?: DapDSRating["_handleKeyDown"]
  /**  */
  value?: DapDSRating["value"]
}

export type DapDSScrollAreaProps = {
  /** The orientation of the scrollbar. */
  orientation?: DapDSScrollArea["orientation"]
}

export type DapDSSearchProps = {
  /** Show the selected item check mark in the dropdown. Default is 'false'. */
  selectable?: DapDSSearch["selectable"]
  /**  */
  search?: DapDSSearch["search"]
  /** Whether the search open indicator should be animated. Default is true. */
  noAnimation?: DapDSSearch["noAnimation"]
  /**  */
  searchOnValueSet?: DapDSSearch["searchOnValueSet"]
  /** The search mode of the select. Default is 'none'. */
  searchMode?: DapDSSearch["searchMode"]
  /** Whether the search should not complete the text. */
  textComplete?: DapDSSearch["textComplete"]
  /** The value of the search. */
  value?: DapDSSearch["value"]
  /** The placeholder of the search. */
  placeholder?: DapDSSearch["placeholder"]
  /** The placement of the select dropdown. Default is 'bottom-start'. */
  placement?: DapDSSearch["placement"]
  /** Whether the search dropdown is opened. */
  opened?: DapDSSearch["opened"]
  /** The sync mode of the search dropdown. How the dropdown item size is synced to the trigger element'. */
  sync?: DapDSSearch["sync"]
  /** The label of the search. */
  label?: DapDSSearch["label"]
  /** The description of the search. */
  description?: DapDSSearch["description"]
  /** The tooltip of the search. */
  tooltip?: DapDSSearch["tooltip"]
  /** The size of the search. */
  size?: DapDSSearch["size"]
  /** Whether the search is disabled. */
  disabled?: DapDSSearch["disabled"]
  /** Whether the search is required. */
  required?: DapDSSearch["required"]
  /** Whether the search is readonly. */
  readonly?: DapDSSearch["readonly"]
  /** Whether the search is autofocus. */
  autofocus?: DapDSSearch["autofocus"]
  /** Whether the search is clearable. Default is 'true'. */
  clearButton?: DapDSSearch["clearButton"]
  /** The feedback content of the search. */
  feedback?: DapDSSearch["feedback"]
  /** The feedback type of the search. */
  feedbackType?: DapDSSearch["feedbackType"]
  /** Whether the search allows manual input, or free text. */
  allowManualInput?: DapDSSearch["allowManualInput"]
  /** Whether the search should search for the selected item text. */
  searchForText?: DapDSSearch["searchForText"]
  /** The aria label of the search button. */
  searchButtonAriaLabel?: DapDSSearch["searchButtonAriaLabel"]
  /** Whether the search should open on empty results. */
  openOnEmpty?: DapDSSearch["openOnEmpty"]
  /** Subtle color version */
  subtle?: DapDSSearch["subtle"]
}

export type DapDSSelectProps = {
  /** The popup placement of the select */
  placement?: DapDSSelect["placement"]
  /** Whether the select dropdown is opened. */
  opened?: DapDSSelect["opened"]
  /** The placeholder of the select. */
  placeholder?: DapDSSelect["placeholder"]
  /** The sync size of the select dropdown */
  sync?: DapDSSelect["sync"]
  /** Whether the select is in mobile mode. */
  isMobile?: DapDSSelect["isMobile"]
  /** The loading state of the select. */
  loading?: DapDSSelect["loading"]
  /** The max heigth of the select dropdown. */
  maxHeight?: DapDSSelect["maxHeight"]
  /** Whether the select dropdown indicator is animated or not */
  noAnimation?: DapDSSelect["noAnimation"]
  /** The floating strategy of the select dropdown */
  floatingStrategy?: DapDSSelect["floatingStrategy"]
  /**  */
  focusElement?: DapDSSelect["focusElement"]
  /**  */
  validity?: DapDSSelect["validity"]
  /**  */
  validationMessage?: DapDSSelect["validationMessage"]
  /** The value of the select. */
  value?: DapDSSelect["value"]
  /** The label of the select. */
  label?: DapDSSelect["label"]
  /** The description of the select. */
  description?: DapDSSelect["description"]
  /** The tooltip of the select. */
  tooltip?: DapDSSelect["tooltip"]
  /** The tooltip placement of the select. */
  tooltipPlacement?: DapDSSelect["tooltipPlacement"]
  /** The size of the select. Default is `sm`. */
  size?: DapDSSelect["size"]
  /** Whether the select is disabled. */
  disabled?: DapDSSelect["disabled"]
  /** Whether the select is required. */
  required?: DapDSSelect["required"]
  /** Whether the select is readonly. */
  readonly?: DapDSSelect["readonly"]
  /** Whether the select is autofocus. */
  autofocus?: DapDSSelect["autofocus"]
  /** The feedback of the select. */
  feedback?: DapDSSelect["feedback"]
  /** The feedback type of the select. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSSelect["feedbackType"]
  /** The status of the select. Can be `success` or `error`. */
  status?: DapDSSelect["status"]
  /** The optional state of the select. */
  optional?: DapDSSelect["optional"]
  /** The optional label of the select. */
  optionalLabel?: DapDSSelect["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSSelect["subtle"]
}

export type DapDSSideNavGroupProps = {
  /** The href of the side navigation item */
  href?: DapDSSideNavGroup["href"]
  /** Whether the side navigation item is active */
  active?: DapDSSideNavGroup["active"]
  /** The spacing of the side navigation item */
  spacing?: DapDSSideNavGroup["spacing"]
  /** Whether the side navigation group is open */
  open?: DapDSSideNavGroup["open"]
  /** The size of the side navigation group */
  size?: DapDSSideNavGroup["size"]
}

export type DapDSSideNavItemProps = {
  /** The href of the side navigation item */
  href?: DapDSSideNavItem["href"]
  /** Whether the side navigation item is active */
  active?: DapDSSideNavItem["active"]
  /** The spacing of the side navigation item */
  spacing?: DapDSSideNavItem["spacing"]
  /** The size of the side navigation item */
  size?: DapDSSideNavItem["size"]
}

export type DapDSSideNavProps = {
  /** The label of the side navigation, if aria label is not provided, it will be used as aria label */
  label?: DapDSSideNav["label"]
  /** The active href of the side navigation, to explicitly set the active item, if not provided, it will be set based on the current location */
  activeHref?: DapDSSideNav["activeHref"]
  /** The size of the side navigation */
  size?: DapDSSideNav["size"]
}

export type DapDSSkeletonProps = {
  /** The variant of the skeleton. */
  variant?: DapDSSkeleton["variant"]
  /** The width of the skeleton. Can be any valid CSS width value. */
  width?: DapDSSkeleton["width"]
  /** The height of the skeleton. Can be any valid CSS height value. */
  height?: DapDSSkeleton["height"]
  /** Whether to animate the skeleton. */
  animated?: DapDSSkeleton["animated"]
  /** The animation type for the skeleton. */
  animation?: DapDSSkeleton["animation"]
  /** Custom keyframes for the animation when animation="custom".
Should be a valid CSS keyframes string without the */
  "custom-keyframes"?: DapDSSkeleton["customKeyframes"]
}

export type DapDSSkipLinkProps = {
  /** The placement of the skip link. */
  placement?: DapDSSkipLink["placement"]
  /** The href of the skip link */
  href?: DapDSSkipLink["href"]
  /** The size of the skip link */
  size?: DapDSSkipLink["size"]
  /** Whether the skip link should have an underline */
  noUnderline?: DapDSSkipLink["noUnderline"]
}

export type DapDSSnackbarMessageProps = {
  /** The actions of the snackbar item. */
  actions?: DapDSSnackbarMessage["actions"]
  /** The message of the snackbar item. */
  message?: DapDSSnackbarMessage["message"]
  /** Whether the snackbar has a close button. */
  closeButton?: DapDSSnackbarMessage["closeButton"]
  /** The message type of the snackbar item. */
  alertType?: DapDSSnackbarMessage["alertType"]
  /** The custom style of the snackbar item. */
  customStyle?: DapDSSnackbarMessage["customStyle"]
  /** The position of the snackbar container for directional animations. */
  position?: DapDSSnackbarMessage["position"]
}

export type DapDSSnackbarProps = {
  /** The maximum number of snackbar messages at a given time. */
  maxItems?: DapDSSnackbar["maxItems"]
  /** The position of the snackbar */
  position?: DapDSSnackbar["position"]
  /** The duration of the snackbar message in milliseconds */
  duration?: DapDSSnackbar["duration"]
  /** Whether the snackbar should announce new messages to screen readers */
  announceMessages?: DapDSSnackbar["announceMessages"]
}

export type DapDSSpinnerProps = {
  /** The variant of the spinner. */
  variant?: DapDSSpinner["variant"]
  /** The size of the spinner. */
  size?: DapDSSpinner["size"]
  /** The size of the spinner in pixels. This overrides the size attribute */
  staticSize?: DapDSSpinner["staticSize"]
  /** The loading text. */
  text?: DapDSSpinner["text"]
  /** Removes the text color */
  noColor?: DapDSSpinner["noColor"]
}

export type DapDSStackProps = {
  /** The direction of the stack. */
  direction?: DapDSStack["direction"]
  /** Adds margin to the end of the stack. */
  endMargin?: DapDSStack["endMargin"]
  /** Adds margin to the start of the stack. */
  startMargin?: DapDSStack["startMargin"]
  /** The spacing of the stack. Uses the system spacing scale (100, 200, 300...etc) */
  spacing?: DapDSStack["spacing"]
}

export type DapDSSwitchProps = {
  /** This sets up border around the switch, when true. */
  border?: DapDSSwitch["border"]
  /** The type of the switch */
  type?: DapDSSwitch["type"]
  /**  */
  focusElement?: DapDSSwitch["focusElement"]
  /** The name of the switch. */
  name?: DapDSSwitch["name"]
  /** The value of the switch. */
  value?: DapDSSwitch["value"]
  /** The label of the switch. */
  label?: DapDSSwitch["label"]
  /** The description of the switch. */
  description?: DapDSSwitch["description"]
  /** The checked state of the switch. */
  checked?: DapDSSwitch["checked"]
  /** The size of the switch. */
  size?: DapDSSwitch["size"]
  /** The disabled state of the switch. */
  disabled?: DapDSSwitch["disabled"]
  /** Whether the switch is readonly (cannot be changed but value is submitted with form). */
  readonly?: DapDSSwitch["readonly"]
  /** The required state of the switch. */
  required?: DapDSSwitch["required"]
  /** The placement of the label. */
  labelPlacement?: DapDSSwitch["labelPlacement"]
  /** The placement of the description. */
  descriptionPlacement?: DapDSSwitch["descriptionPlacement"]
  /** The weight of the label. */
  subtle?: DapDSSwitch["subtle"]
  /** The feedback of the switch. */
  feedback?: DapDSSwitch["feedback"]
  /** The feedback type of the switch. */
  feedbackType?: DapDSSwitch["feedbackType"]
  /** The optional state of the switch. */
  optional?: DapDSSwitch["optional"]
  /** The optional label of the switch. */
  optionalLabel?: DapDSSwitch["optionalLabel"]
}

export type DapDSTabGroupProps = {
  /** The selected tab id. */
  selectedTabId?: DapDSTabGroup["selectedTabId"]
  /** The size of the tab buttons. Default is `sm`. Can be `sm` or `lg`. */
  size?: DapDSTabGroup["size"]
  /** If true, the tab group will be displayed in mobile mode. */
  mobile?: DapDSTabGroup["mobile"]
}

export type DapDSTabProps = {
  /** The tab id. Required */
  tabId?: DapDSTab["tabId"]
  /** The disabled state of the tab. */
  disabled?: DapDSTab["disabled"]
}

export type DapDSTableCellProps = {
  /** If the cell is the last one. */
  last?: DapDSTableCell["last"]
  /** The html role of the cell */
  role?: DapDSTableCell["role"]
}

export type DapDSTableHeaderProps = {
  /** If the header cell is the last one. */
  last?: DapDSTableHeader["last"]
  /** The html role of the header cell */
  role?: DapDSTableHeader["role"]
}

export type DapDSTableRowProps = {
  /** The html role of the row */
  role?: DapDSTableRow["role"]
  /** If the row is mobile design */
  mobile?: DapDSTableRow["mobile"]
}

export type DapDSTableProps = {
  /**  */
  role?: DapDSTable["role"]
  /** If the table has mobile design */
  mobile?: DapDSTable["mobile"]
  /** The caption of the table */
  caption?: DapDSTable["caption"]
}

export type DapDSTextareaProps = {
  /** Hide character counter. */
  hideCounter?: DapDSTextarea["hideCounter"]
  /** The minimum length of the textarea. */
  minlength?: DapDSTextarea["minlength"]
  /** The maximum length of the textarea. */
  maxlength?: DapDSTextarea["maxlength"]
  /** The number of rows in the textarea. */
  rows?: DapDSTextarea["rows"]
  /** The number of columns in the textarea. */
  cols?: DapDSTextarea["cols"]
  /** The placeholder of the textarea. */
  placeholder?: DapDSTextarea["placeholder"]
  /** Indicates how the control should wrap the value for form submission. */
  wrap?: DapDSTextarea["wrap"]
  /**  */
  focusElement?: DapDSTextarea["focusElement"]
  /** The size of the textarea. Default is `md`. */
  size?: DapDSTextarea["size"]
  /** The disabled state of the textarea. */
  disabled?: DapDSTextarea["disabled"]
  /** The value of the textarea. */
  value?: DapDSTextarea["value"]
  /** The tooltip of the textarea. */
  tooltip?: DapDSTextarea["tooltip"]
  /** The tooltip placement of the textarea. */
  tooltipPlacement?: DapDSTextarea["tooltipPlacement"]
  /** The status of the textarea. Can be `success` or `error`. */
  status?: DapDSTextarea["status"]
  /** The readonly state of the textarea. */
  readonly?: DapDSTextarea["readonly"]
  /** The required state of the textarea. */
  required?: DapDSTextarea["required"]
  /** The label of the textarea. */
  label?: DapDSTextarea["label"]
  /** The description of the textarea. */
  description?: DapDSTextarea["description"]
  /** The feedback of the textarea. */
  feedback?: DapDSTextarea["feedback"]
  /** The feedback type of the textarea. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSTextarea["feedbackType"]
  /** The optional state of the textarea. */
  optional?: DapDSTextarea["optional"]
  /** The optional label of the textarea. */
  optionalLabel?: DapDSTextarea["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSTextarea["subtle"]
  /** The autofocus state of the textarea. */
  autofocus?: DapDSTextarea["autofocus"]
}

export type DapDSTimelineItemProps = {

}

export type DapDSTimelineProps = {

}

export type DapDSTimeGridProps = {
  /** The currently selected hour (0-23). */
  selectedHour?: DapDSTimeGrid["selectedHour"]
  /** The currently selected minute (0-59). */
  selectedMinute?: DapDSTimeGrid["selectedMinute"]
  /** The minimum selectable time (format: 'HH:mm'). */
  minTime?: DapDSTimeGrid["minTime"]
  /** The maximum selectable time (format: 'HH:mm'). */
  maxTime?: DapDSTimeGrid["maxTime"]
  /** The step interval in minutes. */
  step?: DapDSTimeGrid["step"]
  /** The locale for time formatting. */
  locale?: DapDSTimeGrid["locale"]
}

export type DapDSTimePickerProps = {
  /** The minimum time of the timepicker. Format: 'HH:mm'. */
  minTime?: DapDSTimePicker["minTime"]
  /** The maximum time of the timepicker. Format: 'HH:mm'. */
  maxTime?: DapDSTimePicker["maxTime"]
  /** The step interval in minutes. Defaults to 15. */
  step?: DapDSTimePicker["step"]
  /** The placement of the dropdown of the timepicker. */
  placement?: DapDSTimePicker["placement"]
  /** The open state of the timepicker. */
  opened?: DapDSTimePicker["opened"]
  /** Whether the time picker should open on typing. */
  openTimeOnInput?: DapDSTimePicker["openTimeOnInput"]
  /** Whether the time picker should send an empty event on typing. */
  sendEmptyEventOnInput?: DapDSTimePicker["sendEmptyEventOnInput"]
  /** The placeholder of the timepicker. */
  placeholder?: DapDSTimePicker["placeholder"]
  /** The loading state of the timepicker. */
  loading?: DapDSTimePicker["loading"]
  /** The format of the timepicker. Defaults to 'HH:mm'. */
  format?: DapDSTimePicker["format"]
  /** Whether the clear button should be shown. Defaults to 'true'. */
  clearButton?: DapDSTimePicker["clearButton"]
  /** The aria label of the clear button. */
  clearButtonAriaLabel?: DapDSTimePicker["clearButtonAriaLabel"]
  /** The floating strategy of the timepicker. */
  floatingStrategy?: DapDSTimePicker["floatingStrategy"]
  /** The locale of the timepicker. */
  locale?: DapDSTimePicker["locale"]
  /** Whether the dropdown should close when a time is selected. */
  closeOnSelection?: DapDSTimePicker["closeOnSelection"]
  /**  */
  focusElement?: DapDSTimePicker["focusElement"]
  /**  */
  validity?: DapDSTimePicker["validity"]
  /** The value of the timepicker. */
  value?: DapDSTimePicker["value"]
  /** The label of the timepicker. */
  label?: DapDSTimePicker["label"]
  /** The description of the timepicker. */
  description?: DapDSTimePicker["description"]
  /** The size of the timepicker. */
  size?: DapDSTimePicker["size"]
  /** The disabled state of the timepicker. */
  disabled?: DapDSTimePicker["disabled"]
  /** The required state of the timepicker. */
  required?: DapDSTimePicker["required"]
  /** The readonly state of the timepicker. */
  readonly?: DapDSTimePicker["readonly"]
  /** The autofocus state of the timepicker. */
  autofocus?: DapDSTimePicker["autofocus"]
  /** The tooltip of the timepicker. */
  tooltip?: DapDSTimePicker["tooltip"]
  /** The tooltip placement of the timepicker. */
  tooltipPlacement?: DapDSTimePicker["tooltipPlacement"]
  /** The feedback of the timepicker. */
  feedback?: DapDSTimePicker["feedback"]
  /** The feedback type of the timepicker. */
  feedbackType?: DapDSTimePicker["feedbackType"]
  /** The optional state of the timepicker. */
  optional?: DapDSTimePicker["optional"]
  /** The optional label of the timepicker. */
  optionalLabel?: DapDSTimePicker["optionalLabel"]
  /** The weight of the label. Default is `false` */
  subtle?: DapDSTimePicker["subtle"]
  /** The autocomplete of the timepicker. */
  autocomplete?: DapDSTimePicker["autocomplete"]
}

export type DapDSTOCProps = {
  /** The root element to observe [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root) */
  root?: DapDSTOC["root"]
  /** The margin around the root element to observe [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) */
  rootMargin?: DapDSTOC["rootMargin"]
  /** The margin around the last anchor to observe [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) */
  lastAnchorRootMargin?: DapDSTOC["lastAnchorRootMargin"]
  /** The threshold to trigger [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold) */
  threshold?: DapDSTOC["threshold"]
  /** The minimum heading level to include in the TOC. The default value is `2`. */
  minHeadingLevel?: DapDSTOC["minHeadingLevel"]
  /** The maximum heading level to include in the TOC. The default value is `3`. */
  maxHeadingLevel?: DapDSTOC["maxHeadingLevel"]
  /** Whether to indent the TOC items. */
  noIndent?: DapDSTOC["noIndent"]
  /** The header of the TOC. */
  header?: DapDSTOC["header"]
  /**  */
  activeAnchor?: DapDSTOC["activeAnchor"]
  /**  */
  anchors?: DapDSTOC["anchors"]
  /**  */
  items?: DapDSTOC["items"]
  /** The size of the toc. Default is `lg`. */
  size?: DapDSTOC["size"]
}

export type DapDSToggleButtonProps = {
  /** The size of the button */
  size?: DapDSToggleButton["size"]
  /** Whether the button is active. */
  active?: DapDSToggleButton["active"]
  /** The shape of the button */
  shape?: DapDSToggleButton["shape"]
  /**  */
  sizeChildren?: DapDSToggleButton["sizeChildren"]
  /**  */
  focusElement?: DapDSToggleButton["focusElement"]
}

export type DapDSTooltipProps = {
  /** The content of the tooltip, supporting text only. */
  content?: DapDSTooltip["content"]
  /** The position of the tooltip around the trigger element. */
  placement?: DapDSTooltip["placement"]
  /** Sets the tooltip to opened by default (will still be closed on closing events). */
  opened?: DapDSTooltip["opened"]
  /** Sets the tooltip to toggle mode. */
  mode?: DapDSTooltip["mode"]
  /** Hides the arrow of the tooltip. */
  noArrow?: DapDSTooltip["noArrow"]
  /** The floating strategy of the tooltip. Default is `absolute`. Can be `absolute` or `fixed`. */
  floatingStrategy?: DapDSTooltip["floatingStrategy"]
  /** Sets custom trigger event (hover, focus, click). Default is `hover focus`. */
  trigger?: DapDSTooltip["trigger"]
}

export type DapDSTrayProps = {
  /** The placement of the tray. */
  placement?: DapDSTray["placement"]
  /** Whether the tray should have a footer. Default is false. */
  footer?: DapDSTray["footer"]
  /** Whether the tray should have a header. Default is false. */
  header?: DapDSTray["header"]
  /** The open state of the tray. */
  open?: DapDSTray["open"]
  /** Whether the tray should close on pressing the escape key. Default is true. */
  closeOnEsc?: DapDSTray["closeOnEsc"]
  /** Whether the tray should close on clicking the overlay. Default is true. */
  closeOnOverlayClick?: DapDSTray["closeOnOverlayClick"]
  /** Whether the tray should have a close button. Default is true. */
  closeButton?: DapDSTray["closeButton"]
  /** The title of the tray. */
  title?: DapDSTray["title"]
  /** The description of the tray. */
  description?: DapDSTray["description"]
  /** The label of the OK button. */
  okButtonLabel?: DapDSTray["okButtonLabel"]
  /** The label of the Cancel button. */
  cancelButtonLabel?: DapDSTray["cancelButtonLabel"]
}

export type DapDSTypographyProps = {
  /** The variant of the typography. */
  variant?: DapDSTypography["variant"]
  /** The size of the typography. */
  size?: DapDSTypography["size"]
  /** The html element of the body typography. */
  bodyAs?: DapDSTypography["bodyAs"]
  /** The custom class of the typography. */
  customClass?: DapDSTypography["customClass"]
  /** Whether the typography is an anchor for the TOC component. */
  anchor?: DapDSTypography["anchor"]
}

export type DapDSFormLabelProps = {
  /** The id of the form element that the label is associated with. */
  for?: DapDSFormLabel["for"]
  /** Whether the label should be rendered as text or a <label> tag. Default is label. */
  renderAs?: DapDSFormLabel["renderAs"]
  /** Label of optional text */
  optionalLabel?: DapDSFormLabel["optionalLabel"]
  /** Text weight of the label. */
  subtle?: DapDSFormLabel["subtle"]
  /** If the label is optional. */
  optional?: DapDSFormLabel["optional"]
  /** If the label is required. */
  required?: DapDSFormLabel["required"]
  /** The label text. */
  label?: DapDSFormLabel["label"]
}

export type DapDSInputGroupProps = {
  /**  */
  allInputs?: DapDSInputGroup["allInputs"]
  /** The label of the input group. */
  label?: DapDSInputGroup["label"]
  /** The description of the input group. */
  description?: DapDSInputGroup["description"]
  /** The tooltip of the input group. */
  tooltip?: DapDSInputGroup["tooltip"]
  /** The tooltip placement of the input group. */
  tooltipPlacement?: DapDSInputGroup["tooltipPlacement"]
  /** The aria label of the tooltip. */
  tooltipAriaLabel?: DapDSInputGroup["tooltipAriaLabel"]
  /** The label of the input group when it is optional. */
  optionalLabel?: DapDSInputGroup["optionalLabel"]
  /** Whether the input group is disabled. */
  disabled?: DapDSInputGroup["disabled"]
  /** The size of the input group. Default is `sm`. Can be `sm` or `lg`. */
  size?: DapDSInputGroup["size"]
  /** Whether the input group is required. */
  required?: DapDSInputGroup["required"]
  /** Whether the input group is optional. */
  optional?: DapDSInputGroup["optional"]
  /** The feedback of the input. */
  feedback?: DapDSInputGroup["feedback"]
  /** The type of the feedback. */
  feedbackType?: DapDSInputGroup["feedbackType"]
  /** Whether the input group label is subtle. */
  subtle?: DapDSInputGroup["subtle"]
}

export type DapDSRadioGroupProps = {
  /** The tooltip placement of the radio group. */
  tooltipPlacement?: DapDSRadioGroup["tooltipPlacement"]
  /** Text of optional label. */
  optionalLabel?: DapDSRadioGroup["optionalLabel"]
  /**  */
  hiddenInput?: DapDSRadioGroup["hiddenInput"]
  /**  */
  validationMessage?: DapDSRadioGroup["validationMessage"]
  /**  */
  validity?: DapDSRadioGroup["validity"]
  /** The name of the radio group. */
  name?: DapDSRadioGroup["name"]
  /** The value of the radio group. */
  value?: DapDSRadioGroup["value"]
  /** Whether the radio group is disabled. */
  disabled?: DapDSRadioGroup["disabled"]
  /** Whether the radio group is required. */
  required?: DapDSRadioGroup["required"]
  /** The label of the radio group. */
  label?: DapDSRadioGroup["label"]
  /** The description of the radio group. */
  description?: DapDSRadioGroup["description"]
  /** The tooltip of the radio group. */
  tooltip?: DapDSRadioGroup["tooltip"]
  /** The feedback of the radio group. */
  feedback?: DapDSRadioGroup["feedback"]
  /** The feedback type of the radio group. Can be `negative`, `positive`, or `warning`. */
  feedbackType?: DapDSRadioGroup["feedbackType"]
  /** The optional state of the radio group. */
  optional?: DapDSRadioGroup["optional"]
  /** Font weight of the feedback label. Default is `false` which is bold. */
  subtle?: DapDSRadioGroup["subtle"]
  /** The size of the radio group. Default is `sm`. */
  size?: DapDSRadioGroup["size"]
}

export type ArrowsArrowDownLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowDownLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowDownLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowDownLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowDownLine["focusable"]
}

export type ArrowsArrowDownSFillProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowDownSFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowDownSFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowDownSFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowDownSFill["focusable"]
}

export type ArrowsArrowDownSLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowDownSLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowDownSLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowDownSLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowDownSLine["focusable"]
}

export type ArrowsArrowLeftDownLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowLeftDownLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowLeftDownLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowLeftDownLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowLeftDownLine["focusable"]
}

export type ArrowsArrowLeftLLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowLeftLLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowLeftLLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowLeftLLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowLeftLLine["focusable"]
}

export type ArrowsArrowLeftLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowLeftLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowLeftLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowLeftLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowLeftLine["focusable"]
}

export type ArrowsArrowLeftSFillProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowLeftSFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowLeftSFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowLeftSFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowLeftSFill["focusable"]
}

export type ArrowsArrowLeftSLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowLeftSLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowLeftSLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowLeftSLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowLeftSLine["focusable"]
}

export type ArrowsArrowLeftUpLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowLeftUpLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowLeftUpLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowLeftUpLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowLeftUpLine["focusable"]
}

export type ArrowsArrowRightDownLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowRightDownLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowRightDownLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowRightDownLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowRightDownLine["focusable"]
}

export type ArrowsArrowRightLLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowRightLLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowRightLLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowRightLLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowRightLLine["focusable"]
}

export type ArrowsArrowRightLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowRightLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowRightLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowRightLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowRightLine["focusable"]
}

export type ArrowsArrowRightSFillProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowRightSFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowRightSFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowRightSFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowRightSFill["focusable"]
}

export type ArrowsArrowRightSLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowRightSLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowRightSLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowRightSLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowRightSLine["focusable"]
}

export type ArrowsArrowRightUpLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowRightUpLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowRightUpLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowRightUpLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowRightUpLine["focusable"]
}

export type ArrowsArrowUpLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowUpLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowUpLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowUpLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowUpLine["focusable"]
}

export type ArrowsArrowUpSFillProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowUpSFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowUpSFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowUpSFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowUpSFill["focusable"]
}

export type ArrowsArrowUpSLineProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsArrowUpSLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsArrowUpSLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsArrowUpSLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsArrowUpSLine["focusable"]
}

export type ArrowsExpandUpDownFillProps = {
  /** (optional) The width and height in pixels */
  size?: ArrowsExpandUpDownFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: ArrowsExpandUpDownFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: ArrowsExpandUpDownFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: ArrowsExpandUpDownFill["focusable"]
}

export type BuildingsHome6LineProps = {
  /** (optional) The width and height in pixels */
  size?: BuildingsHome6Line["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: BuildingsHome6Line["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: BuildingsHome6Line["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: BuildingsHome6Line["focusable"]
}

export type BusinessCalendarLineProps = {
  /** (optional) The width and height in pixels */
  size?: BusinessCalendarLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: BusinessCalendarLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: BusinessCalendarLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: BusinessCalendarLine["focusable"]
}

export type DesignEditLineProps = {
  /** (optional) The width and height in pixels */
  size?: DesignEditLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DesignEditLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DesignEditLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DesignEditLine["focusable"]
}

export type DesignToolsLineProps = {
  /** (optional) The width and height in pixels */
  size?: DesignToolsLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DesignToolsLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DesignToolsLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DesignToolsLine["focusable"]
}

export type DeviceComputerLineProps = {
  /** (optional) The width and height in pixels */
  size?: DeviceComputerLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DeviceComputerLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DeviceComputerLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DeviceComputerLine["focusable"]
}

export type DocumentClipboardLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentClipboardLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentClipboardLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentClipboardLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentClipboardLine["focusable"]
}

export type DocumentFileCopyLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFileCopyLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFileCopyLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFileCopyLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFileCopyLine["focusable"]
}

export type DocumentFileImageLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFileImageLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFileImageLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFileImageLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFileImageLine["focusable"]
}

export type DocumentFileMusicLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFileMusicLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFileMusicLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFileMusicLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFileMusicLine["focusable"]
}

export type DocumentFileTextLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFileTextLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFileTextLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFileTextLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFileTextLine["focusable"]
}

export type DocumentFileVideoLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFileVideoLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFileVideoLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFileVideoLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFileVideoLine["focusable"]
}

export type DocumentFolderLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFolderLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFolderLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFolderLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFolderLine["focusable"]
}

export type DocumentFolderOpenLineProps = {
  /** (optional) The width and height in pixels */
  size?: DocumentFolderOpenLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: DocumentFolderOpenLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: DocumentFolderOpenLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: DocumentFolderOpenLine["focusable"]
}

export type HealthHeartFillProps = {
  /** (optional) The width and height in pixels */
  size?: HealthHeartFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: HealthHeartFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: HealthHeartFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: HealthHeartFill["focusable"]
}

export type HealthHeartLineProps = {
  /** (optional) The width and height in pixels */
  size?: HealthHeartLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: HealthHeartLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: HealthHeartLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: HealthHeartLine["focusable"]
}

export type OthersCookieLineProps = {
  /** (optional) The width and height in pixels */
  size?: OthersCookieLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: OthersCookieLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: OthersCookieLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: OthersCookieLine["focusable"]
}

export type UserAccountCircleFillProps = {
  /** (optional) The width and height in pixels */
  size?: UserAccountCircleFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: UserAccountCircleFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: UserAccountCircleFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: UserAccountCircleFill["focusable"]
}

export type UserAccountCircleLineProps = {
  /** (optional) The width and height in pixels */
  size?: UserAccountCircleLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: UserAccountCircleLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: UserAccountCircleLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: UserAccountCircleLine["focusable"]
}

export type UserUserFillProps = {
  /** (optional) The width and height in pixels */
  size?: UserUserFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: UserUserFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: UserUserFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: UserUserFill["focusable"]
}

export type UserUserLineProps = {
  /** (optional) The width and height in pixels */
  size?: UserUserLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: UserUserLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: UserUserLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: UserUserLine["focusable"]
}

export type SystemAddLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemAddLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemAddLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemAddLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemAddLine["focusable"]
}

export type SystemAlertFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemAlertFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemAlertFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemAlertFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemAlertFill["focusable"]
}

export type SystemAlertLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemAlertLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemAlertLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemAlertLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemAlertLine["focusable"]
}

export type SystemCheckLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckLine["focusable"]
}

export type SystemCheckLine2Props = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckLine2["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckLine2["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckLine2["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckLine2["focusable"]
}

export type SystemCheckboxBlankCircleFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckboxBlankCircleFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckboxBlankCircleFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckboxBlankCircleFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckboxBlankCircleFill["focusable"]
}

export type SystemCheckboxBlankCircleFillCheckProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckboxBlankCircleFillCheck["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckboxBlankCircleFillCheck["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckboxBlankCircleFillCheck["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckboxBlankCircleFillCheck["focusable"]
}

export type SystemCheckboxBlankCircleLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckboxBlankCircleLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckboxBlankCircleLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckboxBlankCircleLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckboxBlankCircleLine["focusable"]
}

export type SystemCheckboxCircleFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckboxCircleFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckboxCircleFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckboxCircleFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckboxCircleFill["focusable"]
}

export type SystemCheckboxCircleLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCheckboxCircleLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCheckboxCircleLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCheckboxCircleLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCheckboxCircleLine["focusable"]
}

export type SystemCloseCircleFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCloseCircleFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCloseCircleFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCloseCircleFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCloseCircleFill["focusable"]
}

export type SystemCloseCircleLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCloseCircleLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCloseCircleLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCloseCircleLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCloseCircleLine["focusable"]
}

export type SystemCloseFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCloseFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCloseFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCloseFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCloseFill["focusable"]
}

export type SystemCloseLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemCloseLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemCloseLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemCloseLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemCloseLine["focusable"]
}

export type SystemDeleteBinFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemDeleteBinFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemDeleteBinFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemDeleteBinFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemDeleteBinFill["focusable"]
}

export type SystemDeleteBinLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemDeleteBinLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemDeleteBinLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemDeleteBinLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemDeleteBinLine["focusable"]
}

export type SystemDownloadLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemDownloadLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemDownloadLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemDownloadLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemDownloadLine["focusable"]
}

export type SystemErrorWarningFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemErrorWarningFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemErrorWarningFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemErrorWarningFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemErrorWarningFill["focusable"]
}

export type SystemErrorWarningLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemErrorWarningLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemErrorWarningLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemErrorWarningLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemErrorWarningLine["focusable"]
}

export type SystemExternalLinkLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemExternalLinkLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemExternalLinkLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemExternalLinkLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemExternalLinkLine["focusable"]
}

export type SystemEyeLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemEyeLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemEyeLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemEyeLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemEyeLine["focusable"]
}

export type SystemEyeOffLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemEyeOffLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemEyeOffLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemEyeOffLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemEyeOffLine["focusable"]
}

export type SystemForbidFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemForbidFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemForbidFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemForbidFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemForbidFill["focusable"]
}

export type SystemInformation2FillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemInformation2Fill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemInformation2Fill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemInformation2Fill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemInformation2Fill["focusable"]
}

export type SystemInformationFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemInformationFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemInformationFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemInformationFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemInformationFill["focusable"]
}

export type SystemInformationLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemInformationLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemInformationLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemInformationLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemInformationLine["focusable"]
}

export type SystemLightbulbFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemLightbulbFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemLightbulbFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemLightbulbFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemLightbulbFill["focusable"]
}

export type SystemLoadingSpinnerProps = {
  /** (optional) The width and height in pixels */
  size?: SystemLoadingSpinner["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemLoadingSpinner["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemLoadingSpinner["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemLoadingSpinner["focusable"]
}

export type SystemLockFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemLockFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemLockFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemLockFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemLockFill["focusable"]
}

export type SystemLockLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemLockLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemLockLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemLockLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemLockLine["focusable"]
}

export type SystemMenuLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemMenuLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemMenuLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemMenuLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemMenuLine["focusable"]
}

export type SystemMenuLineSProps = {
  /** (optional) The width and height in pixels */
  size?: SystemMenuLineS["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemMenuLineS["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemMenuLineS["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemMenuLineS["focusable"]
}

export type SystemMore2LineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemMore2Line["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemMore2Line["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemMore2Line["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemMore2Line["focusable"]
}

export type SystemMoreLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemMoreLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemMoreLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemMoreLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemMoreLine["focusable"]
}

export type SystemSearchLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemSearchLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemSearchLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemSearchLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemSearchLine["focusable"]
}

export type SystemShareLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemShareLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemShareLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemShareLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemShareLine["focusable"]
}

export type SystemShieldCheckFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemShieldCheckFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemShieldCheckFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemShieldCheckFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemShieldCheckFill["focusable"]
}

export type SystemShieldCheckLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemShieldCheckLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemShieldCheckLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemShieldCheckLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemShieldCheckLine["focusable"]
}

export type SystemStarFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemStarFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemStarFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemStarFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemStarFill["focusable"]
}

export type SystemSubtractLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemSubtractLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemSubtractLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemSubtractLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemSubtractLine["focusable"]
}

export type SystemSubtractLine2Props = {
  /** (optional) The width and height in pixels */
  size?: SystemSubtractLine2["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemSubtractLine2["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemSubtractLine2["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemSubtractLine2["focusable"]
}

export type SystemTimeFillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemTimeFill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemTimeFill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemTimeFill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemTimeFill["focusable"]
}

export type SystemTimeLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemTimeLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemTimeLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemTimeLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemTimeLine["focusable"]
}

export type SystemUpload2FillProps = {
  /** (optional) The width and height in pixels */
  size?: SystemUpload2Fill["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemUpload2Fill["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemUpload2Fill["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemUpload2Fill["focusable"]
}

export type SystemUpload2LineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemUpload2Line["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemUpload2Line["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemUpload2Line["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemUpload2Line["focusable"]
}

export type SystemUploadLineProps = {
  /** (optional) The width and height in pixels */
  size?: SystemUploadLine["size"]
  /** (optional) Sets the icon color via the `fill` attribute */
  selected?: SystemUploadLine["selected"]
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: SystemUploadLine["accessibilityTitle"]
  /** (optional) If `true` the icon can receive focus */
  focusable?: SystemUploadLine["focusable"]
}

// Augment Vue's GlobalComponents interface
declare module 'vue' {
  interface GlobalComponents {
    /**
     * An accordion is a vertically stacked list of interactive items that can be expanded or collapsed to reveal or hide content.
     *
     * ### Events:
     * - **dds-opened** - Event fired when the accordion is opened.
     * - **dds-closed** - Event fired when the accordion is closed.
     *
     * ### Slots:
     * - **default** - The content of the accordion.
     * - **heading** - The heading of the accordion.
     * - **icon-opened** - The icon when the accordion is opened.
     * - **icon-closed** - The icon when the accordion is closed.
     *
     * ### CSS Parts:
     * - **base** - The main accordion container.
     * - **heading** - The heading of the accordion.
     * - **button** - The button of the accordion.
     * - **content** - The content of the accordion.
     * - **content-container** - The container of the accordion content.
     * - **icon-wrapper** - The icon wrapper of the accordion.
     * - **open-icon** - The icon when the accordion is opened.
     * - **open-icon-base** - The base of the icon when the accordion is opened.
     * - **close-icon** - The icon when the accordion is closed.
     * - **close-icon-base** - The base of the icon when the accordion is closed.
     */
         'dap-ds-accordion': DefineCustomElement<DapDSAccordion, DapDSAccordionProps, DapDSAccordionEvents>
    /**
     * An accordion group is a collection of accordion components.
     *
     * ### Slots:
     * - **default** - The content of the accordion group.
     *
     * ### CSS Parts:
     * - **base** - The main accordion group container.
     */
         'dap-ds-accordion-group': DefineCustomElement<DapDSAccordionGroup, DapDSAccordionGroupProps, {}>
    /**
     * Avatar group component displays multiple avatars in an organized layout with overflow management.
     *
     * ### Events:
     * - **dds-overflow-click** - Fired when the overflow indicator is clicked.
     *
     * ### Slots:
     * - **default** - The avatars to display in the group.
     *
     * ### CSS Parts:
     * - **base** - The main container of the avatar group.
     * - **avatars** - The container for the visible avatars.
     * - **overflow** - The overflow indicator element.
     */
         'dap-ds-avatar-group': DefineCustomElement<DapDSAvatarGroup, DapDSAvatarGroupProps, DapDSAvatarGroupEvents>
    /**
     * Avatar component can be used to display user profile images, initials, or icons.
     *
     * ### Events:
     * - **dds-click** - Fired when the avatar is clicked (only when interactive).
     * - **dds-load** - Fired when the image loads successfully.
     * - **dds-error** - Fired when the image fails to load.
     *
     * ### Slots:
     * - **icon** - The icon to display when variant is 'icon'.
     * - **fallback** - Custom fallback content when image fails to load.
     *
     * ### CSS Parts:
     * - **base** - The main avatar container.
     * - **img** - The avatar image.
     * - **initials** - The initials container.
     * - **icon** - The icon container.
     * - **fallback** - The fallback content container.
     * - **loading** - The loading indicator.
     */
         'dap-ds-avatar': DefineCustomElement<DapDSAvatar, DapDSAvatarProps, DapDSAvatarEvents>
    /**
     * A badge is a small status descriptor for UI elements.
     *
     * ### Slots:
     * - **default** - The content of the badge.
     * - **icon** - The icon of the badge.
     *
     * ### CSS Parts:
     * - **base** - The main container of the badge.
     * - **icon** - The icon of the badge.
     * - **content** - The content of the badge.
     * - **icon-base** - The base of the icon.
     */
         'dap-ds-badge': DefineCustomElement<DapDSBadge, DapDSBadgeProps, {}>
    /**
     * Anchor heading is a heading with an anchor link.
     *
     * ### CSS Parts:
     * - **base** - The main anchor heading container.
     * - **link** - The link of the anchor heading. dap-ds-link element.
     * - **link-base** - The base of the link part.
     * - **text** - The text of the anchor heading.
     */
         'dap-ds-anchor-heading': DefineCustomElement<DapDSAnchorHeading, DapDSAnchorHeadingProps, {}>
    /**
     * A banner is a message displayed at the top of the page to provide important information to the user.
     *
     * ### Events:
     * - **dds-close** - Event fired when the banner is closed.
     *
     * ### Slots:
     * - **default** - The content of the banner.
     * - **actions** - Actions of banner
     * - **icon** - The icon of the banner.
     *
     * ### CSS Parts:
     * - **base** - The main banner container.
     * - **card-base** - The wrapper card container.
     * - **icon** - The icon of the banner.
     * - **icon-element** - The icon element of the banner.
     * - **icon-base** - The base of the icon.
     * - **closebutton** - The close button of the banner.
     * - **close-icon-element** - The icon element of the close button.
     * - **close-icon-base** - The base of the close button icon.
     * - **actions** - The actions of the banner.
     * - **title** -  The title of the banner.
     */
         'dap-ds-banner': DefineCustomElement<DapDSBanner, DapDSBannerProps, DapDSBannerEvents>
    /**
     * A breadcrumb is a secondary navigation scheme that reveals the user's location in a website or Web application.
     *
     * ### Slots:
     * - **default** - The content of the breadcrumb.
     * - **separator** - The separator between breadcrumb items. Default is '/'.
     *
     * ### CSS Parts:
     * - **base** - The main breadcrumb container.
     * - **separator** - The separator of the breadcrumb.
     */
         'dap-ds-breadcrumb': DefineCustomElement<DapDSBreadcrumb, DapDSBreadcrumbProps, {}>
    /**
     * A breadcrumb item is a secondary navigation scheme that reveals the user's location in a website or Web application.
     *
     * ### Slots:
     * - **default** - The content of the breadcrumb item.
     * - **separator** - The separator between breadcrumb items. Default is an arrow-right-s-line icon.
     *
     * ### CSS Parts:
     * - **base** - The main breadcrumb item container. The li element.
     * - **link** - The link of the breadcrumb item. The dds-link component.
     * - **link-base** - The base part of the link part. The dds-link components base part.
     * - **item-nolink** - The item of the breadcrumb item without a link. The span element.
     * - **separator** - The separator of the breadcrumb item.
     */
         'dap-ds-breadcrumb-item': DefineCustomElement<DapDSBreadcrumbItem, DapDSBreadcrumbItemProps, {}>
    /**
     * A button is a clickable element that can be used to trigger an action, submit forms, or navigate to other pages.
     *
     * ### Events:
     * - **dds-loading-timeout** - Emitted when the loading timeout is reached
     *
     * ### Slots:
     * - **default** - The content of the button. Can contain text, icons, or other elements.
     *
     * ### CSS Parts:
     * - **base** - The main button container.
     * - **high-contrast** - The high contrast part of the button.
     * - **content** - The content wrapper inside the button.
     */
         'dap-ds-button': DefineCustomElement<DapDSButton, DapDSButtonProps, DapDSButtonEvents>
    /**
     * Calendar cell represents a single cell in the calendar.
     *
     * ### Slots:
     * - **default** - The content of the calendar cell.
     *
     * ### CSS Parts:
     * - **base** - The main calendar cell container.
     * - **today-mark** - The today mark of the calendar cell.
     */
         'dap-ds-calendar-cell': DefineCustomElement<DapDSCalendarCell, DapDSCalendarCellProps, {}>
    /**
     * A calendar is a visual representation of dates. It allows users to select a date.
     *
     * ### Events:
     * - **dds-change** - Fired when the calendar value changes.
     *
     * ### Slots:
     * - **default** - The content of the calendar.
     *
     * ### CSS Parts:
     * - **base** - The main calendar container.
     * - **header** - The header of the calendar.
     * - **body** - The body of the calendar.
     */
         'dap-ds-calendar': DefineCustomElement<DapDSCalendar, DapDSCalendarProps, DapDSCalendarEvents>
    /**
     * 
     *
     * ### Events:
     * - **dds-close** - Fired when the close button is clicked.
     *
     * ### Slots:
     * - **default** - The content of the callout.
     * - **title** - The title of the callout.
     * - **icon** - The icon of the callout.
     * - **actions** - The actions of the callout.
     * - **close** - The close button of the callout.
     *
     * ### CSS Parts:
     * - **base** - The main callout container.
     * - **icon** - The icon of the callout.
     * - **title** - The title of the callout.
     * - **description** - The description of the callout.
     * - **actions** - The actions of the callout.
     * - **close** - The close button of the callout.
     */
         'dap-ds-callout': DefineCustomElement<DapDSCallout, DapDSCalloutProps, DapDSCalloutEvents>
    /**
     * A card actions is a container for actions in a card.
     *
     * ### Slots:
     * - **default** - The content of the card actions.
     *
     * ### CSS Parts:
     * - **base** - The main card actions container.
     */
         'dap-ds-card-actions': DefineCustomElement<DapDSCardActions, DapDSCardActionsProps, {}>
    /**
     * A card content is a container for content in a card.
     *
     * ### Slots:
     * - **default** - The content of the card-content.
     *
     * ### CSS Parts:
     * - **base** - The main card content container.
     */
         'dap-ds-card-content': DefineCustomElement<DapDSCardContent, DapDSCardContentProps, {}>
    /**
     * A card image is a container for images in a card.
     *
     * ### Slots:
     * - **default** - The default slot for the image. The slot can accept any element, for example a video. If nothing is added to the slot, the image will be rendered.
     *
     * ### CSS Parts:
     * - **base** - The main card image container.
     */
         'dap-ds-card-image': DefineCustomElement<DapDSCardImage, DapDSCardImageProps, {}>
    /**
     * Subtitle of the card
     *
     * ### Slots:
     * - **default** - The content of the subtitle.
     *
     * ### CSS Parts:
     * - **base** - The subtitle container.
     */
         'dap-ds-card-subtitle': DefineCustomElement<DapDSCardSubtitle, DapDSCardSubtitleProps, {}>
    /**
     * Title of the card
     *
     * ### Slots:
     * - **default** - The content of the title.
     *
     * ### CSS Parts:
     * - **base** - The main card title container.
     */
         'dap-ds-card-title': DefineCustomElement<DapDSCardTitle, DapDSCardTitleProps, {}>
    /**
     * A card is a container for content, actions, and images in a consistent format.
     *
     * ### Slots:
     * - **default** - The content of the card.
     *
     * ### CSS Parts:
     * - **base** - The main card container.
     */
         'dap-ds-card': DefineCustomElement<DapDSCard, DapDSCardProps, {}>
    /**
     * A checkbox is a form element that allows the user to select one or more options from a set.
     *
     * ### Events:
     * - **dds-change** - Fired when the checkbox is checked or unchecked.
     * - **dds-blur** - Emitted when the checkbox loses focus.
     * - **dds-focus** - Emitted when the checkbox gains focus.
     * - **dds-input** - Emitted when the checkbox receives input.
     *
     * ### CSS Parts:
     * - **base** - The main checkbox container.
     * - **label** - The label of the checkbox.
     * - **input** - The input of the checkbox.
     * - **control** - The control of the checkbox.
     * - **icon** - The icon of the checkbox.
     * - **label-container** - The label container of the checkbox.
     * - **description** - The description of the checkbox.
     * - **readonly** - The readonly state of the checkbox.
     */
         'dap-ds-checkbox': DefineCustomElement<DapDSCheckbox, DapDSCheckboxProps, DapDSCheckboxEvents>
    /**
     * A select is a form element that allows the user to select one option from a set.
     *
     * ### Events:
     * - **dds-change** - Fired when the select value changes.
     * - **dds-blur** - Emitted when the select loses focus.
     * - **dds-focus** - Emitted when the select gains focus.
     * - **dds-clear** - Emitted when the select is cleared.
     * - **dds-search** - Emitted when the manual input value changes.
     * - **dds-input** - Emitted when typing happens in the input.
     *
     * ### Slots:
     * - **default** - The default slot for the options.
     *
     * ### CSS Parts:
     * - **base** - The main select container.
     * - **trigger** - The trigger button of the select.
     * - **label** - The label of the select.
     * - **description** - The description of the select.
     * - **feedback** - The feedback of the select.
     * - **tooltip** - The tooltip of the select.
     * - **option-list** - The option list of the select.
     */
         'dap-ds-combobox': DefineCustomElement<DapDSCombobox, DapDSComboboxProps, DapDSComboboxEvents>
    /**
     * A command group is a group of command items.
     *
     * ### Slots:
     * - **default** - The default slot for the command group.
     */
         'dap-ds-command-group': DefineCustomElement<DapDSCommandGroup, DapDSCommandGroupProps, {}>
    /**
     * A command item is a command item that can be selected.
     *
     * ### Events:
     * - **dds-command-item-click** - Fired when the command item is clicked.
     *
     * ### Slots:
     * - **default** - The label of the command item.
     * - **check** - The check of the command item.
     *
     * ### CSS Parts:
     * - **base** - The base part of the command item.
     * - **content** - The content part of the command item.
     * - **label** - The label part of the command item.
     */
         'dap-ds-command-item': DefineCustomElement<DapDSCommandItem, DapDSCommandItemProps, DapDSCommandItemEvents>
    /**
     * A command is a component that displays a list of commands.
     *
     * ### Events:
     * - **dds-change** - Fired when the command value changes.
     * - **dds-opened** - Fired when the popup is opened.
     * - **dds-closed** - Fired when the popup is closed.
     * - **dds-close** - Fired when the popup should be closed.
     *
     * ### Slots:
     * - **trigger** - The trigger element for the command dropdown.
     * - **default** - The command items.
     *
     * ### CSS Parts:
     * - **popup** - The main popup container.
     * - **arrow** - The arrow of the popup.
     */
         'dap-ds-command': DefineCustomElement<DapDSCommand, DapDSCommandProps, DapDSCommandEvents>
    /**
     * Segmented control item component for the segmented control.
     *
     * ### Slots:
     * - **iconcontent** - The icon content of the segmented control item.
     *
     * ### CSS Parts:
     * - **input** - The input of the segmented control item.
     */
         'dap-ds-content-switcher-item': DefineCustomElement<DapDSContentSwitcherItem, DapDSContentSwitcherItemProps, {}>
    /**
     * A content switcher is a set of two or more segments, each of which functions as a mutually exclusive button.
     *
     * ### Events:
     * - **dds-change** - Fired when the content switcher is changed.
     *
     * ### Slots:
     * - **default** - The content switcher items.
     *
     * ### CSS Parts:
     * - **base** - The main content switcher container.
     */
         'dap-ds-content-switcher': DefineCustomElement<DapDSContentSwitcher, DapDSContentSwitcherProps, DapDSContentSwitcherEvents>
    /**
     * A copybox input is a field for copying an input value.
     *
     * ### Events:
     * - **dds-copy** - Fired when the user clicks on the copy button.
     * - **dds-change** - Fired when the input value changes.
     * - **dds-input** - Fired when the input value changes.
     * - **dds-keydown** - Fired when a key is pressed down.
     * - **dds-blur** - Fired when the input loses focus.
     * - **dds-focus** - Emitted when the input gains focus.
     * - **dds-not-allowed** - Emitted when the value cannot be copied.
     *
     * ### CSS Parts:
     * - **base** - The base container of the component.
     * - **postfix** - The inner postfix icon part of the component.
     * - **button** - The button of the component.
     */
         'dap-ds-copybox-input': DefineCustomElement<DapDSCopyBoxInput, DapDSCopyBoxInputProps, DapDSCopyBoxInputEvents>
    /**
     * A DÁP badge is a brand element showing the use of this system design library.
     *
     * ### Slots:
     * - **default** - Description of badge *
     *
     * ### CSS Parts:
     * - **base** - Main badge container
     * - **icon** - Badge icon
     * - **text** - Badge text
     */
         'dap-ds-dap-badge': DefineCustomElement<DapDSDAPBadge, DapDSDAPBadgeProps, {}>
    /**
     * A data table is a component that displays data in a tabular format.
     *
     * ### Events:
     * - **dds-sorting-change** - Fired when the sorting of the table changes.
     * - **dds-selection-change** - Fired when the selection of the table changes.
     * - **dds-pagination-change** - Fired when the pagination of the table changes.
     * - **dds-row-click** - Fired when a row is clicked.
     *
     * ### Slots:
     * - **loading** - The loading content of the table.
     * - **empty** - The empty content of the table.
     *
     * ### CSS Parts:
     * - **base** - The main table container.
     * - **header** - The header of the table.
     * - **header-row** - The header row of the table.
     * - **header-cell** - All cells of the header.
     * - **body** - The body of the table.
     * - **row** - All rows of the table.
     * - **cell** - All cells of the table.
     * - **pager** - The pager of the table.
     */
         'dap-ds-datatable': DefineGenericCustomElement<DapDSDataTable<any>, DapDSDataTableProps<any>, any, DapDSDataTableEvents<any>>
    /**
     * A datepicker is a graphical user interface widget that allows the user to select a date from a calendar and/or time from a time range.
     *
     * ### Events:
     * - **dds-change** - Fired when the datepicker value changes.
     * - **dds-input** - Fired when the datepicker input value changes.
     * - **dds-valid-date** - Fired when the datepicker input value is valid. Happens on manual input typing.
     * - **dds-invalid-date** - Fired when the datepicker input value is invalid. Happens on manual input typing.
     * - **dds-clear** - Fired when the datepicker is cleared.
     * - **dds-focus** - Emitted when the datepicker gains focus.
     * - **dds-blur** - Emitted when the datepicker loses focus.
     *
     * ### CSS Parts:
     * - **base** - The main datepicker container.
     * - **calendar** - The calendar of the datepicker.
     * - **trigger** - The trigger button of the datepicker.
     * - **label** - The label of the datepicker.
     * - **description** - The description of the datepicker.
     * - **feedback** - The feedback of the datepicker.
     * - **tooltip** - The tooltip of the datepicker.
     * - **input** - The input of the datepicker.
     * - **clear-button** - The clear button of the datepicker.
     */
         'dap-ds-datepicker': DefineCustomElement<DapDSDatePicker, DapDSDatePickerProps, DapDSDatePickerEvents>
    /**
     * A divider is a visual separator between elements.
     */
         'dap-ds-divider': DefineCustomElement<DapDSDivider, DapDSDividerProps, {}>
    /**
     * A feedback is a container for feedback messages.
     *
     * ### Slots:
     * - **icon** - The custom icon of the feedback.
     * - **default** - The text of the feedback.
     *
     * ### CSS Parts:
     * - **base** - The main feedback container.
     * - **icon** - The icon of the feedback.
     * - **text** - The text of the feedback.
     */
         'dap-ds-feedback': DefineCustomElement<DapDSFeedback, DapDSFeedbackProps, {}>
    /**
     * A file input list item is a container for file input list items.
     *
     * ### Events:
     * - **dds-file-remove** - Dispatched when a file is removed from the list.
     *
     * ### Slots:
     * - **delete-button** - The delete button.
     *
     * ### CSS Parts:
     * - **base** - The main file input list item container.
     * - **feedback** - The feedback container.
     * - **link** - The link text of the item component.
     * - **filename** - The filename text of the item component.
     * - **filesize** - The filesize text of the item component.
     * - **spinner** - The spinner of the item component.
     * - **remove-button** - The remove button of the item component.
     * - **thumbnail** - The thumbnail of the item component.
     */
         'dap-ds-file-input-list-item': DefineCustomElement<DapDSFileInputListItem, DapDSFileInputListItemProps, DapDSFileInputListItemEvents>
    /**
     * A file input list is a container for file input items.
     *
     * ### Slots:
     * - **delete-button** - The delete button.
     *
     * ### CSS Parts:
     * - **base** - The main file input list container.
     */
         'dap-ds-file-input-list': DefineCustomElement<DapDSFileInputList, DapDSFileInputListProps, {}>
    /**
     * A file input is a control that allows users to select files to upload.
     *
     * ### Events:
     * - **dds-upload-start** - Fired when a file upload starts.
     * - **dds-upload-progress** - Fired during file upload progress.
     * - **dds-upload-complete** - Fired when a file upload completes successfully.
     * - **dds-upload-error** - Fired when a file upload encounters an error. Can contain a single error or an array of validation errors.
     * - **dds-all-uploads-complete** - Fired when all file uploads are complete.
     * - **dds-file-removed** - Fired when a file is removed from the file input.
     * - **dds-file-delete-error** - Fired when a file deletion from server encounters an error.
     * - **dds-file-change** - Fired when the file input value changes.
     *
     * ### Slots:
     * - **dropzone-content** - The content to display in the dropzone.
     *
     * ### CSS Parts:
     * - **base** - The main file input container.
     * - **input** - The file input control.
     * - **label** - The file input label.
     * - **description** - The file input description.
     * - **feedback** - The file input feedback.
     * - **tooltip** - The file input tooltip.
     * - **upload-progress** - The upload progress container.
     * - **browse-button** - The browse button.
     * - **upload-button** - The upload button.
     * - **dropzone** - The dropzone area.
     * - **file-list** - The file list container.
     * - **file-list-item** - Individual file list items.
     */
         'dap-ds-file-input': DefineCustomElement<DapDSFileInput, DapDSFileInputProps, DapDSFileInputEvents>
    /**
     * An icon is a graphical symbol that represents an object or action.
     *
     * ### Slots:
     * - **default** - The content of the icon for custom svg icons.
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     * - **icon** - The icon of the icon.
     */
         'dap-ds-icon': DefineCustomElement<DapDSIcon, DapDSIconProps, {}>
    /**
     * An icon button is a button with an icon.
     *
     * ### Slots:
     * - **default** - The icon of the button.
     *
     * ### CSS Parts:
     * - **base** - The main button container.
     * - **content** - The icon of the button.
     */
         'dap-ds-icon-button': DefineCustomElement<DapDSIconButton, DapDSIconButtonProps, {}>
    /**
     * An input is a field used to collect user input.
     *
     * ### Events:
     * - **dds-change** - Fired when the input value changes.
     * - **dds-input** - Fired when the input value changes.
     * - **dds-keydown** - Fired when a key is pressed down.
     * - **dds-blur** - Fired when the input loses focus.
     * - **dds-focus** - Emitted when the input gains focus.
     *
     * ### Slots:
     * - **postfix** - The postfix of the input.
     * - **prefix** - The prefix of the input.
     * - **addon-before** - The addon before the input.
     * - **addon-after** - The addon after the input.
     * - **feedback-icon** - The custom icon of the feedback.
     *
     * ### CSS Parts:
     * - **base** - The main input container.
     * - **input** - The input element.
     * - **label** - The label of the input.
     * - **description** - The description of the input.
     * - **feedback** - The feedback of the input.
     * - **tooltip** - The tooltip of the input.
     * - **addon-before** - The addon before the input.
     * - **addon-after** - The addon after the input.
     * - **prefix** - The prefix of the input.
     * - **postfix** - The postfix of the input.
     */
         'dap-ds-input': DefineCustomElement<DapDSInput, DapDSInputProps, DapDSInputEvents>
    /**
     * A label is a container for labels intended for general use. It contains a label text, description, and tooltip.
     *
     * ### CSS Parts:
     * - **base** - The main label container.
     * - **label** - Tha main label container. dap-ds-form-label element.
     * - **label-base** - The label text.
     * - **label-required** - The required indicator of the label.
     * - **label-optional** - The optional indicator of the label.
     * - **tooltip** - The tooltip of the label. dap-ds-tooltip element.
     * - **description** - The description of the label.
     */
         'dap-ds-label': DefineCustomElement<DapDSLabel, DapDSLabelProps, {}>
    /**
     * A link is a reference to a web resource.
     *
     * ### Events:
     * - **dds-click** - Emitted when the link is clicked.
     *
     * ### Slots:
     * - **default** - The text of the link.
     *
     * ### CSS Parts:
     * - **base** - The main link container.
     * - **text** - The text of the link.
     */
         'dap-ds-link': DefineCustomElement<DapDSLink, DapDSLinkProps, DapDSLinkEvents>
    /**
     * A list
     *
     * ### Slots:
     * - **default** - The content of the list item.
     * - **icon** - The icon of the list item.
     * - **title** - The title of the list item.
     * - **actions** - The actions of the list item.
     *
     * ### CSS Parts:
     * - **base** - The main list item container.
     * - **icon** - The icon of the list item.
     * - **title** - The title of the list item.
     * - **description** - The description of the list item.
     * - **container** - The container of the list item.
     * - **list-item-base** - The base list item container.
     * - **icon-container** - The container of the icon.
     * - **title-container** - The container of the title.
     * - **description-container** - The container of the description.
     * - **actions-container** - The container of the actions.
     * - **iteractive-indicator-container** - The container of the interactive indicator.
     */
         'dap-ds-list-item': DefineCustomElement<DapDSListItem, DapDSListItemProps, {}>
    /**
     * A modal is a container for modal content.
     *
     * ### Events:
     * - **dds-before-open** - Fires before the modal opens.
     * - **dds-opened** - Fires after the modal opens.
     * - **dds-before-close** - Fires before the modal closes.
     * - **dds-closed** - Fires after the modal closed.
     * - **dds-close** - Fires when the modal is closes. You can prevent the modal from closing by calling `event.preventDefault()`.
     * - **dds-ok** - Fires when the OK button is clicked. You can prevent the modal from closing by calling `event.preventDefault()`.
     * - **dds-cancel** - Fires when the Cancel button is clicked. You can prevent the modal from closing by calling `event.preventDefault()`.
     *
     * ### Slots:
     * - **default** - The content of the modal.
     * - **title** - The title of the modal.
     * - **description** - The description of the modal.
     * - **footer** - The footer of the modal.
     *
     * ### CSS Parts:
     * - **base** - The main modal container.
     * - **panel** - The panel of the modal.
     * - **header** - The header of the modal.
     * - **title** - The title of the modal.
     * - **description** - The description of the modal.
     * - **footer** - The footer of the modal.
     * - **content** - The body of the modal.
     * - **closebutton** - The close button of the modal.
     */
         'dap-ds-modal': DefineCustomElement<DapDSModal, DapDSModalProps, DapDSModalEvents>
    /**
     * A navigation menu item that can contain either a simple link or dropdown content.
     *
     * ### Events:
     * - **dds-navigation-item-click** - Fired when a navigation item is clicked.
     * - **dds-navigation-dropdown-open** - Fired when a navigation dropdown is opened.
     * - **dds-opened** - Fired when the popup is opened.
     * - **dds-closed** - Fired when the popup is closed.
     * - **dds-close** - Fired when the popup should be closed.
     *
     * ### Slots:
     * - **trigger** - The trigger element (link, button, etc.) for this navigation item.
     * - **title** - The title of the navigation item.
     * - **default** - The dropdown content (only used if trigger slot is provided).
     *
     * ### CSS Parts:
     * - **base** - The base part of the navigation item.
     * - **trigger** - The trigger element part.
     * - **content** - The dropdown content part.
     * - **popup** - The main popup container.
     * - **arrow** - The arrow of the popup.
     */
         'dap-ds-navigation-menu-item': DefineCustomElement<DapDSNavigationMenuItem, DapDSNavigationMenuItemProps, DapDSNavigationMenuItemEvents>
    /**
     * A horizontal navigation menu container that can contain multiple navigation items.
     *
     * ### Events:
     * - **dds-navigation-item-click** - Fired when a navigation item is clicked.
     *
     * ### Slots:
     * - **default** - The navigation menu list and items.
     *
     * ### CSS Parts:
     * - **base** - The main navigation menu container.
     */
         'dap-ds-navigation-menu': DefineCustomElement<DapDSNavigationMenu, DapDSNavigationMenuProps, DapDSNavigationMenuEvents>
    /**
     * A notification badge component is a user interface element that visually indicates the presence of new information or updates, often displaying a numeric count of unread notifications, messages, or items requiring attention.
     *
     * ### Slots:
     * - **default** - The content of the notification badge.
     *
     * ### CSS Parts:
     * - **base** - The main container of the notification badge.
     * - **noty** - The notification badge container.
     */
         'dap-ds-notification-badge': DefineCustomElement<DapDSNotificationBadge, DapDSNotificationBadgeProps, {}>
    /**
     * A number input component.
     *
     * ### Events:
     * - **dds-change** - Fired when the input value changes.
     * - **dds-input** - Fired when the input value changes.
     * - **dds-keydown** - Fired when a key is pressed down.
     * - **dds-blur** - Fired when the input loses focus.
     * - **dds-focus** - Emitted when the input gains focus.
     *
     * ### Slots:
     * - **feedback-icon** - The custom icon of the feedback.
     *
     * ### CSS Parts:
     * - **postfix** - The postfix of the input.
     * - **decrement** - The decrement button of the input.
     * - **increment** - The increment button of the input.
     */
         'dap-ds-number-input': DefineCustomElement<DapDSNumberInput, DapDSNumberInputProps, DapDSNumberInputEvents>
    /**
     * An official website banner is a banner that displays that the website is an official website.
     *
     * ### Events:
     * - **dds-opened** - Event fired when the accordion is opened.
     * - **dds-closed** - Event fired when the accordion is closed.
     *
     * ### Slots:
     * - **default** - The content of the accordion.
     * - **heading** - The heading of the accordion.
     * - **icon-opened** - The icon when the accordion is opened.
     * - **icon-closed** - The icon when the accordion is closed.
     *
     * ### CSS Parts:
     * - **base** - The main accordion container.
     * - **heading** - The heading of the accordion.
     * - **button** - The button of the accordion.
     * - **content** - The content of the accordion.
     * - **content-container** - The container of the accordion content.
     * - **icon-wrapper** - The icon wrapper of the accordion.
     * - **open-icon** - The icon when the accordion is opened.
     * - **open-icon-base** - The base of the icon when the accordion is opened.
     * - **close-icon** - The icon when the accordion is closed.
     * - **close-icon-base** - The base of the icon when the accordion is closed.
     */
         'dap-ds-official-website-banner': DefineCustomElement<DapDSOfficialWebsiteBanner, DapDSOfficialWebsiteBannerProps, DapDSOfficialWebsiteBannerEvents>
    /**
     * An option item is a selectable item in a list of options.
     *
     * ### Slots:
     * - **prefix** - The prefix of the option item.
     * - **default** - The label of the option item.
     * - **suffix** - The suffix of the option item.
     *
     * ### CSS Parts:
     * - **base** - The main option item container.
     * - **prefix** - The prefix of the option item.
     * - **label** - The label of the option item.
     * - **suffix** - The suffix of the option item.
     */
         'dap-ds-option-item': DefineCustomElement<DapDSOptionItem, DapDSOptionItemProps, {}>
    /**
     * An option list is a list of selectable options.
     *
     * ### Events:
     * - **dds-cancel** - Fired when the escape key is pressed.
     * - **dds-option-change** - Fired when the option list value changes.
     * - **dds-keydown** - Fired when a key is pressed down.
     * - **dds-list-changed** - Fired when the available options list changes.
     *
     * ### Slots:
     * - **default** - The default slot for the options.
     *
     * ### CSS Parts:
     * - **base** - The main option list container.
     */
         'dap-ds-option-list': DefineCustomElement<DapDSOptionList, DapDSOptionListProps, DapDSOptionListEvents>
    /**
     * An overlay is a container for overlay content.
     *
     * ### CSS Parts:
     * - **overlay** - The overlay element
     */
         'dap-ds-overlay': DefineCustomElement<DapDSOverlay, DapDSOverlayProps, {}>
    /**
     * A pager is a component that displays pagination controls.
     *
     * ### Events:
     * - **dds-pagination-change** - Event fired when the pagination changes
     *
     * ### CSS Parts:
     * - **base** - The main pager container.
     * - **first** - The first page button.
     * - **previous** - The previous page button.
     * - **next** - The next page button.
     * - **last** - The last page button.
     */
         'dap-ds-pager': DefineCustomElement<DapDSPager, DapDSPagerProps, DapDSPagerEvents>
    /**
     * A password input a field for entering a password.
     *
     * ### Events:
     * - **dds-change** - Fired when the input value changes.
     * - **dds-input** - Fired when the input value changes.
     * - **dds-keydown** - Fired when a key is pressed down.
     * - **dds-blur** - Fired when the input loses focus.
     * - **dds-focus** - Emitted when the input gains focus.
     *
     * ### CSS Parts:
     * - **postfix** - The postfix of the password input.
     * - **password-input** - The password input.
     * - **password-input--visible** - The visible password input.
     * - **icon** - The icon of the password input.
     * - **icon-base** - The base of the icon.
     */
         'dap-ds-password-input': DefineCustomElement<DapDSPasswordInput, DapDSPasswordInputProps, DapDSPasswordInputEvents>
    /**
     * A popup is a container for popup content.
     *
     * ### Events:
     * - **dds-opened** - Fired when the popup is opened.
     * - **dds-closed** - Fired when the popup is closed.
     * - **dds-close** - Fired when the popup should be closed.
     *
     * ### Slots:
     * - **trigger** - The trigger of the popup.
     * - **default** - The content of the popup.
     *
     * ### CSS Parts:
     * - **popup** - The main popup container.
     * - **arrow** - The arrow of the popup.
     */
         'dap-ds-popup': DefineCustomElement<DapDSPopup, DapDSPopupProps, DapDSPopupEvents>
    /**
     * A radio button is a graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options.
     *
     * ### Events:
     * - **dds-change** - Fired when the radio button is checked.
     * - **dds-blur** - Emitted when the radio button loses focus.
     * - **dds-focus** - Emitted when the radio button gains focus.
     * - **dds-input** - Emitted when the radio button receives input.
     *
     * ### CSS Parts:
     * - **base** - The main radio button container.
     * - **wrapper** - The wrapper of the radio button.
     * - **base-label** - The main label container.
     * - **label** - The label of the radio button.
     * - **input** - The native input of the radio button.
     * - **control** - The control of the radio button.
     * - **label-container** - The label container of the radio button.
     * - **description** - The description of the radio button.
     */
         'dap-ds-radio-button': DefineCustomElement<DapDSRadioButton, DapDSRadioButtonProps, DapDSRadioButtonEvents>
    /**
     * Rating is a component that allows users to rate a product or service.
     *
     * ### Events:
     * - **dds-change** - Event fired when the rating value changes.
     *
     * ### CSS Parts:
     * - **base** - The main rating container.
     * - **star** - The star element.
     * - **stars-container** - The container of the stars.
     * - **icon** - The icon of the star.
     */
         'dap-ds-rating': DefineCustomElement<DapDSRating, DapDSRatingProps, DapDSRatingEvents>
    /**
     * A component that provides a customizable scrollable area with a custom scrollbar.
     *
     * ### Slots:
     * - **default** - The content to be scrolled
     *
     * ### CSS Parts:
     * - **viewport** - The viewport element that contains the scrollable content
     * - **scrollbar** - The scrollbar container
     * - **corner** - The corner between vertical and horizontal scrollbars
     */
         'dap-ds-scroll-area': DefineCustomElement<DapDSScrollArea, DapDSScrollAreaProps, {}>
    /**
     * A select is a form element that allows the user to select one option from a set.
     *
     * ### Events:
     * - **dds-change** - Fired when the search value changes.
     * - **dds-blur** - Emitted when the search loses focus.
     * - **dds-focus** - Emitted when the search gains focus.
     * - **dds-clear** - Emitted when the search is cleared.
     * - **dds-search** - Emitted when the search input value changes.
     * - **dds-input** - Emitted when typing happens in the search input.
     *
     * ### Slots:
     * - **default** - The default slot for the options.
     *
     * ### CSS Parts:
     * - **base** - The main search container.
     * - **trigger** - The trigger button of the search.
     * - **label** - The label of the search.
     * - **description** - The description of the search.
     * - **feedback** - The feedback of the search.
     * - **tooltip** - The tooltip of the search.
     * - **option-list** - The option list of the search.
     */
         'dap-ds-search': DefineCustomElement<DapDSSearch, DapDSSearchProps, DapDSSearchEvents>
    /**
     * A select is a form element that allows the user to select one option from a set.
     *
     * ### Events:
     * - **dds-change** - Fired when the select value changes.
     * - **dds-blur** - Emitted when the select loses focus.
     * - **dds-focus** - Emitted when the select gains focus.
     * - **dds-opened** - Emitted when the select dropdown is opened.
     * - **dds-closed** - Emitted when the select dropdown is closed.
     *
     * ### Slots:
     * - **default** - The option list of the select.
     * - **indicator-icon** - The indicator icon of the select.
     *
     * ### CSS Parts:
     * - **base** - The main select container.
     * - **trigger** - The trigger button of the select.
     * - **label** - The label of the select.
     * - **description** - The description of the select.
     * - **feedback** - The feedback of the select.
     * - **tooltip** - The tooltip of the select.
     * - **option-list** - The option list of the select.
     */
         'dap-ds-select': DefineCustomElement<DapDSSelect, DapDSSelectProps, DapDSSelectEvents>
    /**
     * Side navigation group
     *
     * ### Slots:
     * - **default** - The content of the side navigation group.
     * - **submenu** - The submenu of the side navigation group.
     * - **suffix** - The suffix of the side navigation group.
     *
     * ### CSS Parts:
     * - **base** - The main side navigation group container.
     * - **title** - The title of the side navigation group.
     * - **link** - The link of the side navigation group.
     * - **toggle** - The toggle button of the side navigation group.
     * - **submenu** - The submenu of the side navigation group.
     */
         'dap-ds-sidenav-group': DefineCustomElement<DapDSSideNavGroup, DapDSSideNavGroupProps, {}>
    /**
     * Side navigation item
     *
     * ### Slots:
     * - **default** - The content of the side navigation item.
     * - **suffix** - The suffix of the side navigation item.
     *
     * ### CSS Parts:
     * - **base** - The main side navigation item container.
     * - **link** - The link of the side navigation item.
     */
         'dap-ds-sidenav-item': DefineCustomElement<DapDSSideNavItem, DapDSSideNavItemProps, {}>
    /**
     * Side navigation is a list of links that are used to navigate to different sections of a page.
     *
     * ### Events:
     * - **dds-item-click** - Event fired when the side navigation item is clicked.
     *
     * ### Slots:
     * - **default** - The content of the side navigation.
     *
     * ### CSS Parts:
     * - **base** - The main side navigation container.
     * - **menu** - The menu of the side navigation.
     */
         'dap-ds-sidenav': DefineCustomElement<DapDSSideNav, DapDSSideNavProps, DapDSSideNavEvents>
    /**
     * A skeleton loader component for displaying placeholder content while loading.
     *
     * ### CSS Parts:
     * - **base** - The main skeleton container.
     */
         'dap-ds-skeleton': DefineCustomElement<DapDSSkeleton, DapDSSkeletonProps, {}>
    /**
     * A skip link is a link that allows keyboard users to skip to the main content of a page.
     *
     * ### Slots:
     * - **default** - The content of the skip link.
     *
     * ### CSS Parts:
     * - **base** - The main skip link container.
     * - **text** - The text container of the skip link.
     * - **high-contrast** - The high contrast outline container.
     */
         'dap-ds-skip-link': DefineCustomElement<DapDSSkipLink, DapDSSkipLinkProps, {}>
    /**
     * The Snackbar component shows a sliding message to the user.
     *
     * ### Events:
     * - **dds-close** - Fires when the snackbar closes.
     *
     * ### Slots:
     * - **default** - The content of the snackbar.
     *
     * ### CSS Parts:
     * - **base** - Main snackbar container.
     * - **text** - The text part of the snackbar.
     * - **closebutton** - The close button part of the component.
     * - **icon** - The icon part of the close button.
     */
         'dap-ds-snackbar-message': DefineCustomElement<DapDSSnackbarMessage, DapDSSnackbarMessageProps, DapDSSnackbarMessageEvents>
    /**
     * The Snackbar is a container of sliding messages.
     *
     * ### CSS Parts:
     * - **host** - The host element
     */
         'dap-ds-snackbar': DefineCustomElement<DapDSSnackbar, DapDSSnackbarProps, {}>
    /**
     * Loading spinner component.
     *
     * ### Slots:
     * - **default** - The loading text content.
     *
     * ### CSS Parts:
     * - **base** - The main spinner container.
     * - **icon** - The loading icon element.
     * - **icon-base** - The base of the loading icon.
     * - **text** - The loading text element.
     */
         'dap-ds-spinner': DefineCustomElement<DapDSSpinner, DapDSSpinnerProps, {}>
    /**
     * A stack is a container for stacked content.
     *
     * ### Slots:
     * - **default** - The content of the stack.
     *
     * ### CSS Parts:
     * - **stack** - The main stack container.
     */
         'dap-ds-stack': DefineCustomElement<DapDSStack, DapDSStackProps, {}>
    /**
     * A switch is a graphical control element that allows the user to toggle between two states.
     *
     * ### Events:
     * - **dds-change** - Fired when the input value changes.
     * - **dds-blur** - Emitted when the input loses focus.
     * - **dds-focus** - Emitted when the input gains focus.
     * - **dds-input** - Emitted when the input receives input.
     *
     * ### CSS Parts:
     * - **base** - The main switch container.
     * - **baselabel** - The main label container
     * - **label** - The label of the switch.
     * - **input** - The native input of the switch.
     * - **control** - The control of the switch.
     * - **description** - The description of the switch.
     */
         'dap-ds-switch': DefineCustomElement<DapDSSwitch, DapDSSwitchProps, DapDSSwitchEvents>
    /**
     * A tab group component. It is used with dap-ds-tab component to create a tab group.
     *
     * ### Events:
     * - **dds-tab-select** - Fired when select a new tab.
     *
     * ### Slots:
     * - **default** - The tab items.
     *
     * ### CSS Parts:
     * - **base** - The main container.
     * - **tab-nav** - The tab navigation container.
     * - **tab-content** - The tab content container.
     */
         'dap-ds-tab-group': DefineCustomElement<DapDSTabGroup, DapDSTabGroupProps, DapDSTabGroupEvents>
    /**
     * A tab item component. It is used in dap-ds-tab-group component slot to create a tab item.
     *
     * ### Slots:
     * - **default** - The tab title template.
     * - **content** - The tab content.
     *
     * ### CSS Parts:
     * - **base** - The main tab content container.
     */
         'dap-ds-tab': DefineCustomElement<DapDSTab, DapDSTabProps, {}>
    /**
     * 
     *
     * ### Slots:
     * - **default** - The default slot.
     *
     * ### CSS Parts:
     * - **base** - The main cell container.
     */
         'dap-ds-table-cell': DefineCustomElement<DapDSTableCell, DapDSTableCellProps, {}>
    /**
     * 
     *
     * ### Slots:
     * - **default** - The default slot.
     *
     * ### CSS Parts:
     * - **base** - The main header cell container.
     */
         'dap-ds-table-header': DefineCustomElement<DapDSTableHeader, DapDSTableHeaderProps, {}>
    /**
     * 
     *
     * ### Slots:
     * - **default** - The default slot. Accepts `dap-ds-table-cell` and `dap-ds-table-header` elements.
     */
         'dap-ds-table-row': DefineCustomElement<DapDSTableRow, DapDSTableRowProps, {}>
    /**
     * 
     *
     * ### Slots:
     * - **default** - The default slot. Accepts `dap-ds-table-row` elements.
     */
         'dap-ds-table': DefineCustomElement<DapDSTable, DapDSTableProps, {}>
    /**
     * A textarea is a multi-line text input field.
     *
     * ### Events:
     * - **dds-count-change** - Fires when the count of the textarea changes.
     * - **dds-change** - Fired when the textarea value changes.
     * - **dds-input** - Fired when the textarea value changes.
     * - **dds-keydown** - Fired when a key is pressed down.
     * - **dds-blur** - Fired when the textarea loses focus.
     * - **dds-focus** - Emitted when the textarea gains focus.
     * - **dds-select** - Emitted when select text in textarea.
     *
     * ### Slots:
     * - **feedback-icon** - The custom icon of the feedback.
     *
     * ### CSS Parts:
     * - **base** - The main textarea container.
     * - **input** - The native input of the textarea.
     * - **counter** - The counter of the textarea.
     * - **counter-base** - The base of the counter.
     * - **feedback** - The feedback of the textarea.
     * - **feedback-base** - The base of the feedback.
     * - **feedback-text** - The text of the feedback.
     * - **feedback-icon** - The icon of the feedback.
     */
         'dap-ds-textarea': DefineCustomElement<DapDSTextarea, DapDSTextareaProps, DapDSTextareaEvents>
    /**
     * A timeline is a graphical representation of a series of events.
     *
     * ### Slots:
     * - **default** - The default slot for the item content.
     *
     * ### CSS Parts:
     * - **base** - The main timeline item container.
     * - **connector** - The connector element between two timeline items.
     * - **content** - The content of the timeline item.
     */
         'dap-ds-timeline-item': DefineCustomElement<DapDSTimelineItem, DapDSTimelineItemProps, {}>
    /**
     * A timeline is a graphical representation of a series of events.
     *
     * ### Slots:
     * - **default** - The default slot for the timeline items.
     *
     * ### CSS Parts:
     * - **base** - The main timeline container.
     */
         'dap-ds-timeline': DefineCustomElement<DapDSTimeline, DapDSTimelineProps, {}>
    /**
     * A time grid component that allows users to select hours and minutes in two side-by-side scrollable columns.
     *
     * ### Events:
     * - **dds-change** - Fired when time selection changes.
     * - **dds-close** - Fired when the time grid should close.
     *
     * ### CSS Parts:
     * - **time-grid** - The main time grid container.
     * - **hour-section** - The hour selection section.
     * - **minute-section** - The minute selection section.
     * - **time-button** - Individual time selection buttons.
     * - **section-header-title** - The title of the section header.
     * - **section-header-divider** - The divider between the section header and the time buttons.
     * - **time-column** - The time column container.
     */
         'dap-ds-time-grid': DefineCustomElement<DapDSTimeGrid, DapDSTimeGridProps, DapDSTimeGridEvents>
    /**
     * A timepicker is a graphical user interface widget that allows the user to select a time from a time range.
     *
     * ### Events:
     * - **dds-change** - Fired when the timepicker value changes.
     * - **dds-input** - Fired when the timepicker input value changes.
     * - **dds-valid-time** - Fired when the timepicker input value is valid. Happens on manual input typing.
     * - **dds-invalid-time** - Fired when the timepicker input value is invalid. Happens on manual input typing.
     * - **dds-clear** - Fired when the timepicker is cleared.
     * - **dds-focus** - Emitted when the timepicker gains focus.
     * - **dds-blur** - Emitted when the timepicker loses focus.
     *
     * ### CSS Parts:
     * - **base** - The main timepicker container.
     * - **trigger** - The trigger button of the timepicker.
     * - **label** - The label of the timepicker.
     * - **description** - The description of the timepicker.
     * - **feedback** - The feedback of the timepicker.
     * - **tooltip** - The tooltip of the timepicker.
     * - **input** - The input of the timepicker.
     * - **clear-button** - The clear button of the timepicker.
     */
         'dap-ds-timepicker': DefineCustomElement<DapDSTimePicker, DapDSTimePickerProps, DapDSTimePickerEvents>
    /**
     * A table of contents (TOC) is a list of links that allows users to quickly navigate to sections within a document.
     *
     * ### Events:
     * - **dds-anchor-change** - Event that is triggered when the anchor changes.
     *
     * ### CSS Parts:
     * - **base** - The main container of the toc.
     */
         'dap-ds-toc': DefineCustomElement<DapDSTOC, DapDSTOCProps, DapDSTOCEvents>
    /**
     * A toggle button is a button that can be toggled on (active) or off (inactive).
     *
     * ### Slots:
     * - **default** - The content of the toggle button.
     *
     * ### CSS Parts:
     * - **base** - The main button container.
     * - **high-contrast** - The high contrast part of the button.
     */
         'dap-ds-toggle-button': DefineCustomElement<DapDSToggleButton, DapDSToggleButtonProps, {}>
    /**
     * A tooltip is a container for tooltip content.
     *
     * ### Slots:
     * - **default** - The content of the tooltip.
     * - **trigger** - The trigger element of the tooltip.
     *
     * ### CSS Parts:
     * - **base** - The main tooltip container.
     * - **trigger** - The trigger element of the tooltip.
     * - **popup** - The popup of the tooltip.
     * - **arrow** - The arrow of the tooltip.
     */
         'dap-ds-tooltip': DefineCustomElement<DapDSTooltip, DapDSTooltipProps, {}>
    /**
     * A tray is a container for slide in content.
     *
     * ### Events:
     * - **dds-before-open** - Fires before the tray opens.
     * - **dds-opened** - Fires after the tray opens.
     * - **dds-before-close** - Fires before the tray closes.
     * - **dds-closed** - Fires after the tray closed.
     * - **dds-close** - Fires when the tray is closes. You can prevent the tray from closing by calling `event.preventDefault()`.
     *
     * ### Slots:
     * - **default** - The content of the tray.
     * - **header** - The header of the tray.
     * - **footer** - The footer of the tray.
     *
     * ### CSS Parts:
     * - **base** - The main tray container.
     * - **panel** - The panel of the tray.
     * - **header** - The header of the tray.
     * - **footer** - The footer of the tray.
     * - **body** - The body of the tray.
     */
         'dap-ds-tray': DefineCustomElement<DapDSTray, DapDSTrayProps, DapDSTrayEvents>
    /**
     * Typography is used to display text in different styles.
     *
     * ### Slots:
     * - **default** - The content of the typography.
     *
     * ### CSS Parts:
     * - **base** - The main typography container.
     */
         'dap-ds-typography': DefineCustomElement<DapDSTypography, DapDSTypographyProps, {}>
    /**
     * A form label is a container for labels in a form.
     *
     * ### CSS Parts:
     * - **base** - The main form label container.
     * - **required** - The required indicator of the form label.
     * - **optional** - The optional indicator of the form label.
     */
         'dap-ds-form-label': DefineCustomElement<DapDSFormLabel, DapDSFormLabelProps, {}>
    /**
     * An input group is a container for inputs.
     *
     * ### Slots:
     * - **default** - The content of the input group items.
     * - **feedback-icon** - The custom icon of the feedback.
     *
     * ### CSS Parts:
     * - **base** - The main input group container.
     * - **label** - The label of the input group.
     * - **description** - The description of the input group.
     * - **tooltip** - The tooltip of the input group.
     * - **container** - The container of the input group items.
     */
         'dap-ds-input-group': DefineCustomElement<DapDSInputGroup, DapDSInputGroupProps, {}>
    /**
     * A radio group is a form element that allows the user to select one option from a set.
     *
     * ### Events:
     * - **dds-change** - Fired when the radio group is checked.
     * - **dds-blur** - Emitted when the radio group loses focus.
     * - **dds-focus** - Emitted when the radio group gains focus.
     *
     * ### Slots:
     * - **default** - The content of the radio group.
     * - **feedback-icon** - The custom icon of the feedback.
     *
     * ### CSS Parts:
     * - **base** - The main radio group container.
     * - **label** - The label of the radio group.
     * - **tooltip** - The tooltip of the radio group.
     * - **container** - The container of the radio group items.
     */
         'dap-ds-radio-group': DefineCustomElement<DapDSRadioGroup, DapDSRadioGroupProps, DapDSRadioGroupEvents>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-down-line': DefineCustomElement<ArrowsArrowDownLine, ArrowsArrowDownLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-down-s-fill': DefineCustomElement<ArrowsArrowDownSFill, ArrowsArrowDownSFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-down-s-line': DefineCustomElement<ArrowsArrowDownSLine, ArrowsArrowDownSLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-left-down-line': DefineCustomElement<ArrowsArrowLeftDownLine, ArrowsArrowLeftDownLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-left-l-line': DefineCustomElement<ArrowsArrowLeftLLine, ArrowsArrowLeftLLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-left-line': DefineCustomElement<ArrowsArrowLeftLine, ArrowsArrowLeftLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-left-s-fill': DefineCustomElement<ArrowsArrowLeftSFill, ArrowsArrowLeftSFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-left-s-line': DefineCustomElement<ArrowsArrowLeftSLine, ArrowsArrowLeftSLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-left-up-line': DefineCustomElement<ArrowsArrowLeftUpLine, ArrowsArrowLeftUpLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-right-down-line': DefineCustomElement<ArrowsArrowRightDownLine, ArrowsArrowRightDownLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-right-l-line': DefineCustomElement<ArrowsArrowRightLLine, ArrowsArrowRightLLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-right-line': DefineCustomElement<ArrowsArrowRightLine, ArrowsArrowRightLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-right-s-fill': DefineCustomElement<ArrowsArrowRightSFill, ArrowsArrowRightSFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-right-s-line': DefineCustomElement<ArrowsArrowRightSLine, ArrowsArrowRightSLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-right-up-line': DefineCustomElement<ArrowsArrowRightUpLine, ArrowsArrowRightUpLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-up-line': DefineCustomElement<ArrowsArrowUpLine, ArrowsArrowUpLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-up-s-fill': DefineCustomElement<ArrowsArrowUpSFill, ArrowsArrowUpSFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-arrow-up-s-line': DefineCustomElement<ArrowsArrowUpSLine, ArrowsArrowUpSLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-expand-up-down-fill': DefineCustomElement<ArrowsExpandUpDownFill, ArrowsExpandUpDownFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-home-6-line': DefineCustomElement<BuildingsHome6Line, BuildingsHome6LineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-calendar-line': DefineCustomElement<BusinessCalendarLine, BusinessCalendarLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-edit-line': DefineCustomElement<DesignEditLine, DesignEditLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-tools-line': DefineCustomElement<DesignToolsLine, DesignToolsLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-computer-line': DefineCustomElement<DeviceComputerLine, DeviceComputerLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-clipboard-line': DefineCustomElement<DocumentClipboardLine, DocumentClipboardLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-file-copy-line': DefineCustomElement<DocumentFileCopyLine, DocumentFileCopyLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-file-image-line': DefineCustomElement<DocumentFileImageLine, DocumentFileImageLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-file-music-line': DefineCustomElement<DocumentFileMusicLine, DocumentFileMusicLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-file-text-line': DefineCustomElement<DocumentFileTextLine, DocumentFileTextLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-file-video-line': DefineCustomElement<DocumentFileVideoLine, DocumentFileVideoLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-folder-line': DefineCustomElement<DocumentFolderLine, DocumentFolderLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-folder-open-line': DefineCustomElement<DocumentFolderOpenLine, DocumentFolderOpenLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-heart-fill': DefineCustomElement<HealthHeartFill, HealthHeartFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-heart-line': DefineCustomElement<HealthHeartLine, HealthHeartLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-cookie-line': DefineCustomElement<OthersCookieLine, OthersCookieLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-account-circle-fill': DefineCustomElement<UserAccountCircleFill, UserAccountCircleFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-account-circle-line': DefineCustomElement<UserAccountCircleLine, UserAccountCircleLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-user-fill': DefineCustomElement<UserUserFill, UserUserFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-user-line': DefineCustomElement<UserUserLine, UserUserLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-add-line': DefineCustomElement<SystemAddLine, SystemAddLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-alert-fill': DefineCustomElement<SystemAlertFill, SystemAlertFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-alert-line': DefineCustomElement<SystemAlertLine, SystemAlertLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-check-line': DefineCustomElement<SystemCheckLine, SystemCheckLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-check-line2': DefineCustomElement<SystemCheckLine2, SystemCheckLine2Props, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-checkbox-blank-circle-fill': DefineCustomElement<SystemCheckboxBlankCircleFill, SystemCheckboxBlankCircleFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-checkbox-blank-circle-fill-check': DefineCustomElement<SystemCheckboxBlankCircleFillCheck, SystemCheckboxBlankCircleFillCheckProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-checkbox-blank-circle-line': DefineCustomElement<SystemCheckboxBlankCircleLine, SystemCheckboxBlankCircleLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-checkbox-circle-fill': DefineCustomElement<SystemCheckboxCircleFill, SystemCheckboxCircleFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-checkbox-circle-line': DefineCustomElement<SystemCheckboxCircleLine, SystemCheckboxCircleLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-close-circle-fill': DefineCustomElement<SystemCloseCircleFill, SystemCloseCircleFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-close-circle-line': DefineCustomElement<SystemCloseCircleLine, SystemCloseCircleLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-close-fill': DefineCustomElement<SystemCloseFill, SystemCloseFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-close-line': DefineCustomElement<SystemCloseLine, SystemCloseLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-delete-bin-fill': DefineCustomElement<SystemDeleteBinFill, SystemDeleteBinFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-delete-bin-line': DefineCustomElement<SystemDeleteBinLine, SystemDeleteBinLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-download-line': DefineCustomElement<SystemDownloadLine, SystemDownloadLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-error-warning-fill': DefineCustomElement<SystemErrorWarningFill, SystemErrorWarningFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-error-warning-line': DefineCustomElement<SystemErrorWarningLine, SystemErrorWarningLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-external-link-line': DefineCustomElement<SystemExternalLinkLine, SystemExternalLinkLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-eye-line': DefineCustomElement<SystemEyeLine, SystemEyeLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-eye-off-line': DefineCustomElement<SystemEyeOffLine, SystemEyeOffLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-forbid-fill': DefineCustomElement<SystemForbidFill, SystemForbidFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-information-2-fill': DefineCustomElement<SystemInformation2Fill, SystemInformation2FillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-information-fill': DefineCustomElement<SystemInformationFill, SystemInformationFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-information-line': DefineCustomElement<SystemInformationLine, SystemInformationLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-lightbulb-fill': DefineCustomElement<SystemLightbulbFill, SystemLightbulbFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-loading-spinner': DefineCustomElement<SystemLoadingSpinner, SystemLoadingSpinnerProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-lock-fill': DefineCustomElement<SystemLockFill, SystemLockFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-lock-line': DefineCustomElement<SystemLockLine, SystemLockLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-menu-line': DefineCustomElement<SystemMenuLine, SystemMenuLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-menu-line-s': DefineCustomElement<SystemMenuLineS, SystemMenuLineSProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-more-2-line': DefineCustomElement<SystemMore2Line, SystemMore2LineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-more-line': DefineCustomElement<SystemMoreLine, SystemMoreLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-search-line': DefineCustomElement<SystemSearchLine, SystemSearchLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-share-line': DefineCustomElement<SystemShareLine, SystemShareLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-shield-check-fill': DefineCustomElement<SystemShieldCheckFill, SystemShieldCheckFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-shield-check-line': DefineCustomElement<SystemShieldCheckLine, SystemShieldCheckLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-star-fill': DefineCustomElement<SystemStarFill, SystemStarFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-subtract-line': DefineCustomElement<SystemSubtractLine, SystemSubtractLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-subtract-line2': DefineCustomElement<SystemSubtractLine2, SystemSubtractLine2Props, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-time-fill': DefineCustomElement<SystemTimeFill, SystemTimeFillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-time-line': DefineCustomElement<SystemTimeLine, SystemTimeLineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-upload-2-fill': DefineCustomElement<SystemUpload2Fill, SystemUpload2FillProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-upload-2-line': DefineCustomElement<SystemUpload2Line, SystemUpload2LineProps, {}>
    /**
     * An icon
     *
     * ### CSS Parts:
     * - **base** - The main icon container.
     */
         'dap-ds-icon-upload-line': DefineCustomElement<SystemUploadLine, SystemUploadLineProps, {}>
  }
}

// Also provide JSX support
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dap-ds-accordion': DapDSAccordionProps & DapDSAccordionEvents & DapDSAccordionSlots
      'dap-ds-accordion-group': DapDSAccordionGroupProps & DapDSAccordionGroupSlots
      'dap-ds-avatar-group': DapDSAvatarGroupProps & DapDSAvatarGroupEvents & DapDSAvatarGroupSlots
      'dap-ds-avatar': DapDSAvatarProps & DapDSAvatarEvents & DapDSAvatarSlots
      'dap-ds-badge': DapDSBadgeProps & DapDSBadgeSlots
      'dap-ds-anchor-heading': DapDSAnchorHeadingProps
      'dap-ds-banner': DapDSBannerProps & DapDSBannerEvents & DapDSBannerSlots
      'dap-ds-breadcrumb': DapDSBreadcrumbProps & DapDSBreadcrumbSlots
      'dap-ds-breadcrumb-item': DapDSBreadcrumbItemProps & DapDSBreadcrumbItemSlots
      'dap-ds-button': DapDSButtonProps & DapDSButtonEvents & DapDSButtonSlots
      'dap-ds-calendar-cell': DapDSCalendarCellProps & DapDSCalendarCellSlots
      'dap-ds-calendar': DapDSCalendarProps & DapDSCalendarEvents & DapDSCalendarSlots
      'dap-ds-callout': DapDSCalloutProps & DapDSCalloutEvents & DapDSCalloutSlots
      'dap-ds-card-actions': DapDSCardActionsProps & DapDSCardActionsSlots
      'dap-ds-card-content': DapDSCardContentProps & DapDSCardContentSlots
      'dap-ds-card-image': DapDSCardImageProps & DapDSCardImageSlots
      'dap-ds-card-subtitle': DapDSCardSubtitleProps & DapDSCardSubtitleSlots
      'dap-ds-card-title': DapDSCardTitleProps & DapDSCardTitleSlots
      'dap-ds-card': DapDSCardProps & DapDSCardSlots
      'dap-ds-checkbox': DapDSCheckboxProps & DapDSCheckboxEvents
      'dap-ds-combobox': DapDSComboboxProps & DapDSComboboxEvents & DapDSComboboxSlots
      'dap-ds-command-group': DapDSCommandGroupProps & DapDSCommandGroupSlots
      'dap-ds-command-item': DapDSCommandItemProps & DapDSCommandItemEvents & DapDSCommandItemSlots
      'dap-ds-command': DapDSCommandProps & DapDSCommandEvents & DapDSCommandSlots
      'dap-ds-content-switcher-item': DapDSContentSwitcherItemProps & DapDSContentSwitcherItemSlots
      'dap-ds-content-switcher': DapDSContentSwitcherProps & DapDSContentSwitcherEvents & DapDSContentSwitcherSlots
      'dap-ds-copybox-input': DapDSCopyBoxInputProps & DapDSCopyBoxInputEvents
      'dap-ds-dap-badge': DapDSDAPBadgeProps & DapDSDAPBadgeSlots
      'dap-ds-datatable': <T = any>(props: DapDSDataTableProps<T> & DapDSDataTableEvents<T> & DapDSDataTableSlots) => JSX.Element
      'dap-ds-datepicker': DapDSDatePickerProps & DapDSDatePickerEvents
      'dap-ds-divider': DapDSDividerProps
      'dap-ds-feedback': DapDSFeedbackProps & DapDSFeedbackSlots
      'dap-ds-file-input-list-item': DapDSFileInputListItemProps & DapDSFileInputListItemEvents & DapDSFileInputListItemSlots
      'dap-ds-file-input-list': DapDSFileInputListProps & DapDSFileInputListSlots
      'dap-ds-file-input': DapDSFileInputProps & DapDSFileInputEvents & DapDSFileInputSlots
      'dap-ds-icon': DapDSIconProps & DapDSIconSlots
      'dap-ds-icon-button': DapDSIconButtonProps & DapDSIconButtonSlots
      'dap-ds-input': DapDSInputProps & DapDSInputEvents & DapDSInputSlots
      'dap-ds-label': DapDSLabelProps
      'dap-ds-link': DapDSLinkProps & DapDSLinkEvents & DapDSLinkSlots
      'dap-ds-list-item': DapDSListItemProps & DapDSListItemSlots
      'dap-ds-modal': DapDSModalProps & DapDSModalEvents & DapDSModalSlots
      'dap-ds-navigation-menu-item': DapDSNavigationMenuItemProps & DapDSNavigationMenuItemEvents & DapDSNavigationMenuItemSlots
      'dap-ds-navigation-menu': DapDSNavigationMenuProps & DapDSNavigationMenuEvents & DapDSNavigationMenuSlots
      'dap-ds-notification-badge': DapDSNotificationBadgeProps & DapDSNotificationBadgeSlots
      'dap-ds-number-input': DapDSNumberInputProps & DapDSNumberInputEvents & DapDSNumberInputSlots
      'dap-ds-official-website-banner': DapDSOfficialWebsiteBannerProps & DapDSOfficialWebsiteBannerEvents & DapDSOfficialWebsiteBannerSlots
      'dap-ds-option-item': DapDSOptionItemProps & DapDSOptionItemSlots
      'dap-ds-option-list': DapDSOptionListProps & DapDSOptionListEvents & DapDSOptionListSlots
      'dap-ds-overlay': DapDSOverlayProps
      'dap-ds-pager': DapDSPagerProps & DapDSPagerEvents
      'dap-ds-password-input': DapDSPasswordInputProps & DapDSPasswordInputEvents
      'dap-ds-popup': DapDSPopupProps & DapDSPopupEvents & DapDSPopupSlots
      'dap-ds-radio-button': DapDSRadioButtonProps & DapDSRadioButtonEvents
      'dap-ds-rating': DapDSRatingProps & DapDSRatingEvents
      'dap-ds-scroll-area': DapDSScrollAreaProps & DapDSScrollAreaSlots
      'dap-ds-search': DapDSSearchProps & DapDSSearchEvents & DapDSSearchSlots
      'dap-ds-select': DapDSSelectProps & DapDSSelectEvents & DapDSSelectSlots
      'dap-ds-sidenav-group': DapDSSideNavGroupProps & DapDSSideNavGroupSlots
      'dap-ds-sidenav-item': DapDSSideNavItemProps & DapDSSideNavItemSlots
      'dap-ds-sidenav': DapDSSideNavProps & DapDSSideNavEvents & DapDSSideNavSlots
      'dap-ds-skeleton': DapDSSkeletonProps
      'dap-ds-skip-link': DapDSSkipLinkProps & DapDSSkipLinkSlots
      'dap-ds-snackbar-message': DapDSSnackbarMessageProps & DapDSSnackbarMessageEvents & DapDSSnackbarMessageSlots
      'dap-ds-snackbar': DapDSSnackbarProps
      'dap-ds-spinner': DapDSSpinnerProps & DapDSSpinnerSlots
      'dap-ds-stack': DapDSStackProps & DapDSStackSlots
      'dap-ds-switch': DapDSSwitchProps & DapDSSwitchEvents
      'dap-ds-tab-group': DapDSTabGroupProps & DapDSTabGroupEvents & DapDSTabGroupSlots
      'dap-ds-tab': DapDSTabProps & DapDSTabSlots
      'dap-ds-table-cell': DapDSTableCellProps & DapDSTableCellSlots
      'dap-ds-table-header': DapDSTableHeaderProps & DapDSTableHeaderSlots
      'dap-ds-table-row': DapDSTableRowProps & DapDSTableRowSlots
      'dap-ds-table': DapDSTableProps & DapDSTableSlots
      'dap-ds-textarea': DapDSTextareaProps & DapDSTextareaEvents & DapDSTextareaSlots
      'dap-ds-timeline-item': DapDSTimelineItemProps & DapDSTimelineItemSlots
      'dap-ds-timeline': DapDSTimelineProps & DapDSTimelineSlots
      'dap-ds-time-grid': DapDSTimeGridProps & DapDSTimeGridEvents
      'dap-ds-timepicker': DapDSTimePickerProps & DapDSTimePickerEvents
      'dap-ds-toc': DapDSTOCProps & DapDSTOCEvents
      'dap-ds-toggle-button': DapDSToggleButtonProps & DapDSToggleButtonSlots
      'dap-ds-tooltip': DapDSTooltipProps & DapDSTooltipSlots
      'dap-ds-tray': DapDSTrayProps & DapDSTrayEvents & DapDSTraySlots
      'dap-ds-typography': DapDSTypographyProps & DapDSTypographySlots
      'dap-ds-form-label': DapDSFormLabelProps
      'dap-ds-input-group': DapDSInputGroupProps & DapDSInputGroupSlots
      'dap-ds-radio-group': DapDSRadioGroupProps & DapDSRadioGroupEvents & DapDSRadioGroupSlots
      'dap-ds-icon-arrow-down-line': ArrowsArrowDownLineProps
      'dap-ds-icon-arrow-down-s-fill': ArrowsArrowDownSFillProps
      'dap-ds-icon-arrow-down-s-line': ArrowsArrowDownSLineProps
      'dap-ds-icon-arrow-left-down-line': ArrowsArrowLeftDownLineProps
      'dap-ds-icon-arrow-left-l-line': ArrowsArrowLeftLLineProps
      'dap-ds-icon-arrow-left-line': ArrowsArrowLeftLineProps
      'dap-ds-icon-arrow-left-s-fill': ArrowsArrowLeftSFillProps
      'dap-ds-icon-arrow-left-s-line': ArrowsArrowLeftSLineProps
      'dap-ds-icon-arrow-left-up-line': ArrowsArrowLeftUpLineProps
      'dap-ds-icon-arrow-right-down-line': ArrowsArrowRightDownLineProps
      'dap-ds-icon-arrow-right-l-line': ArrowsArrowRightLLineProps
      'dap-ds-icon-arrow-right-line': ArrowsArrowRightLineProps
      'dap-ds-icon-arrow-right-s-fill': ArrowsArrowRightSFillProps
      'dap-ds-icon-arrow-right-s-line': ArrowsArrowRightSLineProps
      'dap-ds-icon-arrow-right-up-line': ArrowsArrowRightUpLineProps
      'dap-ds-icon-arrow-up-line': ArrowsArrowUpLineProps
      'dap-ds-icon-arrow-up-s-fill': ArrowsArrowUpSFillProps
      'dap-ds-icon-arrow-up-s-line': ArrowsArrowUpSLineProps
      'dap-ds-icon-expand-up-down-fill': ArrowsExpandUpDownFillProps
      'dap-ds-icon-home-6-line': BuildingsHome6LineProps
      'dap-ds-icon-calendar-line': BusinessCalendarLineProps
      'dap-ds-icon-edit-line': DesignEditLineProps
      'dap-ds-icon-tools-line': DesignToolsLineProps
      'dap-ds-icon-computer-line': DeviceComputerLineProps
      'dap-ds-icon-clipboard-line': DocumentClipboardLineProps
      'dap-ds-icon-file-copy-line': DocumentFileCopyLineProps
      'dap-ds-icon-file-image-line': DocumentFileImageLineProps
      'dap-ds-icon-file-music-line': DocumentFileMusicLineProps
      'dap-ds-icon-file-text-line': DocumentFileTextLineProps
      'dap-ds-icon-file-video-line': DocumentFileVideoLineProps
      'dap-ds-icon-folder-line': DocumentFolderLineProps
      'dap-ds-icon-folder-open-line': DocumentFolderOpenLineProps
      'dap-ds-icon-heart-fill': HealthHeartFillProps
      'dap-ds-icon-heart-line': HealthHeartLineProps
      'dap-ds-icon-cookie-line': OthersCookieLineProps
      'dap-ds-icon-account-circle-fill': UserAccountCircleFillProps
      'dap-ds-icon-account-circle-line': UserAccountCircleLineProps
      'dap-ds-icon-user-fill': UserUserFillProps
      'dap-ds-icon-user-line': UserUserLineProps
      'dap-ds-icon-add-line': SystemAddLineProps
      'dap-ds-icon-alert-fill': SystemAlertFillProps
      'dap-ds-icon-alert-line': SystemAlertLineProps
      'dap-ds-icon-check-line': SystemCheckLineProps
      'dap-ds-icon-check-line2': SystemCheckLine2Props
      'dap-ds-icon-checkbox-blank-circle-fill': SystemCheckboxBlankCircleFillProps
      'dap-ds-icon-checkbox-blank-circle-fill-check': SystemCheckboxBlankCircleFillCheckProps
      'dap-ds-icon-checkbox-blank-circle-line': SystemCheckboxBlankCircleLineProps
      'dap-ds-icon-checkbox-circle-fill': SystemCheckboxCircleFillProps
      'dap-ds-icon-checkbox-circle-line': SystemCheckboxCircleLineProps
      'dap-ds-icon-close-circle-fill': SystemCloseCircleFillProps
      'dap-ds-icon-close-circle-line': SystemCloseCircleLineProps
      'dap-ds-icon-close-fill': SystemCloseFillProps
      'dap-ds-icon-close-line': SystemCloseLineProps
      'dap-ds-icon-delete-bin-fill': SystemDeleteBinFillProps
      'dap-ds-icon-delete-bin-line': SystemDeleteBinLineProps
      'dap-ds-icon-download-line': SystemDownloadLineProps
      'dap-ds-icon-error-warning-fill': SystemErrorWarningFillProps
      'dap-ds-icon-error-warning-line': SystemErrorWarningLineProps
      'dap-ds-icon-external-link-line': SystemExternalLinkLineProps
      'dap-ds-icon-eye-line': SystemEyeLineProps
      'dap-ds-icon-eye-off-line': SystemEyeOffLineProps
      'dap-ds-icon-forbid-fill': SystemForbidFillProps
      'dap-ds-icon-information-2-fill': SystemInformation2FillProps
      'dap-ds-icon-information-fill': SystemInformationFillProps
      'dap-ds-icon-information-line': SystemInformationLineProps
      'dap-ds-icon-lightbulb-fill': SystemLightbulbFillProps
      'dap-ds-icon-loading-spinner': SystemLoadingSpinnerProps
      'dap-ds-icon-lock-fill': SystemLockFillProps
      'dap-ds-icon-lock-line': SystemLockLineProps
      'dap-ds-icon-menu-line': SystemMenuLineProps
      'dap-ds-icon-menu-line-s': SystemMenuLineSProps
      'dap-ds-icon-more-2-line': SystemMore2LineProps
      'dap-ds-icon-more-line': SystemMoreLineProps
      'dap-ds-icon-search-line': SystemSearchLineProps
      'dap-ds-icon-share-line': SystemShareLineProps
      'dap-ds-icon-shield-check-fill': SystemShieldCheckFillProps
      'dap-ds-icon-shield-check-line': SystemShieldCheckLineProps
      'dap-ds-icon-star-fill': SystemStarFillProps
      'dap-ds-icon-subtract-line': SystemSubtractLineProps
      'dap-ds-icon-subtract-line2': SystemSubtractLine2Props
      'dap-ds-icon-time-fill': SystemTimeFillProps
      'dap-ds-icon-time-line': SystemTimeLineProps
      'dap-ds-icon-upload-2-fill': SystemUpload2FillProps
      'dap-ds-icon-upload-2-line': SystemUpload2LineProps
      'dap-ds-icon-upload-line': SystemUploadLineProps
    }
  }
}