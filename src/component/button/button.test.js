import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

import { findByTestAttr, checkProps } from './../../../utils/index';

describe('ShareButton Component', ()=>{
	describe('Checking PropTypes', ()=>{
		it('Should NOT throw a warning', ()=>{
			const expectedProps = {
				buttonText: 'Example Button Text',
				emitEvent: () => {

				}
			};

			const propsError = checkProps(Button, expectedProps);
			expect(propsError).toBeUndefined();
		})
	})

	describe('Render', ()=>{
		let wrapper;
		let mockFunc;
		beforeEach(()=>{
			mockFunc = jest.fn();
			const props = {
				buttonText: 'Example Button Text',
				emitEvent: mockFunc
			}
			wrapper = shallow(<Button {...props} />);
		})

		it('Should render a button', ()=>{
			const btn = findByTestAttr(wrapper, 'buttonCompnent');
			expect(btn.length).toBe(1);
		})

		it('Should emit callback on click event', () => {
			const btn = findByTestAttr(wrapper, 'buttonCompnent');
			btn.simulate('click');
			const callback = mockFunc.mock.calls.length
			expect(callback).toBe(1);
		})
	})
})