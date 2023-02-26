import React, { useReducer } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import "../membership.css"

const stripePromise = loadStripe(
	"pk_live_51H0yOZEr4ylg7vlAnEDF4YfjfRe1VAEKjRMuW2Lh7zlMG9Lh68k4LZmuTm0RtR5MeNLJzkxUT0p53pdnQKgeIY1800N4Sipf5y");

const formatPrice = ({ amount, currency, quantity }) => {
	const numberFormat = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: "USD",
		currencyDisplay: 'symbol',
	});
	const parts = numberFormat.formatToParts(amount);
	let zeroDecimalCurrency = true;
	for (let part of parts) {
		if (part.type === 'decimal') {
			zeroDecimalCurrency = false;
		}
	}
	amount = zeroDecimalCurrency ? amount : amount / 100;
	const total = (quantity * amount).toFixed(2);
	return numberFormat.format(total);
};

function reducer(state, action) {
	switch (action.type) {
		case 'setLoading':
			return { ...state, loading: action.payload.loading };
		case 'setError':
			return { ...state, error: action.payload.error };
		default:
			throw new Error();
	}
}

const Regular = () => {
	const [state, dispatch] = useReducer(reducer, {
		priceId: "price_1H2jo8Er4ylg7vlAxR0V7T7L",
		basePrice: "5.50",
		currency: "USD",
		quantity: 1,
		price: formatPrice({
			amount: "5.50",
			currency: "USD",
			quantity: 1,
		}),
		loading: false,
		error: null,
	});

	const handleClick = async (event) => {
		// Call your backend to create the Checkout session.
		dispatch({ type: 'setLoading', payload: { loading: true } });
		// When the customer clicks on the button, redirect them to Checkout.
		const stripe = await stripePromise;
		const { error } = await stripe.redirectToCheckout({
			mode: 'payment',
			lineItems: [{ price: state.priceId, quantity: state.quantity }],
			successUrl: `https://forms.gle/BHC9MmkkRAwL7Kam9`,
			cancelUrl: `${window.location.origin}/Membership`,
		});
		// If `redirectToCheckout` fails due to a browser or network
		// error, display the localized error message to your customer
		// using `error.message`.
		if (error) {
			dispatch({ type: 'setError', payload: { error } });
			dispatch({ type: 'setLoading', payload: { loading: false } });
		}
	};

	return (
		<div className="text-info">
			<div className="membership-description-section">
				<h2 className="member-description">Benefits</h2>
				<div className="content-box">
					<ul class="list-group list-group">
						<li class="list-group-item list-points">Receive weekly newsletters.</li>
						<li class="list-group-item list-points">Access to project workshops (Beginner, Advanced, and asynchronous).</li>
						<li class="list-group-item list-points">Access to our exclusive 10-week Mentorship program.</li>
						<li class="list-group-item list-points">Access to professional development workshops, guest speakers, and other events.</li>
						<li class="list-group-item list-points">Become part of the community!</li>
					</ul>
				</div>
			</div>
			<div className="membership-description-section">
				<h2 className="member-description">How to become a member?</h2>
				<div className="content-box">
					<ul class="list-group list-group">
						<li class="list-group-item list-points">Step 1 - Click the "Buy for $5" Button</li>
						<li class="list-group-item list-points">Step 2 - Fill out a Google form (redirect will happen after successful payment)</li>
					</ul>
					<h2 className="member-description-points">Send us an email if you have any questions or concerns</h2>
					<h2 className="member-description-points">ACM Memberships are good for one school year (Fall 2022-Spring 2023)</h2>
					<h1 className="refund">No Refunds</h1>
					<h6 className="additional-fee">*ADDITIONAL 50 CENTS PROCESSING FEE*</h6>
					<button className="btn btn-lg btn-info btn-membership" role="link" onClick={handleClick} disabled={state.loading}>
						{state.loading || !state.price
							? `Loading...`
							: `Buy for $5`}
					</button>
				</div>
			</div>
		</div >
	);
};

export default Regular;