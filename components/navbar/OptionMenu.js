import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const OptionMenu = ({itemName, title, link }) =>{
    return(
        <a className="flex my-2 mr-3 text-xl mx-1"
        href={link}>
            <div className=" mx-3 mr-0">
                <FontAwesomeIcon icon={itemName}/>
            </div>
            <div className=" ml-3 justify-start">
                <p>{title}</p>
            </div>

        </a>
    )
}

export default OptionMenu