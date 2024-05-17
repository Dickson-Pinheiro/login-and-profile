import { Formik, Form } from 'formik';
import CustomInput from '../ui/input';
import CustomButton from '../ui/button';
import Card from '../ui/card';
import loginSchema from '../../schemas/login.schema';
import { UseUserLogin } from '../../hooks/useUserLogin';
import { ILoginInfo } from '../../types/auth.types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logoB2bit from '../../assets/B2Bit-Logo.png'


function LoginForm() {
    const {mutateAsync: login, isPending} = UseUserLogin()
    const navigate = useNavigate()

    async function submitLogin({email, password}: ILoginInfo){
        try {
            const result = await login({email, password})
            const access = result.data.tokens.access
            const refresh = result.data.tokens.refresh
            localStorage.setItem('access-token', access)
            localStorage.setItem('refresh-token', refresh)
            navigate('/profile')
        } catch (error: any) {
            toast.error(error?.response?.data?.detail)
        }
    }

  return (
      <Card className="mt-[20vh]">
        <img src={logoB2bit} className='w-full max-w-[295px] mx-auto mb-[35px]'/>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={submitLogin}
        >
          {(formikProps) => (
            <Form className="flex flex-col gap-[27px]" onSubmit={formikProps.handleSubmit}>
              <CustomInput
                label="E-mail"
                data-cy="email-input"
                type="email"
                errorMessage={formikProps.errors.email}
                placeholder="@gmail.com"
                name="email"
                onChange={formikProps.handleChange}
                value={formikProps.values.email}
              />
              <CustomInput
                label="Password"
                data-cy="password-input"
                type="password"
                errorMessage={formikProps.errors.password}
                placeholder="**********"
                name="password"
                onChange={formikProps.handleChange}
                value={formikProps.values.password}
              />
              <CustomButton className='mx-auto' data-cy="submit-login"  type='submit' loading={isPending} disabled={isPending}>
                Sign In
              </CustomButton>
            </Form>
          )}
        </Formik>
      </Card>
  );
}

export default LoginForm;
