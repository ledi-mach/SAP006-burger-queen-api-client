import { Login } from './index'
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('tests to Login Page', () => {
    afterEach(cleanup)

    it('pass valid email to test email input field', () => {
        render(<Login />)
        const inputEl = screen.getByTestId("input-email");
        userEvent.type(inputEl, 'test@gmail.com');

        expect(screen.getByTestId("input-email")).toHaveValue('test@gmail.com');
        expect(screen.queryByTestId('errorEmail')).not.toBeInTheDocument();
    })
    

})

/*it('pass invalid email to test email input field', ()=>{
    render (<Login />)
    const inputEl = screen.getByTestId("input-email");
    userEvent.type(inputEl, 'testing');
    expect(screen.getByTestId("input-email")).toHaveValue('testing');
    expect(screen.queryByTestId("errorEmail")).toBeInTheDocument();
})

it('pass invalid password to test password input field', ()=>{
    render(<Login />)
    const inputEl = screen.getAllByTestId('input-password');
    userEvent.type(inputEl, 'example123');

    expect(screen.getByTestId('input-password')).toHaveValue('example123');
    expect(screen.queryByTestId('errorPassword')).not.toBeInTheDocument();
})
*/


