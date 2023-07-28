<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<h3 class="uk-margin-bottom">
				Data Visualization
			</h3>

			<div class="uk-child-width-1-4@xl uk-child-width-1-2@s uk-grid" data-uk-grid>
				<div>
					<ScCard>
						<nuxt-link to="/plugins/data_grid" class="sc-padding sc-padding-medium-ends uk-flex uk-flex-middle">
							<div class="uk-flex-1">
								<ScCardTitle>
									Data Grid
								</ScCardTitle>
								<p class="sc-color-secondary uk-margin-remove uk-text-medium">
									Display and Edit Data
								</p>
							</div>
							<div class="md-bg-amber-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round">
								<i class="mdi mdi-grid md-color-white"></i>
							</div>
						</nuxt-link>
					</ScCard>
				</div>
				<div>
					<ScCard>
						<nuxt-link to="/pages/mailbox" class="sc-padding sc-padding-medium-ends uk-flex uk-flex-middle">
							<div class="uk-flex-1">
								<ScCardTitle>
									Mailbox
								</ScCardTitle>
								<p class="sc-color-secondary uk-margin-remove uk-text-medium">
									Check Your Mail
								</p>
							</div>
							<div class="md-bg-green-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round">
								<i class="mdi mdi-email-outline md-color-white"></i>
							</div>
						</nuxt-link>
					</ScCard>
				</div>
				<div>
					<ScCard>
						<nuxt-link to="/pages/task_board" class="sc-padding sc-padding-medium-ends uk-flex uk-flex-middle">
							<div class="uk-flex-1">
								<ScCardTitle>
									Task Board
								</ScCardTitle>
								<p class="sc-color-secondary uk-margin-remove uk-text-medium">
									Get Things Done
								</p>
							</div>
							<div class="md-bg-red-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round">
								<i class="mdi mdi-bug md-color-white"></i>
							</div>
						</nuxt-link>
					</ScCard>
				</div>
				<div>
					<ScCard>
						<nuxt-link to="/pages/chat" class="sc-padding sc-padding-medium-ends uk-flex uk-flex-middle">
							<div class="uk-flex-1">
								<ScCardTitle>
									Chat
								</ScCardTitle>
								<p class="sc-color-secondary uk-margin-remove uk-text-medium">
									Get in Touch with Friends
								</p>
							</div>
							<div class="md-bg-deep-purple-600 uk-flex uk-flex-middle sc-padding-medium sc-padding-small-ends sc-round">
								<i class="mdi mdi-message-outline md-color-white"></i>
							</div>
						</nuxt-link>
					</ScCard>
				</div>
			</div>

			<div class="uk-child-width-1-3@l uk-child-width-1-2@m uk-grid" data-uk-grid>
				<div>
					<ScCard>
						<ScCardTitle>
							Revenue
						</ScCardTitle>
						<ScCardBody>
							<div id="container"></div>
						</ScCardBody>
					</ScCard>
				</div>
				<div>
					<ScCard>
						<ScCardTitle>
							Email Subscribers
						</ScCardTitle>
						<ScCardBody>
							
						</ScCardBody>
					</ScCard>
				</div>
				<div>
					<ScCard>
						<ScCardTitle>
							Returns
						</ScCardTitle>
						<ScCardBody>
							
						</ScCardBody>
					</ScCard>
				</div>
			</div>

			<div class="uk-grid" data-uk-grid>
				<div class="uk-width-2-3@l">
					<ScCard>
						<ScCardTitle>
							Sales report
						</ScCardTitle>
						<div class="sc-padding sc-padding-medium-ends md-bg-grey-100">
							<div class=" uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
								<div class="uk-flex-1">
									<div class="uk-button-group sc-button-group-outline">
										<button class="sc-button sc-button-default sc-button-outline sc-button-small" :class="{'uk-active': activePeriod === 'hours'}" @click="setChartPeriod('hours')">
											Hours
										</button>
										<button class="sc-button sc-button-default sc-button-outline sc-button-small" :class="{'uk-active': activePeriod === 'week'}" @click="setChartPeriod('week')">
											Week
										</button>
										<button class="sc-button sc-button-default sc-button-outline sc-button-small" :class="{'uk-active': activePeriod === 'months'}" @click="setChartPeriod('months')">
											Months
										</button>
										<button class="sc-button sc-button-default sc-button-outline sc-button-small" :class="{'uk-active': activePeriod === 'year'}" @click="setChartPeriod('year')">
											Years
										</button>
									</div>
								</div>
								<div class="uk-flex uk-width-auto@s">
									<a id="sc-chart-reload" href="javascript:void(0)">
										<i class="mdi mdi-reload sc-color-secondary sc-icon-square"></i>
									</a>
									<a id="sc-chart-save-image" href="javascript:void(0)">
										<i class="mdi mdi-floppy sc-color-secondary sc-icon-square"></i>
									</a>
								</div>
							</div>
						</div>
						<ScCardContent>
							<div class="sc-padding-medium">
								<div id="graphs"></div>
							</div>
						</ScCardContent>
					</ScCard>
				</div>
				<div class="uk-width-1-3@l">
					<ScCard>
						<ScCardTitle>
							Top Referals
						</ScCardTitle>
						<ScCardBody>
							<div id="myplot"></div>
						</ScCardBody>
					</ScCard>
				</div>
			</div>

			<ScCard class="uk-margin-top">
				<ScCardTitle>
					Latest Orders
				</ScCardTitle>
				<ScCardBody>
					<div class="uk-overflow-auto">
						<table class="uk-table uk-table-striped uk-table-hover uk-table-middle">
							<thead>
								<tr>
									<th class="uk-table-shrink"></th>
									<th>Product</th>
									<th>Customer</th>
									<th>Order ID</th>
									<th class="uk-text-center">
										Quantity
									</th>
									<th class="uk-text-right">
										Price
									</th>
									<th class="uk-table-shrink">
										Status
									</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(order, index) in orders" :key="order.name">
									<td class="uk-text-right">
										{{ index + 1 }}
									</td>
									<td class="uk-text-nowrap">
										<a href="javascript:void(0)" class="sc-text-semibold">
											{{ order.name }}
										</a>
									</td>
									<td class="uk-text-nowrap">
										{{ order.user }}
									</td>
									<td># {{ order.id }}</td>
									<td class="uk-text-center">
										{{ order.quantity }}
									</td>
									<td class="uk-text-right">
										${{ order.price }}
									</td>
									<td>
										<span v-if="order.status === 'pending'" class="uk-label uk-label-warning">
											{{ order.status }}
										</span>
										<span v-if="order.status === 'canceled'" class="uk-label uk-label-danger">
											{{ order.status }}
										</span>
										<span v-if="order.status === 'on hold'" class="uk-label uk-label-default">
											{{ order.status }}
										</span>
										<span v-if="order.status === 'sent'" class="uk-label uk-label-success">
											{{ order.status }}
										</span>
									</td>
									<td><a href="javascript:void(0)" class="mdi mdi-file-outline sc-icon-square"></a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import { scColors } from '~/assets/js/utils';
