import React from 'react';
import tw from 'tailwind-styled-components';

const LoaderContainer = tw.div`absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 pointer-events-none z-[60] flex items-center justify-center text-white text-4xl
`;

const Loader = ({ text }) => {
	return <LoaderContainer>{text}</LoaderContainer>;
};

export default Loader;
