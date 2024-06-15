<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<h3 class="uk-margin-bottom">
				Data Visualization
			</h3>
			<div class="uk-flex-center uk-grid" data-uk-grid>
				<div class="uk-width-xxlarge">
					<ScCard>
						<ScCardHeader>
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-search sc-icon-24 uk-margin-medium-right"></i>
								<ScCardTitle>
									Load Experiment Form
								</ScCardTitle>
							</div>
						</ScCardHeader>
						<ScCardBody>
							<form>
								<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
									<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
										Consult
									</p> -->
									<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
										<div>
											<label class="uk-form-label">
												Experiment code
											</label>
											<div class="uk-form-controls">
												<ScInput v-model.trim="form1.id" :error-state="$v.form1.id.$error" :validator="$v.form1.id" mode="outline" data-uk-tooltip="title: This code was sent to your email.; pos: top-right"></ScInput>
												<ul class="sc-vue-errors">
													<li v-if="!$v.form1.id.required">
														Field is required
													</li>
												</ul>
											</div>
										</div>
										<div>
											<label class="uk-form-label">
												Filter quality
											</label>
											<div class="uk-form-controls">
												<span class="uk-margin-right">
													<PrettyRadio
														v-model="form1.quality"
														:error-state="$v.form1.quality.$error" :validator="$v.form1.quality"
														value="f1"
														class="p-radio"
														data-uk-tooltip="title: Show results with robustness.; pos: top-right"
													>
													Robustness
													</PrettyRadio>
												</span>
												<span class="uk-margin-right">
													<PrettyRadio
														v-model="form1.quality"
														:error-state="$v.form1.quality.$error" :validator="$v.form1.quality"
														value="f2"
														class="p-radio"
														data-uk-tooltip="title: Show results with sensitivity.; pos: top-right"
													>
													Sensitivity
													</PrettyRadio>
												</span>
												<ul class="sc-vue-errors">
													<li v-if="!$v.form1.quality.required">
														Field is required
													</li>
												</ul>
											</div>
										</div>
									</div>
								</fieldset>
								<div class="uk-margin-top">
									<!-- <button class="sc-button sc-button-primary" :disabled="submitStatus1 === 'PENDING'" @click.prevent="submitForm1($event)">
										Search
									</button> -->
									<button class="sc-button sc-button-primary" :class="{'sc-button-progress-overlay': submitStatus1 === 'PENDING'}" :disabled="submitStatus1 === 'PENDING'" @click.prevent="submitForm1($event)">
										<span>Load</span>
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
			
			<div class="uk-flex-center uk-grid" data-uk-grid> <!-- v-if="flag_load" -->
				<div class="uk-width-1-4@l">
					<ScCard>
						<ScCardHeader>
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-open sc-icon-24 uk-margin-medium-right"></i>
								<ScCardTitle>
									Networks Overview
								</ScCardTitle>
							</div>
						</ScCardHeader>
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
				<div class="uk-width-expand">
					<ScCard>
						<ScCardHeader>
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-open sc-icon-24 uk-margin-medium-right"></i>
								<ScCardTitle>
									Network Labels
								</ScCardTitle>
							</div>
						</ScCardHeader>
						<ScCardBody>
							<div class="uk-overflow-auto">
								<table class="uk-table uk-table-striped">
									<thead>
										<tr>
											<th class="uk-text-nowrap">
												Group
											</th>
											<th v-for="item in labels_all" class="uk-text-nowrap">
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
				<div class="uk-width-1-3@l">
					<ScCard>
						<ScCardHeader>
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-open sc-icon-24 uk-margin-medium-right"></i>
								<ScCardTitle>
									Clusters
								</ScCardTitle>
							</div>
						</ScCardHeader>
						<ScCardBody>
							<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle" id="clustering"></div>
						</ScCardBody>
					</ScCard>
				</div>
			</div>

			<div class="uk-flex-center uk-grid" data-uk-grid v-if="flag_load">
				<div class="uk-width-xxlarge">
					<ScCard>
						<ScCardHeader>
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-search sc-icon-24 uk-margin-medium-right"></i>
								<ScCardTitle>
									Analysis form
								</ScCardTitle>
							</div>
						</ScCardHeader>
						<ScCardBody>
							<div> <!-- Before form -->
								<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
									<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
										Consult
									</p> -->
									<div uk-grid>
										<div class="uk-width-1-2@m">
											<div>
												<label class="uk-form-label" for="f-f-name">
													Group
												</label>
												<div class="uk-form-controls">
													<client-only>
														<Select2
															v-model="form2.group"
															:options="usGroups"
															:settings="{ 'width': '100%', 'placeholder': 'Select item...', 'closeOnSelect': true }"
															:error-state="$v.form2.group.$error" 
															:validator="$v.form2.group"
															@change="onChangeGroup($event)"
															data-uk-tooltip="title: Interaction between two phenotypes; pos: top-right"
														></Select2>
													</client-only>
													<ul class="sc-vue-errors">
														<li v-if="!$v.form2.group.required">
															Field is required
														</li>
													</ul>
												</div>
											</div>
											
											<div class="uk-margin-top">
												<label class="uk-form-label" for="f-l-name">
													Show with
												</label>
												<div class="uk-form-controls">
													<span class="uk-margin-right">
														<PrettyRadio
															v-model="form2.plot"
															:error-state="$v.form2.plot.$error" :validator="$v.form2.plot"
															value="correlation"
															class="p-radio"
															:disabled="disable_show"
															data-uk-tooltip="title: Show results with correlation.; pos: top-right"
														>
															Correlation nodes
														</PrettyRadio>
													</span>
													<span class="uk-margin-right">
														<PrettyRadio
															v-model="form2.plot"
															:error-state="$v.form2.plot.$error" :validator="$v.form2.plot.type"
															value="correlation_neighbors"
															class="p-radio"
															:disabled="disable_show"
															data-uk-tooltip="title: Show results with correlation and their neighbors.; pos: top-right"
														>
														Correlation + neighbors nodes
														</PrettyRadio>
													</span>
													<ul class="sc-vue-errors">
														<li v-if="!$v.form2.plot.required">
															Field is required
														</li>
													</ul>
												</div>
											</div>
											
											<div class="uk-margin-top">
												<label class="uk-form-label" for="f-l-name">
													Name by
												</label>
												<div class="uk-form-controls">
													<span class="uk-margin-right">
														<PrettyRadio
															v-model="form2.type"
															:error-state="$v.form2.type.$error" :validator="$v.form2.type"
															value="id"
															class="p-radio"
															@change="onChangeType($event)"
															data-uk-tooltip="title: Show results by Alignment ID; pos: top-right"
														>
															Alignment ID
														</PrettyRadio>
													</span>
													<span class="uk-margin-right">
														<PrettyRadio
															v-model="form2.type"
															:error-state="$v.form2.type.$error" :validator="$v.form2.type"
															value="mz"
															class="p-radio"
															@change="onChangeType($event)"
															data-uk-tooltip="title: Show results by Average Mz; pos: top-right"
														>
															Average Mz
														</PrettyRadio>
													</span>
													<span>
														<PrettyRadio
															v-model="form2.type"
															:error-state="$v.form2.type.$error" :validator="$v.form2.type"
															value="name"
															class="p-radio"
															@change="onChangeType($event)"
															data-uk-tooltip="title: Show results by Metabolite name; pos: top-right"
														>
															Metabolite name
														</PrettyRadio>
													</span>
													<ul class="sc-vue-errors">
														<li v-if="!$v.form2.type.required">
															Field is required
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="uk-width-1-2@m">
											<div>
												<label class="uk-form-label" for="f-f-name">
													{{ getType(form2.type) }}
												</label>
												<div class="uk-form-controls">
													<!-- <client-only>
														<Select2
															v-model="form2.nodes"
															:options="usNodes"
															:settings="{ 'width': '100%', 'placeholder': 'Search item...', 'closeOnSelect': false }"
															:error-state="$v.form2.nodes.$error" 
															:validator="$v.form2.nodes"
															multiple
															@change="onChangeNodes($event)"
															data-uk-tooltip="title: Metabolite for analysis.; pos: top-right"
														></Select2>
													</client-only>
													<ul class="sc-vue-errors">
														<li v-if="!$v.form2.nodes.required">
															Field is required
														</li>
													</ul> -->
													<!-- -->
													<VueGoodTable
														:columns="columns1"
														:rows="rows1"
														theme="polar-bear"
														:error-state="$v.form2.nodes.$error" 
														:validator="$v.form2.nodes"
														style-class="uk-table uk-table-divider uk-table-small uk-table-hover uk-text-truncate uk-background-default scutum-vgt"
														:select-options="{ 
															enabled: true,
															selectOnCheckboxOnly: false,
															disableSelectInfo: true,
														}"
														:pagination-options="{
															enabled: true,
															perPmz: 10,
															perPageDropdown: [5, 10, 15, 20]
														}"
														@on-row-click="onRowClick1"
														@on-search="onSearch1"
														@on-select-all="onSelectAll1">
													</VueGoodTable>
													<ul class="sc-vue-errors">
														{{ form2.nodes }}
														<li v-if="!$v.form2.nodes.required">
															Field is required
														</li>
													</ul>
													<!-- -->
												</div>
											</div>
										</div>
									</div>
								</fieldset>
								<div class="uk-margin-top">
									<button class="sc-button sc-button-primary" :class="{'sc-button-progress-overlay': submitStatus2 === 'PENDING'}" :disabled="submitStatus2 === 'PENDING'" @click.prevent="submitForm2($event)">
										<span>Load</span>
										<transition name="scale-up">
											<span v-show="submitStatus2 === 'PENDING'" class="sc-button-progress-layer">
												<ScProgressCircular></ScProgressCircular>
											</span>
										</transition>
									</button>
								</div>
							</div>
						</ScCardBody>
					</ScCard>
				</div>
			</div>

			<div class="uk-flex-center uk-grid" data-uk-grid v-if="flag_load">
				<div class="uk-width-1-2@l">
					<ScCard :full-screen="cardBFullScreen1">
						<ScCardHeader> <!-- separator> -->
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-open sc-icon-24 uk-margin-medium-right"></i>
								<div class="uk-flex-1">									
									<ScCardTitle>
										Similarity Analysis
									</ScCardTitle>
									<!-- <ScCardMeta>
										<time datetime="2019-01-01">
											Jan 01, 2021
										</time>
									</ScCardMeta> -->
								</div>
								<ScCardActions>
									<a
										href="javascript:void(0)"
										class="sc-actions-icon mdi mdi-fullscreen"
										:class="{'mdi-fullscreen' : !cardBFullScreen1, 'mdi-fullscreen-exit' : cardBFullScreen1 }"
										@click.prevent="cardBFullScreen1 = !cardBFullScreen1"
									></a>
								</ScCardActions>
							</div>
						</ScCardHeader>
						<ScCardContent>
							<ScCardBody>
								<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle" id="metabolomic-network"></div>
								<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle" id="degree-network"></div>

								<!-- <div class="uk-child-width-1-2@s" uk-grid>
									<div>
										<pre class="uk-resize-vertical">
											<div class="uk-flex uk-flex-center uk-flex-middle" id="metabolomic-network"></div>
										</pre>
									</div>
								</div> -->
								<div class="uk-height-large uk-flex-center uk-flex-middle" v-if="flag_select">
									<form>
										<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
											<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
												Personal info
											</p> -->
											<div class="uk-child-width-1-1@m uk-grid" data-uk-grid>
												<div>
													<label class="uk-form-label" for="f-f-name">
														{{ getType(form2.type) }}
													</label>
													<div class="uk-form-controls">
														<VueGoodTable
															:columns="columns1"
															:rows="rows2"
															theme="polar-bear"
															:error-state="$v.form2.nodes.$error" 
															:validator="$v.form2.nodes"
															style-class="uk-table uk-table-divider uk-table-small uk-table-hover uk-text-truncate uk-background-default scutum-vgt"
															:select-options="{ 
																enabled: true,
																selectOnCheckboxOnly: false,
																disableSelectInfo: true,
															}"
															:pagination-options="{
																enabled: true,
																perPmz: 10,
																perPageDropdown: [5, 10, 15, 20]
															}"
															@on-row-click="onRowClick2"
															@on-search="onSearch2"
															@on-select-all="onSelectAll2">
														</VueGoodTable>
														<ul class="sc-vue-errors">
															{{ form2.nodes }}
															<li v-if="!$v.form2.nodes.required">
																Field is required
															</li>
														</ul>
														<!-- -->
													</div>
												</div>
												<div>
													<label class="uk-form-label">
														Correlations labels
													</label>
													<div class="uk-form-controls">
														<!-- <p class="uk-margin-small-bottom">
															Correlations labels
														</p> -->
														<div class="uk-grid-small uk-child-width-auto uk-grid" data-uk-grid>
															<label v-for="label in labels" :key="label" :value="label">
																<input class="uk-checkbox" type="checkbox" :key="label" :value="label" v-model="selected_labels"> {{ label }} <!-- @click.prevent="selectLabel(label)" -->
															</label>
															<label><input class="uk-checkbox" type="checkbox" :checked="is_all_selected_labels" @click="selectAllEdgeLabels">Select all</label>
														</div>
													</div>
												</div>
											</div>
										</fieldset>
										<div class="uk-margin-top">
											<button class="sc-button sc-button-primary" @click.prevent="filterGraph">
												<span>Filter</span>
											</button>
											<button class="sc-button sc-button-default" @click.prevent="resetGraph">
												<span>Reset</span>
											</button>
										</div>
									</form>
								</div>

								<!-- <span>selected_labels: {{ selected_labels }}</span><br>
								<span>selected_nodes: {{ selected_nodes }}</span><br> -->

								<!-- <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle" id="metabolomic-names">
									<div class="uk-child-width-expand@l uk-grid" data-uk-grid>
										<div v-for="(nodes, index) in splitNodes(4)" :key="index" class="uk-margin-remove">
											<ul class="uk-list">
												<li v-for="node in nodes" :key="node.id">
													<PrettyCheck v-model="selected_nodes" :value="node.id" class="p-icon">
														<i slot="extra" class="icon mdi mdi-check"></i>
														{{ node.name }}
													</PrettyCheck>
												</li>
											</ul>
										</div>
									</div>
								</div> -->
							</ScCardBody>
						</ScCardContent>
					</ScCard>
				</div>
				<div class="uk-width-1-2@l">
					<ScCard :full-screen="cardBFullScreen2">
						<ScCardHeader> <!-- separator> -->
							<div class="uk-flex uk-flex-middle">
								<i class="mdi mdi-book-open sc-icon-24 uk-margin-medium-right"></i>
								<div class="uk-flex-1">
									<ScCardTitle>
										Extras
									</ScCardTitle>
									<!-- <ScCardMeta>
										<time datetime="2019-01-01">
											Jan 01, 2021
										</time>
									</ScCardMeta> -->
								</div>
								<ScCardActions>
									<a
										href="javascript:void(0)"
										class="sc-actions-icon mdi mdi-fullscreen"
										:class="{'mdi-fullscreen' : !cardBFullScreen2, 'mdi-fullscreen-exit' : cardBFullScreen2 }"
										@click.prevent="cardBFullScreen2 = !cardBFullScreen2"
									></a>
								</ScCardActions>
							</div>
						</ScCardHeader>
						<ScCardContent>
							<ScCardBody>
								<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle" id="heatmap"></div>
								<div class="uk-height-large uk-flex uk-flex-center uk-flex-middle" id="heatmap_ratio"></div>
							</ScCardBody>
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
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';
import { ScProgressCircular } from '~/components/progress'

