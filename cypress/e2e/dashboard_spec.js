import * as dashboardPage from '../libs/dashboardPage';
import { status, timePeriod, review } from '../libs/filters';
import { getUrl } from '../libs/helpers';

describe('Dashboard', () => {
  before('Login', function () {
    cy.login();
  });
  beforeEach('Open dashboard page', function () {
    dashboardPage.open();
  });
  it('User is able to reach dashboard from navigation bar', function () {
    dashboardPage.openDashboard();
    cy.percySnapshot("Dashboard page");
    dashboardPage.getHeader().should('contain', 'Dashboard');
    getUrl().should('contain', '/dashboard');
    dashboardPage.open();
  });
  it('User is able to filter items by status filter', function () {
    dashboardPage.getStatusFilter(status.received)
      .should('have.prop', 'checked', true);
    dashboardPage.applyStatusFilter(status.given);
    dashboardPage.getStatusFilter(status.given)
      .should('have.prop', 'checked', true);
    getUrl().should('contain', 'direction=given');
    dashboardPage.applyStatusFilter(status.received);
    getUrl().should('not.contain', 'direction=given');
  });
  it('User is able to filter items by time period filter', function () {
    dashboardPage.getTimePeriodFilter()
      .should('contain', timePeriod.lastWeek)
    dashboardPage.applyTimePeriodFilter(timePeriod.lastYear);
    dashboardPage.getTimePeriodFilter()
      .should('contain', timePeriod.lastYear)
    getUrl().should('contain', 'timePeriod=year');
  });
  it('User is able to filter items by user filter', function () {
    dashboardPage.applyUserFilter('QA Test Account');
    dashboardPage.getUserFilter('QA Test Account')
      .should('have.class', 'vs__dropdown-option--selected');
  });
  it('User is able to search users in user filter', function () {
    dashboardPage.applyUserSearch('jdhsfjhbf')
      .should('contain.text', 'No matching people.')
  });
  it('User is able to manage filters', function () {
    dashboardPage.openManageFilters();
    dashboardPage.getManageFiltersBar()
      .should('be.visible')
    dashboardPage.getManageHeader()
      .should('contain', 'Filters');
    dashboardPage.selectReview(review.only)
    getUrl().should('include', 'selfReview=only');
    dashboardPage.closeManageFilters();
    dashboardPage.getManageFiltersBar()
      .should('not.be.visible');
  });
  it('User is able to see Internal quality score', function () {
    dashboardPage.getInternalQualityScore()
      .should('be.visible')
    dashboardPage.getInternalQualityScore()
      .text()
      .should('not.be.empty');;
  });
  it('User is able to see Ratings by category tooltip', function () {
    dashboardPage.getRatingsByCategory()
      .should('be.visible');
    dashboardPage.openTooltip();
    dashboardPage.getTooltip()
      .should('be.visible')
    dashboardPage.closeTooltip()
    dashboardPage.getTooltip()
      .should('not.exist')
  });
});