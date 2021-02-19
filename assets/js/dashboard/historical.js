import React from 'react';

import Datepicker from './datepicker'
import SiteSwitcher from './site-switcher'
import Filters from './filters'
import CurrentVisitors from './stats/current-visitors'
import VisitorGraph from './stats/visitor-graph'
import Sources from './stats/sources'
import Pages from './stats/pages'
import Countries from './stats/countries'
import Devices from './stats/devices'
import Conversions from './stats/conversions'
import { withPinnedHeader } from './pinned-header-hoc';

class Historical extends React.Component {
  renderConversions() {
    if (this.props.site.hasGoals) {
      return (
        <div className="w-full block md:flex items-start justify-between mt-6">
          <Conversions site={this.props.site} query={this.props.query} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="mb-12">
        <div id="stats-container-top"></div>
        <div className={`sticky top-0 bg-gray-50 dark:bg-gray-850 sm:py-3 py-1 z-9 ${this.props.stuck ? 'z-10 fullwidth-shadow' : ''}`}>
          <div className="w-full sm:flex items-center">
            <div className="w-full flex items-center mb-2 sm:mb-0">
              <SiteSwitcher site={this.props.site} loggedIn={this.props.loggedIn} />
              <CurrentVisitors timer={this.props.timer} site={this.props.site} query={this.props.query} />
              <Filters query={this.props.query} history={this.props.history} />
            </div>
            <Datepicker site={this.props.site} query={this.props.query} />
          </div>
        </div>
        <VisitorGraph site={this.props.site} query={this.props.query} />
        { this.renderConversions() }
        <div className="w-full block md:flex items-start justify-between">
          <Sources site={this.props.site} query={this.props.query} />
          <Pages site={this.props.site} query={this.props.query} />
        </div>
        <div className="w-full block md:flex items-start justify-between">
          <Countries site={this.props.site} query={this.props.query} />
          <Devices site={this.props.site} query={this.props.query} />
        </div>
      </div>
    )
  }
}

export default withPinnedHeader(Historical, 'historical');
