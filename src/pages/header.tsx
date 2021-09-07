import { Container, Header }  from '@sberdevices/plasma-ui';

export const HeaderCustom = () => (
    <Container>
        <Header
            back={true}
            logo="./images/logo.png"
            logoAlt="Logo"
            title="Header title textфВФывфЫВФывфВЫФывфЫВФЫВФЫВфывфВЫ"
            subtitle="Subtitle textаыфваывафывафываыфвафывафываыфваыфваыфвафывафыва"
            onBackClick={() => console.log('Back click!')}
        >
            <div>Header content</div>
        </Header>
    </Container>
);