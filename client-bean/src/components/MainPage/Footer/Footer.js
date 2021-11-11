import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";

const MainFooter = styled.footer`
  width: 100vw;
  height: 30vh;
  background-color: rgba(0,0,0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: default;
`;

const FooterConatier = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FooterLogo = styled.div`
  > img {
    width: 200px;
  }
`;

const ServiceDesc = styled.ul`
  list-style: none;
    > div {
      > .service-title {
        font-size: 1.2rem;
        font-weight: 800;
      }
      > .footer-link {
        font-size: 1.2rem;
        text-decoration: none;
        color: white;
        &:hover {
          color: #3ac4ae;
          font-size: 1.3rem;
        }
      }
    }
`;

const Contact = styled.div`
  > ul {
    > li {
        margin-bottom: 5px;
      > a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        > .giticon {
        font-size: 1.5rem;
        vertical-align: bottom;
        padding-bottom: 3px;
        }
        &:hover {
          color: #3ac4ae;
          border-bottom: 1px solid #3ac4ae;
          transition: 1s;
        }
      }
    }
  }
`;




export default function Footer () {

  return (
  <MainFooter>
    <FooterConatier>
      <ServiceDesc>
        <div>
          <span className="service-title">서비스 소개</span>
        </div>
        <div>
          <span>게시글 작성 기능 : </span>
          <Link to='posts' className="footer-link">posts</Link>
        </div>
        <div>
          <span>원두 검색 기능 : </span>
          <Link to='beans' className="footer-link">beans</Link>
        </div>
        <div>
          <span>마이페이지 기능 : </span>
          <Link to='mypage' className="footer-link">mypage</Link>
        </div>
      </ServiceDesc>
      <FooterLogo>
        <img src="asset/mainpage/logowhite.png" alt="logo"/>
      </FooterLogo>
      <Contact>
        <ul>
          <li><a href="https://github.com/Je-chan"><AiFillGithub className="giticon"/> 박예찬: Je-chan</a></li>
          <li><a href="https://github.com/song-code21"><AiFillGithub className="giticon"/> 송하경: song-code21</a></li>
          <li><a href="https://github.com/lim1313"><AiFillGithub className="giticon"/> 임예지: lim1313</a></li>
          <li><a href="https://github.com/jortier"><AiFillGithub className="giticon"/> 최재원: Jortier</a></li>
        </ul>
      </Contact>
    </FooterConatier>
  </MainFooter>);

}
