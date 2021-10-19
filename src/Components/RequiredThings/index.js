import React from 'react';
import Card from '../Card/index'

function RequiredThings({results}) {
    return (
        <>
            <div className="heading">
                <h1 className="heading-h1">Don't forget to bring your</h1>
              </div>
              
              <Card results={results}/>
        </>
    )
}

export default RequiredThings
