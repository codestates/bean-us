import React from 'react';
import styled, { keyframes } from 'styled-components';

const MainSection3 = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #eae7dd;
  position: relative;
	display: flex;
	justify-content: center;
`;
const MainSectionDesc = styled.div`
	width: 300px;
	height: 100vh;
	padding-top: 160px;
		> h1 {
			text-align: center;
		}
		> div {
			text-align: center;
		}
`;
const ringPurse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1.2);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1.8)
	}
`;

const Map = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
	flex-direction: column;
	position: relative;
		> .coffee-spot {
			> .label {
				display: none;
				position: absolute;
				left: -100%;
				> h4 {
					background-color: rgba(0,0,0,0.5);
					width: 200px;
					color: #fff;
					height: 2rem;
					line-height: 2rem;
					text-align: center;
					border-radius: 2px;
				}
				> p {
					width: 200px;
				}
			}
			&:hover {
				> .label {
					display: block;
				}
			}
			> .ring {
			width: 28px;
			height: 28px;
			border-radius: 50%;
			border: 1px solid #c8aa9b;
			animation: ${ringPurse} 5s 1s infinite;
			display: flex;
			justify-content: center;
			align-items: center;
				> .ring-btn {
				width: 15px;
				height: 15px;
				background-color: #c8aa9b;
				border: 2px solid white;
				border-radius: 50%;
				cursor: pointer;
			}
		}
	}
`;
const JavaSpot = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 54.3%;
	left: 80%;
`;
const SupremoSpot = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 54%;
	left: 17%;
`;
const KenyaSpot = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 58%;
	left: 54%;
`;
const MexicoSpot = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 45%;
	left: 7%;
`;

export default function Section3 () {
  return (
  <MainSection3>
      <Map>
				<img src="asset/mainpage/world-map.png" alt="world-map"/>
				<JavaSpot className="coffee-spot">
					<div className="ring">
						<button className="ring-btn"/>
					</div>
					<div className="java-label label">
						<h4>Indonesia-Java</h4>
						<p>java coffee description</p>
					</div>
				</JavaSpot>
				<SupremoSpot className="coffee-spot">
					<div className="ring">
						<button className="ring-btn"/>
					</div>
					<div className="supremo-label label">
						<h4>Colombia-Supremo</h4>
						<p>Supremo coffee description</p>
					</div>
				</SupremoSpot>
				<KenyaSpot className="coffee-spot">
					<div className="ring">
						<button className="ring-btn"/>
					</div>
					<div className="kenya-label label">
						<h4>Kenya-KenyaAA</h4>
						<p>Kenya coffee description</p>
					</div>
				</KenyaSpot>
				<MexicoSpot className="coffee-spot">
					<div className="ring">
						<button className="ring-btn"/>
					</div>
					<div className="kenya-label label">
						<h4>Mexico-Altura</h4>
						<p>Mexico coffee description</p>
					</div>
				</MexicoSpot>
		</Map>
		<MainSectionDesc>
			<h1>World Coffee Bean Map</h1>
			<div>ildan ammooguna jukja!</div>
		</MainSectionDesc>
  </MainSection3>);

}
