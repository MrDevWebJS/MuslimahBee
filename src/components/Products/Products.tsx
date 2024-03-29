import { FunctionComponent } from "react";
import { Section } from "../Section";
import { Gallery } from "./Gallery";

export const Products: FunctionComponent = (): React.JSX.Element => {
    return(
        <Section>
            <Gallery/>
        </Section>
    )
}