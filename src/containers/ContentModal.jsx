import PropType from "prop-types";

const ContentModal = ({project}) => {
    return(
        <div>
            <div>
                <img src={project.coverImage} alt={project.title} />
            </div>
            <div>
                <h2>Description</h2>
                <div>
                    {project.description}
                </div>
                <button onClick={()=> window.open(project.gitHubLink,"_blank")}>
                    See the code
                </button>
            </div>
        </div>
    )
}
ContentModal.PropType = {
    project: PropType.any.isRequired
}
export default ContentModal;