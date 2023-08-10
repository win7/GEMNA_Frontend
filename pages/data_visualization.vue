<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<h3 class="uk-margin-bottom">
				Data Visualization
			</h3>

			<!-- <div class="uk-grid" data-uk-grid>
				<div class="uk-width-xxlarge">
					<ScCard>
						<ScCardTitle>
							Consult
						</ScCardTitle>
						<ScCardBody>
							<!-- <div id="my_dataviz" style="border: 1px solid #333;"></div>
							<div id="clustergrammer-container"></div> -- >

							<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle" id="main"></div>
						</ScCardBody>
					</ScCard>
				</div>
			</div> -->

			<div class="uk-grid" data-uk-grid>
				<div class="uk-width-xxlarge">
					<ScCard>
						<ScCardTitle>
							Consult
						</ScCardTitle>
						<ScCardBody>
							<form>
								<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
									<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
										Personal info
									</p> -->
									<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
										<div>
											<label class="uk-form-label">
												Experiment code
											</label>
											<div class="uk-form-controls">
												<ScInput v-model.trim="form1.id" :error-state="$v.form1.id.$error" :validator="$v.form1.id" mode="outline"></ScInput>
												
												<ul class="sc-vue-errors">
													<li v-if="!$v.form1.id.required">
														Field is required
													</li>
												</ul>
											</div>
										</div>
									</div>
								</fieldset>
								<div class="uk-margin-top">
									<!-- <button class="sc-button sc-button-primary" :disabled="submitStatus1 === 'PENDING'" @click="submitForm1($event)">
										Search
									</button> -->
									<button class="sc-button sc-button-primary" :class="{'sc-button-progress-overlay': submitStatus1 === 'PENDING'}" :disabled="submitStatus1 === 'PENDING'" @click="submitForm1($event)">
										<span>Search</span>
										<transition name="scale-up">
											<span v-show="submitStatus1 === 'PENDING'" class="sc-button-progress-layer">
												<ScProgressCircular></ScProgressCircular>
											</span>
										</transition>
									</button>
								</div>
							</form>
						</ScCardBody>
					</ScCard>
				</div>
			</div>

			<div class="uk-grid" data-uk-grid>
				<div class="uk-width-1-4@l">
					<ScCard>
						<ScCardTitle>
							Graphs Details
						</ScCardTitle>
						<ScCardBody>
							<div class="uk-overflow-auto">
								<table class="uk-table uk-table-striped">
									<thead>
										<tr>
											<th class="uk-text-nowrap">
												Group
											</th>
											<th class="uk-text-nowrap">
												Nodes
											</th>
											<th class="uk-text-nowrap">
												Edges
											</th>
											<th class="uk-text-nowrap">
												Density
											</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item in graph_details">
											<td> {{ item.name }} </td>
											<td> {{ item.nodes }} </td>
											<td> {{ item.edges }} </td>
											<td> {{ item.density }} </td>
										</tr>
									</tbody>
								</table>
							</div>
						</ScCardBody>
					</ScCard>
				</div>
				<div class="uk-width-3-4@l">
					<ScCard>
						<ScCardTitle>
							Labels
						</ScCardTitle>
						<ScCardBody>
							<div class="uk-overflow-auto">
								<table class="uk-table uk-table-striped">
									<thead>
										<tr>
											<th class="uk-text-nowrap">
												Group
											</th>
											<th v-for="item in labels" class="uk-text-nowrap">
												{{ item }}
											</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item1 in graph_details">
											<td> {{ item1.name }} </td>
											<td v-for="item2 in item1.labels">
												{{ item2.count }}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</ScCardBody>
					</ScCard>
				</div>
			</div>

			<div class="uk-grid" data-uk-grid v-if="flag">
				<div class="uk-width-1-4@l">
					<ScCard>
						<ScCardTitle>
							Queries
						</ScCardTitle>
						<ScCardBody>
							<form>
								<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
									<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
										Personal info
									</p> -->
									<div class="uk-child-width-1-1@m uk-grid" data-uk-grid>
										<div>
											<label class="uk-form-label">
												Metabolities
											</label>
											<div class="uk-form-controls">
												<client-only>
													<Select2
														v-model="form2.nodes"
														:options="usNodes"
														:settings="{ 'width': '100%', 'placeholder': 'Select metabolities...' }"
														:error-state="$v.form2.nodes.$error" 
														:validator="$v.form2.nodes"
														multiple
													></Select2>
												</client-only>
												<ul class="sc-vue-errors">
													<li v-if="!$v.form2.nodes.required">
														Field is required
													</li>
												</ul>
											</div>
										</div>
										<div>
											<label class="uk-form-label">
												Group
											</label>
											<div class="uk-form-controls">
												<client-only>
													<Select2
														v-model="form2.group"
														:options="usGroups"
														:settings="{ 'width': '100%', 'placeholder': 'Select metabolities...', 'closeOnSelect': true }"
														:error-state="$v.form2.group.$error" 
														:validator="$v.form2.group"
													></Select2>
												</client-only>
												<ul class="sc-vue-errors">
													<li v-if="!$v.form2.group.required">
														Field is required
													</li>
												</ul>
											</div>
										</div>
									</div>
								</fieldset>
								<div class="uk-margin-top">
									<button class="sc-button sc-button-primary" :class="{'sc-button-progress-overlay': submitStatus2 === 'PENDING'}" :disabled="submitStatus2 === 'PENDING'" @click="submitForm2($event)">
										<span>Plot</span>
										<transition name="scale-up">
											<span v-show="submitStatus2 === 'PENDING'" class="sc-button-progress-layer">
												<ScProgressCircular></ScProgressCircular>
											</span>
										</transition>
									</button>
								</div>
							</form>
						</ScCardBody>
					</ScCard>
				</div>

				<div class="uk-width-3-4@l">
					<ScCard>
						<ScCardTitle>
							Interpretation
						</ScCardTitle>
						<!-- <div class="sc-padding sc-padding-medium-ends md-bg-grey-100">
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
						</div> -->
						<ScCardContent>
							<div class="sc-padding-medium">
								<!-- <div id="graphs" style="border: 1px solid #333;"></div>
								<div id="chart-container" style="width: 800px; height: 600px;"></div> -->
								<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle" id="metabolomic-network"></div>
								<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle" id="degree-network"></div>
								<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle" id="heat-map"></div>
							</div>
						</ScCardContent>
					</ScCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { scColors } from '~/assets/js/utils';
