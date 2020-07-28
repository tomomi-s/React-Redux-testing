import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';

import { findByTestAttr, checkProps } from './../../../utils/index';

const setUp = (props={}) => {
	const component = shallow(<Headline {...props} />);
	return component;
}


describe('Headline Component', ()=>{
	describe('Checking PropTyes', ()=>{
		const expectedProps = {
			header: 'Header',
			desc: 'Test Desc',
			tempArr: [{
				fName: 'Joe',
				lName: 'Bloggs',
				email: 'joe@gmail.com',
				age: 24,
				onlineStatus: true
			}]
		}

		const propsErr = checkProps(Headline, expectedProps);
		expect(propsErr).toBeUndefined();
	})

	describe('Have props', ()=>{
		let wrapper;
		beforeEach(()=>{
			const props = {
				header : 'Test Header',
				desc: 'Description'
			}
			wrapper = setUp(props);
		})

		it('Should render without errors', ()=>{
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(1);
		})

		it('Should render a h1', ()=>{
			const h1 = findByTestAttr(wrapper, 'header');
			expect(h1.length).toBe(1);
		})

		it('Should render a desc', ()=>{
			const desc = findByTestAttr(wrapper, 'desc');
			expect(desc.length).toBe(1);
		})
	})

	describe('Have no props', ()=>{
		let wrapper;
		beforeEach(()=>{
			wrapper = setUp();
		})

		it('Should not render', ()=>{
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(0);
		})
	})
})