import * as d3 from 'd3';
import moment from '~/plugins/moment'

export default {
	name: 'DashboardV2',
	components: {
		BillboardChart: process.client ? () => import('~/components/billboard-charts') : null
	},
	data: () => ({
		appMounted: false,
		activePeriod: 'months',
		salesReportChart: '',
		revenueChartLoaded: false,
		emailSubscribersLoaded: false,
		returnsChartLoaded: false,
		salesReportChartLoaded: false,
		referalsChartLoaded: false,
		orders: [
			{
				id: "rAiLU1Oa",
				name: "Samsung 128GB 100MB/s (U3) MicroSD",
				price: "19.99",
				status: "sent",
				user: "Juan McDonald",
				quantity: 3
			}, {
				id: "wyB8rv5M",
				name: "Nintendo Switch – Neon Red and Neon Blue Joy-Con",
				price: "299.00",
				status: "canceled",
				user: "Ella Douglas",
				quantity: 2
			}, {
				id: "jlV7rLct",
				name: "Oral-B Black Pro 1000 Power Rechargeable Electric Toothbrush",
				price: "39.94",
				status: "pending",
				user: "Josie Holt",
				quantity: 2
			}, {
				id: "tXJA-ULg",
				name: "iRobot Roomba 960 Robot Vacuum with Wi-Fi Connectivity",
				price: "314.30",
				status: "pending",
				user: "Rosie Underwood",
				quantity: 3
			}, {
				id: "uYZmbsI6",
				name: "Fujitsu ScanSnap iX500 Color Duplex Desk Scanner for Mac and PC",
				price: "404.95",
				status: "sent",
				user: "Benjamin Hansen",
				quantity: 1
			}, {
				id: "OCgv97dH",
				name: "Samsung Galaxy Watch (46mm) Silver (Bluetooth)",
				price: "349.99",
				status: "on hold",
				user: "Abbie Lyons",
				quantity: 1
			}, {
				id: "Php0QdIK",
				name: "Sonos Play:1 – Compact Wireless Home Smart Speaker for Streaming Music",
				price: "149.00",
				status: "on hold",
				user: "Willie McCoy",
				quantity: 2
			}, {
				id: "o4qM28y-",
				name: "Fitbit Charge 3 Fitness Activity Tracker",
				price: "149.95",
				status: "canceled",
				user: "Ryan Davis",
				quantity: 3
			}, {
				id: "sr7Hi5kz",
				name: "Dyson Cyclone V10 Absolute Lightweight Cordless Stick Vacuum Cleaner",
				price: "527.94",
				status: "pending",
				user: "Elijah Morton",
				quantity: 2
			}, {
				id: "5LTAP0hU",
				name: "Logitech Harmony Elite Remote Control",
				price: "184.99",
				status: "sent",
				user: "Addie Wade",
				quantity: 3
			}
		]
	}),
	computed: {
		revenueChart () {
			const self = this;
			return {
				data: {
					x: "x",
					columns: [
						["x", "2019-01-01", "2019-02-01", "2019-03-01", "2019-04-01", "2019-05-01", "2019-06-01"],
						["data1", 42543, 65240, 52638, 73460, 46320, 52800]
					],
					types: {
						data1: "spline"
					},
					colors: {
						data1: scColors.multi[0]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: "%b"
						}
					},
					y: {
						show: false
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: false,
						lines: [
							{
								value: 54000,
								text: "Target"
							}
						]
					}
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('MMMM');
						},
						value (value, ratio, id) {
							if (id === 'data1') {
								return '$' + d3.format(',')(value);
							}
						}
					}
				},
				transition: {
					duration: 0
				},
				legend: {
					show: false
				}
			}
		},
		emailSubscribers () {
			const self = this;
			return {
				data: {
					x: "x",
					columns: [
						["x", "2019-01-01", "2019-02-01", "2019-03-01", "2019-04-01", "2019-05-01", "2019-06-01"],
						["data1", 120, 72, 245, 181, 42, 212]
					],
					types: {
						data1: "bar"
					},
					colors: {
						data1: scColors.multi[3]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: "%b"
						}
					},
					y: {
						show: false
					}
				},
				grid: {
					x: {
						show: false,
						lines: [
							{
								value: "2019-04-18",
								text: "New Campaign"
							}
						]
					},
					y: {
						show: false
					}
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('MMMM');
						}
					}
				},
				transition: {
					duration: 0
				},
				legend: {
					show: false
				}
			}
		},
		returnsChart () {
			const self = this;
			return {
				data: {
					x: "x",
					columns: [
						["x", "2019-01-01", "2019-02-01", "2019-03-01", "2019-04-01", "2019-05-01", "2019-06-01"],
						["data1", 41, 18, 30, 21, 35, 22]
					],
					types: {
						data1: "line"
					},
					colors: {
						data1: scColors.multi[1]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: "%b"
						}
					},
					y: {
						show: false
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: false,
						lines: [
							{
								value: 24,
								text: "Target"
							}
						]
					}
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('MMMM');
						}
					}
				},
				transition: {
					duration: 0
				},
				legend: {
					show: false
				}
			}
		},
		referalsChart () {
			return {
				data: {
					columns: [
						["Google", 125234],
						["Bookmarks", 104234],
						["Facebook", 78342],
						["Envato", 41895],
						["Twitter", 23619],
						["Bing", 4268]
					],
					type: "donut"
				},
				transition: {
					duration: 0
				},
				legend: {
					position: 'right'
				},
				color: {
					pattern: scColors.multi
				}
			}
		},
		salesReportDataHours () {
			const self = this;
			return {
				data: {
					x: "x",
					xFormat: '%Y-%m-%d %H:%M',
					columns: [
						['x', '2019-04-08 00:00', '2019-04-08 01:00', '2019-04-08 02:00', '2019-04-08 03:00', '2019-04-08 04:00', '2019-04-08 05:00', '2019-04-08 06:00', '2019-04-08 07:00', '2019-04-08 08:00', '2019-04-08 09:00', '2019-04-08 10:00', '2019-04-08 11:00', '2019-04-08 12:00', '2019-04-08 13:00', '2019-04-08 14:00', '2019-04-08 15:00', '2019-04-08 16:00', '2019-04-08 17:00', '2019-04-08 18:00', '2019-04-08 19:00', '2019-04-08 20:00', '2019-04-08 21:00', '2019-04-08 22:00', '2019-04-08 23:00', '2019-04-08 24:00'],
						["data1", '220', '320', '280', '420', '600', '816', '1210.22', '1421.42', '1503.11', '1311', '1528', '1802.31', '1558.73', '1649.04', '1523.36', '1306.55', '2143.92', '2041.04', '1830.24', '1921', '1842', '1420', '842', '531.44']
					],
					names: {
						data1: "Sale"
					},
					types: {
						data1: "bar"
					},
					colors: {
						data1: scColors.multi[4]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: '%H',
							culling: true
						}
					},
					y: {
						show: true,
						tick: {
							format (x) { return d3.format("$,")(x); }
						}
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: false
					}
				},
				bar: {
					width: {
						ratio: 0.8,
						max: 24
					}
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('HH:mm');
						},
						value (value, ratio, id) {
							if (id === 'data1') {
								return '$' + d3.format(',')(value);
							}
						}
					}
				},
				transition: {
					duration: 0
				},
				legend: {
					show: false
				}
			}
		},
		salesReportDataWeek () {
			const self = this;
			return {
				data: {
					x: "x",
					xFormat: '%Y-%m-%d',
					columns: [
						['x', '2019-04-08', '2019-04-09', '2019-04-10', '2019-04-11', '2019-04-12', '2019-04-13', '2019-04-14'],
						["data1", '220', '320', '280', '420', '600', '816', '1210.22']
					],
					names: {
						data1: "Sale"
					},
					types: {
						data1: "bar"
					},
					colors: {
						data1: scColors.multi[0]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: "%A",
							culling: false
						}
					},
					y: {
						show: true,
						tick: {
							format (x) { return d3.format("$,")(x); }
						}
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: false
					}
				},
				bar: {
					width: {
						ratio: 0.8,
						max: 48
					}
				},
				transition: {
					duration: 0
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('dddd');
						},
						value (value, ratio, id) {
							if (id === 'data1') {
								return '$' + d3.format(',')(value);
							}
						}
					}
				},
				legend: {
					show: false
				}
			}
		},
		salesReportDataMonths () {
			const self = this;
			return {
				data: {
					x: "x",
					xFormat: '%Y-%m-%d',
					columns: [
						['x', '2018-01-01', '2018-02-01', '2018-03-01', '2018-04-01', '2018-05-01', '2018-06-01', '2018-07-01', '2018-08-01', '2018-09-01', '2018-10-01', '2018-11-01', '2018-12-01'],
						["data1", '140231', '160223', '130221', '180221', '200236', '214566', '190322', '201234', '140234', '152324', '210612', '280332']
					],
					names: {
						data1: "Sale"
					},
					types: {
						data1: "bar"
					},
					colors: {
						data1: scColors.multi[0]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: "%b",
							culling: false
						}
					},
					y: {
						show: true,
						tick: {
							format (x) { return d3.format("$,")(x); }
						}
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: false
					}
				},
				bar: {
					width: {
						ratio: 0.8,
						max: 36
					}
				},
				transition: {
					duration: 0
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('MMMM');
						},
						value (value, ratio, id) {
							if (id === 'data1') {
								return '$' + d3.format(',')(value);
							}
						}
					}
				},
				legend: {
					show: false
				}
			}
		},
		salesReportDataYear () {
			const self = this;
			return {
				data: {
					x: "x",
					xFormat: '%Y-%m-%d',
					columns: [
						['x', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01'],
						["data1", '1324235.23', '1524236.83', '1842341.36', '2235433.27', '2114523.83', '2602362.44', '2834428.11'],
					],
					names: {
						data1: "Sale"
					},
					types: {
						data1: "bar"
					},
					colors: {
						data1: scColors.multi[5]
					}
				},
				axis: {
					x: {
						type: "timeseries",
						tick: {
							fit: true,
							format: "%Y",
							culling: false
						}
					},
					y: {
						show: true,
						tick: {
							format (x) { return d3.format("$,")(x); }
						}
					}
				},
				grid: {
					x: {
						show: false
					},
					y: {
						show: false
					}
				},
				bar: {
					width: {
						ratio: 0.8,
						max: 48
					}
				},
				transition: {
					duration: 0
				},
				tooltip: {
					format: {
						title (d) {
							return self.$moment(d).format('YYYY');
						},
						value (value, ratio, id) {
							if (id === 'data1') {
								return '$' + d3.format(',')(value);
							}
						}
					}
				},
				legend: {
					show: false
				}
			}
		},
	},
	created () {
		this.salesReportChart = this.salesReportDataMonths;
	},
	mounted () {
		setTimeout(() => {
			this.appMounted = true;
			console.log(this);
		}, 200);

		this.test_d3();

		this.test_graph1();

	},
	methods: {
		setChartPeriod (period) {
			if(period === 'hours') {
				this.salesReportChart = this.salesReportDataHours
			}
			if(period === 'week') {
				this.salesReportChart = this.salesReportDataWeek
			}
			if(period === 'months') {
				this.salesReportChart = this.salesReportDataMonths
			}
			if(period === 'year') {
				this.salesReportChart = this.salesReportDataYear
			}
			this.activePeriod = period
		},

		test_d3 () {
			const data = [{letter: "A", frequency: 0.08167},
						{letter: "B", frequency: 0.01492},
						{letter: "C", frequency: 0.02782}];
						const width = 928;
			const height = 500;
			const marginTop = 30;
			const marginRight = 0;
			const marginBottom = 30;
			const marginLeft = 40;

			// Declare the x (horizontal position) scale.
			const x = d3.scaleBand()
				.domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
				.range([marginLeft, width - marginRight])
				.padding(0.1);
			
			// Declare the y (vertical position) scale.
			const y = d3.scaleLinear()
				.domain([0, d3.max(data, (d) => d.frequency)])
				.range([height - marginBottom, marginTop]);

			// Create the SVG container.
			const svg = d3.create("svg")
				.attr("width", width)
				.attr("height", height)
				.attr("viewBox", [0, 0, width, height])
				.attr("style", "max-width: 100%; height: auto;");

			// Add a rect for each bar.
			svg.append("g")
				.attr("fill", "steelblue")
				.selectAll()
				.data(data)
				.join("rect")
				.attr("x", (d) => x(d.letter))
				.attr("y", (d) => y(d.frequency))
				.attr("height", (d) => y(0) - y(d.frequency))
				.attr("width", x.bandwidth());

			// Add the x-axis and label.
			svg.append("g")
				.attr("transform", `translate(0,${height - marginBottom})`)
				.call(d3.axisBottom(x).tickSizeOuter(0));

			// Add the y-axis and label, and remove the domain line.
			svg.append("g")
				.attr("transform", `translate(${marginLeft},0)`)
				.call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
				.call(g => g.select(".domain").remove())
				.call(g => g.append("text")
					.attr("x", -marginLeft)
					.attr("y", 10)
					.attr("fill", "currentColor")
					.attr("text-anchor", "start")
					.text("↑ Frequency (%)"));

			// Return the SVG element.
			container.append(svg.node());
		},

		test_graph () {
			// Specify the dimensions of the chart.
			const data = {
				nodes: [{id: "Myriel", group: 1}, {id: "Napoleon", group: 1}],
				links: [{source: "Napoleon", target: "Myriel", value: 1}]
			};
			const width = 928;
			const height = 600;

			// Specify the color scale.
			const color = d3.scaleOrdinal(d3.schemeCategory10);

			// The force simulation mutates links and nodes, so create a copy
			// so that re-evaluating this cell produces the same result.
			const links = data.links.map(d => ({...d}));
			const nodes = data.nodes.map(d => ({...d}));

			// Create a simulation with several forces.
			const simulation = d3.forceSimulation(nodes)
				.force("link", d3.forceLink(links).id(d => d.id))
				.force("charge", d3.forceManyBody())
				.force("center", d3.forceCenter(width / 2, height / 2))
				.on("tick", ticked);

			// Create the SVG container.
			const svg = d3.create("svg")
				.attr("width", width)
				.attr("height", height)
				.attr("viewBox", [0, 0, width, height])
				.attr("style", "max-width: 100%; height: auto;");

			// Add a line for each link, and a circle for each node.
			const link = svg.append("g")
				.attr("stroke", "#999")
				.attr("stroke-opacity", 0.6)
				.selectAll()
				.data(links)
				.join("line")
				.attr("stroke-width", d => Math.sqrt(d.value));

			const node = svg.append("g")
				.attr("stroke", "#fff")
				.attr("stroke-width", 1.5)
				.selectAll()
				.data(nodes)
				.join("circle")
				.attr("r", 5)
				.attr("fill", d => color(d.group));

			node.append("title")
				.text(d => d.id);

			// Add a drag behavior.
			node.call(d3.drag()
					.on("start", dragstarted)
					.on("drag", dragged)
					.on("end", dragended));

			// Set the position attributes of links and nodes each time the simulation ticks.
			function ticked() {
				link
					.attr("x1", d => d.source.x)
					.attr("y1", d => d.source.y)
					.attr("x2", d => d.target.x)
					.attr("y2", d => d.target.y);

				node
					.attr("cx", d => d.x)
					.attr("cy", d => d.y);
			}

			// Reheat the simulation when drag starts, and fix the subject position.
			function dragstarted(event) {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				event.subject.fx = event.subject.x;
				event.subject.fy = event.subject.y;
			}

			// Update the subject (dragged node) position during drag.
			function dragged(event) {
				event.subject.fx = event.x;
				event.subject.fy = event.y;
			}

			// Restore the target alpha so the simulation cools after dragging ends.
			// Unfix the subject position now that it’s no longer being dragged.
			function dragended(event) {
				if (!event.active) simulation.alphaTarget(0);
				event.subject.fx = null;
				event.subject.fy = null;
			}

			// When this cell is re-run, stop the previous simulation. (This doesn’t
			// really matter since the target alpha is zero and the simulation will
			// stop naturally, but it’s a good practice.)
			// invalidation.then(() => simulation.stop());

			// return svg.node();
			graph.append(svg.node());
		},

		linkArc(d) {
			const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
			return `
				M${d.source.x},${d.source.y}
				A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
			`;
		},
		test_graph1 () {
			const drag = simulation => {
				
				function dragstarted(event, d) {
					if (!event.active) simulation.alphaTarget(0.3).restart();
					d.fx = d.x;
					d.fy = d.y;
				}
				
				function dragged(event, d) {
					d.fx = event.x;
					d.fy = event.y;
				}
				
				function dragended(event, d) {
					if (!event.active) simulation.alphaTarget(0);
					d.fx = null;
					d.fy = null;
				}
				
				return d3.drag()
					.on("start", dragstarted)
					.on("drag", dragged)
					.on("end", dragended);
			}

			const suits = [
				{source: "Microsoft", target: "Amazon", type: "licensing"},
				{source: "Microsoft", target: "HTC", type: "licensing"},
				{source: "Samsung", target: "Apple", type: "suit"},
				{source: "Motorola", target: "Apple", type: "suit"},
				{source: "Nokia", target: "Apple", type: "resolved"},
				{source: "HTC", target: "Apple", type: "suit"}
			]
			const width = 928;
			const height = 600;
			const types = Array.from(new Set(suits.map(d => d.type)));
			const nodes = Array.from(new Set(suits.flatMap(l => [l.source, l.target])), id => ({id}));
			const links = suits.map(d => Object.create(d))

			const color = d3.scaleOrdinal(types, d3.schemeCategory10);

			const simulation = d3.forceSimulation(nodes)
				.force("link", d3.forceLink(links).id(d => d.id))
				.force("charge", d3.forceManyBody().strength(-400))
				.force("x", d3.forceX())
				.force("y", d3.forceY());

			const svg = d3.create("svg")
				.attr("viewBox", [-width / 2, -height / 2, width, height])
				.attr("width", width)
				.attr("height", height)
				.attr("style", "max-width: 100%; height: auto; font: 12px sans-serif;");
			
			// Per-type markers, as they don't inherit styles.
			svg.append("defs").selectAll("marker")
				.data(types)
				.join("marker")
				.attr("id", d => `arrow-${d}`)
				.attr("viewBox", "0 -5 10 10")
				.attr("refX", 15)
				.attr("refY", -0.5)
				.attr("markerWidth", 6)
				.attr("markerHeight", 6)
				.attr("orient", "auto")
				.append("path")
				.attr("fill", color)
				.attr("d", "M0,-5L10,0L0,5");

			const link = svg.append("g")
				.attr("fill", "none")
				.attr("stroke-width", 1.5)
				.selectAll("path")
				.data(links)
				.join("path")
				.attr("stroke", d => color(d.type))
				.attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

			const node = svg.append("g")
				.attr("fill", "currentColor")
				.attr("stroke-linecap", "round")
				.attr("stroke-linejoin", "round")
				.selectAll("g")
				.data(nodes)
				.join("g")
				.call(drag(simulation));

			node.append("circle")
				.attr("stroke", "white")
				.attr("stroke-width", 1.5)
				.attr("r", 4);

			node.append("text")
				.attr("x", 8)
				.attr("y", "0.31em")
				.text(d => d.id)
				.clone(true).lower()
				.attr("fill", "none")
				.attr("stroke", "white")
				.attr("stroke-width", 3);

			simulation.on("tick", () => {
				link.attr("d", this.linkArc);
				node.attr("transform", d => `translate(${d.x},${d.y})`);
			});

			// invalidation.then(() => simulation.stop());

			// return Object.assign(svg.node(), {scales: {color}});

			// graphs.append(svg.node(), {scales: {color}});
			graphs.append(svg.node(), {scales: {color}});

		}
	}
}
</script>

