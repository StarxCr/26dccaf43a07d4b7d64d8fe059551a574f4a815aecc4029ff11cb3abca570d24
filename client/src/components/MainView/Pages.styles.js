import styled from 'styled-components';
//Элементы фронтенда
//альтернативы обычным тегам в html
export const PageSection = styled.div`
width: 100vw;
min-height: 90vh;
margin: 0;
padding: 0;
display: grid;
background: #3C3C3C;
place-items: center;`

export const Title = styled.h1`
font-size: 1.5rem;
color: white;`

export const MainContainer = styled.div`
background: #313131;
box-sizing: border-box;
padding: 2rem 4.5rem;
width: 70%;
height: 100%;
display: flex;
`
export const SubContainer = styled.div`
margin-top:auto;
width: 50%;`
export const TextInput = styled.input`
display: block;
border: none;
background: #525252;
border-radius: 1.25rem;
color: hsl(0,0%,100%, 0.8);
margin: 1rem 0;
margin-left: 1rem;
padding: 0.5em 1.25em;
    &:focus{
        outline: 2px solid #8000FF;
        border: none;
    }`
export const DescInput = styled.textarea`
border: none;
display: block;
background: #525252;
border-radius: 1rem;
resize: none;
color: hsl(0,0%,100%, 0.8);
width: 30ch;
line-height: 150%;
height: 6rem;
margin: 1rem 0;
margin-left: 1rem;
padding: 0.5em 1.25em;
    &:focus{
        outline: 2px solid #8000FF;
        border: none;
    }
`
export const ImagePreview = styled.img`

border: 3px dashed white;
margin-inline: auto;
max-width: 80%;
min-height: 30%;
`
export const desc = styled.p`
color: white;
text-align:left;`

export const AddTraitBtn = styled.div`
aspect-ratio:1;
width: 1.5rem;
margin-bottom: .55rem;
margin-top: auto;
background: #535353;
position: relative;
border-radius: 5px;
&:hover, &:focus{
    outline: 2px solid #8000FF;
}
&::before, &::after{
    content: '';
    background: white;
    position: absolute;
    border-radius: 1px;
    width:95%;
    height: 2px;
}
&::before{
    transform: rotate(90deg);
    top: 47%;
    left: 1px;
} &::after{
    left: 1%;
    top: 48%;
}
`
export const Button = styled.button`
padding: .75em 1.25em;
font-size: 1rem;
background: ${props=>props.bgColor};
color:  ${props=>props.color};
outline: 2px solid ${props=>props.outline};
margin: 1em;
border: none;
border-radius: 2rem;
min-width:10em;
&:focus{
    outline: 1px solid white;
}`


export const Stat = styled.div`
background: #525252;
aspect-ratio: 1;
min-width: 8rem;
border-radius: 2rem;
padding: .75em 1.125em;
margin-block: 1.5rem;
font-size: 1.25rem;
color: white;
transition: .125s;
&:hover{
    box-shadow: 0 0 10px 1px #09D3FF;
    transform: scale(1.01);
}
h1{
color: #09D3FF;

}
`