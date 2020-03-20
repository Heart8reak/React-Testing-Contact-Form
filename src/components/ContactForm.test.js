import React from 'react'
import { render } from '@testing-library/react'
import ContactForm from './ContactForm'


test('test to render', () => {
    render(<ContactForm />)
})
test('testing First Name Input in form', () => {
    const { getByText } = render(<ContactForm />)
    const firstInput = getByText(/First Name/i)
    expect(firstInput).toBeInTheDocument()
})
test('testing Last Name Input in form', () => {
    const { getByText } = render(<ContactForm />)
    const lastInput = getByText(/Last Name/i)
    expect(lastInput).toBeInTheDocument()
})
test('testing Email Input in form', () => {
    const { getByText } = render(<ContactForm />)
    const emailInput = getByText(/Email/i)
    expect(emailInput).toBeInTheDocument()
})
// test('testing the submit button when clicked', () => {
//     // const wrapper = mount(<input />)
//     // const button = wrapper.find('button'
//     // // expect(button).toHaveLength(1))
//     // expect(button.prop('type')).toEqual('submit')
//     // expect(button.text()).toEqual('submit')

//     const { getByText } = render(<ContactForm />)
//     const submitButton = getByText(/submit/i)
//     fireEvent.click(submitButton)
//     expect(submitButton).toBeInTheDocument()
// })