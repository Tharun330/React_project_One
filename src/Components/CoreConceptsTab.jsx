import { CORE_CONCEPTS } from "../data";
import CoreConcept from "../Components/CoreConcepts";

export default function CoreConceptsTab(){

    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}


            />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />


          </ul> */}

           {/* Dynamic elements setting verryyy important concept */}
          <ul>
            {CORE_CONCEPTS.map((conceptItems) =>(

                <CoreConcept key={conceptItems.title} {...conceptItems}/>
            ))}
          </ul>


        </section>
    )
}