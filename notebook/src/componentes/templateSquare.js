import react from 'react'

export function SquarePrincipal(){
    return(
        <div className='squareBig'>

            <div>
                <input type='submit' value='ENGLISH'></input>
                <img src={require('../images/canada.jpg')} alt='FOto de adele'/>
            </div>
        </div>
    );
}