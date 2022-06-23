import CardContainer from "../card-container/card-container.component";
import './card-lis.styles.css'

const CardList = ({monsters}) =>(
        <div className="card-list">
            {
                monsters.map(monster => {                        
                    return(
                        <CardContainer monster={monster}/>
                    )
                })
            }
        </div>
    )

export default CardList;