import { scHelpers } from "~/assets/js/utils";
const { splitArr } = scHelpers;

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

require('~/plugins/jquery');
if(process.client) {
	require('~/assets/js/vendor/jquery.quicksearch.js');
}

import swal from 'sweetalert2';
// import * as clustergrammer from 'clustergrammer';
// import * as d3 from 'd3';
// import clustergrammer from 'https://cdn.jsdelivr.net/npm/clustergrammer@1.19.5/+esm'
import * as echarts from 'echarts';
import { len, ref } from 'vuelidate/lib/validators/common';

const types = [{"id": "id", "name": "Alignment ID"}, {"id": "mz", "name": "Average Mz"}, {"id": "name", "name": "Metabolite name"}];
const colors = [{id: "PP", color: "#FF00FF"}, {id: "Pp", color: "#3FFF00"}, {id: "PN", color: "#00FFFF"},
				{id: "Pn", color: "#FFF700"}, {id: "pP", color: "#FF0000"}, {id: "pp", color: "#0000FF"},
				{id: "pN", color: "#006600"}, {id: "pn", color: "#00CC96"}, {id: "NP", color: "#AB63FA"},
				{id: "Np", color: "#FF28FF"}, {id: "NN", color: "#B6E880"}, {id: "Nn", color: "##FF97FF"},
				{id: "nP", color: "#FFA15A"}, {id: "np", color: "#19D3F3"}, {id: "nN", color: "#FF6692"},
				{id: "nn", color: "#B6F8A0"}, {id: "?p", color: "gray"}, {id: "?P", color: "gray"}, {id: "?n", color: "gray"},
				{id: "?N", color: "gray"}, {id: "p?", color: "gray"}, {id: "P?", color: "gray"}, {id: "n?", color: "gray"}, {id: "N?", color: "gray"}];

