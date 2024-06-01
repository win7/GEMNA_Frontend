<template>
	<div class="sc-padding">
		<h4 class="uk-heading-line">
			<span>Experiments information</span>
		</h4>
		<address>
			<span class="uk-text-muted uk-text-default">
				Raw data:
			</span> {{ data.file_name }}<br>
			
			<span class="uk-text-muted uk-text-default">
				Method:
			</span>			
			<span v-if="data.method">
				{{ getMethod(data.method) }}<br>
			</span>

			<span class="uk-text-muted uk-text-default">
				Data variation:
			</span>
			<span v-if="data.data_variation">
				{{ getDataVariation(data.data_variation) }}
			</span><br>
			<span class="uk-text-muted uk-text-default">
				Dimension:
			</span> {{ data.dimension }}<br>
			<span class="uk-text-muted uk-text-default">
				Control:
			</span>
			<span v-if="data.controls">
				{{ getControl(data.controls) }}
			</span><br>
			<span class="uk-text-muted uk-text-default">
				Tranformation:
			</span> {{ data.transformation }}<br>
			<span class="uk-text-muted uk-text-default">
				Threshold (corr):
			</span> {{ data.threshold_corr }}<br>
			<span class="uk-text-muted uk-text-default">
				Threshold (log2):
			</span> {{ data.threshold_log2 }}<br>
			<span class="uk-text-muted uk-text-default">
				Alpha:
			</span> {{ data.alpha }}<br>
			
			<br>
			<span class="uk-text-muted uk-text-default">
				Email:
			</span> {{ data.email }}<br>
		</address>
	</div>
</template>
<script>

const methods = [{"id": "vgae-line", "name": "LVGAE"}, {"id": "vgae-base", "name": "VGAE"}, {"id": "argva-base", "name": "ARGVA"}, {"id": "dgi-tran", "name": "DGI"}];
const options = [{"id": "none", "name": "none"}, {"id": "str", "name": "str"}, {"id": "dyn", "name": "dyn"}];

export default {
	name: 'FormsWizardStep3',
	props: {
		data: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		getMethod (id) {
			var result = methods.filter(obj => {
				return obj.id === id
			});
			return result[0].name;
		},
		getDataVariation (id) {
			var result = options.filter(obj => {
				return obj.id == id
			});
			return result[0].name;
		},
		getControl (control) {
			return control.join(", ")
		}
	}
}
</script>
