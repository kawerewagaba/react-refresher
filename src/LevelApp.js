import Section from './Section';
import Heading from './Heading';

export default function LevelApp() {
    return (
        <>
            <Section level={1}>
                <Heading>Title</Heading>
                <Heading>Title</Heading>
                <Heading>Title</Heading>
            </Section>
            <Section level={2}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
            </Section>
            <Section level={3}>
                <Heading>sub-heading</Heading>
                <Heading>sub-heading</Heading>
                <Heading>sub-heading</Heading>
            </Section>
            <Section level={4}>
                <Heading>sub-sub-heading</Heading>
                <Heading>sub-sub-heading</Heading>
                <Heading>sub-sub-heading</Heading>
            </Section>
            <Section level={5}>
                <Heading>sub-sub-sub-heading</Heading>
                <Heading>sub-sub-sub-heading</Heading>
                <Heading>sub-sub-sub-heading</Heading>
            </Section>
            <Section level={6}>
                <Heading>sub-sub-sub-sub-heading</Heading>
                <Heading>sub-sub-sub-sub-heading</Heading>
                <Heading>sub-sub-sub-sub-heading</Heading>
            </Section>
        </>
    );
}