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
						Control
					</label>
					<div class="uk-form-controls">
						<client-only>
							<Select2
								v-model="form.control"
								:options="controls"
								:settings="{'width': '100%', 'placeholder': 'Select control...', 'closeOnSelect': true}"
								multiple
								:error-state="$v.form.control.$error"
							></Select2>
						</client-only>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.control.required">
								Field is required
							</li>
						</ul>						
					</div>
				</div>
				<div>
					<label class="uk-form-label">
						Range
					</label>
					<div class="uk-form-controls">
						<ScInput v-model.trim="form.range" :error-state="$v.form.range.$error" :validator="$v.form.range" mode="outline" type="number"></ScInput>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.range.required">
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
			dimension: 3,
			option: "",
			control: [],
			range: null
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
			range: {
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