import ScInput from '~/components/Input';
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';
import { ScProgressCircular } from '~/components/progress'

import swal from 'sweetalert2';
// import * as clustergrammer from 'clustergrammer';
// import * as d3 from 'd3';
// import clustergrammer from 'https://cdn.jsdelivr.net/npm/clustergrammer@1.19.5/+esm'
import * as echarts from 'echarts';

export default {
	name: 'DataVisualization',
	components: {
		ScInput,
		Select2: process.client ? () => import('~/components/Select2') : null,
		// MultiSelect: process.client ? () => import('~/components/Multiselect') : null
		ScProgressCircular,
	},
	mixins: [validationMixin],
	data: () => ({
		status: "",
		flag: false,
		submitStatus1: null,
		submitStatus2: null,

		form1: {
			id: "e6609b8a-f965-4ff8-b07d-b37a8c1c6291",
		},
		form2: {
			id: "e6609b8a-f965-4ff8-b07d-b37a8c1c6291",
			nodes: ["74.0249", "129.0192", "130.0875"], // ["100.00072", "128.89351", "132.88524", "135.54123", "152.99445"],
			group: "WT-pck1", // "FCSglc-DMA"
		},

		graph_details: [],
		graph_nodes: [],
		labels: ['PP', 'Pp', 'PN', 'Pn', 'P?', 'pP', 'pp', 'pN', 'pn', 'p?', 'NP', 'Np', 'NN', 'Nn', 'N?', 'nP', 'np', 'nN', 'nn', 'n?', '?P', '?p', '?N', '?n'],
		options: [],
		groups: [],
	}),
	computed: {
		usNodes () {
			return this.options.map(function (obj) {
				obj.id = obj.id || obj.rank;
				obj.text = obj.text || obj.city;
				return obj;
			});
		},
		usGroups () {
			return this.groups.map(function (obj) {
				obj.id = obj.id || obj.rank;
				obj.text = obj.text || obj.city;
				return obj;
			});
		}
	},
	created () {
		
	},
	mounted () {
		/* setTimeout(() => {
			this.appMounted = true;
			console.log(this);
		}, 200); */

		// this.test_d3();

		// this.metabolomic_network();

		// this.test1();
		// this.test2();
		// this.test3();
		// this.test4();
		// this.metabolomic_network([]);
		// this.testok();

	},
	validations: {
		form1: {
			id: {
				required,
			}
		},
		form2: {
			id: {
				required,
			},
			nodes: {
				required,
			},
			group: {
				required,
			}
		}
	},
	watch: {
		
	},
	methods: {
		// Function to set edge color based on tags
		getEdgeColor(link) {
			// Define a mapping between tags and colors
			const colorMapping = {
				'Tag 1': 'blue',
				'Tag 2': 'green',
				// Add more tag-color mappings as needed
			};
			
			// Return the color for the link based on its tag
			return colorMapping[link.tag];
		},
		async submitForm1 (e) {
			e.preventDefault();
			this.$v.form1.$touch();
			if (this.$v.form1.$invalid) {
				this.submitStatus1 = 'ERROR'
			} else {
				this.submitStatus1 = 'PENDING';

				await this.$axios.get(`/api/experiments/${this.form1.id}/`).then((response) => {
					console.log(1, response.data);		
					if (response.status === 200) {
						swal.fire(
							response.data.message,
							``,
							'success'
						);
						this.form2.id = this.form1.id;
						this.flag = true;

						this.graph_details = response.data.data.details;
						this.graph_nodes = response.data.data.nodes;
						
						this.groups = [];
						for (let i = 0; i < this.graph_details.length; i++) {
							this.groups.push({
								id: this.graph_details[i].name,
								text: this.graph_details[i].name
							})
						}

						this.options = [];
						for (let i = 0; i < this.graph_nodes.length; i++) {
							this.options.push({
								id: this.graph_nodes[i],
								text: this.graph_nodes[i]
							})
						}
					}
				}).catch((error) => {
					console.log(error.response);
					swal.fire(
						error.response.data.message,
						'',
						'error'
					);
				});
			}
			this.submitStatus1 = 'OK'
		},
		async submitForm2 (e) {
			e.preventDefault();
			this.$v.form2.$touch();
			if (this.$v.form2.$invalid) {
				this.submitStatus2 = 'ERROR'

			} else {
				this.submitStatus2 = 'PENDING';
				await this.$axios.post("/api/experiments-consult/", this.form2).then((response) => {
					console.log(1, response.data);
					if (response.status === 200) {
						swal.fire(
							response.data.message,
							``,
							'success'
						);
						
						const suits = response.data.data.changes_sub;
						this.metabolomic_network(suits);

						const biocyc = response.data.data.biocyc;
						this.heatmap_biocyc(biocyc);

						const deegres = response.data.data.degrees;
						this.degree_network(deegres);
					}
				}).catch((error) => {
					console.log(error.response);
					swal.fire(
						error.response.data.message,
						'',
						'error'
					);
				});
			}
			this.submitStatus2 = 'OK'
		},
		testok () {
			var chartContainer = document.getElementById('main');
var myChart = echarts.init(chartContainer);

// Sample data for the graph nodes and edges
var nodes = [
  { name: 'Node A' },
  { name: 'Node B' },
  { name: 'Node C' },
];

var edges = [
  { source: 'Node A', target: 'Node B', value: 5, label: 'Edge Label 1' },
  { source: 'Node B', target: 'Node C', value: 8, label: 'Edge Label 2' },
  { source: 'Node C', target: 'Node A', value: 3, label: 'Edge Label 3' },
];

// ECharts option object
var option = {
  series: [
    {
      type: 'graph',
	  layout: 'force',
	  roam: true,
      data: nodes,
      links: edges,
      edgeSymbol: ['none', 'arrow'], // Optional: Arrow symbol for directed edges
      edgeSymbolSize: 8, // Optional: Arrow size for directed edges
      label: {
        show: true, // Show the edge labels
        position: 'middle', // Position of the edge labels (middle of the edge)
        fontSize: 12, // Font size for the edge labels
        color: '#333', // Font color for the edge labels
        formatter: function (params) {
          // Custom formatter function for the edge labels
          return params.data.label; // Use the 'label' property from the edge data
        },
      },
      lineStyle: {
        // Set the line style for the edges
        width: 2,
      },
    },
  ],
  legend: {
    data: edges.map((edge) => edge.label), // Use the edge labels as legend data
    formatter: function (name) {
      // Custom legend formatter
      var edge = edges.find((edge) => edge.label === name);
      return `{line|${name}}`;
    },
    textStyle: {
      rich: {
        line: {
          width: 30,
        },
      },
    },
  },
};

// Set the option to the chart and render it
myChart.setOption(option);

		},
		legendFormatter(edges, name) {
			// Find the edge label that corresponds to the legend item
			var edge = edges.find((edge) => edge.label === name);
			if (edge) {
				// Return the custom legend label using the edge label and source/target nodes
				return `${edge.label} (${edge.source} ➔ ${edge.target})`;
			}
			return name; // Use the default legend label if no edge label found
		},
		metabolomic_network (suits) {
			const colors = [{id: "PP", color: "#FF00FF"}, {id: "Pp", color: "#3FFF00"}, {id: "PN", color: "#00FFFF"},
							{id: "Pn", color: "#FFF700"}, {id: "pP", color: "#FF0000"}, {id: "pp", color: "#0000FF"},
							{id: "pN", color: "#006600"}, {id: "pn", color: "#00CC96"}, {id: "NP", color: "#AB63FA"},
							{id: "Np", color: "#FF28FF"}, {id: "NN", color: "#B6E880"}, {id: "Nn", color: "##FF97FF"},
							{id: "nP", color: "#FFA15A"}, {id: "np", color: "#19D3F3"}, {id: "nN", color: "#FF6692"},
							{id: "nn", color: "gray"}];

			const labels = Array.from(new Set(suits.map(d => d.label)));
			const nodes = Array.from(new Set(suits.flatMap(l => [l.source, l.target])), id => ({id: id, name: id}));
			const links = suits.map(obj => ({ ...obj, value: obj.label }))

			// console.log(11, labels);
			// console.log(22, nodes);
			// console.log(33, links);

			links.forEach(function (edge) {
				edge.lineStyle = {
					color: colors.find(obj => obj.id === edge.label).color,
					width: 2, // Line width
					type: 'solid', // Line type ('solid', 'dashed', 'dotted', etc.),
				},
				edge.label = {
					show: true,
					formatter: function(edge) {
						return edge.value;
					}
				}
			});

			var chartDom = document.getElementById('metabolomic-network');
			var myChart = echarts.init(chartDom);
			var option;

			myChart.hideLoading();
			/* graph.nodes.forEach(function (node) {
				node.symbolSize = 10;
			}); */
			option = {
				title: {
					// text: 'Les Miserables',
					subtext: 'Changes',
					top: 'top',
					left: 'center'
				},
				tooltip: {},
				/* legend: 
				{
					// selectedMode: 'single',
					/ * data: graph.links.map(function (a) {
						return a.name;
					}), * /
					data: graph.labels
				}, */
				animationDuration: 1500,
				animationEasingUpdate: 'quinticInOut',
				series: [
					{
						// name: 'Les Miserables',
						type: 'graph',
						layout: 'force',

						data: nodes,
						links: links,
						categories: labels,
						
						force: {
							edgeLength: 100,
							repulsion: 1000,
							gravity: 0.5
						},
						roam: true,
						draggable: true,
						label: {
							show: true,
							position: 'right',
							formatter: '{b}'
						},
						itemStyle: {
							color: "gray"
						},
						lineStyle: {
							// color: "label",
							curveness: 0.3,
							width: 2
						},
						edgeSymbol: ['circle', 'arrow'],
						edgeSymbolSize: [4, 10],
						emphasis: {
							focus: 'adjacency',
							lineStyle: {
								width: 10
							}
						}
					}
				]
			};
			myChart.setOption(option);
		},
		heatmap_biocyc (matrix) {
			// set the dimensions and margins of the graph
			
			/* const source = [...new Set(data.map(obj => obj.source))];
			const target = [...new Set(data.map(obj => obj.target))];

			console.log(source);
			console.log(target); */

			var chartDom = document.getElementById('heat-map');
			var myChart = echarts.init(chartDom);
			var option;

			let yData = ["Before", "After"]; // Object.keys(matrix[0]);
			let xData = []; // Object.keys(matrix);
			
			let data = [];
			for (let i = 0; i < matrix.length; i++) {
				xData.push(i);
				data.push([i, 0, matrix[i].Before]);
				data.push([i, 1, matrix[i].After]);
			}
	
			var minValue = Math.min.apply(null, data.map(item => item[2]));
			var maxValue = Math.max.apply(null, data.map(item => item[2]));

			option = {
				title: {
					// text: 'Les Miserables',
					subtext: 'Heatmap',
					top: 'top',
					left: 'center'
				},
				tooltip: {
					position: 'top'
				},
				grid: {
					// height: '50%',
					// top: '15%'
				},
				xAxis: {
					type: 'category',
					data: xData
				},
				yAxis: {
					type: 'category',
					data: yData
				},
				visualMap: {
					min: minValue,
					max: maxValue,
					calculable: true,
					orient: 'vertical',
    				left: 'right',
    				// bottom: '84%',					
					realtime: false,
					inRange: {
						color: [
							'#313695',
							'#4575b4',
							'#74add1',
							'#abd9e9',
							'#e0f3f8',
							'#ffffbf',
							'#fee090',
							'#fdae61',
							'#f46d43',
							'#d73027',
							'#a50026'
						]
					}
				},
				series: [
					{
						name: 'Correlation',
						type: 'heatmap',
						data: data,
						label: {
							show: false
						},
						emphasis: {
								itemStyle: {
								borderColor: '#333',
								borderWidth: 1
							}
						},
						// progressive: 1000,
						animation: false
					}
				],
				/* dataZoom: [{
					type: 'inside', // Use inside type dataZoom for zooming within the chart area
					xAxisIndex: 0,  // Specify the index of the xAxis component
					filterMode: 'none', // Keep the original data range
				}], */
				dataZoom: [
					{
						type: 'slider', // Use slider type dataZoom for horizontal zooming
						xAxisIndex: 0,
						filterMode: 'none',
					},
					/* {
						type: 'slider', // Use slider type dataZoom for vertical zooming
						yAxisIndex: 0,
						filterMode: 'none',
						orient: 'vertical', // Set orientation to vertical
					} */
				]
			};
			
			option && myChart.setOption(option);			
		},
		degree_network (list) {
			var chartDom = document.getElementById('degree-network');
			var myChart = echarts.init(chartDom);
			var option;

			var x = list.map(d => d[0]);
			var y = list.map(d => d[1]);

			option = {
				title: {
					// text: 'Les Miserables',
					subtext: 'Degrees',
					top: 'top',
					left: 'center'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				xAxis: {
					type: 'category',
					data: x
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						name: 'Degree',
						data: y,
						type: 'bar'
					}
				],
				dataZoom: [{
					type: 'slider', // Use a slider type dataZoom for zooming
					// start: 0,       // Initial zoom starting position
					// end: 10,        // Initial zoom ending position
				}]
			};

			option && myChart.setOption(option);
		},
		test1 () {
			// set the dimensions and margins of the graph
			var margin = {top: 80, right: 25, bottom: 30, left: 40},
			width = 450 - margin.left - margin.right,
			height = 450 - margin.top - margin.bottom;

			// append the svg object to the body of the page
			var svg = d3.select("#my_dataviz")
			// const svg = d3.create("svg")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform",
					"translate(" + margin.left + "," + margin.top + ")");

			//Read the data
			//d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data) {
			// console.log(data);
			let data = [
				{ group: "A", variable: "v1", value: "30" },
				{ group: "A", variable: "v2", value: "30" },
				{ group: "A", variable: "v3", value: "30" },
				{ group: "A", variable: "v4", value: "14" },
				{ group: "A", variable: "v5", value: "59" },
				{ group: "A", variable: "v6", value: "52" },
				{ group: "A", variable: "v7", value: "88" },
				{ group: "A", variable: "v8", value: "20" },
				{ group: "A", variable: "v9", value: "99" },
				{ group: "A", variable: "v10", value: "30" },
				{ group: "B", variable: "v1", value: "37" },
				{ group: "B", variable: "v2", value: "50" },
				{ group: "B", variable: "v3", value: "81" },
				{ group: "B", variable: "v4", value: "79" },
				{ group: "B", variable: "v5", value: "84" },
				{ group: "B", variable: "v6", value: "91" },
				{ group: "B", variable: "v7", value: "82" },
				{ group: "B", variable: "v8", value: "89" },
				{ group: "B", variable: "v9", value: "6" },
				{ group: "B", variable: "v10", value: "67" },
				{ group: "C", variable: "v1", value: "96" },
				{ group: "C", variable: "v2", value: "13" },
				{ group: "C", variable: "v3", value: "98" },
				{ group: "C", variable: "v4", value: "10" },
				{ group: "C", variable: "v5", value: "86" },
				{ group: "C", variable: "v6", value: "23" },
				{ group: "C", variable: "v7", value: "74" },
				{ group: "C", variable: "v8", value: "47" },
				{ group: "C", variable: "v9", value: "73" },
				{ group: "C", variable: "v10", value: "40" },
				{ group: "D", variable: "v1", value: "75" },
				{ group: "D", variable: "v2", value: "18" },
				{ group: "D", variable: "v3", value: "92" },
				{ group: "D", variable: "v4", value: "43" },
				{ group: "D", variable: "v5", value: "16" },
				{ group: "D", variable: "v6", value: "27" },
				{ group: "D", variable: "v7", value: "76" },
				{ group: "D", variable: "v8", value: "24" },
				{ group: "D", variable: "v9", value: "1" },
				{ group: "D", variable: "v10", value: "87" },
				{ group: "E", variable: "v1", value: "44" },
				{ group: "E", variable: "v2", value: "29" },
				{ group: "E", variable: "v3", value: "58" },
				{ group: "E", variable: "v4", value: "55" },
				{ group: "E", variable: "v5", value: "65" },
				{ group: "E", variable: "v6", value: "56" },
				{ group: "E", variable: "v7", value: "9" },
				{ group: "E", variable: "v8", value: "78" },
				{ group: "E", variable: "v9", value: "49" },
				{ group: "E", variable: "v10", value: "36" },
				{ group: "F", variable: "v1", value: "35" },
				{ group: "F", variable: "v2", value: "80" },
				{ group: "F", variable: "v3", value: "8" },
				{ group: "F", variable: "v4", value: "46" },
				{ group: "F", variable: "v5", value: "48" },
				{ group: "F", variable: "v6", value: "100" },
				{ group: "F", variable: "v7", value: "17" },
				{ group: "F", variable: "v8", value: "41" },
				{ group: "F", variable: "v9", value: "33" },
				{ group: "F", variable: "v10", value: "11" },
				{ group: "G", variable: "v1", value: "77" },
				{ group: "G", variable: "v2", value: "62" },
				{ group: "G", variable: "v3", value: "94" },
				{ group: "G", variable: "v4", value: "15" },
				{ group: "G", variable: "v5", value: "69" },
				{ group: "G", variable: "v6", value: "63" },
				{ group: "G", variable: "v7", value: "61" },
				{ group: "G", variable: "v8", value: "54" },
				{ group: "G", variable: "v9", value: "38" },
				{ group: "G", variable: "v10", value: "93" },
				{ group: "H", variable: "v1", value: "39" },
				{ group: "H", variable: "v2", value: "26" },
				{ group: "H", variable: "v3", value: "90" },
				{ group: "H", variable: "v4", value: "83" },
				{ group: "H", variable: "v5", value: "31" },
				{ group: "H", variable: "v6", value: "2" },
				{ group: "H", variable: "v7", value: "51" },
				{ group: "H", variable: "v8", value: "28" },
				{ group: "H", variable: "v9", value: "42" },
				{ group: "H", variable: "v10", value: "7" },
				{ group: "I", variable: "v1", value: "5" },
				{ group: "I", variable: "v2", value: "60" },
				{ group: "I", variable: "v3", value: "21" },
				{ group: "I", variable: "v4", value: "25" },
				{ group: "I", variable: "v5", value: "3" },
				{ group: "I", variable: "v6", value: "70" },
				{ group: "I", variable: "v7", value: "34" },
				{ group: "I", variable: "v8", value: "68" },
				{ group: "I", variable: "v9", value: "57" },
				{ group: "I", variable: "v10", value: "32" },
				{ group: "J", variable: "v1", value: "19" },
				{ group: "J", variable: "v2", value: "85" },
				{ group: "J", variable: "v3", value: "53" },
				{ group: "J", variable: "v4", value: "45" },
				{ group: "J", variable: "v5", value: "71" },
				{ group: "J", variable: "v6", value: "64" },
				{ group: "J", variable: "v7", value: "4" },
				{ group: "J", variable: "v8", value: "12" },
				{ group: "J", variable: "v9", value: "97" },
				{ group: "J", variable: "v10", value: "30" }
			];
  
			// Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
			var myGroups = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ]; // d3.map(data, function(d){return d.group;}).keys()
			var myVars = [ "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10" ]; // d3.map(data, function(d){return d.variable;}).keys()
			
			console.log(data);
			console.log(myGroups);
			console.log(myVars);

			// Build X scales and axis:
			var x = d3.scaleBand()
				.range([ 0, width ])
				.domain(myGroups)
				.padding(0.05);
			svg.append("g")
				.style("font-size", 15)
				.attr("transform", "translate(0," + height + ")")
				.call(d3.axisBottom(x).tickSize(0))
				.select(".domain").remove()

			// Build Y scales and axis:
			var y = d3.scaleBand()
				.range([ height, 0 ])
				.domain(myVars)
				.padding(0.05);
			svg.append("g")
				.style("font-size", 15)
				.call(d3.axisLeft(y).tickSize(0))
				.select(".domain").remove()

			// Build color scale
			var myColor = d3.scaleSequential()
				.interpolator(d3.interpolateInferno)
				.domain([1,100])

			// create a tooltip
			var tooltip = d3.select("#my_dataviz")
			// var tooltip = d3.create("svg")
				.append("div")
				.style("opacity", 0)
				.attr("class", "tooltip")
				.style("background-color", "white")
				.style("border", "solid")
				.style("border-width", "2px")
				.style("border-radius", "5px")
				.style("padding", "5px")

			// Three function that change the tooltip when user hover / move / leave a cell
			var mouseover = function(d) {
				tooltip
				.style("opacity", 1)
				d3.select(this)
				.style("stroke", "black")
				.style("opacity", 1)
			}
			var mousemove = function(d) {
				tooltip
				.html("The exact value of<br>this cell is: " + d.value)
				.style("left", (d3.mouse(this)[0]+70) + "px")
				.style("top", (d3.mouse(this)[1]) + "px")
			}
			var mouseleave = function(d) {
				tooltip
				.style("opacity", 0)
				d3.select(this)
				.style("stroke", "none")
				.style("opacity", 0.8)
			}

			// add the squares
			svg.selectAll()
				.data(data, function(d) {return d.group+':'+d.variable;})
				.enter()
				.append("rect")
				.attr("x", function(d) { return x(d.group) })
				.attr("y", function(d) { return y(d.variable) })
				.attr("rx", 4)
				.attr("ry", 4)
				.attr("width", x.bandwidth() )
				.attr("height", y.bandwidth() )
				.style("fill", function(d) { return myColor(d.value)} )
				.style("stroke-width", 4)
				.style("stroke", "none")
				.style("opacity", 0.8)
				.on("mouseover", mouseover)
				.on("mousemove", mousemove)
				.on("mouseleave", mouseleave)
		},
		test2 () {
			// set the dimensions and margins of the graph
			var margin = {top: 30, right: 30, bottom: 30, left: 30},
			width = 450 - margin.left - margin.right,
			height = 450 - margin.top - margin.bottom;

			// append the svg object to the body of the page
			var svg = d3.select("#my_dataviz")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform",
					"translate(" + margin.left + "," + margin.top + ")");

			// Labels of row and columns
			var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
			var myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

			// Build X scales and axis:
			var x = d3.scaleBand()
			.range([ 0, width ])
			.domain(myGroups)
			.padding(0.01);
			svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))

			// Build X scales and axis:
			var y = d3.scaleBand()
			.range([ height, 0 ])
			.domain(myVars)
			.padding(0.01);
			svg.append("g")
			.call(d3.axisLeft(y));

			// Build color scale
			var myColor = d3.scaleLinear()
			.range(["white", "#69b3a2"])
			.domain([1,100])

			//Read the data
			d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data1) {
				let data = [
				{ group: "A", variable: "v1", value: "30" },
				{ group: "A", variable: "v2", value: "95" },
				{ group: "A", variable: "v3", value: "22" },
				{ group: "A", variable: "v4", value: "14" },
				{ group: "A", variable: "v5", value: "59" },
				{ group: "A", variable: "v6", value: "52" },
				{ group: "A", variable: "v7", value: "88" },
				{ group: "A", variable: "v8", value: "20" },
				{ group: "A", variable: "v9", value: "99" },
				{ group: "B", variable: "v1", value: "37" },
				{ group: "B", variable: "v2", value: "50" },
				{ group: "B", variable: "v3", value: "81" },
				{ group: "B", variable: "v4", value: "79" },
				{ group: "B", variable: "v5", value: "84" },
				{ group: "B", variable: "v6", value: "91" },
				{ group: "B", variable: "v7", value: "82" },
				{ group: "B", variable: "v8", value: "89" },
				{ group: "B", variable: "v9", value: "6" },
				{ group: "B", variable: "v10", value: "67" },
				{ group: "C", variable: "v1", value: "96" },
				{ group: "C", variable: "v2", value: "13" },
				{ group: "C", variable: "v3", value: "98" },
				{ group: "C", variable: "v4", value: "10" },
				{ group: "C", variable: "v5", value: "86" },
				{ group: "C", variable: "v6", value: "23" },
				{ group: "C", variable: "v7", value: "74" },
				{ group: "C", variable: "v8", value: "47" },
				{ group: "C", variable: "v9", value: "73" },
				{ group: "C", variable: "v10", value: "40" },
				{ group: "D", variable: "v1", value: "75" },
				{ group: "D", variable: "v2", value: "18" },
				{ group: "D", variable: "v3", value: "92" },
				{ group: "D", variable: "v4", value: "43" },
				{ group: "D", variable: "v5", value: "16" },
				{ group: "D", variable: "v6", value: "27" },
				{ group: "D", variable: "v7", value: "76" },
				{ group: "D", variable: "v8", value: "24" },
				{ group: "D", variable: "v9", value: "1" },
				{ group: "D", variable: "v10", value: "87" },
				{ group: "E", variable: "v1", value: "44" },
				{ group: "E", variable: "v2", value: "29" },
				{ group: "E", variable: "v3", value: "58" },
				{ group: "E", variable: "v4", value: "55" },
				{ group: "E", variable: "v5", value: "65" },
				{ group: "E", variable: "v6", value: "56" },
				{ group: "E", variable: "v7", value: "9" },
				{ group: "E", variable: "v8", value: "78" },
				{ group: "E", variable: "v9", value: "49" },
				{ group: "E", variable: "v10", value: "36" },
				{ group: "F", variable: "v1", value: "35" },
				{ group: "F", variable: "v2", value: "80" },
				{ group: "F", variable: "v3", value: "8" },
				{ group: "F", variable: "v4", value: "46" },
				{ group: "F", variable: "v5", value: "48" },
				{ group: "F", variable: "v6", value: "100" },
				{ group: "F", variable: "v7", value: "17" },
				{ group: "F", variable: "v8", value: "41" },
				{ group: "F", variable: "v9", value: "33" },
				{ group: "F", variable: "v10", value: "11" },
				{ group: "G", variable: "v1", value: "77" },
				{ group: "G", variable: "v2", value: "62" },
				{ group: "G", variable: "v3", value: "94" },
				{ group: "G", variable: "v4", value: "15" },
				{ group: "G", variable: "v5", value: "69" },
				{ group: "G", variable: "v6", value: "63" },
				{ group: "G", variable: "v7", value: "61" },
				{ group: "G", variable: "v8", value: "54" },
				{ group: "G", variable: "v9", value: "38" },
				{ group: "G", variable: "v10", value: "93" },
				{ group: "H", variable: "v1", value: "39" },
				{ group: "H", variable: "v2", value: "26" },
				{ group: "H", variable: "v3", value: "90" },
				{ group: "H", variable: "v4", value: "83" },
				{ group: "H", variable: "v5", value: "31" },
				{ group: "H", variable: "v6", value: "2" },
				{ group: "H", variable: "v7", value: "51" },
				{ group: "H", variable: "v8", value: "28" },
				{ group: "H", variable: "v9", value: "42" },
				{ group: "H", variable: "v10", value: "7" },
				{ group: "I", variable: "v1", value: "5" },
				{ group: "I", variable: "v2", value: "60" },
				{ group: "I", variable: "v3", value: "21" },
				{ group: "I", variable: "v4", value: "25" },
				{ group: "I", variable: "v5", value: "3" },
				{ group: "I", variable: "v6", value: "70" },
				{ group: "I", variable: "v7", value: "34" },
				{ group: "I", variable: "v8", value: "68" },
				{ group: "I", variable: "v9", value: "57" },
				{ group: "I", variable: "v10", value: "32" },
				{ group: "J", variable: "v1", value: "19" },
				{ group: "J", variable: "v2", value: "85" },
				{ group: "J", variable: "v3", value: "53" },
				{ group: "J", variable: "v4", value: "45" },
				{ group: "J", variable: "v5", value: "71" },
				{ group: "J", variable: "v6", value: "64" },
				{ group: "J", variable: "v7", value: "4" },
				{ group: "J", variable: "v8", value: "12" },
				{ group: "J", variable: "v9", value: "97" },
				{ group: "J", variable: "v10", value: "72" }
			];
			// create a 	tooltip
			var tooltip = d3.select("#my_dataviz")
				.append("div")
				.style("opacity", 0)
				.attr("class", "tooltip")
				.style("background-color", "white")
				.style("border", "solid")
				.style("border-width", "2px")
				.style("border-radius", "5px")
				.style("padding", "5px")

			// Three function that change the tooltip when user hover / move / leave a cell
			var mouseover = function(d) {
				tooltip.style("opacity", 1)
			}
			var mousemove = function(d) {
				tooltip
				.html("The exact value of<br>this cell is: " + d.value)
				.style("left", (d3.mouse(this)[0]+70) + "px")
				.style("top", (d3.mouse(this)[1]) + "px")
			}
			var mouseleave = function(d) {
				tooltip.style("opacity", 0)
			}

			// add the squares
			svg.selectAll()
				.data(data, function(d) {return d.group+':'+d.variable;})
				.enter()
				.append("rect")
				.attr("x", function(d) { return x(d.group) })
				.attr("y", function(d) { return y(d.variable) })
				.attr("width", x.bandwidth() )
				.attr("height", y.bandwidth() )
				.style("fill", function(d) { return myColor(d.value)} )
				.on("mouseover", mouseover)
				.on("mousemove", mousemove)
				.on("mouseleave", mouseleave)
			})
		},
		test3 () {
			var chartDom = document.getElementById('main');
			var myChart = echarts.init(chartDom);
			var option;

			let xData = [];
			let yData = [];

			function generateData(theta, min, max) {
				let data = [];
				for (let i = 0; i <= 200; i++) {
					for (let j = 0; j <= 200; j++) {
					// let x = (max - min) * i / 200 + min;
					// let y = (max - min) * j / 100 + min;
					data.push([i, j, Math.random()]);
					// data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
					}
					xData.push(i);
				}
				for (let j = 0; j < 200; j++) {
					yData.push(j);
				}
				return data;
			}
			let data = generateData(2, -5, 5);
			console.log(xData);
			option = {
			tooltip: {},
			xAxis: {
				type: 'category',
				data: xData
			},
			yAxis: {
				type: 'category',
				data: yData
			},
			visualMap: {
				min: 0,
				max: 1,
				calculable: true,
				realtime: false,
				inRange: {
				color: [
					'#313695',
					'#4575b4',
					'#74add1',
					'#abd9e9',
					'#e0f3f8',
					'#ffffbf',
					'#fee090',
					'#fdae61',
					'#f46d43',
					'#d73027',
					'#a50026'
				]
				}
			},
			series: [
				{
				name: 'Gaussian',
				type: 'heatmap',
				data: data,
				emphasis: {
					itemStyle: {
					borderColor: '#333',
					borderWidth: 1
					}
				},
				progressive: 1000,
				animation: false
				}
			]
			};
			
			option && myChart.setOption(option);

		},
		test4 () {
			// Your data for the directed graph
			const graphData = {
      nodes: [
        { id: 'A', name: 'Node A' },
        { id: 'B', name: 'Node B' },
        { id: 'C', name: 'Node C' },
        { id: 'D', name: 'Node D' }
      ],
      links: [
        { source: 'A', target: 'B', label: "NP" },
        { source: 'A', target: 'C', label: "np" },
        { source: 'B', target: 'D', label: "NP" }
      ]
    };

    // Initialize ECharts
    const myChart = echarts.init(document.getElementById('chart-container'));
    // Set the options for the directed graph
    const option = {
      title: {
        text: 'Directed Graph Example'
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: graphData.nodes,
          links: graphData.links,
          force: {
            repulsion: 100,
            edgeLength: 100
          },
		  draggable: true,
          roam: true,
          label: {
            show: true,
            position: 'right'
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          lineStyle: {
            color: 'label',
            curveness: 0.2
          }
        }
      ]
    };

    // Set the options to the chart
    myChart.setOption(option);
		}
	}
}
</script>

<style lang="scss">
@import "~scss/common/md_colors";
</style>
