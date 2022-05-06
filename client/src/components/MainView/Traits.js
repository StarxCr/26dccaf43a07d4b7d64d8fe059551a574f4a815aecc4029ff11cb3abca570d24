import React from 'react'
import * as s from './Pages.styles';

export const addTrait = (ref1, ref2) => {
  return (
    <Trait ref1={ref1} ref2={ref2}/>
  )
}

export const Trait = (props) => {
    const {ref1, ref2} = props
  return (
    <div style={{display:'flex', borderRadius: '1.25rem', padding: 0, overflow:'hidden', width: '15rem', marginBlock:'.5rem',marginLeft:'1rem', marginRight:'.5rem'}}>
        <s.TextInput 
        ref={ref1}
        style={{borderRight:'1px solid white', borderRadius:'0', margin: '0', flexBasis:'25%', width: '.5rem'}}
        
        placeholder="type"
        type="text"
        ></s.TextInput>
        <s.TextInput
        ref={ref2}
        style={{borderRadius:'0', margin: '0', flexBasis:'75%', width:'0.1rem'}}
        placeholder="value"
        type="text"
        ></s.TextInput>
      </div>
  )
}
