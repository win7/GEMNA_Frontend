<template>
	<div class="sc-border sc-round sc-padding md-bg-grey-50">
		<div class="uk-child-width-1-2@s uk-margin uk-grid" data-uk-grid>
			<div>
				<label class="uk-form-label">
					Method
				</label>
				<div class="uk-form-controls">
					<client-only>
						<Select2
							v-model="form.method"
							:options="methods"
							:settings="{ 'width': '100%', 'placeholder': 'Select a city...' }"
						></Select2>
					</client-only>
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
							:settings="{ 'width': '100%', 'placeholder': 'Select a city...' }"
						></Select2>
					</client-only>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

const countries = require('~/data/common/countries.json');
const usCities = require('~/data/common/us_cities.json');
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
			method: "dgi",
			dimension: 3,
			option: "dyn",
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
		countries () {
			return countries.map(function (obj) {
				obj.id = obj.id || obj.code;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		usCities () {
			return usCities.map(function (obj) {
				obj.id = obj.id || obj.rank;
				obj.text = obj.text || obj.city;
				return obj;
			});
		}
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
		addAddress (e) {
			e.preventDefault();
			this.userData.addresses.push({
				id: uniqueID(10),
				billingAddress: '',
				zipCode: '',
				city: '',
				country: '',
			});
		},
		removeAddress (e, id) {
			e.preventDefault();
			var index = this.userData.addresses.map(function (item) {
				return item.id
			}).indexOf(id);
			this.userData.addresses.splice(index, 1);
		},
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
