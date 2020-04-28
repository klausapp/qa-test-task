import { hook } from '../libs/helpers';

export const navigationBar = '.navbar';
export const dashboardBar = 'a[href="/dashboard"]';
export const header = 'h1';
export const exportButton = hook('dashboard-export-all');

// Filters
export const dashboardFilters = hook('dashboard-filters');
export const timePeriodFilter = hook('timeperiod-picker');
export const timePeriodItem = hook('timeperiod-picker-item');
export const timeCurrentValue = '.TimePeriodPicker_options_QWenE';
export const userFilter = hook('dashboard-user-filter');
export const userList = '#vs2__listbox > li';

// Statistic cards
export const statCard = hook('dashboard-stat-card');

// Internal quality score graph
export const internalQualityScoreGraph = hook('dashboard-internal-quality-score-graph');
export const qualityScoreValue = '.OverviewBubble_overviewBubble_3FOCU';
export const timeUnitToggle = hook('datacard-time-unit-toggle');

// Ratings by category card
export const ratingsByCategoryCard = hook('dashboard-ratings-by-category-card');
export const ratingsTooltipButton = '.DataCard_helpTooltip_1S3Tm';
export const ratingsTooltip = '.tippy-popper';
export const exportDataCardButton = hook('datacard-export-csv');
export const dataGridColumn = hook('datagrid-column');
export const dataGridHeader = hook('datagrid-header');
export const dataGridDataColumn = hook('datagrid-data-column');

// Manage filters bar
export const manageFiltersBar = '.Sidebar_sidebar_1CwW3';
export const manageFiltersHeader = '.page__header-text';

export const open = () => cy.visit('/dashboard')
export const openDashboard = () =>
    cy.get(navigationBar)
        .find(dashboardBar)
        .click();
export const getHeader = () => cy.get(header);
export const applyStatusFilter = (status) =>
    cy.get(dashboardFilters).contains(status)
        .click();
export const getStatusFilter = (status) =>
    cy.get(dashboardFilters).contains(status).prev()
export const applyTimePeriodFilter = (value) =>
    cy.get(timePeriodFilter)
        .click()
        .contains(timePeriodItem, value)
        .click();
export const getTimePeriodFilter = () =>
    cy.get(timePeriodFilter)
        .find(timeCurrentValue);
export const applyUserFilter = (value) =>
    cy.get(userFilter)
        .click()
        .contains(userList, value)
        .click();
export const applyUserSearch = (value) =>
    cy.get(userFilter).type(value)
        .find(userList);
export const getUserFilter = (name) =>
    cy.get(userFilter)
        .trigger('mouseenter')
        .contains(userList, name)
export const openManageFilters = () =>
    cy.contains('button', 'Filters')
        .click();
export const getManageFiltersBar = () =>
    cy.get(manageFiltersBar)
export const getManageHeader = () =>
    cy.get(manageFiltersBar)
        .find(manageFiltersHeader)
export const selectReview = (text) =>
    cy.contains(text).click()
export const closeManageFilters = () =>
    getManageFiltersBar()
        .contains('Close')
        .click()
export const getInternalQualityScore = () =>
    cy.contains(statCard, 'Internal Quality Score')
        .find(qualityScoreValue);
export const getRatingsByCategory = () =>
    cy.contains(ratingsByCategoryCard, 'Ratings by Category');
export const openTooltip = () =>
    getRatingsByCategory()
        .find(ratingsTooltipButton)
        .trigger('mouseenter')
export const getTooltip = () =>
    cy.get(ratingsTooltip)
export const closeTooltip = () =>
    cy.get(timePeriodFilter).click()
export const triggerExport = () =>
    cy.contains(exportButton, 'Export').click()


