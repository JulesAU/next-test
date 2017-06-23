import dynamic from 'next/dynamic'

let DynamicComponent = null;


export default class HomePage extends React.Component {
	componentWillMount() {
		DynamicComponent = dynamic(import('../dynamic-component.js'));
	}

	render() {
		return <div>
			Welcome to next.js!
			<DynamicComponent />
		</div>
	}
}
