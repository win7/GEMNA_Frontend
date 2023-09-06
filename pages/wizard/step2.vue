<template>
	<form>
		<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
			<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
				Personal info
			</p> -->
			<div class="uk-child-width-1-2@s uk-grid" data-uk-grid>
				<div>
					<label class="uk-form-label">
						Method
					</label>
					<div class="uk-form-controls">
						<client-only>
							<Select2
								v-model="form.method"
								:options="methods"
								:settings="{'width': '100%', 'placeholder': 'Select a method...'}"
								:error-state="$v.form.method.$error"
							></Select2>
						</client-only>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.method.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
				<div>
					<label class="uk-form-label">
						Data variation
					</label>
					<div class="uk-form-controls">
						<client-only>
							<Select2
								v-model="form.option"
								:options="options"
								:settings="{'width': '100%', 'placeholder': 'Select a data variation...'}"
								:error-state="$v.form.option.$error"
							></Select2>
						</client-only>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.option.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="uk-child-width-1-2@s uk-grid" data-uk-grid>
				<div>
					<label class="uk-form-label">
						Embeddings dimension
					</label>
					<div class="uk-form-controls">
						<ScInput v-model.trim="form.dimension" :error-state="$v.form.dimension.$error" :validator="$v.form.dimension" mode="outline" type="number"></ScInput>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.dimension.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
				<div>
					<label class="uk-form-label">
						Control
					</label>
					<div class="uk-form-controls">
						<client-only>
							<Select2
								v-model="form.control"
								:options="controls"
								:settings="{ 'width': '100%', 'placeholder': 'Select control...' }"
								:error-state="$v.form.control.$error" 
								:validator="$v.form.control"
								multiple
							></Select2>
						</client-only>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.control.required">
								Field is required
							</li>
						</ul>						
					</div>
				</div>
			</div>
			<div class="uk-child-width-1-2@s uk-grid" data-uk-grid>
				<div>
					<label class="uk-form-label">
						Has transformation (log10)?
					</label>
					<div class="uk-form-controls">
						<span class="uk-margin-right">
							<PrettyRadio
								v-model="form.transformation"
								:error-state="$v.form.transformation.$error" :validator="$v.form.transformation"
								value="false"
								class="p-radio"
							>
								No
							</PrettyRadio>
						</span>
						<span class="uk-margin-right">
							<PrettyRadio
								v-model="form.transformation"
								:error-state="$v.form.transformation.$error" :validator="$v.form.transformation"
								value="true"
								class="p-radio"
							>
								Yes
							</PrettyRadio>
						</span>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.transformation.required">
								Field is required
							</li>
						</ul>
					</div>
					<!-- <div class="uk-form-controls">
						<Select2
							v-model="form.transformation"
							:options="transformations"
							:settings="{'width': '100%', 'placeholder': 'Select a transformation...'}"
							:error-state="$v.form.transformation.$error"
						></Select2>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.transformation.required">
								Field is required
							</li>
						</ul>						
					</div> -->
				</div>
				<div>
					<label class="uk-form-label">
						Threshold (corr)
					</label>
					<div class="uk-form-controls">
						<ScInput v-model.trim="form.threshold_corr" :error-state="$v.form.threshold_corr.$error" :validator="$v.form.threshold_corr" mode="outline" type="number"></ScInput>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.threshold_corr.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="uk-child-width-1-2@s uk-grid" data-uk-grid>
				<div>
					<label class="uk-form-label">
						Threshold (log2)
					</label>
					<div class="uk-form-controls">
						<ScInput v-model.trim="form.threshold_log2" :error-state="$v.form.threshold_log2.$error" :validator="$v.form.threshold_log2" mode="outline" type="number"></ScInput>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.threshold_log2.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
				<div>
					<label class="uk-form-label">
						Alpha
					</label>
					<div class="uk-form-controls">
						<ScInput v-model.trim="form.alpha" :error-state="$v.form.alpha.$error" :validator="$v.form.alpha" mode="outline" type="number"></ScInput>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.alpha.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</template>

<script>
import { scHelpers } from "~/assets/js/utils";

const methods = [{"id": "dgi", "name": "DGI"}, {"id": "vgae", "name": "VGAE"}];
const options = [{"id": "none", "name": "none"}, {"id": "str", "name": "str"}, {"id": "dyn", "name": "dyn"}];
const transformations = [{"id": "true", "name": "Yes"}, {"id": "false", "name": "No"}];

import ScInput from '~/components/Input'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import customValidators from '~/plugins/vuelidateValidators'

if(process.client) {
	require('~/plugins/inputmask')
}

export default {
	name: 'FormsWizardStep2',
	components: {
		PrettyRadio,
		ScInput,
		Select2: process.client ? () => import('~/components/Select2') : null
	},
	mixins: [validationMixin],

	data: () => ({
		form: {
			method: "",
			dimension: "3",
			option: "",
			control: [],
			transformation: "false",
			threshold_corr: "0.5",
			threshold_log2: "0",
			alpha: "0.05",
		},
	}),
	computed: {
		methods () {
			return methods.map(function (obj) {
				obj.id = obj.id || obj.code;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		options () {
			return options.map(function (obj) {
				obj.id = obj.id || obj.code;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		controls () {
			// console.log(this.$store.state.properties);
			let list = []
			this.$store.state.properties.forEach(item => {
				list.push({
					id: item,
					text: item
				})
			});
			return list;
		},
		transformations () {
			return transformations.map(function (obj) {
				obj.id = obj.id || obj.code;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
	},
	created () {
		
	},
	mounted () {
		
	},
	validations: {
		form: {
			method: {
				required
			},
			dimension: {
				required,
			},
			option: {
				required
			},
			control: {
				required
			},
			transformation: {
				required
			},
			threshold_corr: {
				required
			},
			threshold_log2: {
				required
			},
			alpha: {
				required
			}
		}
	},
	methods: {
		validate () {
			this.$v.form.$touch();
			var isValid = !this.$v.form.$invalid;
			this.$emit('on-validate', this.$data.form, isValid);
			return isValid
		},
	},
	
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
