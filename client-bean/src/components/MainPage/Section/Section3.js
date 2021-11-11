import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const MainSection3 = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #eae7dd;
  position: relative;
	display: flex;
	justify-content: center;
`;

const MainSectionDesc = styled.div`
	width: 350px;
	height: 100vh;
	padding-top: 200px;
	flex: none;
		> h1 {
			text-align: center;
			color: #41352f;
		}
		> div {
			padding-left: 16px;
			text-align: center;
			font-size: 1.1rem;
			font-weight: 600;
			color: #725e53;
		}
		> p {
			padding-left: 30px;
			font-weight: 500;
		}
`;

const Map = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
	flex-direction: column;
	position: relative;
	flex: none;
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
			animation: ${ringPurse} 3s 1s infinite;
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
const IndoSpot = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 48%;
	left: 67%;
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
				<IndoSpot className="coffee-spot">
					<div className="ring">
						<button className="ring-btn"/>
					</div>
					<div className="indo-label label">
						<h4>Indo-Monsooned Malabar</h4>
						<p>Indo coffee description</p>
					</div>
				</IndoSpot>
		</Map>
		<MainSectionDesc>
			<h1>World Coffee Bean Map</h1>
			<div> 마우스를 올려 원산지를 지도로 확인해보세요</div>
			<p>원두는 주로 중남미, 아프리카, 아시아 지역에서 생산됩니다.<br/><br/>
				적도를 기준으로 북위 25도에서 남위 25도 사이, 일명 커피벨트에 속한 나라들이 그 주인공입니다.<br/><br/>
				하지만 비슷한 지역이라도 기후 조건이 다르고 가공 방법도 달라 커피 향도 다 다릅니다.<br/><br/>
				마우스를 올리면 대표 지역 커피의 특징을 볼 수 있습니다.
			</p>
		</MainSectionDesc>
  </MainSection3>);

}
