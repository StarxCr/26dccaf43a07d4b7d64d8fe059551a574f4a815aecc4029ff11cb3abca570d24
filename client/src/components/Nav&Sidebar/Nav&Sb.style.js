import styled from "styled-components";
//Элементы фронтенда
//альтернативы обычным тегам в html
export const Logo = styled.img`
height: 4rem;
order: 0;
`
export const NavContainer = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
padding: .2rem 2rem;
position: fixed;
top: 0;
background: red;
&::before{
    content:'';
    order:1;
    margin-left: 5rem;
    background: #DDDDDD;
    border-radius: 2rem;
    height: 3px;
    width: 30%;
}
@media(max-width: 900px){
    position: fixed;
    right:${props=>props.open? '0' : '-100%'};
    height: 100vh;
    background: black;
    flex-direction: column;
    justify-content: space-around;
    padding-block: 2rem;
    transition:.15s;
    &::before{display:none;}
    padding-bottom: 15rem;
}
`

export const Nav = styled.div`
display: flex;
order: 2;
max-height: 80%;
align-items: center;
justify-content: space-between;
margin-left: -2rem;
padding: .75rem 2.5rem;
@media(max-width:900px){
    display: block;
    max-height: 100%;
    margin-left:0;
    text-align: center;
   
}
`
export const navToggler = styled.div`
display: none;
@media(max-width:900px){
    display: flex;
    position: fixed;
    right:0;
    padding: 1rem;
    background: green;
    align-self: flex-end;
    z-index: 100;
}`
export const Line1 = styled.path`
fill: none;
stroke: red;
stroke-width: 6;
transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
stroke-dasharray: ${props=>props.open? '90 207' : '60 207'};
stroke-dashoffset: ${props=>props.open? -134 : 0};
stroke-width: 6;
`
export const Line2 = styled.path`
fill: none;
stroke: red;
stroke-width: 6;
transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

stroke-dasharray: ${props=>props.open? '1 60' : '60 60'};
stroke-dashoffset: ${props=>props.open? -30: 0};
stroke-width: 6;
`
export const Line3 = styled.path`
fill: none;
stroke: red;
stroke-width: 6;
transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

stroke-dasharray: ${props=>props.open? '90 207': '60 207'};
stroke-dashoffset: ${props=>props.open? -134 : 0};
stroke-width: 6;
`
export const NavItem = styled.p`
font-size: 1rem;
color: white;
letter-spacing: 1px;
text-decoration: none;
margin-inline: .75rem;
cursor: pointer;
`
export const ConnectButton = styled.button`
max-height: 100%;
letter-spacing: 1px;
outline: none;
background: #8000FF;
color: #FFFFFF;
border-radius: .5em;
border: none;
font-size: 1rem;
margin-left: 4rem;
margin-right: .5rem;
cursor: pointer;
padding: .5em 1.15em;
@media(max-width:900px){
    margin: 0;
}
`

//-----------------------
//----------Sidebar-------
//-----------------------
export const Sidebar = styled.div`
background: rgba(37,37,37, 85%);
width: ${props=>props.width}px;
height: ${props=>props.height}vh;
position: fixed;
left: 0;
bottom:0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all .123s;
img{
    width: 80%;
}
a:hover img{
    background: #4D4D4D;
}
@media(max-width:900px){
    width: ${props=>props.height}vw;
    height: ${props=>props.width}px;
    flex-direction: row;
    justify-content: space-evenly;
}
`
export const Spacer = styled.div`
width:60%;
height: 1px;
background:#FFFFFF;
margin-block:1.5rem;
@media(max-width:900px){
    height:60%;
width: 1px;
    margin: 0 .2rem;
}
`
