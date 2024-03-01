import { Button } from "./ui/button.jsx";

export default function ProjectTemp(props) {
  const project =  props.project;
    return (
        <section className="m-2 font-sans leading-normal flex h-auto">

      
        <div className="max-w-xl  shadow-lg rounded overflow-hidden m-4 sm:flex md:flex">
          <div className="h-48 sm:h-auto sm:w-80  md:w-140 flex-wrap  rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://unsplash.it/804/800')]" >
          </div>
          
      
           <div className="px-6 py-4 ">
            <h2 className="mb-2 font-black">
              {project.attributes.ProjectName}
            </h2>
            <h3 className="mb-4 text-gold text-sm" >
            {project.attributes.ProjectDate}            
            </h3>
            <p className="mb-4 text-grey-dark text-sm">
              {project.attributes.Description}  
            </p>
            
            <a href={project.attributes.ProjectLink}>
              <Button>View</Button>  
            </a>

          </div>
      
        </div>
        
      </section>
    );
}