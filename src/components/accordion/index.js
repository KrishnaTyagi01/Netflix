import React, { createContext, useState, useContext } from 'react'
import {Container, Title, Frame, Item, Header, Body, Inner} from './styles/accordion'

const ToggleContext = createContext()

export default function Accordion({children , ...restProps}){
    return (
        <Container>
            <Inner {...restProps}>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps} >{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps} >{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)

    return <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
             <Item {...restProps} >{children}</Item>
           </ToggleContext.Provider>
    
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return(
         <Header onClick={()=> setToggleShow(toggleShow=>!toggleShow)}  
         //HERE WE HAVEN'T DONE setToggleShow(!toggleShow) BECAUSE IT CAN LAG SOMETIMES IF THERE ARE MANY STATES CHANGING SIMULTANEOUSLY (eg. if user clicked once it will change to true but not rendered yet (lag) and if he clicked again it changes to false again and hence it never works) BUT THIS CASE IT TAKES PREVIOUS SAVED VALUE AND CHANGES IT.  
            {...restProps}
          >
             {children}
             {toggleShow ? (
                 <img src="/images/icons/close-slim.png" alt="close"></img>
             ): (
                <img src="/images/icons/add.png" alt="open"></img>
             )}
         </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps} >{children}</Body> : null;
}
