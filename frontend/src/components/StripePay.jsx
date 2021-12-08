import StripeCheckout from "react-stripe-checkout"

const StripePay = ({ children, cart, onToken }) => {
    return (
        <StripeCheckout

            name="Zakoo Inc."
            description="A MERN Stack E-Commerce App"
            image="https://i.imgur.com/EZNer2K.png"
            ComponentClass="div"
            panelLabel="Click to Pay"
            amount={cart.totalPrice * 100}
            currency="USD"
            stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
            locale="en"
            email="info@zakoo.co"
            shippingAddress
            billingAddress
            zipCode
            allowRememberMe
            token={onToken}
        >
            {children}
        </StripeCheckout>
    )
}

export default StripePay
