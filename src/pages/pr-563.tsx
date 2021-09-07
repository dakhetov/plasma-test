import { Container, Row, Col, Badge }  from '@sberdevices/plasma-web';

export const PR_563 = () => (
    <>
        <Container>
            <Row>
                <Col size={4}></Col>
                <Col size={4}>
                    <Badge
                        text='Badge'
                        size='l'
                        view='primary'
                    />
                </Col>
            </Row>
        </Container>
    </>
)