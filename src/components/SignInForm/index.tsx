import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { api } from 'src/services/api'
import { USER_SESSION_STORAGE_KEY, headers } from 'src/constants'
import { UseUserContext } from 'src/hooks/UseUserContext'
import { addCookie } from 'src/services/auth/addCookie'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'

interface ISignInRequest {
  email: string
  password: string
}

const signInFormValidationSchema = zod.object({
  email: zod.string().email('Insira um email válido'),
  password: zod.string().min(7, 'Insira uma senha válida'),
})

export type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const navigate = useNavigate()
  const { addUser } = UseUserContext()

  const newSignInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = newSignInForm
  const handleSignInUserSubmit: SubmitHandler<ISignInRequest> = (
    signInInputs,
  ) => {
    signInUser(signInInputs)
  }

  const loginUser = useMutation(async ({ email, password }: ISignInRequest) => {
    const response = await api.post(`/users/login`, {
      headers,
      email,
      password,
    })
    const data = response.data

    await addCookie(USER_SESSION_STORAGE_KEY, data.sessionId)

    addUser({
      id: data.user.id,
      username: data.user.username,
      email: data.user.email,
    })

    return data
  })

  const signInUser = (inputs: ISignInRequest) => {
    loginUser.mutate(inputs, {
      onSuccess: async () => {
        reset()

        return navigate('/dashboard')
      },
    })
  }

  let loginUserError
  if (loginUser.error instanceof AxiosError)
    loginUserError = loginUser.error.response?.data.error

  return (
    <Form onSubmit={handleSubmit(handleSignInUserSubmit)}>
      <FieldContainer>
        <label htmlFor="email">Email</label>
        <input required id="email" {...register('email')} name="email" />
      </FieldContainer>

      {errors?.email && <Validate>{errors.email.message}</Validate>}

      <FieldContainer>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          {...register('password')}
          name="password"
          type="password"
        />
      </FieldContainer>

      {errors?.password && <Validate>{errors.password.message}</Validate>}

      <button
        data-testid="signin-submit"
        disabled={loginUser.isLoading}
        type="submit"
      >
        Entrar
      </button>

      <WarningsContainer>
        {loginUser.isLoading && <span>Signing in...</span>}
        {loginUser.isSuccess && <span>Signed in successfully.</span>}
        {loginUser.isError && (
          <span>
            Error signing in. <br />
            {loginUserError}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
