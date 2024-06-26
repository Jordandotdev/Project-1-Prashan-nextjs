import { Button } from "../../Components/ui/button.jsx";
import Expeditions from "../../Components/project_temp.js";
import { FetchProjectsExploratory } from "../actionExploratory.js";

export default async function projects() {

    const projects = await FetchProjectsExploratory(4);

    return(
        <section id="Exploratory" className="mt-14">
            <div id="main_port" className="bg-offwhite item-center ">
                <div className=" flex  mb-4 justify-center text-3xl md:text-5xl pt-6 px-4 mx-auto max-w-screen-xl font-extrabold text-gray-900 dark:text-white">
                Exploratory Projects 
                </div> 
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    {projects && projects.data && projects.data.map((props) => (
                            <Expeditions  key={props.id} project={props} />
                    ))}
                </div>
                
                <div className="flex justify-center items-center p-4 text-4xl  mx-auto max-w-screen-xl">
                    <a href="/portfolio">
                    <Button className="mt-4" >View More</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}