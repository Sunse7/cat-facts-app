import './Fact.css';

function Fact({data}) {
    return ( 
        <article>
            <h3>{data.text}</h3>
        </article>
     );
}

export default Fact;