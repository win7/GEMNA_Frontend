<template>
	<div class="sc-border sc-round sc-padding md-bg-grey-50">
		<div class="uk-child-width-1-2@s uk-margin uk-grid" data-uk-grid>
			<div>
				<ScInput v-model.trim="form.email" name="email" :error-state="$v.form.email.$error" :validator="$v.form.email">
					<label>Email *</label>
				</ScInput>
				<ul class="sc-vue-errors">
					<li v-if="!$v.form.email.required">
						Field is required
					</li>
					<li v-if="!$v.form.email.email">
						This value should be a valid email
					</li>
				</ul>
			</div>
			<div>
				<!-- <ScInput type="file" v-model.trim="form.raw_data" name="form.raw_data" :error-state="$v.form.raw_data.$error" :validator="$v.form.raw_data">
					<!- - <label>First Name *</label> - ->
				</ScInput> -->
				<input type="file" @change="handleArchivoSeleccionado" />
				<!-- <ul class="sc-vue-errors">
					<li v-if="!$v.form.raw_data.required">
						Field is required
					</li>
				</ul> -->
			</div>
		</div>
	</div>
</template>

<script>
import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

const countries = require('~/data/common/countries.json');
const usCities = require('~/data/common/us_cities.json');

import ScInput from '~/components/Input'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import customValidators from '~/plugins/vuelidateValidators'

if(process.client) {
	require('~/plugins/inputmask')
}

export default {
	name: 'FormsWizardStep1',
	components: {
		PrettyRadio,
		ScInput,
		Select2: process.client ? () => import('~/components/Select2') : null
	},
	mixins: [validationMixin],
	data: () => ({
		form: {
			email: "",
			raw_data: "",
			file_name: "",
		}
	}),
	computed: {
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
			raw_data: {
				required,
			},
			email: {
				required,
				email
			}
		}
	},
	methods: {
		handleArchivoSeleccionado(event) {
			this.form.raw_data = event.target.files[0];
			this.form.file_name = this.form.raw_data.name;
		},
		validate () {
			this.$v.form.$touch();
			var isValid = !this.$v.form.$invalid;
			this.$emit('on-validate', this.$data.form, isValid);
			return isValid
		},
		addAddress (e) {
			e.preventDefault();
			this.form.addresses.push({
				id: uniqueID(10),
				billingAddress: '',
				zipCode: '',
				city: '',
				country: '',
			});
		},
		removeAddress (e, id) {
			e.preventDefault();
			var index = this.form.addresses.map(function (item) {
				return item.id
			}).indexOf(id);
			this.form.addresses.splice(index, 1);
		},
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
