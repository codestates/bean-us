import React from 'react';
import styled, {css} from 'styled-components';

const SideBarUl = styled.ul`
	z-index: 999;
	position: fixed;
	left: 98%;
	top: 45%;
	display: flex;
	flex-direction: column;
`;
const SideBtn1 = styled.input`
	width: 11px;
	height: 11px;
	border-radius: 50%;
	border: none;
	flex: none;
	margin-bottom: 7px;
	${props => props.scrollY < 473 && css`
				background-color: #94673f;
			`}
`;
const SideBtn2 = styled.input`
	width: 11px;
	height: 11px;
	border-radius: 50%;
	border: none;
	flex: none;
	margin-bottom: 7px;
	${props => (props.scrollY > 473 && props.scrollY < 1233) && css`
				background-color: #94673f;
			`}
`;
const SideBtn3 = styled.input`
	width: 11px;
	height: 11px;
	border-radius: 50%;
	border: none;
	flex: none;
	margin-bottom: 7px;
	${props => props.scrollY > 1233 && css`
				background-color: #94673f;
			`}
`;

function SideBar(props) {
	const scrollY = props.scrollY;
	//1233
	//473
	return(
		<SideBarUl scrollY={scrollY}>
			<SideBtn1 scrollY={scrollY} />
			<SideBtn2 scrollY={scrollY} />
			<SideBtn3 scrollY={scrollY} />
		</SideBarUl>
	);
}

export default SideBar;