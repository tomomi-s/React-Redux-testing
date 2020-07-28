import moxios from 'moxios';
import { testStore } from './../../utils';
import { fetchPosts } from './../actions/actions';

describe('fetchPosts action', ()=>{
	beforeEach(()=>{
		moxios.install();
	});

	afterEach(()=>{
		moxios.uninstall();
	});

	test('Store is updated correctly', ()=>{
		const expectedState = [
			{
				title: 'Title 1',
				body: 'Some text'
			},
			{
				title: 'Title 2',
				body: 'Some text'
			},
			{
				title: 'Title 3',
				body: 'Some text'
			}
		]

		const store = testStore();

		moxios.wait(()=>{
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			})
		});

		return store.dispatch(fetchPosts())
		.then(()=>{
			const newState = store.getState();
			expect(newState.posts).toBe(expectedState);
		})
	})

})
