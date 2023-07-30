<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<h3 class="uk-margin-bottom">
				Data Visualization
			</h3>

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
									<button class="sc-button sc-button-primary" :disabled="submitStatus1 === 'PENDING'" @click="submitForm1($event)">
										Search
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
				<div class="uk-width-2-3@l">
					<ScCard>
						<ScCardTitle>
							Changes Detection
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
								<div id="graphs"></div>
							</div>
						</ScCardContent>
					</ScCard>
				</div>
				<div class="uk-width-1-3@l">
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
									<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
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
													<ul class="sc-vue-errors">
														<li v-if="!$v.form2.nodes.required">
															Field is required
														</li>
													</ul>
												</client-only>
												
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
													<ul class="sc-vue-errors">
														<li v-if="!$v.form2.group.required">
															Field is required
														</li>
													</ul>
												</client-only>
											</div>
										</div>
									</div>
								</fieldset>
								<div class="uk-margin-top">
									<button class="sc-button sc-button-primary" :disabled="submitStatus2 === 'PENDING'" @click="submitForm2($event)">
										Plot
									</button>
								</div>
							</form>
						</ScCardBody>
					</ScCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { scColors } from '~/assets/js/utils';
import ScInput from '~/components/Input';
import * as d3 from 'd3';
// import {Swatches} from "@d3/color-legend"

import moment from '~/plugins/moment';
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

import swal from 'sweetalert2';

require('~/plugins/jquery');
if(process.client) {
	require('~/assets/js/vendor/jquery.quicksearch.js');
}

export default {
	name: 'DataVisualization',
	components: {
		ScInput,
		Select2: process.client ? () => import('~/components/Select2') : null,
		// MultiSelect: process.client ? () => import('~/components/Multiselect') : null
	},
	mixins: [validationMixin],
	data: () => ({
		status: "",
		flag: false,
		submitStatus1: null,
		submitStatus2: null,

		form1: {
			id: "8b095006-af13-4ee5-8f3e-252f6e19b0ed",
		},
		form2: {
			id: "",
			nodes: ["100.00072", "128.89351", "132.88524"],
			group: "FCSglc-DMA"
		},

		graph_details: [],
		graph_nodes: [],
		labels: ['PP', 'Pp', 'PN', 'Pn', 'P?', 'pP', 'pp', 'pN', 'pn', 'p?', 'NP', 'Np', 'NN', 'Nn', 'N?', 'nP', 'np', 'nN', 'nn', 'n?', '?P', '?p', '?N', '?n'],
		options: [], // [{value: "1", text: "aa"}, {value: "2", text: "bb"}],
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

		// this.test_graph1();

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
						// console.log(response.data.data[0]["labels"]);
						const suits = response.data.data;
						this.test_graph1(suits);
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

		linkArc(d) {
			const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
			return `
				M${d.source.x},${d.source.y}
				A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
			`;
		},
		test_graph1 (suits) {
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

			const width = 928;
			const height = 600;
			const types = Array.from(new Set(suits.map(d => d.label)));
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
				.attr("stroke", d => color(d.label))
				.attr("marker-end", d => `url(${new URL(`#arrow-${d.label}`, location)})`);

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
			graphs.append(Object.assign(svg.node(), {scales: {color}}));
		},
	}
}
</script>

<style lang="scss">
@import "~scss/common/md_colors";
</style>
