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
			<span v-if="data.option">
				{{ getOption(data.option) }}
			</span><br>
			<span class="uk-text-muted uk-text-default">
				Dimension:
			</span> {{ data.dimension }}<br>
			<span class="uk-text-muted uk-text-default">
				Control:
			</span>
			<span v-if="data.control">
				{{ getControl(data.control) }}
			</span><br>
			<span class="uk-text-muted uk-text-default">
				Tranformation:
			</span> {{ data.transformation }}<br>
			<span class="uk-text-muted uk-text-default">
				Range:
			</span> {{ data.range }}<br>
			<span class="uk-text-muted uk-text-default">
				Alpha:
			</span> {{ data.alpha }}<br>
			<span class="uk-text-muted uk-text-default">
				Threshold:
			</span> {{ data.threshold }}<br>
			<br>
			<span class="uk-text-muted uk-text-default">
				Email:
			</span> {{ data.email }}<br>
		</address>
	</div>
</template>
<script>

const methods = [{"id": "dgi", "name": "DGI"}, {"id": "vgae", "name": "VGAE"}];
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
		getOption (id) {
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
