<template>
	<form>
		<fieldset class="uk-fieldset md-bg-grey-100 sc-padding">
			<!-- <p class="sc-text-semibold uk-text-large uk-margin-remove-top">
				Personal info
			</p> -->
			<div class="uk-child-width-1-2@s uk-grid" data-uk-grid>
				<div>
					<label class="uk-form-label">
						Email
					</label>
					<div class="uk-form-controls">
						<ScInput v-model.trim="form.email" :error-state="$v.form.email.$error" :validator="$v.form.email" mode="outline"></ScInput>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.email.required">
								Field is required
							</li>
							<li v-if="!$v.form.email.email">
								This value should be a valid email
							</li>
						</ul>
					</div>
				</div>
				<div>
					<label class="uk-form-label">
						Raw data
					</label>
					<div class="uk-form-controls">
						<input type="file" :error-state="$v.form.raw_data.$error" :validator="$v.form.raw_data" @change="loadFile" mode="outline"></input>
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.raw_data.required">
								Field is required
							</li>
						</ul>
					</div>
				</div>
				<!-- <div>
					<label class="uk-form-label">
						File
					</label>
					<div class="uk-form-controls">
						<!- - <ScInput v-model.trim="form.raw_data" :error-state="$v.form.raw_data.$error" :validator="$v.form.raw_data" mode="outline" type="file" @change="loadFile"></ScInput> - ->
						<input class="uk-button uk-button-default" type="file" @change="loadFile" />
						<ul class="sc-vue-errors">
							<li v-if="!$v.form.raw_data.required">
								Field is required
							</li>
						</ul>
					</div>
				</div> -->
			</div>
		</fieldset>
	</form>
</template>

<script>

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
			properties: []
		}
	}),
	computed: {

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
		loadFile(event) {
			this.form.raw_data = event.target.files[0];
			this.form.file_name = this.form.raw_data.name;
			const that = this;
			const reader = new FileReader();
			const properties = [];
			reader.onload = function(e) {
				const contents = e.target.result;
				const lines = contents.split("\n");
				const first_line = lines[0];
				const list_aux = first_line.split("|");
				
				list_aux.forEach(item => {
					if (item.includes("_")){
						const aux = item.split("_");
						if (!properties.includes(aux[0])) {
							properties.push(aux[0]);
						}
					}
				});
				that.form.properties = properties;
			};
			reader.readAsText(this.form.raw_data);
		},
		validate () {
			this.$v.form.$touch();
			var isValid = !this.$v.form.$invalid;
			this.$emit('on-validate', this.$data.form, isValid);
			return isValid
		},
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
