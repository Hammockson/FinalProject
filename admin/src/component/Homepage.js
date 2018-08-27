import React, { Component } from 'react';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Sidebar from './Sidebar'

const cookies = new Cookies()

class Homepage extends Component {
    render() {
      if(cookies.get('sessionid') === undefined) return <Redirect to="/Login"/>
        return (
          <div className="wrapper">
          {/* Sidebar  */}
          <Sidebar />
          {/* Page Content  */}
          <div id="content">
            <div className="right_col" role="main">
              {/* top tiles */}
              <div className="row tile_count">
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                  <span className="count_top"><i className="fa fa-user" /> Total Categories</span>
                  <div className="count">3</div>
                  <span className="count_bottom"><i className="green">4% </i> From last Week</span>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                  <span className="count_top"><i className="fa fa-clock-o" /> Total Products</span>
                  <div className="count">30</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />3% </i> From last Week</span>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                  <span className="count_top"><i className="fa fa-user" /> Item Sold</span>
                  <div className="count green">450</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />34% </i> From last Week</span>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                  <span className="count_top"><i className="fa fa-user" />Total Invoices</span>
                  <div className="count">210</div>
                  <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc" />12% </i> From last Week</span>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                  <span className="count_top"><i className="fa fa-user" /> Total Collections</span>
                  <div className="count">2,315</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />34% </i> From last Week</span>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                  <span className="count_top"><i className="fa fa-user" /> Total Connections</span>
                  <div className="count">7,325</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />34% </i> From last Week</span>
                </div>
              </div>
              <div className="line" />
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="dashboard_graph">
                    <div className="row x_title">
                      <div className="col-md-6">
                        <h3>Network Activities <small>Graph title sub-title</small></h3>
                      </div>
                      <div className="col-md-6">
                        <div id="reportrange" className="pull-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
                          <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                          <span>December 30, 2014 - January 28, 2015</span> <b className="caret" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <div id="chart_plot_01" className="demo-placeholder" />
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
                      <div className="x_title">
                        <h2>Top Category</h2>
                        <div className="clearfix" />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-6">
                        <div>
                          <p>Tshirt</p>
                          <div className>
                            <div className="progress progress_sm" style={{width: '76%'}}>
                              <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={80} />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p>Shirt</p>
                          <div className>
                            <div className="progress progress_sm" style={{width: '76%'}}>
                              <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={60} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-6">
                        <div>
                          <p>Hoodie</p>
                          <div className>
                            <div className="progress progress_sm" style={{width: '76%'}}>
                              <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={40} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="x_panel tile fixed_height_320">
                      <div className="x_title">
                        <h2>App Versions</h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                          </li>
                          <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                            <ul className="dropdown-menu" role="menu">
                              <li><a href="#">Settings 1</a>
                              </li>
                              <li><a href="#">Settings 2</a>
                              </li>
                            </ul>
                          </li>
                          <li><a className="close-link"><i className="fa fa-close" /></a>
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                      <div className="x_content">
                        <h4>App Usage across versions</h4>
                        <div className="widget_summary">
                          <div className="w_left w_25">
                            <span>0.1.5.2</span>
                          </div>
                          <div className="w_center w_55">
                            <div className="progress">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '66%'}}>
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="w_right w_20">
                            <span>123k</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                          <div className="w_left w_25">
                            <span>0.1.5.3</span>
                          </div>
                          <div className="w_center w_55">
                            <div className="progress">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="w_right w_20">
                            <span>53k</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                          <div className="w_left w_25">
                            <span>0.1.5.4</span>
                          </div>
                          <div className="w_center w_55">
                            <div className="progress">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}}>
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="w_right w_20">
                            <span>23k</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                          <div className="w_left w_25">
                            <span>0.1.5.5</span>
                          </div>
                          <div className="w_center w_55">
                            <div className="progress">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '5%'}}>
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="w_right w_20">
                            <span>3k</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                          <div className="w_left w_25">
                            <span>0.1.5.6</span>
                          </div>
                          <div className="w_center w_55">
                            <div className="progress">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '2%'}}>
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="w_right w_20">
                            <span>1k</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="x_panel tile fixed_height_320 overflow_hidden">
                      <div className="x_title">
                        <h2>Device Usage</h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                          </li>
                          <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                            <ul className="dropdown-menu" role="menu">
                              <li><a href="#">Settings 1</a>
                              </li>
                              <li><a href="#">Settings 2</a>
                              </li>
                            </ul>
                          </li>
                          <li><a className="close-link"><i className="fa fa-close" /></a>
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                      <div className="x_content">
                        <table className style={{width: '100%'}}>
                          <tbody><tr>
                              <th style={{width: '37%'}}>
                                <p>Top 5</p>
                              </th>
                              <th>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                  <p className>Device</p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                  <p className>Progress</p>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <td>
                                <canvas className="canvasDoughnut" height={140} width={140} style={{margin: '15px 10px 10px 0'}} />
                              </td>
                              <td>
                                <table className="tile_info">
                                  <tbody><tr>
                                      <td>
                                        <p><i className="fa fa-square blue" />IOS </p>
                                      </td>
                                      <td>30%</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p><i className="fa fa-square green" />Android </p>
                                      </td>
                                      <td>10%</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p><i className="fa fa-square purple" />Blackberry </p>
                                      </td>
                                      <td>20%</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p><i className="fa fa-square aero" />Symbian </p>
                                      </td>
                                      <td>15%</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p><i className="fa fa-square red" />Others </p>
                                      </td>
                                      <td>30%</td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="x_panel tile fixed_height_320">
                      <div className="x_title">
                        <h2>Quick Settings</h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                          </li>
                          <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                            <ul className="dropdown-menu" role="menu">
                              <li><a href="#">Settings 1</a>
                              </li>
                              <li><a href="#">Settings 2</a>
                              </li>
                            </ul>
                          </li>
                          <li><a className="close-link"><i className="fa fa-close" /></a>
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                      <div className="x_content">
                        <div className="dashboard-widget-content">
                          <ul className="quick-list">
                            <li><i className="fa fa-calendar-o" /><a href="#">Settings</a>
                            </li>
                            <li><i className="fa fa-bars" /><a href="#">Subscription</a>
                            </li>
                            <li><i className="fa fa-bar-chart" /><a href="#">Auto Renewal</a> </li>
                            <li><i className="fa fa-line-chart" /><a href="#">Achievements</a>
                            </li>
                            <li><i className="fa fa-bar-chart" /><a href="#">Auto Renewal</a> </li>
                            <li><i className="fa fa-line-chart" /><a href="#">Achievements</a>
                            </li>
                            <li><i className="fa fa-area-chart" /><a href="#">Logout</a>
                            </li>
                          </ul>
                          <div className="sidebar-widget">
                            <h4>Profile Completion</h4>
                            <canvas width={150} height={80} id="chart_gauge_01" className style={{width: 160, height: 100}} />
                            <div className="goal-wrapper">
                              <span id="gauge-text" className="gauge-value pull-left">0</span>
                              <span className="gauge-value pull-left">%</span>
                              <span id="goal-text" className="goal-value pull-right">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        

        );
    }
}
export default Homepage;