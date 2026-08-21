'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ForgotPasswordForm } from './steps/forgot-password-form';
import { NewPasswordForm } from './steps/new-password-form';
import { FormOTP } from './steps/otp-form';
type Steps = 'email' | 'code' | 'new-password';
export function ForgotPasswordSteps(): React.ReactElement {
    const searchParams = useSearchParams();
    const stepParam = searchParams.get('step') as Steps | null;
    const [step, setNextStep] = useState<Steps>(stepParam || 'email');
    const [otpCode, setOtpCode] = useState<number>(0);
    const nextStep = (step: Steps) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('step', step);
        setNextStep(step);
    };
    const renderStep = () => {
        switch (step) {
            case 'email':
                return <ForgotPasswordForm nextStep={(value) => value && nextStep('code')} />;
            case 'code':
                return (
                    <FormOTP
                        sendOtp={(value) => {
                            setOtpCode(value);
                            nextStep('new-password');
                        }}
                    />
                );
            case 'new-password':
                return <NewPasswordForm code={otpCode} />;
            default:
                return <ForgotPasswordForm nextStep={(value) => value && nextStep('code')} />;
        }
    };
    return renderStep();
}
