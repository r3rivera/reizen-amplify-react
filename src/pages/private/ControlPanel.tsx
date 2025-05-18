import { Outlet } from "react-router";
import { Authenticator, Button, Heading, Text, useAuthenticator, useTheme, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Logo from "../../components/shared/Logo";

const ControlPanel = () =>{

    const components = {
        Header() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Logo altName="R2 Rivera" sourceUrl="/R2Logo.jpg" targetUrl="/control-panel" isClickable={false}/>
            </View>
          );
        },
      
        Footer() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Text color={tokens.colors.neutral[80]}>
                &copy; All Rights Reserved
              </Text>
            </View>
          );
        },
      
        SignIn: {
          Header() {
            const { tokens } = useTheme();
      
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Sign in to your account
              </Heading>
            );
          },
          Footer() {
            const { toForgotPassword } = useAuthenticator();
      
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toForgotPassword}
                  size="small"
                  variation="link"
                >
                  Reset Password
                </Button>
              </View>
            );
          },
        },
      
        SignUp: {
          Header() {
            const { tokens } = useTheme();
      
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Create a new account
              </Heading>
            );
          },
          Footer() {
            const { toSignIn } = useAuthenticator();
      
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toSignIn}
                  size="small"
                  variation="link"
                >
                  Back to Sign In
                </Button>
              </View>
            );
          },
        },
        ConfirmSignUp: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        SetupTotp: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        ConfirmSignIn: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        ForgotPassword: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        ConfirmResetPassword: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        SelectMfaType: {
          Header() {
            return <Heading level={3}>Select Desired MFA Type</Heading>;
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        SetupEmail: {
          Header() {
            return <Heading level={3}>Email MFA Setup</Heading>;
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
      };
      
      const formFields = {
        signIn: {
          username: {
            placeholder: 'Enter your email padi',
          },
        },
        signUp: {
          password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: false,
            order: 2,
          },
          confirm_password: {
            label: 'Confirm Password:',
            order: 1,
          },
        },
        forceNewPassword: {
          password: {
            placeholder: 'Enter your Password:',
          },
        },
        forgotPassword: {
          username: {
            placeholder: 'Enter your email:',
          },
        },
        confirmResetPassword: {
          confirmation_code: {
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
          },
          confirm_password: {
            placeholder: 'Enter your Password Please:',
          },
        },
        setupTotp: {
          QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
          },
          confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
          },
        },
        confirmSignIn: {
          confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
          },
        },
        setupEmail: {
          email: {
            label: 'New Label',
            placeholder: 'Please enter your Email:',
          },
        },
      };

    return (
    <Authenticator formFields={formFields} components={components}>
        {({ signOut, user }) => (
        <div>
            <h1>In Control Panel {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <Outlet/>
        </div>
        )}
    </Authenticator>
    );

};

export default ControlPanel;