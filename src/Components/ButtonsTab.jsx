import { EXAMPLES } from "../data";
import TabButton from "../Components/TabButton";
import Section from "./Section";
import { useState } from "react";
import Tabs from "./tabs";

export default function ButtonsTab() {


    let [selectedTopic, setSelectedTopic] = useState();

    let selectHandler = (selectedButton) => {

        console.log(`${selectedButton}Button CLicked`);
        setSelectedTopic(selectedButton);

    }

    let tabContent = <p>Please select the topic</p>;
    if (selectedTopic) {
        tabContent = (
        
                <section id="tab-content">

                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>


                </section>
           
        )

        console.log(tabContent);
        

    }

    return (
        <>
            <Section title="Example" id="examples">

                {/* forwarding Props way */}
                {/* <menu>
            <TabButton isSelected={selectedTopic === "component"} onClick={() => { selectHandler("component") }}>Component</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => { selectHandler("jsx") }}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => { selectHandler("props") }}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => { selectHandler("state") }}>State</TabButton>
          </menu> */}

                <Tabs
                 buttonContainer = "menu"
                buttons={
                    <>

                        <TabButton isSelected={selectedTopic === "component"} onClick={() => { selectHandler("component") }}>Component</TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => { selectHandler("jsx") }}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => { selectHandler("props") }}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => { selectHandler("state") }}>State</TabButton>

                    </>

                }>
                {tabContent}
                </Tabs>
                {/* convenctional way of passing props */}
                {/* <menu>
            <TabButton isSelected={selectedTopic === "component"} onSelect={() => { selectHandler("component") }}>Component</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => { selectHandler("jsx") }}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => { selectHandler("props") }}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => { selectHandler("state") }}>State</TabButton>
          </menu> */}

            </Section>


            {/* {!selectedTopic ? <p>Please select the topic</p> : <section id="tab-content">

                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>


            </section>
            } */}
        </>
    )

}