import React from 'react';
import styled from 'styled-components';

interface HelloProps {
	name: string;
	age: number;
	address?: string;
	email: string;
	handleClick : (name:string) => void;
}

export const Hello: React.FC<HelloProps> = ({ name, age, address = 'no address', email, handleClick }) => {
	// const isOlder = age >=30 ? 'older' :'young';
	const isOlder = age>=30;
	return <Container>
		<ul onClick={()=> handleClick(name)}>
			{/* <li className={isOlder}>Name: {name}</li> */}
			<Item isOlder={isOlder}>Name: {name}</Item>
			<Item isOlder={isOlder}>Age: {age}</Item>
			<Item isOlder={isOlder}>Address: {address}</Item>
			<Item isOlder={isOlder}> Email: {email}</Item>
		</ul>
	</Container>
};

const Container = styled.div`
	width:400px;
	padding: 15px 10px;
	background:#530b6c ;
	color: #fff;
	margin-bottom:15px;
	border-radius: 6px;
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

const Item = styled.li<{isOlder:boolean}>`
	padding:0 0 10px 0;
	text-decoration:${props => props.isOlder ? 'underline': 'none'};
	font-weight: ${props => props.isOlder ? '800': '300'};
`;