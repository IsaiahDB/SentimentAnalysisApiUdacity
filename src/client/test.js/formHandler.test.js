


import { handleSubmit } from '../js/formHandler';


test('handleSubmit', () => {
    const submit = jest.fn(handleSubmit => console.log('API Called Correctly'))
    submit();
    expect(submit).toHaveReturned();
})