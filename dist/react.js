import { createComponent as e } from "@lit/react";
import * as a from "react";
import { DapDSAccordion as t, DapDSAccordionGroup as s, DapDSAvatarGroup as n, DapDSAvatar as r, DapDSBadge as c, DapDSAnchorHeading as o, DapDSBanner as l, DapDSBreadcrumb as d, DapDSBreadcrumbItem as p, DapDSButton as i, DapDSCalendarCell as m, DapDSCalendar as D, DapDSCallout as N, DapDSCardActions as g, DapDSCardContent as S, DapDSCardImage as C, DapDSCardSubtitle as y, DapDSCardTitle as $, DapDSCard as u, DapDSCheckbox as L, DapDSCombobox as v, DapDSCommandGroup as R, DapDSCommandItem as w, DapDSCommand as h, DapDSContentSwitcherItem as W, DapDSContentSwitcher as b, DapDSCopyBoxInput as A, DapDSDAPBadge as k, DapDSDataTable as F, DapDSDatePicker as f, DapDSDivider as I, DapDSFeedback as B, DapDSFileInputListItem as T, DapDSFileInputList as x, DapDSFileInput as U, DapDSIcon as O, DapDSIconButton as M, DapDSInput as E, DapDSLabel as G, DapDSLink as H, DapDSListItem as P, DapDSModal as K, DapDSNavigationMenuItem as V, DapDSNavigationMenu as j, DapDSNotificationBadge as q, DapDSNumberInput as z, DapDSOfficialWebsiteBanner as J, DapDSOptionItem as Q, DapDSOptionList as X, DapDSOverlay as Y, DapDSPager as Z, DapDSPasswordInput as _, DapDSPopup as ee, DapDSRadioButton as ae, DapDSRating as te, DapDSScrollArea as se, DapDSSearch as ne, DapDSSelect as re, DapDSSideNavGroup as ce, DapDSSideNavItem as oe, DapDSSideNav as le, DapDSSkeleton as de, DapDSSkipLink as pe, DapDSSnackbarMessage as ie, DapDSSnackbar as me, DapDSSpinner as De, DapDSStack as Ne, DapDSSwitch as ge, DapDSTabGroup as Se, DapDSTab as Ce, DapDSTableCell as ye, DapDSTableHeader as $e, DapDSTableRow as ue, DapDSTable as Le, DapDSTextarea as ve, DapDSTimelineItem as Re, DapDSTimeline as we, DapDSTimeGrid as he, DapDSTimePicker as We, DapDSTOC as be, DapDSToggleButton as Ae, DapDSTooltip as ke, DapDSTray as Fe, DapDSTypography as fe, DapDSFormLabel as Ie, DapDSInputGroup as Be, DapDSRadioGroup as Te, ArrowsArrowDownLine as xe, ArrowsArrowDownSFill as Ue, ArrowsArrowDownSLine as Oe, ArrowsArrowLeftDownLine as Me, ArrowsArrowLeftLLine as Ee, ArrowsArrowLeftLine as Ge, ArrowsArrowLeftSFill as He, ArrowsArrowLeftSLine as Pe, ArrowsArrowLeftUpLine as Ke, ArrowsArrowRightDownLine as Ve, ArrowsArrowRightLLine as je, ArrowsArrowRightLine as qe, ArrowsArrowRightSFill as ze, ArrowsArrowRightSLine as Je, ArrowsArrowRightUpLine as Qe, ArrowsArrowUpLine as Xe, ArrowsArrowUpSFill as Ye, ArrowsArrowUpSLine as Ze, ArrowsExpandUpDownFill as _e, BuildingsHome6Line as ea, BusinessCalendarLine as aa, DesignEditLine as ta, DesignToolsLine as sa, DeviceComputerLine as na, DocumentClipboardLine as ra, DocumentFileCopyLine as ca, DocumentFileImageLine as oa, DocumentFileMusicLine as la, DocumentFileTextLine as da, DocumentFileVideoLine as pa, DocumentFolderLine as ia, DocumentFolderOpenLine as ma, HealthHeartFill as Da, HealthHeartLine as Na, OthersCookieLine as ga, UserAccountCircleFill as Sa, UserAccountCircleLine as Ca, UserUserFill as ya, UserUserLine as $a, SystemAddLine as ua, SystemAlertFill as La, SystemAlertLine as va, SystemCheckLine as Ra, SystemCheckLine2 as wa, SystemCheckboxBlankCircleFill as ha, SystemCheckboxBlankCircleFillCheck as Wa, SystemCheckboxBlankCircleLine as ba, SystemCheckboxCircleFill as Aa, SystemCheckboxCircleLine as ka, SystemCloseCircleFill as Fa, SystemCloseCircleLine as fa, SystemCloseFill as Ia, SystemCloseLine as Ba, SystemDeleteBinFill as Ta, SystemDeleteBinLine as xa, SystemDownloadLine as Ua, SystemErrorWarningFill as Oa, SystemErrorWarningLine as Ma, SystemExternalLinkLine as Ea, SystemEyeLine as Ga, SystemEyeOffLine as Ha, SystemForbidFill as Pa, SystemInformation2Fill as Ka, SystemInformationFill as Va, SystemInformationLine as ja, SystemLightbulbFill as qa, SystemLoadingSpinner as za, SystemLockFill as Ja, SystemLockLine as Qa, SystemMenuLine as Xa, SystemMenuLineS as Ya, SystemMore2Line as Za, SystemMoreLine as _a, SystemSearchLine as et, SystemShareLine as at, SystemShieldCheckFill as tt, SystemShieldCheckLine as st, SystemStarFill as nt, SystemSubtractLine as rt, SystemSubtractLine2 as ct, SystemTimeFill as ot, SystemTimeLine as lt, SystemUpload2Fill as dt, SystemUpload2Line as pt, SystemUploadLine as it } from "./dds.js";
const mt = "dap-ds-accordion", hr = e({
  tagName: mt,
  elementClass: t,
  react: a,
  events: {
    onDdsOpened: "dds-opened",
    onDdsClosed: "dds-closed"
  },
  displayName: "DapDSAccordion"
}), Dt = "dap-ds-accordion-group", Wr = e({
  tagName: Dt,
  elementClass: s,
  react: a,
  events: {},
  displayName: "DapDSAccordionGroup"
}), Nt = "dap-ds-avatar-group", br = e({
  tagName: Nt,
  elementClass: n,
  react: a,
  events: {
    onDdsOverflowClick: "dds-overflow-click"
  },
  displayName: "DapDSAvatarGroup"
}), gt = "dap-ds-avatar", Ar = e({
  tagName: gt,
  elementClass: r,
  react: a,
  events: {
    onDdsClick: "dds-click",
    onDdsLoad: "dds-load",
    onDdsError: "dds-error"
  },
  displayName: "DapDSAvatar"
}), St = "dap-ds-badge", kr = e({
  tagName: St,
  elementClass: c,
  react: a,
  events: {},
  displayName: "DapDSBadge"
}), Ct = "dap-ds-anchor-heading", Fr = e({
  tagName: Ct,
  elementClass: o,
  react: a,
  events: {},
  displayName: "DapDSAnchorHeading"
}), yt = "dap-ds-banner", fr = e({
  tagName: yt,
  elementClass: l,
  react: a,
  events: {
    onDdsClose: "dds-close"
  },
  displayName: "DapDSBanner"
}), $t = "dap-ds-breadcrumb", Ir = e({
  tagName: $t,
  elementClass: d,
  react: a,
  events: {},
  displayName: "DapDSBreadcrumb"
}), ut = "dap-ds-breadcrumb-item", Br = e({
  tagName: ut,
  elementClass: p,
  react: a,
  events: {},
  displayName: "DapDSBreadcrumbItem"
}), Lt = "dap-ds-button", Tr = e({
  tagName: Lt,
  elementClass: i,
  react: a,
  events: {
    onDdsLoadingTimeout: "dds-loading-timeout"
  },
  displayName: "DapDSButton"
}), vt = "dap-ds-calendar-cell", xr = e({
  tagName: vt,
  elementClass: m,
  react: a,
  events: {},
  displayName: "DapDSCalendarCell"
}), Rt = "dap-ds-calendar", Ur = e({
  tagName: Rt,
  elementClass: D,
  react: a,
  events: {
    onDdsChange: "dds-change"
  },
  displayName: "DapDSCalendar"
}), wt = "dap-ds-callout", Or = e({
  tagName: wt,
  elementClass: N,
  react: a,
  events: {
    onDdsClose: "dds-close"
  },
  displayName: "DapDSCallout"
}), ht = "dap-ds-card-actions", Mr = e({
  tagName: ht,
  elementClass: g,
  react: a,
  events: {},
  displayName: "DapDSCardActions"
}), Wt = "dap-ds-card-content", Er = e({
  tagName: Wt,
  elementClass: S,
  react: a,
  events: {},
  displayName: "DapDSCardContent"
}), bt = "dap-ds-card-image", Gr = e({
  tagName: bt,
  elementClass: C,
  react: a,
  events: {},
  displayName: "DapDSCardImage"
}), At = "dap-ds-card-subtitle", Hr = e({
  tagName: At,
  elementClass: y,
  react: a,
  events: {},
  displayName: "DapDSCardSubtitle"
}), kt = "dap-ds-card-title", Pr = e({
  tagName: kt,
  elementClass: $,
  react: a,
  events: {},
  displayName: "DapDSCardTitle"
}), Ft = "dap-ds-card", Kr = e({
  tagName: Ft,
  elementClass: u,
  react: a,
  events: {},
  displayName: "DapDSCard"
}), ft = "dap-ds-checkbox", Vr = e({
  tagName: ft,
  elementClass: L,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsInput: "dds-input"
  },
  displayName: "DapDSCheckbox"
}), It = "dap-ds-combobox", jr = e({
  tagName: It,
  elementClass: v,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsClear: "dds-clear",
    onDdsSearch: "dds-search",
    onDdsInput: "dds-input"
  },
  displayName: "DapDSCombobox"
}), Bt = "dap-ds-command-group", qr = e({
  tagName: Bt,
  elementClass: R,
  react: a,
  events: {},
  displayName: "DapDSCommandGroup"
}), Tt = "dap-ds-command-item", zr = e({
  tagName: Tt,
  elementClass: w,
  react: a,
  events: {
    onDdsCommandItemClick: "dds-command-item-click"
  },
  displayName: "DapDSCommandItem"
}), xt = "dap-ds-command", Jr = e({
  tagName: xt,
  elementClass: h,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsOpened: "dds-opened",
    onDdsClosed: "dds-closed",
    onDdsClose: "dds-close"
  },
  displayName: "DapDSCommand"
}), Ut = "dap-ds-content-switcher-item", Qr = e({
  tagName: Ut,
  elementClass: W,
  react: a,
  events: {},
  displayName: "DapDSContentSwitcherItem"
}), Ot = "dap-ds-content-switcher", Xr = e({
  tagName: Ot,
  elementClass: b,
  react: a,
  events: {
    onDdsChange: "dds-change"
  },
  displayName: "DapDSContentSwitcher"
}), Mt = "dap-ds-copybox-input", Yr = e({
  tagName: Mt,
  elementClass: A,
  react: a,
  events: {
    onDdsCopy: "dds-copy",
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsKeydown: "dds-keydown",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsNotAllowed: "dds-not-allowed"
  },
  displayName: "DapDSCopyBoxInput"
}), Et = "dap-ds-dap-badge", Zr = e({
  tagName: Et,
  elementClass: k,
  react: a,
  events: {},
  displayName: "DapDSDAPBadge"
}), Gt = "dap-ds-datatable", _r = e({
  tagName: Gt,
  elementClass: F,
  react: a,
  events: {
    onDdsSortingChange: "dds-sorting-change",
    onDdsSelectionChange: "dds-selection-change",
    onDdsPaginationChange: "dds-pagination-change",
    onDdsRowClick: "dds-row-click"
  },
  displayName: "DapDSDataTable"
}), Ht = "dap-ds-datepicker", ec = e({
  tagName: Ht,
  elementClass: f,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsValidDate: "dds-valid-date",
    onDdsInvalidDate: "dds-invalid-date",
    onDdsClear: "dds-clear",
    onDdsFocus: "dds-focus",
    onDdsBlur: "dds-blur"
  },
  displayName: "DapDSDatePicker"
}), Pt = "dap-ds-divider", ac = e({
  tagName: Pt,
  elementClass: I,
  react: a,
  events: {},
  displayName: "DapDSDivider"
}), Kt = "dap-ds-feedback", tc = e({
  tagName: Kt,
  elementClass: B,
  react: a,
  events: {},
  displayName: "DapDSFeedback"
}), Vt = "dap-ds-file-input-list-item", sc = e({
  tagName: Vt,
  elementClass: T,
  react: a,
  events: {
    onDdsFileRemove: "dds-file-remove"
  },
  displayName: "DapDSFileInputListItem"
}), jt = "dap-ds-file-input-list", nc = e({
  tagName: jt,
  elementClass: x,
  react: a,
  events: {},
  displayName: "DapDSFileInputList"
}), qt = "dap-ds-file-input", rc = e({
  tagName: qt,
  elementClass: U,
  react: a,
  events: {
    onDdsUploadStart: "dds-upload-start",
    onDdsUploadProgress: "dds-upload-progress",
    onDdsUploadComplete: "dds-upload-complete",
    onDdsUploadError: "dds-upload-error",
    onDdsAllUploadsComplete: "dds-all-uploads-complete",
    onDdsFileRemoved: "dds-file-removed",
    onDdsFileDeleteError: "dds-file-delete-error",
    onDdsFileChange: "dds-file-change"
  },
  displayName: "DapDSFileInput"
}), zt = "dap-ds-icon", cc = e({
  tagName: zt,
  elementClass: O,
  react: a,
  events: {},
  displayName: "DapDSIcon"
}), Jt = "dap-ds-icon-button", oc = e({
  tagName: Jt,
  elementClass: M,
  react: a,
  events: {},
  displayName: "DapDSIconButton"
}), Qt = "dap-ds-input", lc = e({
  tagName: Qt,
  elementClass: E,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsKeydown: "dds-keydown",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus"
  },
  displayName: "DapDSInput"
}), Xt = "dap-ds-label", dc = e({
  tagName: Xt,
  elementClass: G,
  react: a,
  events: {},
  displayName: "DapDSLabel"
}), Yt = "dap-ds-link", pc = e({
  tagName: Yt,
  elementClass: H,
  react: a,
  events: {
    onDdsClick: "dds-click"
  },
  displayName: "DapDSLink"
}), Zt = "dap-ds-list-item", ic = e({
  tagName: Zt,
  elementClass: P,
  react: a,
  events: {},
  displayName: "DapDSListItem"
}), _t = "dap-ds-modal", mc = e({
  tagName: _t,
  elementClass: K,
  react: a,
  events: {
    onDdsBeforeOpen: "dds-before-open",
    onDdsOpened: "dds-opened",
    onDdsBeforeClose: "dds-before-close",
    onDdsClosed: "dds-closed",
    onDdsClose: "dds-close",
    onDdsOk: "dds-ok",
    onDdsCancel: "dds-cancel"
  },
  displayName: "DapDSModal"
}), es = "dap-ds-navigation-menu-item", Dc = e({
  tagName: es,
  elementClass: V,
  react: a,
  events: {
    onDdsNavigationItemClick: "dds-navigation-item-click",
    onDdsNavigationDropdownOpen: "dds-navigation-dropdown-open",
    onDdsOpened: "dds-opened",
    onDdsClosed: "dds-closed",
    onDdsClose: "dds-close"
  },
  displayName: "DapDSNavigationMenuItem"
}), as = "dap-ds-navigation-menu", Nc = e({
  tagName: as,
  elementClass: j,
  react: a,
  events: {
    onDdsNavigationItemClick: "dds-navigation-item-click"
  },
  displayName: "DapDSNavigationMenu"
}), ts = "dap-ds-notification-badge", gc = e({
  tagName: ts,
  elementClass: q,
  react: a,
  events: {},
  displayName: "DapDSNotificationBadge"
}), ss = "dap-ds-number-input", Sc = e({
  tagName: ss,
  elementClass: z,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsKeydown: "dds-keydown",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus"
  },
  displayName: "DapDSNumberInput"
}), ns = "dap-ds-official-website-banner", Cc = e({
  tagName: ns,
  elementClass: J,
  react: a,
  events: {
    onDdsOpened: "dds-opened",
    onDdsClosed: "dds-closed"
  },
  displayName: "DapDSOfficialWebsiteBanner"
}), rs = "dap-ds-option-item", yc = e({
  tagName: rs,
  elementClass: Q,
  react: a,
  events: {},
  displayName: "DapDSOptionItem"
}), cs = "dap-ds-option-list", $c = e({
  tagName: cs,
  elementClass: X,
  react: a,
  events: {
    onDdsCancel: "dds-cancel",
    onDdsOptionChange: "dds-option-change",
    onDdsKeydown: "dds-keydown",
    onDdsListChanged: "dds-list-changed"
  },
  displayName: "DapDSOptionList"
}), os = "dap-ds-overlay", uc = e({
  tagName: os,
  elementClass: Y,
  react: a,
  events: {},
  displayName: "DapDSOverlay"
}), ls = "dap-ds-pager", Lc = e({
  tagName: ls,
  elementClass: Z,
  react: a,
  events: {
    onDdsPaginationChange: "dds-pagination-change"
  },
  displayName: "DapDSPager"
}), ds = "dap-ds-password-input", vc = e({
  tagName: ds,
  elementClass: _,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsKeydown: "dds-keydown",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus"
  },
  displayName: "DapDSPasswordInput"
}), ps = "dap-ds-popup", Rc = e({
  tagName: ps,
  elementClass: ee,
  react: a,
  events: {
    onDdsOpened: "dds-opened",
    onDdsClosed: "dds-closed",
    onDdsClose: "dds-close"
  },
  displayName: "DapDSPopup"
}), is = "dap-ds-radio-button", wc = e({
  tagName: is,
  elementClass: ae,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsInput: "dds-input"
  },
  displayName: "DapDSRadioButton"
}), ms = "dap-ds-rating", hc = e({
  tagName: ms,
  elementClass: te,
  react: a,
  events: {
    onDdsChange: "dds-change"
  },
  displayName: "DapDSRating"
}), Ds = "dap-ds-scroll-area", Wc = e({
  tagName: Ds,
  elementClass: se,
  react: a,
  events: {},
  displayName: "DapDSScrollArea"
}), Ns = "dap-ds-search", bc = e({
  tagName: Ns,
  elementClass: ne,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsClear: "dds-clear",
    onDdsSearch: "dds-search",
    onDdsInput: "dds-input"
  },
  displayName: "DapDSSearch"
}), gs = "dap-ds-select", Ac = e({
  tagName: gs,
  elementClass: re,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsOpened: "dds-opened",
    onDdsClosed: "dds-closed"
  },
  displayName: "DapDSSelect"
}), Ss = "dap-ds-sidenav-group", kc = e({
  tagName: Ss,
  elementClass: ce,
  react: a,
  events: {},
  displayName: "DapDSSideNavGroup"
}), Cs = "dap-ds-sidenav-item", Fc = e({
  tagName: Cs,
  elementClass: oe,
  react: a,
  events: {},
  displayName: "DapDSSideNavItem"
}), ys = "dap-ds-sidenav", fc = e({
  tagName: ys,
  elementClass: le,
  react: a,
  events: {
    onDdsItemClick: "dds-item-click"
  },
  displayName: "DapDSSideNav"
}), $s = "dap-ds-skeleton", Ic = e({
  tagName: $s,
  elementClass: de,
  react: a,
  events: {},
  displayName: "DapDSSkeleton"
}), us = "dap-ds-skip-link", Bc = e({
  tagName: us,
  elementClass: pe,
  react: a,
  events: {},
  displayName: "DapDSSkipLink"
}), Ls = "dap-ds-snackbar-message", Tc = e({
  tagName: Ls,
  elementClass: ie,
  react: a,
  events: {
    onDdsClose: "dds-close"
  },
  displayName: "DapDSSnackbarMessage"
}), vs = "dap-ds-snackbar", xc = e({
  tagName: vs,
  elementClass: me,
  react: a,
  events: {},
  displayName: "DapDSSnackbar"
}), Rs = "dap-ds-spinner", Uc = e({
  tagName: Rs,
  elementClass: De,
  react: a,
  events: {},
  displayName: "DapDSSpinner"
}), ws = "dap-ds-stack", Oc = e({
  tagName: ws,
  elementClass: Ne,
  react: a,
  events: {},
  displayName: "DapDSStack"
}), hs = "dap-ds-switch", Mc = e({
  tagName: hs,
  elementClass: ge,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsInput: "dds-input"
  },
  displayName: "DapDSSwitch"
}), Ws = "dap-ds-tab-group", Ec = e({
  tagName: Ws,
  elementClass: Se,
  react: a,
  events: {
    onDdsTabSelect: "dds-tab-select"
  },
  displayName: "DapDSTabGroup"
}), bs = "dap-ds-tab", Gc = e({
  tagName: bs,
  elementClass: Ce,
  react: a,
  events: {},
  displayName: "DapDSTab"
}), As = "dap-ds-table-cell", Hc = e({
  tagName: As,
  elementClass: ye,
  react: a,
  events: {},
  displayName: "DapDSTableCell"
}), ks = "dap-ds-table-header", Pc = e({
  tagName: ks,
  elementClass: $e,
  react: a,
  events: {},
  displayName: "DapDSTableHeader"
}), Fs = "dap-ds-table-row", Kc = e({
  tagName: Fs,
  elementClass: ue,
  react: a,
  events: {},
  displayName: "DapDSTableRow"
}), fs = "dap-ds-table", Vc = e({
  tagName: fs,
  elementClass: Le,
  react: a,
  events: {},
  displayName: "DapDSTable"
}), Is = "dap-ds-textarea", jc = e({
  tagName: Is,
  elementClass: ve,
  react: a,
  events: {
    onDdsCountChange: "dds-count-change",
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsKeydown: "dds-keydown",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus",
    onDdsSelect: "dds-select"
  },
  displayName: "DapDSTextarea"
}), Bs = "dap-ds-timeline-item", qc = e({
  tagName: Bs,
  elementClass: Re,
  react: a,
  events: {},
  displayName: "DapDSTimelineItem"
}), Ts = "dap-ds-timeline", zc = e({
  tagName: Ts,
  elementClass: we,
  react: a,
  events: {},
  displayName: "DapDSTimeline"
}), xs = "dap-ds-time-grid", Jc = e({
  tagName: xs,
  elementClass: he,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsClose: "dds-close"
  },
  displayName: "DapDSTimeGrid"
}), Us = "dap-ds-timepicker", Qc = e({
  tagName: Us,
  elementClass: We,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsInput: "dds-input",
    onDdsValidTime: "dds-valid-time",
    onDdsInvalidTime: "dds-invalid-time",
    onDdsClear: "dds-clear",
    onDdsFocus: "dds-focus",
    onDdsBlur: "dds-blur"
  },
  displayName: "DapDSTimePicker"
}), Os = "dap-ds-toc", Xc = e({
  tagName: Os,
  elementClass: be,
  react: a,
  events: {
    onDdsAnchorChange: "dds-anchor-change"
  },
  displayName: "DapDSTOC"
}), Ms = "dap-ds-toggle-button", Yc = e({
  tagName: Ms,
  elementClass: Ae,
  react: a,
  events: {},
  displayName: "DapDSToggleButton"
}), Es = "dap-ds-tooltip", Zc = e({
  tagName: Es,
  elementClass: ke,
  react: a,
  events: {},
  displayName: "DapDSTooltip"
}), Gs = "dap-ds-tray", _c = e({
  tagName: Gs,
  elementClass: Fe,
  react: a,
  events: {
    onDdsBeforeOpen: "dds-before-open",
    onDdsOpened: "dds-opened",
    onDdsBeforeClose: "dds-before-close",
    onDdsClosed: "dds-closed",
    onDdsClose: "dds-close"
  },
  displayName: "DapDSTray"
}), Hs = "dap-ds-typography", eo = e({
  tagName: Hs,
  elementClass: fe,
  react: a,
  events: {},
  displayName: "DapDSTypography"
}), Ps = "dap-ds-form-label", ao = e({
  tagName: Ps,
  elementClass: Ie,
  react: a,
  events: {},
  displayName: "DapDSFormLabel"
}), Ks = "dap-ds-input-group", to = e({
  tagName: Ks,
  elementClass: Be,
  react: a,
  events: {},
  displayName: "DapDSInputGroup"
}), Vs = "dap-ds-radio-group", so = e({
  tagName: Vs,
  elementClass: Te,
  react: a,
  events: {
    onDdsChange: "dds-change",
    onDdsBlur: "dds-blur",
    onDdsFocus: "dds-focus"
  },
  displayName: "DapDSRadioGroup"
}), js = "dap-ds-icon-arrow-down-line", no = e({
  tagName: js,
  elementClass: xe,
  react: a,
  events: {},
  displayName: "ArrowsArrowDownLine"
}), qs = "dap-ds-icon-arrow-down-s-fill", ro = e({
  tagName: qs,
  elementClass: Ue,
  react: a,
  events: {},
  displayName: "ArrowsArrowDownSFill"
}), zs = "dap-ds-icon-arrow-down-s-line", co = e({
  tagName: zs,
  elementClass: Oe,
  react: a,
  events: {},
  displayName: "ArrowsArrowDownSLine"
}), Js = "dap-ds-icon-arrow-left-down-line", oo = e({
  tagName: Js,
  elementClass: Me,
  react: a,
  events: {},
  displayName: "ArrowsArrowLeftDownLine"
}), Qs = "dap-ds-icon-arrow-left-l-line", lo = e({
  tagName: Qs,
  elementClass: Ee,
  react: a,
  events: {},
  displayName: "ArrowsArrowLeftLLine"
}), Xs = "dap-ds-icon-arrow-left-line", po = e({
  tagName: Xs,
  elementClass: Ge,
  react: a,
  events: {},
  displayName: "ArrowsArrowLeftLine"
}), Ys = "dap-ds-icon-arrow-left-s-fill", io = e({
  tagName: Ys,
  elementClass: He,
  react: a,
  events: {},
  displayName: "ArrowsArrowLeftSFill"
}), Zs = "dap-ds-icon-arrow-left-s-line", mo = e({
  tagName: Zs,
  elementClass: Pe,
  react: a,
  events: {},
  displayName: "ArrowsArrowLeftSLine"
}), _s = "dap-ds-icon-arrow-left-up-line", Do = e({
  tagName: _s,
  elementClass: Ke,
  react: a,
  events: {},
  displayName: "ArrowsArrowLeftUpLine"
}), en = "dap-ds-icon-arrow-right-down-line", No = e({
  tagName: en,
  elementClass: Ve,
  react: a,
  events: {},
  displayName: "ArrowsArrowRightDownLine"
}), an = "dap-ds-icon-arrow-right-l-line", go = e({
  tagName: an,
  elementClass: je,
  react: a,
  events: {},
  displayName: "ArrowsArrowRightLLine"
}), tn = "dap-ds-icon-arrow-right-line", So = e({
  tagName: tn,
  elementClass: qe,
  react: a,
  events: {},
  displayName: "ArrowsArrowRightLine"
}), sn = "dap-ds-icon-arrow-right-s-fill", Co = e({
  tagName: sn,
  elementClass: ze,
  react: a,
  events: {},
  displayName: "ArrowsArrowRightSFill"
}), nn = "dap-ds-icon-arrow-right-s-line", yo = e({
  tagName: nn,
  elementClass: Je,
  react: a,
  events: {},
  displayName: "ArrowsArrowRightSLine"
}), rn = "dap-ds-icon-arrow-right-up-line", $o = e({
  tagName: rn,
  elementClass: Qe,
  react: a,
  events: {},
  displayName: "ArrowsArrowRightUpLine"
}), cn = "dap-ds-icon-arrow-up-line", uo = e({
  tagName: cn,
  elementClass: Xe,
  react: a,
  events: {},
  displayName: "ArrowsArrowUpLine"
}), on = "dap-ds-icon-arrow-up-s-fill", Lo = e({
  tagName: on,
  elementClass: Ye,
  react: a,
  events: {},
  displayName: "ArrowsArrowUpSFill"
}), ln = "dap-ds-icon-arrow-up-s-line", vo = e({
  tagName: ln,
  elementClass: Ze,
  react: a,
  events: {},
  displayName: "ArrowsArrowUpSLine"
}), dn = "dap-ds-icon-expand-up-down-fill", Ro = e({
  tagName: dn,
  elementClass: _e,
  react: a,
  events: {},
  displayName: "ArrowsExpandUpDownFill"
}), pn = "dap-ds-icon-home-6-line", wo = e({
  tagName: pn,
  elementClass: ea,
  react: a,
  events: {},
  displayName: "BuildingsHome6Line"
}), mn = "dap-ds-icon-calendar-line", ho = e({
  tagName: mn,
  elementClass: aa,
  react: a,
  events: {},
  displayName: "BusinessCalendarLine"
}), Dn = "dap-ds-icon-edit-line", Wo = e({
  tagName: Dn,
  elementClass: ta,
  react: a,
  events: {},
  displayName: "DesignEditLine"
}), Nn = "dap-ds-icon-tools-line", bo = e({
  tagName: Nn,
  elementClass: sa,
  react: a,
  events: {},
  displayName: "DesignToolsLine"
}), gn = "dap-ds-icon-computer-line", Ao = e({
  tagName: gn,
  elementClass: na,
  react: a,
  events: {},
  displayName: "DeviceComputerLine"
}), Sn = "dap-ds-icon-clipboard-line", ko = e({
  tagName: Sn,
  elementClass: ra,
  react: a,
  events: {},
  displayName: "DocumentClipboardLine"
}), Cn = "dap-ds-icon-file-copy-line", Fo = e({
  tagName: Cn,
  elementClass: ca,
  react: a,
  events: {},
  displayName: "DocumentFileCopyLine"
}), yn = "dap-ds-icon-file-image-line", fo = e({
  tagName: yn,
  elementClass: oa,
  react: a,
  events: {},
  displayName: "DocumentFileImageLine"
}), $n = "dap-ds-icon-file-music-line", Io = e({
  tagName: $n,
  elementClass: la,
  react: a,
  events: {},
  displayName: "DocumentFileMusicLine"
}), un = "dap-ds-icon-file-text-line", Bo = e({
  tagName: un,
  elementClass: da,
  react: a,
  events: {},
  displayName: "DocumentFileTextLine"
}), Ln = "dap-ds-icon-file-video-line", To = e({
  tagName: Ln,
  elementClass: pa,
  react: a,
  events: {},
  displayName: "DocumentFileVideoLine"
}), vn = "dap-ds-icon-folder-line", xo = e({
  tagName: vn,
  elementClass: ia,
  react: a,
  events: {},
  displayName: "DocumentFolderLine"
}), Rn = "dap-ds-icon-folder-open-line", Uo = e({
  tagName: Rn,
  elementClass: ma,
  react: a,
  events: {},
  displayName: "DocumentFolderOpenLine"
}), wn = "dap-ds-icon-heart-fill", Oo = e({
  tagName: wn,
  elementClass: Da,
  react: a,
  events: {},
  displayName: "HealthHeartFill"
}), hn = "dap-ds-icon-heart-line", Mo = e({
  tagName: hn,
  elementClass: Na,
  react: a,
  events: {},
  displayName: "HealthHeartLine"
}), Wn = "dap-ds-icon-cookie-line", Eo = e({
  tagName: Wn,
  elementClass: ga,
  react: a,
  events: {},
  displayName: "OthersCookieLine"
}), bn = "dap-ds-icon-account-circle-fill", Go = e({
  tagName: bn,
  elementClass: Sa,
  react: a,
  events: {},
  displayName: "UserAccountCircleFill"
}), An = "dap-ds-icon-account-circle-line", Ho = e({
  tagName: An,
  elementClass: Ca,
  react: a,
  events: {},
  displayName: "UserAccountCircleLine"
}), kn = "dap-ds-icon-user-fill", Po = e({
  tagName: kn,
  elementClass: ya,
  react: a,
  events: {},
  displayName: "UserUserFill"
}), Fn = "dap-ds-icon-user-line", Ko = e({
  tagName: Fn,
  elementClass: $a,
  react: a,
  events: {},
  displayName: "UserUserLine"
}), fn = "dap-ds-icon-add-line", Vo = e({
  tagName: fn,
  elementClass: ua,
  react: a,
  events: {},
  displayName: "SystemAddLine"
}), In = "dap-ds-icon-alert-fill", jo = e({
  tagName: In,
  elementClass: La,
  react: a,
  events: {},
  displayName: "SystemAlertFill"
}), Bn = "dap-ds-icon-alert-line", qo = e({
  tagName: Bn,
  elementClass: va,
  react: a,
  events: {},
  displayName: "SystemAlertLine"
}), Tn = "dap-ds-icon-check-line", zo = e({
  tagName: Tn,
  elementClass: Ra,
  react: a,
  events: {},
  displayName: "SystemCheckLine"
}), xn = "dap-ds-icon-check-line2", Jo = e({
  tagName: xn,
  elementClass: wa,
  react: a,
  events: {},
  displayName: "SystemCheckLine2"
}), Un = "dap-ds-icon-checkbox-blank-circle-fill", Qo = e({
  tagName: Un,
  elementClass: ha,
  react: a,
  events: {},
  displayName: "SystemCheckboxBlankCircleFill"
}), On = "dap-ds-icon-checkbox-blank-circle-fill-check", Xo = e({
  tagName: On,
  elementClass: Wa,
  react: a,
  events: {},
  displayName: "SystemCheckboxBlankCircleFillCheck"
}), Mn = "dap-ds-icon-checkbox-blank-circle-line", Yo = e({
  tagName: Mn,
  elementClass: ba,
  react: a,
  events: {},
  displayName: "SystemCheckboxBlankCircleLine"
}), En = "dap-ds-icon-checkbox-circle-fill", Zo = e({
  tagName: En,
  elementClass: Aa,
  react: a,
  events: {},
  displayName: "SystemCheckboxCircleFill"
}), Gn = "dap-ds-icon-checkbox-circle-line", _o = e({
  tagName: Gn,
  elementClass: ka,
  react: a,
  events: {},
  displayName: "SystemCheckboxCircleLine"
}), Hn = "dap-ds-icon-close-circle-fill", el = e({
  tagName: Hn,
  elementClass: Fa,
  react: a,
  events: {},
  displayName: "SystemCloseCircleFill"
}), Pn = "dap-ds-icon-close-circle-line", al = e({
  tagName: Pn,
  elementClass: fa,
  react: a,
  events: {},
  displayName: "SystemCloseCircleLine"
}), Kn = "dap-ds-icon-close-fill", tl = e({
  tagName: Kn,
  elementClass: Ia,
  react: a,
  events: {},
  displayName: "SystemCloseFill"
}), Vn = "dap-ds-icon-close-line", sl = e({
  tagName: Vn,
  elementClass: Ba,
  react: a,
  events: {},
  displayName: "SystemCloseLine"
}), jn = "dap-ds-icon-delete-bin-fill", nl = e({
  tagName: jn,
  elementClass: Ta,
  react: a,
  events: {},
  displayName: "SystemDeleteBinFill"
}), qn = "dap-ds-icon-delete-bin-line", rl = e({
  tagName: qn,
  elementClass: xa,
  react: a,
  events: {},
  displayName: "SystemDeleteBinLine"
}), zn = "dap-ds-icon-download-line", cl = e({
  tagName: zn,
  elementClass: Ua,
  react: a,
  events: {},
  displayName: "SystemDownloadLine"
}), Jn = "dap-ds-icon-error-warning-fill", ol = e({
  tagName: Jn,
  elementClass: Oa,
  react: a,
  events: {},
  displayName: "SystemErrorWarningFill"
}), Qn = "dap-ds-icon-error-warning-line", ll = e({
  tagName: Qn,
  elementClass: Ma,
  react: a,
  events: {},
  displayName: "SystemErrorWarningLine"
}), Xn = "dap-ds-icon-external-link-line", dl = e({
  tagName: Xn,
  elementClass: Ea,
  react: a,
  events: {},
  displayName: "SystemExternalLinkLine"
}), Yn = "dap-ds-icon-eye-line", pl = e({
  tagName: Yn,
  elementClass: Ga,
  react: a,
  events: {},
  displayName: "SystemEyeLine"
}), Zn = "dap-ds-icon-eye-off-line", il = e({
  tagName: Zn,
  elementClass: Ha,
  react: a,
  events: {},
  displayName: "SystemEyeOffLine"
}), _n = "dap-ds-icon-forbid-fill", ml = e({
  tagName: _n,
  elementClass: Pa,
  react: a,
  events: {},
  displayName: "SystemForbidFill"
}), er = "dap-ds-icon-information-2-fill", Dl = e({
  tagName: er,
  elementClass: Ka,
  react: a,
  events: {},
  displayName: "SystemInformation2Fill"
}), ar = "dap-ds-icon-information-fill", Nl = e({
  tagName: ar,
  elementClass: Va,
  react: a,
  events: {},
  displayName: "SystemInformationFill"
}), tr = "dap-ds-icon-information-line", gl = e({
  tagName: tr,
  elementClass: ja,
  react: a,
  events: {},
  displayName: "SystemInformationLine"
}), sr = "dap-ds-icon-lightbulb-fill", Sl = e({
  tagName: sr,
  elementClass: qa,
  react: a,
  events: {},
  displayName: "SystemLightbulbFill"
}), nr = "dap-ds-icon-loading-spinner", Cl = e({
  tagName: nr,
  elementClass: za,
  react: a,
  events: {},
  displayName: "SystemLoadingSpinner"
}), rr = "dap-ds-icon-lock-fill", yl = e({
  tagName: rr,
  elementClass: Ja,
  react: a,
  events: {},
  displayName: "SystemLockFill"
}), cr = "dap-ds-icon-lock-line", $l = e({
  tagName: cr,
  elementClass: Qa,
  react: a,
  events: {},
  displayName: "SystemLockLine"
}), or = "dap-ds-icon-menu-line", ul = e({
  tagName: or,
  elementClass: Xa,
  react: a,
  events: {},
  displayName: "SystemMenuLine"
}), lr = "dap-ds-icon-menu-line-s", Ll = e({
  tagName: lr,
  elementClass: Ya,
  react: a,
  events: {},
  displayName: "SystemMenuLineS"
}), dr = "dap-ds-icon-more-2-line", vl = e({
  tagName: dr,
  elementClass: Za,
  react: a,
  events: {},
  displayName: "SystemMore2Line"
}), pr = "dap-ds-icon-more-line", Rl = e({
  tagName: pr,
  elementClass: _a,
  react: a,
  events: {},
  displayName: "SystemMoreLine"
}), ir = "dap-ds-icon-search-line", wl = e({
  tagName: ir,
  elementClass: et,
  react: a,
  events: {},
  displayName: "SystemSearchLine"
}), mr = "dap-ds-icon-share-line", hl = e({
  tagName: mr,
  elementClass: at,
  react: a,
  events: {},
  displayName: "SystemShareLine"
}), Dr = "dap-ds-icon-shield-check-fill", Wl = e({
  tagName: Dr,
  elementClass: tt,
  react: a,
  events: {},
  displayName: "SystemShieldCheckFill"
}), Nr = "dap-ds-icon-shield-check-line", bl = e({
  tagName: Nr,
  elementClass: st,
  react: a,
  events: {},
  displayName: "SystemShieldCheckLine"
}), gr = "dap-ds-icon-star-fill", Al = e({
  tagName: gr,
  elementClass: nt,
  react: a,
  events: {},
  displayName: "SystemStarFill"
}), Sr = "dap-ds-icon-subtract-line", kl = e({
  tagName: Sr,
  elementClass: rt,
  react: a,
  events: {},
  displayName: "SystemSubtractLine"
}), Cr = "dap-ds-icon-subtract-line2", Fl = e({
  tagName: Cr,
  elementClass: ct,
  react: a,
  events: {},
  displayName: "SystemSubtractLine2"
}), yr = "dap-ds-icon-time-fill", fl = e({
  tagName: yr,
  elementClass: ot,
  react: a,
  events: {},
  displayName: "SystemTimeFill"
}), $r = "dap-ds-icon-time-line", Il = e({
  tagName: $r,
  elementClass: lt,
  react: a,
  events: {},
  displayName: "SystemTimeLine"
}), ur = "dap-ds-icon-upload-2-fill", Bl = e({
  tagName: ur,
  elementClass: dt,
  react: a,
  events: {},
  displayName: "SystemUpload2Fill"
}), Lr = "dap-ds-icon-upload-2-line", Tl = e({
  tagName: Lr,
  elementClass: pt,
  react: a,
  events: {},
  displayName: "SystemUpload2Line"
}), vr = "dap-ds-icon-upload-line", xl = e({
  tagName: vr,
  elementClass: it,
  react: a,
  events: {},
  displayName: "SystemUploadLine"
});
const DapDSButtonReact = a.forwardRef(function DapDSButtonReact(rp, rf) { return Tr(rp, rf); });
const ArrowsArrowDownLineReact = no;
const ArrowsArrowDownSFillReact = ro;
const ArrowsArrowDownSLineReact = co;
const ArrowsArrowLeftDownLineReact = oo;
const ArrowsArrowLeftLLineReact = lo;
const ArrowsArrowLeftLineReact = po;
const ArrowsArrowLeftSFillReact = io;
const ArrowsArrowLeftSLineReact = mo;
const ArrowsArrowLeftUpLineReact = Do;
const ArrowsArrowRightDownLineReact = No;
const ArrowsArrowRightLLineReact = go;
const ArrowsArrowRightLineReact = So;
const ArrowsArrowRightSFillReact = Co;
const ArrowsArrowRightSLineReact = yo;
const ArrowsArrowRightUpLineReact = $o;
const ArrowsArrowUpLineReact = uo;
const ArrowsArrowUpSFillReact = Lo;
const ArrowsArrowUpSLineReact = vo;
const ArrowsExpandUpDownFillReact = Ro;
const BuildingsHome6LineReact = wo;
const BusinessCalendarLineReact = ho;
const DapDSAccordionGroupReact = Wr;
const DapDSAccordionReact = hr;
const DapDSAnchorHeadingReact = Fr;
const DapDSAvatarGroupReact = br;
const DapDSAvatarReact = Ar;
const DapDSBadgeReact = kr;
const DapDSBannerReact = fr;
const DapDSBreadcrumbItemReact = Br;
const DapDSBreadcrumbReact = Ir;
const DapDSCalendarCellReact = xr;
const DapDSCalendarReact = Ur;
const DapDSCalloutReact = Or;
const DapDSCardActionsReact = Mr;
const DapDSCardContentReact = Er;
const DapDSCardImageReact = Gr;
const DapDSCardReact = Kr;
const DapDSCardSubtitleReact = Hr;
const DapDSCardTitleReact = Pr;
const DapDSCheckboxReact = Vr;
const DapDSComboboxReact = jr;
const DapDSCommandGroupReact = qr;
const DapDSCommandItemReact = zr;
const DapDSCommandReact = Jr;
const DapDSContentSwitcherItemReact = Qr;
const DapDSContentSwitcherReact = Xr;
const DapDSCopyBoxInputReact = Yr;
const DapDSDAPBadgeReact = Zr;
const DapDSDataTableReact = _r;
const DapDSDatePickerReact = ec;
const DapDSDividerReact = ac;
const DapDSFeedbackReact = tc;
const DapDSFileInputListItemReact = sc;
const DapDSFileInputListReact = nc;
const DapDSFileInputReact = rc;
const DapDSFormLabelReact = ao;
const DapDSIconButtonReact = oc;
const DapDSIconReact = cc;
const DapDSInputGroupReact = to;
const DapDSInputReact = lc;
const DapDSLabelReact = dc;
const DapDSLinkReact = pc;
const DapDSListItemReact = ic;
const DapDSModalReact = mc;
const DapDSNavigationMenuItemReact = Dc;
const DapDSNavigationMenuReact = Nc;
const DapDSNotificationBadgeReact = gc;
const DapDSNumberInputReact = Sc;
const DapDSOfficialWebsiteBannerReact = Cc;
const DapDSOptionItemReact = yc;
const DapDSOptionListReact = $c;
const DapDSOverlayReact = uc;
const DapDSPagerReact = Lc;
const DapDSPasswordInputReact = vc;
const DapDSPopupReact = Rc;
const DapDSRadioButtonReact = wc;
const DapDSRadioGroupReact = so;
const DapDSRatingReact = hc;
const DapDSScrollAreaReact = Wc;
const DapDSSearchReact = bc;
const DapDSSelectReact = Ac;
const DapDSSideNavGroupReact = kc;
const DapDSSideNavItemReact = Fc;
const DapDSSideNavReact = fc;
const DapDSSkeletonReact = Ic;
const DapDSSkipLinkReact = Bc;
const DapDSSnackbarMessageReact = Tc;
const DapDSSnackbarReact = xc;
const DapDSSpinnerReact = Uc;
const DapDSStackReact = Oc;
const DapDSSwitchReact = Mc;
const DapDSTOCReact = Xc;
const DapDSTabGroupReact = Ec;
const DapDSTabReact = Gc;
const DapDSTableCellReact = Hc;
const DapDSTableHeaderReact = Pc;
const DapDSTableReact = Vc;
const DapDSTableRowReact = Kc;
const DapDSTextareaReact = jc;
const DapDSTimeGridReact = Jc;
const DapDSTimePickerReact = Qc;
const DapDSTimelineItemReact = qc;
const DapDSTimelineReact = zc;
const DapDSToggleButtonReact = Yc;
const DapDSTooltipReact = Zc;
const DapDSTrayReact = _c;
const DapDSTypographyReact = eo;
const DesignEditLineReact = Wo;
const DesignToolsLineReact = bo;
const DeviceComputerLineReact = Ao;
const DocumentClipboardLineReact = ko;
const DocumentFileCopyLineReact = Fo;
const DocumentFileImageLineReact = fo;
const DocumentFileMusicLineReact = Io;
const DocumentFileTextLineReact = Bo;
const DocumentFileVideoLineReact = To;
const DocumentFolderLineReact = xo;
const DocumentFolderOpenLineReact = Uo;
const HealthHeartFillReact = Oo;
const HealthHeartLineReact = Mo;
const OthersCookieLineReact = Eo;
const SystemAddLineReact = Vo;
const SystemAlertFillReact = jo;
const SystemAlertLineReact = qo;
const SystemCheckLine2React = Jo;
const SystemCheckLineReact = zo;
const SystemCheckboxBlankCircleFillCheckReact = Xo;
const SystemCheckboxBlankCircleFillReact = Qo;
const SystemCheckboxBlankCircleLineReact = Yo;
const SystemCheckboxCircleFillReact = Zo;
const SystemCheckboxCircleLineReact = _o;
const SystemCloseCircleFillReact = el;
const SystemCloseCircleLineReact = al;
const SystemCloseFillReact = tl;
const SystemCloseLineReact = sl;
const SystemDeleteBinFillReact = nl;
const SystemDeleteBinLineReact = rl;
const SystemDownloadLineReact = cl;
const SystemErrorWarningFillReact = ol;
const SystemErrorWarningLineReact = ll;
const SystemExternalLinkLineReact = dl;
const SystemEyeLineReact = pl;
const SystemEyeOffLineReact = il;
const SystemForbidFillReact = ml;
const SystemInformation2FillReact = Dl;
const SystemInformationFillReact = Nl;
const SystemInformationLineReact = gl;
const SystemLightbulbFillReact = Sl;
const SystemLoadingSpinnerReact = Cl;
const SystemLockFillReact = yl;
const SystemLockLineReact = $l;
const SystemMenuLineReact = ul;
const SystemMenuLineSReact = Ll;
const SystemMore2LineReact = vl;
const SystemMoreLineReact = Rl;
const SystemSearchLineReact = wl;
const SystemShareLineReact = hl;
const SystemShieldCheckFillReact = Wl;
const SystemShieldCheckLineReact = bl;
const SystemStarFillReact = Al;
const SystemSubtractLine2React = Fl;
const SystemSubtractLineReact = kl;
const SystemTimeFillReact = fl;
const SystemTimeLineReact = Il;
const SystemUpload2FillReact = Bl;
const SystemUpload2LineReact = Tl;
const SystemUploadLineReact = xl;
const UserAccountCircleFillReact = Go;
const UserAccountCircleLineReact = Ho;
const UserUserFillReact = Po;
const UserUserLineReact = Ko;
export {
  ArrowsArrowDownLineReact,
  ArrowsArrowDownSFillReact,
  ArrowsArrowDownSLineReact,
  ArrowsArrowLeftDownLineReact,
  ArrowsArrowLeftLLineReact,
  ArrowsArrowLeftLineReact,
  ArrowsArrowLeftSFillReact,
  ArrowsArrowLeftSLineReact,
  ArrowsArrowLeftUpLineReact,
  ArrowsArrowRightDownLineReact,
  ArrowsArrowRightLLineReact,
  ArrowsArrowRightLineReact,
  ArrowsArrowRightSFillReact,
  ArrowsArrowRightSLineReact,
  ArrowsArrowRightUpLineReact,
  ArrowsArrowUpLineReact,
  ArrowsArrowUpSFillReact,
  ArrowsArrowUpSLineReact,
  ArrowsExpandUpDownFillReact,
  BuildingsHome6LineReact,
  BusinessCalendarLineReact,
  DapDSAccordionGroupReact,
  DapDSAccordionReact,
  DapDSAnchorHeadingReact,
  DapDSAvatarGroupReact,
  DapDSAvatarReact,
  DapDSBadgeReact,
  DapDSBannerReact,
  DapDSBreadcrumbItemReact,
  DapDSBreadcrumbReact,
  DapDSButtonReact,
  DapDSCalendarCellReact,
  DapDSCalendarReact,
  DapDSCalloutReact,
  DapDSCardActionsReact,
  DapDSCardContentReact,
  DapDSCardImageReact,
  DapDSCardReact,
  DapDSCardSubtitleReact,
  DapDSCardTitleReact,
  DapDSCheckboxReact,
  DapDSComboboxReact,
  DapDSCommandGroupReact,
  DapDSCommandItemReact,
  DapDSCommandReact,
  DapDSContentSwitcherItemReact,
  DapDSContentSwitcherReact,
  DapDSCopyBoxInputReact,
  DapDSDAPBadgeReact,
  DapDSDataTableReact,
  DapDSDatePickerReact,
  DapDSDividerReact,
  DapDSFeedbackReact,
  DapDSFileInputListItemReact,
  DapDSFileInputListReact,
  DapDSFileInputReact,
  DapDSFormLabelReact,
  DapDSIconButtonReact,
  DapDSIconReact,
  DapDSInputGroupReact,
  DapDSInputReact,
  DapDSLabelReact,
  DapDSLinkReact,
  DapDSListItemReact,
  DapDSModalReact,
  DapDSNavigationMenuItemReact,
  DapDSNavigationMenuReact,
  DapDSNotificationBadgeReact,
  DapDSNumberInputReact,
  DapDSOfficialWebsiteBannerReact,
  DapDSOptionItemReact,
  DapDSOptionListReact,
  DapDSOverlayReact,
  DapDSPagerReact,
  DapDSPasswordInputReact,
  DapDSPopupReact,
  DapDSRadioButtonReact,
  DapDSRadioGroupReact,
  DapDSRatingReact,
  DapDSScrollAreaReact,
  DapDSSearchReact,
  DapDSSelectReact,
  DapDSSideNavGroupReact,
  DapDSSideNavItemReact,
  DapDSSideNavReact,
  DapDSSkeletonReact,
  DapDSSkipLinkReact,
  DapDSSnackbarMessageReact,
  DapDSSnackbarReact,
  DapDSSpinnerReact,
  DapDSStackReact,
  DapDSSwitchReact,
  DapDSTOCReact,
  DapDSTabGroupReact,
  DapDSTabReact,
  DapDSTableCellReact,
  DapDSTableHeaderReact,
  DapDSTableReact,
  DapDSTableRowReact,
  DapDSTextareaReact,
  DapDSTimeGridReact,
  DapDSTimePickerReact,
  DapDSTimelineItemReact,
  DapDSTimelineReact,
  DapDSToggleButtonReact,
  DapDSTooltipReact,
  DapDSTrayReact,
  DapDSTypographyReact,
  DesignEditLineReact,
  DesignToolsLineReact,
  DeviceComputerLineReact,
  DocumentClipboardLineReact,
  DocumentFileCopyLineReact,
  DocumentFileImageLineReact,
  DocumentFileMusicLineReact,
  DocumentFileTextLineReact,
  DocumentFileVideoLineReact,
  DocumentFolderLineReact,
  DocumentFolderOpenLineReact,
  HealthHeartFillReact,
  HealthHeartLineReact,
  OthersCookieLineReact,
  SystemAddLineReact,
  SystemAlertFillReact,
  SystemAlertLineReact,
  SystemCheckLine2React,
  SystemCheckLineReact,
  SystemCheckboxBlankCircleFillCheckReact,
  SystemCheckboxBlankCircleFillReact,
  SystemCheckboxBlankCircleLineReact,
  SystemCheckboxCircleFillReact,
  SystemCheckboxCircleLineReact,
  SystemCloseCircleFillReact,
  SystemCloseCircleLineReact,
  SystemCloseFillReact,
  SystemCloseLineReact,
  SystemDeleteBinFillReact,
  SystemDeleteBinLineReact,
  SystemDownloadLineReact,
  SystemErrorWarningFillReact,
  SystemErrorWarningLineReact,
  SystemExternalLinkLineReact,
  SystemEyeLineReact,
  SystemEyeOffLineReact,
  SystemForbidFillReact,
  SystemInformation2FillReact,
  SystemInformationFillReact,
  SystemInformationLineReact,
  SystemLightbulbFillReact,
  SystemLoadingSpinnerReact,
  SystemLockFillReact,
  SystemLockLineReact,
  SystemMenuLineReact,
  SystemMenuLineSReact,
  SystemMore2LineReact,
  SystemMoreLineReact,
  SystemSearchLineReact,
  SystemShareLineReact,
  SystemShieldCheckFillReact,
  SystemShieldCheckLineReact,
  SystemStarFillReact,
  SystemSubtractLine2React,
  SystemSubtractLineReact,
  SystemTimeFillReact,
  SystemTimeLineReact,
  SystemUpload2FillReact,
  SystemUpload2LineReact,
  SystemUploadLineReact,
  UserAccountCircleFillReact,
  UserAccountCircleLineReact,
  UserUserFillReact,
  UserUserLineReact
};
//# sourceMappingURL=react.js.map
