import React from 'react'
import { HashLink } from 'react-router-hash-link';

function LinkCard({image, title, description, link, external}) {
    const ConditionalWrapper = ({ condition, wrapper1, wrapper2, children }) =>
    condition ? wrapper1(children) : wrapper2(children);

    return (
        <ConditionalWrapper
            condition={external}
            wrapper1={children => 
                <a className='link-card' target='_blank' rel="noopener" href={link}>{children}</a>
            }
            wrapper2={children => 
                <HashLink smooth className='link-card' to={link}>{children}</HashLink>
            }
        >
            <img className='link-card__img' src={image} />
            <div>
                <p className='link-card__title'>{title}</p>
                <p className='link-card__desc'>{description}</p>
            </div>
        </ConditionalWrapper>
    )
}

export default LinkCard