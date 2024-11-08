<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<h3 class="uk-margin-bottom">
				Data for Analysis
			</h3>
			<div class="uk-flex-center uk-grid" data-uk-grid>
				<div class="uk-width-xxlarge"> <!-- uk-width-4-5@l -->
					<ScCard>
						<ScCardBody>
							<client-only>
								<FormWizard @on-complete="onComplete">
									<TabContent
										title="Loading"
										sub-title="Load your raw data."
										icon="mdi mdi-cloud-upload-outline"
										:before-change="()=>validateStep('step1')"
									>
										<Step1 ref="step1" @on-validate="mergePartialModels"></Step1>
									</TabContent>
									<TabContent
										title="Parameters"
										sub-title="Choose your parameters"
										icon="mdi mdi-settings-outline"
										:before-change="()=>validateStep('step2')"
									>
										<Step2 ref="step2" @on-validate="mergePartialModels"></Step2>
									</TabContent>
									<TabContent
										title="Confirm experiment"
										sub-title="Verify experiments details"
										icon="mdi mdi-check-all"
									>
										<Step3 :data="finalModel"></Step3>
									</TabContent>
								</FormWizard>
							</client-only>
						</ScCardBody>
					</ScCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {FormWizard, TabContent } from '~/components/wizard'
import swal from 'sweetalert2'

export default {
	name: 'FormsWizard',
	components: {
		FormWizard,
		TabContent,
		Step1: process.client ? () => import('./wizard/step1') : null,
		Step2: process.client ? () => import('./wizard/step2') : null,
		Step3: process.client ? () => import('./wizard/step3') : null
	},
	data: () => ({
		finalModel: {
			
		}
	}),
	mounted () {
		this.$store.commit('sidebarMainToggle', true);
		this.$store.commit('setSidebarMiniActive', true);
	},
	beforeDestroy () {
		this.$store.commit('setSidebarMiniActive', false);
	},
	computed: {

	},
	methods: {
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
		validateStep (name) {
			var refToValidate = this.$refs[name];
			return refToValidate.validate();
		},
		mergePartialModels (model, isValid){
			if(isValid){
				this.finalModel = Object.assign({}, this.finalModel, model)
			}
		},
		async onComplete () {
			let form = new FormData();
			form.append('raw_data', this.finalModel.raw_data);
			form.append('method', this.finalModel.method);
			form.append('data_variation', this.finalModel.data_variation);
			form.append('dimension', this.finalModel.dimension);
			form.append('controls', this.finalModel.controls.join(","));
			form.append('transformation', this.finalModel.transformation);
			form.append('threshold_corr', this.finalModel.threshold_corr);
			form.append('threshold_log2', this.finalModel.threshold_log2);
			form.append('alpha', this.finalModel.alpha);
			form.append('email', this.finalModel.email);
			
			// this.$nuxt.$loading.start();
			await this.$axios.post("/api/experiments/", form, {headers : {'content-type': 'multipart/form-data'}}).then((response) => {				
				if (response.status === 201) {
					/* swal.fire(
						response.data.message,
						`Results will be sent to your e-mail: <span class="uk-text-bold"> ${response.data.data.email} </span>`,
						'success'
					); */
					this.showNotification(response.data.message, 'top-center', 'success');
				}
			}).catch((error) => {
				console.log(error.response);
				this.showNotification(response.data.message, 'top-center', 'warning');
			});
		},
	}
}
</script>

<style lang="scss">
	@import '~scss/plugins/steps.scss';
</style>
