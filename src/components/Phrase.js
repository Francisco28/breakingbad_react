import React, { Fragment} from 'react';
import styled from '@emotion/styled';

const ContainerPhrase = styled.div`
    padding-top: 5rem;
    margin-top: 5rem;
    width: 70%;
    text-align: center;
`;


const Phrase = ({phrase}) => {
    return ( 
        <ContainerPhrase>
            <h1>{phrase.quote}</h1>
            <p>{phrase.author}</p>
        </ContainerPhrase>
     );
}
 
export default Phrase;