declare module 'klump-react' {
  export interface KlumpCheckoutProps {
    publicKey: string;
    amount: number;
    currency: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
    onClose: () => void;
  }

  export const KlumpCheckout: React.FC<KlumpCheckoutProps>;
}