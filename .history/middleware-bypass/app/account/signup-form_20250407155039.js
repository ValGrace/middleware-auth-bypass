import {signup } from '@/app/actions/auth'
import { useActionState } from 'react'


export function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <form action={action}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Name" />
            </div>
            {state?.errors?.name && <p>{state.errors.name}</p>}
           
            <button disabled={pending} type="submit">Sign Up</button>

        </form>
    )
}