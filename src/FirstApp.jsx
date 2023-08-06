import PropTypes from 'prop-types'

export const FirstApp = ( {title, subtitle, name} ) => {
    return (
    <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{name}</p>
    </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    // title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'No hay nombre'
}