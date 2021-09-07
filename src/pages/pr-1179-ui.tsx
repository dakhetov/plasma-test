import React from 'react';
import {
    DeviceThemeProvider,
    CarouselGridWrapper,
    Carousel,
    CarouselCol,
    Card,
    CardBody,
    CardContent,
} from '@sberdevices/plasma-ui';
import styled from 'styled-components';

export const PR_1179_WEB = () => {
    const CardStyled = styled(Card)`
        height: 150px;
        width: 350px;
        margin: 16px;
    `;

    const Subtitle = styled.div`
        font-size: 12px;
        line-height: 20px;
    `;

    const Titile = styled.div`
        font-size: 16px;
    `;

    const items = Array(25)
        .fill({
            title: 'Заголовок',
            subtitle: 'Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник',
        })
        .map(({ title, subtitle }, i) => ({
            title: `${title} ${i}`,
            subtitle: `${subtitle} ${i}`,
        }));

    const [index, setIndex] = React.useState(0);

    return (
        <DeviceThemeProvider>
            <CarouselGridWrapper>
                <Carousel
                    axis="x"
                    index={index}
                    scrollSnapType="mandatory"
                    detectActive
                    detectThreshold={0.5}
                    style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
                    onIndexChange={(i) => setIndex(i)}
                >
                    {items.map(({ title, subtitle }, i) => (
                        <CarouselCol key={`item:${i}`} size={3} sizeXL={4} scrollSnapAlign="start">
                            <CardStyled focused={i === index}>
                                <CardBody>
                                    <CardContent>
                                        {subtitle && <Subtitle>{subtitle}</Subtitle>}
                                        <Titile>{title}</Titile>
                                    </CardContent>
                                </CardBody>
                            </CardStyled>
                        </CarouselCol>
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </DeviceThemeProvider>
    );
}