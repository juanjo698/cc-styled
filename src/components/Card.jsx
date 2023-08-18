import classNames from 'classnames'
import { Body, Button, Container, Image, Text, Title } from './styles/Card'

export function Card ({classes, children}) {
    return (
        <Container className={classNames('card', classes.join(' '))}>
            {children}
        </Container>
    )
}

Card.Body = function CardBody({classes, children}) {
    return (
        <Body className={classNames('card__body', classes)}>
            {children}
        </Body>
    )
}

Card.Title = function CardTitle({classes, children}) {
    return (
        <Title className={classNames('card__title', classes)}>
            {children}
        </Title>
    )
}

Card.Text = function CardText({classes, children}) {
    return (
        <Text className={classNames('card__text', classes)}>
            {children}
        </Text>
    )
}

Card.Image = function CardImage({src, alt, classes}) {
    return (
        <Image src={src} alt={alt} className={classNames('card__image', classes)}/>
    )
}

Card.Button = function CarButton({classes, children}) {
    return (
        <Button type='button' className={classNames('card__button', classes)}>
            {children}
        </Button>
    )
}