import React from "react";
import styled from "styled-components";

const Style = styled.section`
    width: 100%;
    background-color: #0d0628;
    border-radius: 20px 20px 0 0 ;
    display: flex;
    align-items: center;
    flex-direction: column;

ul{
    padding-top: 10px;
}


li{
    list-style: none;
    margin: 10px;
    text-decoration: none;
    color: white;
}

iframe {
    width: 250px;
    height: 250px;
    border-radius: 20px;
    border: 2px solid white;
}

article{
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
}
`;

const Footer = ({ 
    tel, 
    mail, 
    address,
    url,
    title, 
}) => {
  return (
    <Style>
    <section>
        <ul>
            <li>tel:{tel}</li>
            <li>mail:{mail}</li>
            <li>address:{address}</li>
        </ul>
        <article>
        <iframe 
            src={url}
            title={title}
            allowFullScreen 
            loading="lazy">
        </iframe>
        </article>
    </section>
    </Style>
  );
};

export default Footer;