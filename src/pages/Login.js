import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import background from '../assets/background.svg';
import Otp from '../components/Otp';
import Loader from '../components/Loader';

const Container = tw.div`w-full h-full bg-cover bg-center flex items-center justify-center
`;
const Background = tw.img`w-full h-full absolute top-0 left-0 bottom-0 right-0 object-cover object-center z-[-999]
`;
const Wrapper = tw.form`md:min-h-[80vh] min-h-[60vh] w-full max-w-[90vw] bg-gray-100 bg-opacity-40 rounded-3xl shadow-2xl flex flex-col items-center justify-center py-8 space-y-9
`;
const Heading = tw.h1`text-5xl font-medium md:text-8xl md:font-normal text-center text-white
`;
const SubHeading = tw.h2`text-3xl font-medium md:text-5xl md:font-normal text-center text-white
`;
const Input = tw.input`md:w-96 w-72 max-w-[90%] text-2xl h-12 pl-20 border-b border-white focus:outline-none md:text-3xl bg-transparent text-white
`;
const SendButton = tw.button`h-12 text-2xl px-3 font-medium text-white bg-[#d789893d] border rounded-md border-white focus:outline-none focus:bg-[#d789895c]
`;

const Login = () => {
	const [enteringOTP, setEnteringOTP] = useState(false);
	const [loading, setLoading] = useState(false);
	let interval = null;

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		interval = setInterval(() => {
			setEnteringOTP(true);
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		return () => {
			clearInterval(interval);
		};
	}, [interval]);

	return (
		<Container>
			{loading && <Loader text='Sending OTP...' />}
			<Background src={background} />
			{!enteringOTP ? (
				<Wrapper onClick={handleSubmit}>
					<Heading>Login</Heading>
					<SubHeading>Enter Mobile No.</SubHeading>
					<div className='relative text-center'>
						<label
							htmlFor='mobile'
							className='absolute inset-y-0 left-4 text-white text-2xl md:text-3xl flex items-center pl-3'
						>
							+91
						</label>
						<Input type='text' placeholder='Mobile No.' id='mobile' />
					</div>
					<SendButton type='submit'>Send OTP</SendButton>
				</Wrapper>
			) : (
				<Otp />
			)}
		</Container>
	);
};

export default Login;