export default {
	name: 'DataVisualization',
	components: {
		ScInput,
		PrettyCheck,
		PrettyRadio,
		Select2: process.client ? () => import('~/components/Select2') : null,
		MultiSelect: process.client ? () => import('~/components/Multiselect') : null,
		ScProgressCircular,
		VueGoodTable,
	},
	mixins: [validationMixin],
	data: () => ({
		//---
		searchTerm: "",
		columns1: [
			{
				label: 'Id',
				field: 'id',
				type: 'number',
				filterOptions: {
					enabled: true
				},
				sortable: true,
			},
			{
				label: 'Id',
				field: 'id',
				type: 'number',
				filterOptions: {
					enabled: true
				},
				sortable: true,
			},
			{
				label: 'Mz',
				field: 'mz',
				// type: 'decimal',
				filterOptions: {
					enabled: true
				}
			},
			{
				label: 'Name',
				field: 'name',
				filterOptions: {
					enabled: true
				}
			}
		],
		rows1: [],
		rows2: [],
		//---
		status: "",
		submitStatus1: null,
		submitStatus2: null,

		form1: {
			id: "25d3d362-e676-4185-a877-7667eba62795",
			quality: "f1"
		},
		form2: {
			id: "25d3d362-e676-4185-a877-7667eba62795",
			nodes: [], // ["74.0249", "129.0192", "130.0875"], // ["100.00072", "128.89351", "132.88524", "135.54123", "152.99445"],
			group: "", // "WT-pck1", // "FCSglc-DMA"
			groups: [],
			type: "name", // id, name
			plot: "correlation"
		},

		graph_details: [],
		graph_nodes: [],
		nodes_detail: [],
		labels_all: ['PP', 'Pp', 'PN', 'Pn', 'P?', 'pP', 'pp', 'pN', 'pn', 'p?', 'NP', 'Np', 'NN', 'Nn', 'N?', 'nP', 'np', 'nN', 'nn', 'n?', '?P', '?p', '?N', '?n'],
		options: [],
		groups: [],

		cardBFullScreen1: false,
		cardBFullScreen2: false,

		nodes: [],
		labels: [],
		selected_nodes: [],
		selected_labels: [],
		
		is_all_selected_labels: false,
		is_all_selected_nodes: true,

		searchable: {
			model: []
		},
		options_node: [],

		nodes_response: [],
		edges_response: [],
		// biocyc: [],
		biocyc_all_response: [],
		degrees_response: [],

		flag_select: false,
		// flag: false,
		flag_load: false,
		// flag_similarity: false,
		// flag_div2: false,
		disable_show: false,

		select_settings: {
			cssClass: 'ms-header ms-footer',
			selectableHeader: "<div class='custom-header md-bg-grey-300 md-color-black'>Selectable</div>",
			selectionHeader: "<div class='custom-header md-bg-light-blue-800 md-color-white'>Selection</div>",
		},

		flag_selected_table1: false,
		flag_selected_table2: false
	}),
	computed: {
		msSearchableOptions () {
			let options_node = [];
			for (var k in this.nodes) {
				options_node.push({
					value: this.nodes[k].id + "",
					text: this.nodes[k].name
				});
			}
			return 	options_node;

			/* let options = [];
			for (let i = 1; i < 10; i++) {
				options.push({
					value: 'el-' + i,
					text: email() + this.dele
				})
			}

			console.log(77, options);
			return options; */
			
		},
		searchableSettings () {
			return {
				cssClass: 'ms-header',
				selectableHeader: "<div class='custom-header md-bg-grey-200'><input type='text' id='selectableSearch' class='uk-input uk-form-small search-input' autocomplete='off' placeholder='Search...'></div>",
				selectionHeader: "<div class='custom-header md-bg-grey-200'><input type='text' id='selectionSearch' class='uk-input uk-form-small search-input' autocomplete='off' placeholder='Search...'></div>",
				afterInit (ms) {
					const that = this;
					let $selectableSearch = that.$selectableUl.prev().children();
					let $selectionSearch = that.$selectionUl.prev().children();
					let selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)';
					let selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';
					that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
						.on('keydown', function (e) {
							if (e.which === 40) {
								that.$selectableUl.focus();
								return false;
							}
						});
					that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
						.on('keydown', function (e) {
							if (e.which === 40) {
								that.$selectionUl.focus();
								return false;
							}
						});
				},
				afterSelect () {
					this.qs1.cache();
					this.qs2.cache();
				},
				afterDeselect () {
					this.qs1.cache();
					this.qs2.cache();
				}
			}
		},
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

	},
	validations: {
		form1: {
			id: {
				required,
			},
			quality: {
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
			},
			type: {
				required
			},
			plot: {
				required
			}
		}
	},
	watch: {
		
	},
	methods: {
		onSelectAll1(params) {
			// params.selected - whether the select-all checkbox is checked or unchecked
			// params.selectedRows - all rows that are selected (this page)

			/* let selected_all = false;
			if (this.flag_selected_table1) {
				this.flag_selected_table1 = false;
				selected_all = true;
				this.disable_show = true;
			} else {
				this.flag_selected_table1 = true;
				selected_all = false;
				this.disable_show = false;
			}
			this.rows1 = this.rows1.map((obj) => {
				return {
					...obj,
					vgtSelected: selected_all,
				};
			}); */
			console.log(params.selected);
		},
		onSearch1 (params) {
			// params.searchTerm - term being searched for
			// params.rowCount - number of rows that match search
			console.log(1, params.searchTerm);
			console.log(4, this.rows1);
		},
		onRowClick1 (params){
			console.log(2, params.selected, params.row.id);

			this.rows1 = this.rows1.map((obj) => {
				if (obj.id == params.row.id) {
					return {
						...obj,
						vgtSelected: params.selected,
					};
				}
				return obj;
			});
			console.log(3, this.rows1);
		},
		onSelectAll2(params) {
			// params.selected - whether the select-all checkbox is checked or unchecked
			// params.selectedRows - all rows that are selected (this page)

			let selected_all = false;
			if (this.flag_selected_table2) {
				this.flag_selected_table2 = false;
				selected_all = true;
			} else {
				this.flag_selected_table2 = true;
				selected_all = false;
			}
			this.rows2 = this.rows2.map((obj) => {
				return {
					...obj,
					vgtSelected: selected_all,
				};
			});
		},
		onSearch2 (params) {
			// params.searchTerm - term being searched for
			// params.rowCount - number of rows that match search
			console.log(1, params.searchTerm);
			console.log(4, this.rows1);
		},
		onRowClick2 (params){
			console.log(2, params.selected, params.row.id);

			this.rows2 = this.rows2.map((obj) => {
				if (obj.id == params.row.id) {
					return {
						...obj,
						vgtSelected: params.selected,
					};
				}
				return obj;
			});
			console.log(3, this.rows1);
		},
		onSelectChanged (params) { // no use
			/* const selectedIds = params.selectedRows.reduce((acc, row) => {
				acc.push(row.id);
				return acc;
			}, []); */
			console.log(params.selectedRows);
			// console.log(selectedIds);
			console.log(7,this.rows1);
		},
		showNotification (text, pos, status, persistent) {
			var config = {};
			config.timeout = persistent ? !persistent : 3000;
			if(status) {
				config.status = status;
			}
			if(pos) {
				config.pos = pos;
			}
			UIkit.notification(text, config);
		},
		msSelectAll () {
			this.$refs.msPublicMethods.select_all()
		},
		msDeselectAll () {
			this.$refs.msPublicMethods.deselect_all()
		},
		filterGraph: function (event) {
			// filter by cheakbox
			this.selected_nodes = this.rows2.filter(obj => obj.vgtSelected == true).map(obj => obj.id);

			// Networks
			this.flag_select = false;

			let edges = this.filterLabels(this.edges_response);
			edges = this.filterEdges(edges);
			let nodes = this.filterNodes(this.nodes_response);
			this.metabolomic_network(nodes, edges, false);

			// Heatmap, degrees
			
			let biocyc_all = this.filterBioCyc(this.biocyc_all_response);
			this.heatmap_biocyc_all(biocyc_all);
			this.heatmap_biocyc_ratio_all(biocyc_all);

			let degrees = this.filterDegrees(this.degrees_response);
			this.degree_network(degrees);
			
			this.flag_select = true;

			this.showNotification('Successful Filtration', 'top-center', 'success');
		},
		resetGraph: function (event) {
			this.flag_select = false;

			// this.edges_response = response.data.data.changes_sub;
			this.metabolomic_network(this.nodes_response, this.edges_response, true);

			this.heatmap_biocyc_all(this.biocyc_all_response);
			this.heatmap_biocyc_ratio_all(this.biocyc_all_response);

			this.degree_network(this.degrees_response);
			
			this.is_all_selected_labels = false;
			this.selectAllEdgeLabels();

			this.msDeselectAll();

			this.flag_select = true;

			this.showNotification('Successful Reset', 'top-center', 'success');
		},
		filterDegrees (degrees_response) {
			let degrees_filter = [];
			for (var k in degrees_response) {
				if (this.selected_nodes.includes(degrees_response[k][0])){
					degrees_filter.push(degrees_response[k]);
				}
			}
			return degrees_filter;
		},
		filterBioCyc (biocyc_all_response) {
			let biocyc_all_filter = new Object();
			let biocyc = [];
			let biocyc_temp = [];

			for (let i = 0; i < this.form2.groups.length; i++) {
				biocyc_temp = [];
				biocyc = biocyc_all_response[this.form2.groups[i]];
				for (var j in biocyc) {
					if (this.selected_nodes.includes(biocyc[j].id)){
						biocyc_temp.push(biocyc[j]);
					}
				}
				biocyc_all_filter[this.form2.groups[i]] = biocyc_temp;
			}
			return biocyc_all_filter;
		},
		filterLabels (edges_response) {
			let edges_filter = [];
			for (var k in edges_response) {
				if (this.selected_labels.includes(edges_response[k].label)){
					edges_filter.push(edges_response[k]);
				}
			}
			return edges_filter;
		},
		filterNodes (nodes_response) {
			let nodes_filter = [];
			for (var k in nodes_response) {
				if (this.selected_nodes.includes(nodes_response[k].id)){
					nodes_filter.push(nodes_response[k]);
				}
			}
			return nodes_filter;
		},
		filterEdges (edges_response) {
			let edges_filter = [];
			for (var k in edges_response) {
				if (this.selected_nodes.includes(edges_response[k].source) && this.selected_nodes.includes(edges_response[k].target)){
					edges_filter.push(edges_response[k]);
				}
			}
			return edges_filter;
		},
		selectLabel (id) {
      		console.log('event fired for: ' + id);
    	},
		selectAllEdgeLabels () {
			if (this.is_all_selected_labels) {
				this.selected_labels = [];
				this.is_all_selected_labels = false;
			} else {
				this.selected_labels = [];
				for (var k in this.labels) {
					this.selected_labels.push(this.labels[k]);
				}
				this.is_all_selected_labels = true;
			}
		},
		selectAllNodes () {
			if (this.is_all_selected_nodes) {
				this.selected_nodes = [];
				this.is_all_selected_nodes = false;
			} else {
				this.selected_nodes = [];
				for (var k in this.nodes) {
					this.selected_nodes.push(this.nodes[k].id);
				}
				this.is_all_selected_nodes = true;
			}
		},
		splitNodes (n) {
			return splitArr(this.nodes, n);
		},
		loadParams () {
			console.log(this.form2.group);
			this.nodes_detail = this.graph_nodes[this.form2.group];
			
			this.options = [{id: "-1", text: "Select all"}];
			this.rows1 = []; // table
			for (let i = 0; i < this.nodes_detail.length; i++) {
				this.options.push({
					id: this.nodes_detail[i]["id"].toString(),
					text: this.nodes_detail[i]["id"] + " || " + this.nodes_detail[i]["mz"] + " || " + this.nodes_detail[i]["name"] // this.nodes_detail[i][this.form2.type]
				})

				// rows for table
				this.rows1.push({
					id: this.nodes_detail[i]["id"].toString(),
					mz: this.nodes_detail[i]["mz"],
					name: this.nodes_detail[i]["name"],
					vgtSelected: false
				})
			}
			console.log(this.nodes_detail);
		},
		onChangeGroup: function(event){
			this.loadParams();
    	},
		onChangeNodes: function(event){
			// console.log(this.form2.nodes);
			if (this.form2.nodes.includes("-1")) {
				this.disable_show = true;
			} else {
				this.disable_show = false;
			}
    	},
		onChangeType: function(event){
			this.loadParams();			
    	},
		getType (id) {
			var result = types.filter(obj => {
				return obj.id === id
			});
			return result[0].name;
		},
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

				// this.flag = false;

				this.flag_select = false;
				this.flag_load = false;
				// this.flag_similarity = false;

				this.graph_details = [];
				this.graph_nodes = [];
				this.groups = [];

				this.form2.id = "";
				this.form2.nodes = [];
				this.form2.group = "";
				// this.form2.type = "id";
				// this.form2.plot = "correlation";

				await this.$axios.get(`/api/experiments/${this.form1.id}/`, {params: this.form1}).then((response) => {
					console.log(1, response.data);
					if (response.status === 200) {
						/* swal.fire(
							response.data.message,
							``,
							'success'
						); */
						this.showNotification(response.data.message, 'top-center', 'success');
						this.form2.id = this.form1.id;
						this.form2.quality = this.form1.quality;
						// this.flag = true;
						this.flag_load = true;

						this.graph_details = response.data.data.details;
						this.graph_nodes = response.data.data.nodes;
						let cluster = response.data.data.cluster;

						// this.groups = [];
						this.form2.groups = [];
						for (let i = 0; i < this.graph_details.length; i++) {
							this.form2.groups.push(this.graph_details[i].name)
							this.groups.push({
								id: this.graph_details[i].name,
								text: this.graph_details[i].name
							})
						}

						this.clustering(cluster);
					}
				}).catch((error) => {
					console.log(error.response);
					this.showNotification(response.data.message, 'top-center', 'warning');
					/* swal.fire(
						error.response.data.message,
						'',
						'error'
					); */
				});
			}
			this.submitStatus1 = 'OK'
		},
		async submitForm2 (e) {
			// filter by cheakbox
			this.form2.nodes = this.rows1.filter(obj => obj.vgtSelected == true).map(obj => obj.id);

			e.preventDefault();
			this.$v.form2.$touch();
			if (this.$v.form2.$invalid) {
				this.submitStatus2 = 'ERROR'
			} else {
				console.log(this.form2);

				this.submitStatus2 = 'PENDING';
				
				this.flag_select = false;
				// this.flag_similarity = false;
				// this.flag_div2 = false;
				
				await this.$axios.post("/api/experiments-consult/", this.form2).then((response) => {
					console.log(1, response.data);
					if (response.status === 200) {
						/* swal.fire(
							response.data.message,
							``,
							'success'
						); */
						this.showNotification(response.data.message, 'top-center', 'success');

						// this.selected_nodes = [];
						// this.selected_edges = [];
						// this.flag_div2 = true;
						
						this.nodes_response = response.data.data.nodes;						
						this.edges_response = response.data.data.edges;
						this.biocyc_all_response = response.data.data.biocyc_all;
						this.degrees_response = response.data.data.degrees;

						this.metabolomic_network(this.nodes_response, this.edges_response, true);
						this.heatmap_biocyc_all(this.biocyc_all_response);
						this.heatmap_biocyc_ratio_all(this.biocyc_all_response);
						this.degree_network(this.degrees_response);
						
						// create rows2
						this.rows2 = [];
						let obj = null;
						for (let i = 0; i < this.nodes_response.length; i++) {
							obj = this.rows1.find(item => item.id == this.nodes_response[i]["id"]);
							this.rows2.push({
								id: obj["id"].toString(),
								mz: obj["mz"],
								name: obj["name"],
								vgtSelected: false
							})
						}

						this.is_all_selected_labels = false;
						this.selectAllEdgeLabels();

						// this.flag_similarity = true;
						this.flag_select = true;
						this.flag_selected_table2 = false;

					}
				}).catch((error) => {
					console.log(error.response);
					/* swal.fire(
						error.response.data.message,
						'',
						'error'
					); */
					this.showNotification(response.data.message, 'top-center', 'warning');
				});
			}
			this.submitStatus2 = 'OK'
		},

		metabolomic_network (nodes_response, edges_response, is_init) {
			if (is_init) {
				this.labels = Array.from(new Set(edges_response.map(d => d.label)));

				/* this.nodes = Array.from(new Set(suits.flatMap(l => [l.source, l.target])), id => ({
								id: id, name: this.nodes_detail.find((obj) => obj.id == id)[this.form2.type]})); */
				
				this.nodes = nodes_response.map(node => {
					return {
						id: node.id,
						name: this.nodes_detail.find((obj) => obj.id == node.id)[this.form2.type],
						x: node.pos[0],
						y: node.pos[1]
					};
				});

				/*/ for (var k in this.nodes) { // copy to selected
					this.selected_nodes.push(this.nodes[k].id);
				} */
				//this.$refs.msPublicMethods.select_all()
			}
			
			const nodes = nodes_response.map(node => {
				return {
					id: node.id,
					name: this.nodes_detail.find((obj) => obj.id == node.id)[this.form2.type],
					x: node.pos[0],
					y: node.pos[1]
				};
			});
			const labels = Array.from(new Set(edges_response.map(d => d.label)));
			const links = edges_response.map(obj => ({ ...obj, value: obj.label }));

			// this.selected_labels = labels.sort(); // copy to selected

			// console.log(11, this.labels);
			// console.log(22, this.nodes);
			// console.log(33, links);

			links.forEach(function (edge) {
				// console.log(0, edge);
				// console.log(edge.value);

				edge.lineStyle = {
					color: "black", // colors.find(obj => obj.id === edge.label).color,
					width: 2.0, // Line width
					type: 'solid', // Line type ('solid', 'dashed', 'dotted', etc.),
				},
				edge.label = {
					show: true, // false, // true,
					formatter: function(edge) {
						return edge.value;
					}
				}
			});

			let chartDom = document.getElementById('metabolomic-network');
			let myChart = echarts.init(chartDom);
			let option;

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
				toolbox: {
					show: true,
					feature: {
						saveAsImmz: { 
							show: true,
							name: "Network_" + this.form2.group
						}
						// dataView: { show: true, readOnly: false }
					}
				},
				// tooltip: {},
				/* grid: {
					// height: '50%',
					// top: '15%'
				}, */
				/* legend: 
				{
					// selectedMode: 'single',
					/ * data: graph.links.map(function (a) {
						return a.name;
					}), * /
					data: graph.labels
				}, */
				// animationDuration: 1500,
				// animationEasingUpdate: 'quinticInOut',
				series: [
					{
						// name: 'Les Miserables',
						type: 'graph',
						layout: 'none', // force, circular, none

						data: nodes,
						links: links,
						categories: labels,
						
						force: {
							edgeLength: 200, // 10, // 100,
							repulsion: 1000, // 100, // 1000,
							gravity: 0.5
						},
						roam: true,
						draggable: true,
						label: {
							show: true,
							position: 'right',
							formatter: '{b}',
							fontSize: 12 // 16
						},
						itemStyle: {
							color: "orange",
							// symbolSize: 5
						},
						symbolSize: function (params) {
							return 16; // 16 // params.data.value;
						},

						lineStyle: {
							// color: "label",
							curveness: 0.01,
							// width: 2 // 1 // 2
						},
						/* labelLayout: {
							hideOverlap: true
						}, */
						/* edgeSymbol: ['circle', 'arrow'],
						edgeSymbolSize: [4, 10], // [3, 6], // [4, 10] */
						edgeLabel: {
							fontSize: 12, // 16
							color: "black"
						},
						emphasis: {
							focus: 'adjacency',
							label: {
								fontWeight: "bold",
								position: "right",
								show: true
							},
							lineStyle: {
								width: 3
							}
						}
					}
				]
			};
			myChart.setOption(option);

			myChart.on('click', function (params) {
				if (params.dataType === 'node') {
					// Click event on a node
					console.log('Clicked on node:', params.data.name);
					// Add your custom logic here
				} else {
					console.log("Other case");
				}
			});
		},

		heatmap_biocyc (matrix) {
			// set the dimensions and margins of the graph
			
			/* const source = [...new Set(data.map(obj => obj.source))];
			const target = [...new Set(data.map(obj => obj.target))];

			console.log(source);
			console.log(target); */

			var chartDom = document.getElementById('heatmap');
			var myChart = echarts.init(chartDom);
			var option;

			// let group = this.form2.group.split("-");
			// let yData = [group[0] + " (before)", group[1] + " (after)"]; // Object.keys(matrix[0]);
			let yData = this.form2.group.split("-");
			let xData = []; // Object.keys(matrix);
			
			let data = [];
			for (let i = 0; i < matrix.length; i++) {
				xData.push(matrix[i].ID);
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
					position: 'top',
					trigger: 'item', // Tooltip trigger on data item
					formatter: function(params) {
						// Customize the tooltip content
						// console.log(params);
						return 'Name: ' + params.name + '<br/> Value: ' + params.value[2];
					}
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

		heatmap_biocyc_all (list_matrix) {
			// set the dimensions and margins of the graph
			
			/* const source = [...new Set(data.map(obj => obj.source))];
			const target = [...new Set(data.map(obj => obj.target))];

			console.log(source);
			console.log(target); */

			var chartDom = document.getElementById('heatmap');
			var myChart = echarts.init(chartDom);
			var option;

			// let group = this.form2.group.split("-");
			// let yData = [group[0] + " (before)", group[1] + " (after)"]; // Object.keys(matrix[0]);
			let group = [];
			let groups_new = [];
			const group_aux = this.form2.group.split("-");

			let yData = []; // this.form2.group.split("-");
			for (let k = 0; k < this.form2.groups.length; k++) { // improve iterations
				group = this.form2.groups[k].split("-")
				if (group_aux[0] == group[0]) {
					if (yData.length == 0) {
						yData.push(group[0]);
					}
					yData.push(group[1]);
					groups_new.push(this.form2.groups[k])
				}
				/* if (!yData.includes(group[1])) {
					yData.push(group[1]);
				} */
				// yData.push(group[1]);
			}

			let xData = []; // Object.keys(matrix);
			
			let data = [];
			let matrix = [];
			for (let i = 0; i < groups_new.length; i++) {
				matrix = list_matrix[groups_new[i]];
				for (let j = 0; j < matrix.length; j++) {
					if (i == 0) {
						xData.push(this.nodes_detail.find((obj) => obj.id == matrix[j].id)[this.form2.type]);
						if (matrix[j].Before != "-") {
							data.push([j, i, matrix[j].Before]);
						}
					}
					if (matrix[j].After != "-") {
						data.push([j, i + 1, matrix[j].After]);
					}
				}
			}

			const minValue = Math.floor(Math.min.apply(null, data.map(item => item[2])));
			const maxValue = Math.ceil(Math.max.apply(null, data.map(item => item[2])));
			console.log(minValue, maxValue);

			option = {
				title: {
					// text: 'Les Miserables',
					subtext: 'Heatmap',
					top: 'top',
					left: 'center'
				},
				toolbox: {
					show: true,
					feature: {
						saveAsImmz: { 
							show: true,
							name: "Heatmap_" + this.form2.group
						}
						// dataView: { show: true, readOnly: false }
					}
				},
				tooltip: {
					position: 'top',
					trigger: 'item', // Tooltip trigger on data item
					formatter: function(params) {
						// Customize the tooltip content
						// console.log(params);
						return 'Name: ' + params.name + '<br/> Value: ' + params.value[2];
					}
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

		heatmap_biocyc_ratio (matrix) {
			// set the dimensions and margins of the graph
			
			/* const source = [...new Set(data.map(obj => obj.source))];
			const target = [...new Set(data.map(obj => obj.target))];

			console.log(source);
			console.log(target); */

			var chartDom = document.getElementById('heatmap_ratio');
			var myChart = echarts.init(chartDom);
			var option;

			// let group = this.form2.group.split("-");
			// let yData = [group[0] + " (before)", group[1] + " (after)"]; // Object.keys(matrix[0]);
			let yData = ["Ratio"];
			let xData = []; // Object.keys(matrix);
			
			let data = [];
			for (let i = 0; i < matrix.length; i++) {
				xData.push(matrix[i].ID);
				data.push([i, 0, matrix[i].Ratio]);
			}
	
			var minValue = Math.min.apply(null, data.map(item => item[2]));
			var maxValue = Math.max.apply(null, data.map(item => item[2]));

			option = {
				title: {
					// text: 'Les Miserables',
					// subtext: 'Heatmap',
					top: 'top',
					left: 'center'
				},
				tooltip: {
					position: 'top',
					trigger: 'item', // Tooltip trigger on data item
					formatter: function(params) {
						// Customize the tooltip content
						// console.log(params);
						return 'Name: ' + params.name + '<br/> Value: ' + params.value[2];
					}
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

		heatmap_biocyc_ratio_all (list_matrix) {
			// set the dimensions and margins of the graph
			
			/* const source = [...new Set(data.map(obj => obj.source))];
			const target = [...new Set(data.map(obj => obj.target))];

			console.log(source);
			console.log(target); */

			var chartDom = document.getElementById('heatmap_ratio');
			var myChart = echarts.init(chartDom);
			var option;

			// let group = this.form2.group.split("-");
			// let yData = [group[0] + " (before)", group[1] + " (after)"]; // Object.keys(matrix[0]);
			let yData = this.form2.groups;
			let xData = []; // Object.keys(matrix);
			
			let data = [];
			let matrix = [];
			for (let i = 0; i < this.form2.groups.length; i++) {
				matrix = list_matrix[this.form2.groups[i]];
				for (let j = 0; j < matrix.length; j++) {
					if (i == 0) {
						xData.push(this.nodes_detail.find((obj) => obj.id == matrix[j].id)[this.form2.type]);
						// data.push([j, 0, matrix[j].Before]);
					}
					if (matrix[j].Ratio != "-") {
						data.push([j, i, matrix[j].Ratio]);
					}
				}
			}
	
			const minValue = Math.floor(Math.min.apply(null, data.map(item => item[2])));
			const maxValue = Math.ceil(Math.max.apply(null, data.map(item => item[2])));

			option = {
				title: {
					// text: 'Les Miserables',
					subtext: 'Ratios',
					top: 'top',
					left: 'center'
				},
				toolbox: {
					show: true,
					feature: {
						saveAsImmz: { 
							show: true,
							name: "Ratios_" + this.form2.group
						}
						// dataView: { show: true, readOnly: false }
					}
				},
				tooltip: {
					position: 'top',
					trigger: 'item', // Tooltip trigger on data item
					formatter: function(params) {
						// Customize the tooltip content
						// console.log(params);
						return 'Name: ' + params.name + '<br/> Value: ' + params.value[2];
					}
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

		degree_network (degrees) {
			var chartDom = document.getElementById('degree-network');
			var myChart = echarts.init(chartDom);
			var option;

			// var x = degrees.map(d => d[0].find((obj) => obj.id == id)[this.form2.type]);
			var x = degrees.map(d => this.nodes_detail.find((obj) => obj.id == d[0])[this.form2.type]);
			var y = degrees.map(d => d[1]);

			// console.log(x);

			option = {
				title: {
					// text: 'Les Miserables',
					subtext: 'Neighbors',
					top: 'top',
					left: 'center'
				},
				toolbox: {
					show: true,
					feature: {
						saveAsImmz: { 
							show: true,
							name: "Neighbors_" + this.form2.group
						}
						// dataView: { show: true, readOnly: false }
					}
				},
				tooltip: {
					position: 'top',
					trigger: 'item', // Tooltip trigger on data item
					formatter: function(params) {
						// Customize the tooltip content
						// console.log(params);
						return 'Name: ' + params.name + '<br/> Value: ' + params.value;
					}
				},
				xAxis: {
					type: 'category',
					// axisLabel: { interval: 0, rotate: 90 },
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

		clustering (data) {
			var chartDom = document.getElementById('clustering');
			var myChart = echarts.init(chartDom);
			var option;
			var colorAll = [
				'#bbb',
				'#37A2DA',
				'#e06343',
				'#37a354',
				'#b55dba',
				'#b5bd48',
				'#8378EA',
				'#96BFFF'
			];

			var series = [];
			var legendData = [];

			for (var d in data) {
				series.push({
					name: data[d][2],
					type: 'scatter',
					data: [[data[d][0], data[d][1]]],
					itemStyle: { 
					color:  colorAll[data[d][2]]
					},
					symbolSize: 10
				});
				legendData.push(data[d][2]);
			}

			option = {
				/* title: {
					text: 'Scatter Plot with Legend by Color'
				}, */
				toolbox: {
					show: true,
					feature: {
						saveAsImmz: { 
							show: true,
							name: "Clusters_" + this.form2.group
						}
						// dataView: { show: true, readOnly: false }
					}
				},
				legend: {
					data: legendData
				},
				xAxis: {
					type: 'value'
				},
				yAxis: {
					type: 'value'
				},
				series: series
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
	}
}
</script>

<style lang="scss">
	@import "~scss/common/md_colors";
	@import '~scss/vue/_pretty_checkboxes';
	@import '~scss/plugins/vue-good-table.scss';
</style>
<style scoped>
	/* .uk-height-large {
  		height: 560px;
	} */
</style>