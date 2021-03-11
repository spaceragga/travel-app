import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import CountryMap from './CountryMap';

const CountryMapContainer = ({ className, locale, capitalCoordinates, isoCode }) => {
    const { t } = useTranslation();
    return (
        <CountryMap
            locale={locale}
            capitalCoordinates={capitalCoordinates}
            isoCode={isoCode}
            className={className}
            title={t('labels.map')}
        />
    );
};

const mapStateToProps = (state) => ({
    isoCode: state.country.isoCode,
    locale: state.locale,
    capitalCoordinates: state.country.capital.coordinates,
});

export default connect(mapStateToProps)(CountryMapContainer);
