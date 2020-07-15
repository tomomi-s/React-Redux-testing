import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.comfigure({
	adapter: new EnzymeAdapter(),
	disableLifecycleMethod: true
})