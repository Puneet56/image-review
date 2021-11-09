import React, { useState, useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = tw.form`md:min-h-[80vh] min-h-[60vh] w-full max-w-[90vw] bg-gray-100 bg-opacity-40 rounded-3xl shadow-2xl flex flex-col items-center justify-center py-8 space-y-9
`;
const SubHeading = tw.h2`text-3xl font-medium md:text-5xl md:font-normal text-center text-white
`;
const Input = tw.input`ml-[20px] max-w-[190px] h-12 tracking-[30px] placeholder-shown:tracking-normal focus:outline-none text-[30px] bg-transparent text-white caret-transparent placeholder-transparent
`;
const Button = tw.button`h-12 text-2xl px-3 font-medium text-white bg-[#d789893d] border rounded-md border-white focus:outline-none focus:bg-[#d789895c]
`;

const Otp = () => {
	const [enteredOtp, setEnteredOtp] = useState('');
	const inputRef = useRef(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (enteredOtp === '0000') {
			navigate('/home');
		} else {
			alert('Invalid OTP');
			setEnteredOtp('');
			inputRef.current.focus();
		}
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleInput = (e) => {
		if (e.target.value.length > 4 && enteredOtp.length === 4) return;
		setEnteredOtp(e.target.value);
	};

	return (
		<Wrapper onSubmit={handleSubmit}>
			<SubHeading>Enter OTP</SubHeading>
			<div className='relative'>
				<div className='absolute z-[-80] left-[calc(50%+45px)] top-1 w-10 h-10 border-solid border-white border-2'></div>
				<div className='absolute z-[-80] left-[calc(50%-2px)] top-1 w-10 h-10 border-solid border-white border-2'></div>
				<div className='absolute z-[-80] left-[calc(50%-49px)] top-1 w-10 h-10 border-solid border-white border-2'></div>
				<div className='absolute z-[-80] left-[calc(50%-95px)] top-1 w-10 h-10 border-solid border-white border-2'></div>
				<Input
					ref={inputRef}
					value={enteredOtp}
					onChange={handleInput}
					placeholder='Enter OTP'
				/>
			</div>
			<Button>Submit</Button>
		</Wrapper>
	);
};

export default Otp;
